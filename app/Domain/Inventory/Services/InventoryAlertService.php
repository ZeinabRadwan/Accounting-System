<?php

namespace App\Domain\Inventory\Services;

use App\Domain\Inventory\Models\InventoryAlertState;
use App\Domain\Inventory\Models\InventoryStock;
use App\Domain\Notifications\Enums\NotificationEvent;
use App\Domain\Notifications\Services\NotificationDispatcher;
use App\Domain\Notifications\Services\NotificationSettingsService;
use App\Domain\Product\Models\Product;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

class InventoryAlertService
{
    public const STATUS_OUT = 'out_of_stock';

    public const STATUS_LOW = 'low_stock';

    public const STATUS_OK = 'ok';

    public function __construct(
        private readonly NotificationDispatcher $dispatcher,
        private readonly NotificationSettingsService $notificationSettings,
    ) {
    }

    public function minimumFor(Product|float|int|null $productOrMinimum): float
    {
        if ($productOrMinimum instanceof Product) {
            if ($productOrMinimum->minimum_stock !== null) {
                return max(0, (float) $productOrMinimum->minimum_stock);
            }

            return max(0, $this->notificationSettings->lowStockThreshold());
        }

        if ($productOrMinimum === null) {
            return max(0, $this->notificationSettings->lowStockThreshold());
        }

        return max(0, (float) $productOrMinimum);
    }

    public function statusForQuantity(float $quantity, float $minimum): string
    {
        if ($quantity <= 0) {
            return self::STATUS_OUT;
        }

        if ($quantity <= $minimum) {
            return self::STATUS_LOW;
        }

        return self::STATUS_OK;
    }

    public function statusLabel(string $status): string
    {
        return match ($status) {
            self::STATUS_OUT => __('Out of Stock'),
            self::STATUS_LOW => __('Low Stock'),
            default => __('In Stock'),
        };
    }

    /**
     * Recalculate status after inventory mutation and notify once per alert cycle.
     * Notifications re-arm only after stock is replenished above the minimum.
     */
    public function evaluateStockChange(InventoryStock $stock, float $previousQty): void
    {
        $product = $stock->relationLoaded('product')
            ? $stock->product
            : Product::query()->find($stock->product_id);

        if (! $product) {
            return;
        }

        $qty = (float) $stock->quantity;
        $minimum = $this->minimumFor($product);
        $status = $this->statusForQuantity($qty, $minimum);
        $previousStatus = $this->statusForQuantity($previousQty, $minimum);

        $state = InventoryAlertState::query()->firstOrNew([
            'branch_id' => $stock->branch_id,
            'product_id' => $stock->product_id,
        ]);

        // Replenished above minimum → clear alert cycle so future drops can notify again.
        if ($status === self::STATUS_OK) {
            if ($state->exists && $state->last_notified_status !== null) {
                $state->last_notified_status = null;
                $state->last_notified_at = null;
                $state->save();
            }

            if ($previousQty <= 0 && $qty > 0) {
                $this->notifyRestocked($stock, $product);
            }

            return;
        }

        // Already notified for this status (or a worse one in the same cycle) → skip.
        $last = $state->last_notified_status;
        if ($last === $status) {
            return;
        }
        if ($last === self::STATUS_OUT && $status === self::STATUS_LOW) {
            // Came up from zero into low without crossing above minimum — do not re-notify low.
            return;
        }
        if ($last === self::STATUS_LOW && $status === self::STATUS_OUT) {
            // Escalation from low → out is allowed once.
        } elseif ($last !== null && $previousStatus !== self::STATUS_OK && $status === $previousStatus) {
            return;
        }

        // Only notify on entering an alert state from a healthier state, or escalating low → out.
        $shouldNotify = false;
        if ($status === self::STATUS_OUT && $previousQty > 0) {
            $shouldNotify = true;
        } elseif ($status === self::STATUS_LOW && $previousQty > $minimum) {
            $shouldNotify = true;
        }

        if (! $shouldNotify) {
            return;
        }

        $this->notifyAlert($stock, $product, $status, $qty, $minimum);

        $state->last_notified_status = $status;
        $state->last_notified_at = now();
        $state->save();
    }

    /**
     * @return LengthAwarePaginator<int, object>
     */
    public function paginateAlerts(
        ?int $branchId = null,
        ?int $categoryId = null,
        ?string $status = null,
        ?string $search = null,
        int $perPage = 20,
    ): LengthAwarePaginator {
        return $this->alertQuery($branchId, $categoryId, $status, $search)
            ->paginate($perPage)
            ->through(fn ($row) => $this->mapAlertRow($row));
    }

    /**
     * @return Collection<int, object>
     */
    public function allAlerts(
        ?int $branchId = null,
        ?int $categoryId = null,
        ?string $status = null,
        ?string $search = null,
    ): Collection {
        return $this->alertQuery($branchId, $categoryId, $status, $search)
            ->get()
            ->map(fn ($row) => $this->mapAlertRow($row));
    }

    /**
     * @return array{out_of_stock: int, low_stock: int, total: int}
     */
    public function counts(?int $branchId = null): array
    {
        $base = InventoryStock::query()
            ->join('products', 'products.id', '=', 'inventory_stocks.product_id')
            ->when($branchId, fn ($q) => $q->where('inventory_stocks.branch_id', $branchId));

        $out = (clone $base)->where('inventory_stocks.quantity', '<=', 0)->count();

        $low = (clone $base)
            ->where('inventory_stocks.quantity', '>', 0)
            ->whereColumn('inventory_stocks.quantity', '<=', 'products.minimum_stock')
            ->count();

        return [
            'out_of_stock' => $out,
            'low_stock' => $low,
            'total' => $out + $low,
        ];
    }

    /**
     * @return array{
     *   totals: array{out_of_stock: int, low_stock: int, total: int},
     *   by_branch: Collection<int, object>,
     *   by_category: Collection<int, object>,
     *   rows: Collection<int, object>
     * }
     */
    public function report(?int $branchId = null, ?int $categoryId = null, ?string $status = null): array
    {
        $rows = $this->allAlerts($branchId, $categoryId, $status);

        $byBranch = $rows->groupBy(fn ($r) => $r->branch_name)->map(function (Collection $group, string $name) {
            return (object) [
                'branch_name' => $name,
                'out_of_stock' => $group->where('status', self::STATUS_OUT)->count(),
                'low_stock' => $group->where('status', self::STATUS_LOW)->count(),
                'total' => $group->count(),
            ];
        })->values();

        $byCategory = $rows->groupBy(fn ($r) => $r->category_name ?: __('Uncategorized'))->map(function (Collection $group, string $name) {
            return (object) [
                'category_name' => $name,
                'out_of_stock' => $group->where('status', self::STATUS_OUT)->count(),
                'low_stock' => $group->where('status', self::STATUS_LOW)->count(),
                'total' => $group->count(),
            ];
        })->values();

        return [
            'totals' => [
                'out_of_stock' => $rows->where('status', self::STATUS_OUT)->count(),
                'low_stock' => $rows->where('status', self::STATUS_LOW)->count(),
                'total' => $rows->count(),
            ],
            'by_branch' => $byBranch,
            'by_category' => $byCategory,
            'rows' => $rows,
        ];
    }

    protected function alertQuery(
        ?int $branchId = null,
        ?int $categoryId = null,
        ?string $status = null,
        ?string $search = null,
    ) {
        $lastSale = DB::table('sales_invoice_items as sii')
            ->join('sales_invoices as si', 'si.id', '=', 'sii.sales_invoice_id')
            ->selectRaw('sii.product_id, si.branch_id, MAX(si.created_at) as last_sale_at')
            ->where(function ($q) {
                $q->where('si.is_cancelled', false)->orWhereNull('si.is_cancelled');
            })
            ->groupBy('sii.product_id', 'si.branch_id');

        $lastPurchase = DB::table('purchase_invoice_items as pii')
            ->join('purchase_invoices as pi', 'pi.id', '=', 'pii.purchase_invoice_id')
            ->selectRaw('pii.product_id, pi.branch_id, MAX(pi.created_at) as last_purchase_at')
            ->groupBy('pii.product_id', 'pi.branch_id');

        $query = InventoryStock::query()
            ->select([
                'inventory_stocks.id',
                'inventory_stocks.branch_id',
                'inventory_stocks.product_id',
                'inventory_stocks.quantity',
                'products.display_name',
                'products.sku',
                'products.base_unit',
                'products.minimum_stock',
                'products.category_id',
                'categories.name as category_name',
                'branches.name as branch_name',
                'ls.last_sale_at',
                'lp.last_purchase_at',
            ])
            ->join('products', 'products.id', '=', 'inventory_stocks.product_id')
            ->join('branches', 'branches.id', '=', 'inventory_stocks.branch_id')
            ->leftJoin('categories', 'categories.id', '=', 'products.category_id')
            ->leftJoinSub($lastSale, 'ls', function ($join) {
                $join->on('ls.product_id', '=', 'inventory_stocks.product_id')
                    ->on('ls.branch_id', '=', 'inventory_stocks.branch_id');
            })
            ->leftJoinSub($lastPurchase, 'lp', function ($join) {
                $join->on('lp.product_id', '=', 'inventory_stocks.product_id')
                    ->on('lp.branch_id', '=', 'inventory_stocks.branch_id');
            })
            ->when($branchId, fn ($q) => $q->where('inventory_stocks.branch_id', $branchId))
            ->when($categoryId, fn ($q) => $q->where('products.category_id', $categoryId))
            ->when($search, function ($q) use ($search) {
                $term = trim($search);
                $q->where(function ($qq) use ($term) {
                    $qq->where('products.display_name', 'like', "%{$term}%")
                        ->orWhere('products.sku', 'like', "%{$term}%");
                });
            });

        if ($status === self::STATUS_OUT) {
            $query->where('inventory_stocks.quantity', '<=', 0);
        } elseif ($status === self::STATUS_LOW) {
            $query->where('inventory_stocks.quantity', '>', 0)
                ->whereColumn('inventory_stocks.quantity', '<=', 'products.minimum_stock');
        } else {
            $query->where(function ($q) {
                $q->where('inventory_stocks.quantity', '<=', 0)
                    ->orWhereColumn('inventory_stocks.quantity', '<=', 'products.minimum_stock');
            });
        }

        return $query
            ->orderByRaw('CASE WHEN inventory_stocks.quantity <= 0 THEN 0 ELSE 1 END')
            ->orderBy('branches.name')
            ->orderBy('products.display_name');
    }

    protected function mapAlertRow(object $row): object
    {
        $qty = (float) $row->quantity;
        $minimum = $this->minimumFor((float) ($row->minimum_stock ?? 0));
        $status = $this->statusForQuantity($qty, $minimum);

        return (object) [
            'id' => (int) $row->id,
            'branch_id' => (int) $row->branch_id,
            'product_id' => (int) $row->product_id,
            'product_name' => (string) $row->display_name,
            'sku' => (string) ($row->sku ?? ''),
            'base_unit' => (string) ($row->base_unit ?? ''),
            'category_id' => $row->category_id ? (int) $row->category_id : null,
            'category_name' => (string) ($row->category_name ?? ''),
            'branch_name' => (string) $row->branch_name,
            'quantity' => $qty,
            'minimum_stock' => $minimum,
            'status' => $status,
            'status_label' => $this->statusLabel($status),
            'last_sale_at' => $row->last_sale_at,
            'last_purchase_at' => $row->last_purchase_at,
        ];
    }

    protected function notifyAlert(InventoryStock $stock, Product $product, string $status, float $qty, float $minimum): void
    {
        $branchName = $stock->relationLoaded('branch')
            ? ($stock->branch?->name ?? '#'.$stock->branch_id)
            : (DB::table('branches')->where('id', $stock->branch_id)->value('name') ?? '#'.$stock->branch_id);

        $productName = $product->display_name ?? $product->sku ?? ('#'.$product->id);
        $url = Route::has('admin.inventory.alerts')
            ? route('admin.inventory.alerts', ['status' => $status])
            : (Route::has('admin.inventory.index') ? route('admin.inventory.index') : null);

        if ($status === self::STATUS_OUT) {
            $this->dispatcher->send(
                event: NotificationEvent::InventoryZero,
                title: __('Out of Stock'),
                body: __(':product reached zero stock at :branch.', [
                    'product' => $productName,
                    'branch' => $branchName,
                ]),
                url: $url,
                roles: ['super_admin', 'admin'],
                meta: [
                    'reference_type' => InventoryStock::class,
                    'reference_id' => $stock->id,
                    'branch_id' => $stock->branch_id,
                    'product_id' => $stock->product_id,
                ],
                fingerprint: 'inventory_zero|'.$stock->branch_id.'|'.$stock->product_id.'|'.now()->timestamp,
                dedupeMinutes: 0,
            );

            return;
        }

        $this->dispatcher->send(
            event: NotificationEvent::InventoryLow,
            title: __('Low Stock'),
            body: __(':product is low at :branch (:qty / min :min).', [
                'product' => $productName,
                'branch' => $branchName,
                'qty' => rtrim(rtrim(number_format($qty, 2, '.', ''), '0'), '.'),
                'min' => rtrim(rtrim(number_format($minimum, 2, '.', ''), '0'), '.'),
            ]),
            url: $url,
            roles: ['super_admin', 'admin'],
            meta: [
                'reference_type' => InventoryStock::class,
                'reference_id' => $stock->id,
                'branch_id' => $stock->branch_id,
                'product_id' => $stock->product_id,
            ],
            fingerprint: 'inventory_low|'.$stock->branch_id.'|'.$stock->product_id.'|'.now()->timestamp,
            dedupeMinutes: 0,
        );
    }

    protected function notifyRestocked(InventoryStock $stock, Product $product): void
    {
        $productName = $product->display_name ?? $product->sku ?? ('#'.$product->id);

        $this->dispatcher->send(
            event: NotificationEvent::InventoryRestocked,
            title: __('Product Available Again'),
            body: __(':product is available again at your branch.', ['product' => $productName]),
            url: Route::has('pos') ? route('pos') : null,
            roles: ['sales'],
            branchId: (int) $stock->branch_id,
            meta: [
                'reference_type' => InventoryStock::class,
                'reference_id' => $stock->id,
                'branch_id' => $stock->branch_id,
                'product_id' => $stock->product_id,
            ],
            fingerprint: 'inventory_restocked|'.$stock->branch_id.'|'.$stock->product_id.'|'.now()->format('YmdHi'),
            dedupeMinutes: 30,
        );
    }
}
