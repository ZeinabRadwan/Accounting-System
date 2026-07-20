<?php

namespace App\Livewire\Admin\Inventory;

use App\Domain\Branch\Models\Branch;
use App\Domain\Inventory\Models\InventoryLot;
use App\Domain\Inventory\Models\InventoryStock;
use App\Domain\Inventory\Models\StockMovement;
use App\Domain\Product\Models\Category;
use App\Domain\Product\Models\Product;
use App\Livewire\Concerns\InteractsWithAdminLayout;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Carbon;
use Livewire\Component;
use Livewire\WithPagination;

class ManageInventory extends Component
{
    use InteractsWithAdminLayout;
    use WithPagination;

    public string $search = '';
    public string $filter_branch_id = '';
    public string $filter_category_id = '';
    public string $filter_status = '';
    public string $tab = 'stock';

    public bool $showStockDrawer = false;
    public ?int $viewingStockId = null;
    public ?int $viewingProductId = null;

    public function updatedSearch(): void
    {
        $this->resetPage();
    }

    public function updatedFilterBranchId(): void
    {
        $this->resetPage();
    }

    public function updatedFilterCategoryId(): void
    {
        $this->resetPage();
    }

    public function updatedFilterStatus(): void
    {
        $this->resetPage();
    }

    public function setTab(string $tab): void
    {
        $this->tab = in_array($tab, ['stock', 'movements'], true) ? $tab : 'stock';
        $this->resetPage();
    }

    public function startViewStock(int $id): void
    {
        $stock = InventoryStock::with('product')->findOrFail($id);
        $this->viewingStockId = $stock->id;
        $this->viewingProductId = $stock->product_id;
        $this->showStockDrawer = true;
    }

    public function startViewProduct(int $productId): void
    {
        $this->viewingStockId = null;
        $this->viewingProductId = $productId;
        $this->showStockDrawer = true;
    }

    public function closeStockDrawer(): void
    {
        $this->showStockDrawer = false;
        $this->viewingStockId = null;
        $this->viewingProductId = null;
    }

    public function render(): View
    {
        $branches = Branch::orderBy('name')->get(['id', 'name']);
        $categories = Category::query()
            ->where('is_active', true)
            ->orderBy('name')
            ->get(['id', 'name']);

        $branchId = $this->filter_branch_id !== '' ? (int) $this->filter_branch_id : null;
        $categoryId = $this->filter_category_id !== '' ? (int) $this->filter_category_id : null;
        $term = trim($this->search);

        if ($this->tab === 'movements') {
            $rows = StockMovement::query()
                ->with([
                    'fromBranch:id,name',
                    'toBranch:id,name',
                    'product:id,display_name,sku,category_id,base_unit',
                    'product.category:id,name',
                ])
                ->when($branchId, function ($q) use ($branchId) {
                    $q->where(function ($qq) use ($branchId) {
                        $qq->where('branch_id_from', $branchId)
                            ->orWhere('branch_id_to', $branchId);
                    });
                })
                ->when($categoryId, fn ($q) => $q->whereHas('product', fn ($p) => $p->where('category_id', $categoryId)))
                ->when($term !== '', function ($q) use ($term) {
                    $q->whereHas('product', function ($qq) use ($term) {
                        $qq->where('display_name', 'like', "%{$term}%")
                            ->orWhere('sku', 'like', "%{$term}%");
                    });
                })
                ->latest()
                ->paginate(20);
        } else {
            $rows = InventoryStock::query()
                ->select('inventory_stocks.*')
                ->withNearestExpiry()
                ->with([
                    'branch:id,name',
                    'product:id,display_name,sku,category_id,base_unit',
                    'product.category:id,name',
                ])
                ->when($branchId, fn ($q) => $q->where('branch_id', $branchId))
                ->when($categoryId, fn ($q) => $q->whereHas('product', fn ($p) => $p->where('category_id', $categoryId)))
                ->when($term !== '', function ($q) use ($term) {
                    $q->whereHas('product', function ($qq) use ($term) {
                        $qq->where('display_name', 'like', "%{$term}%")
                            ->orWhere('sku', 'like', "%{$term}%");
                    });
                })
                ->when($this->filter_status === 'in_stock', fn ($q) => $q->where('quantity', '>', 10))
                ->when($this->filter_status === 'low_stock', fn ($q) => $q->where('quantity', '>', 0)->where('quantity', '<=', 10))
                ->when($this->filter_status === 'out_of_stock', fn ($q) => $q->where('quantity', '<=', 0))
                ->when($this->filter_status === 'expiring_soon', function ($q) {
                    $q->whereExists(function ($sub) {
                        $sub->selectRaw('1')
                            ->from('inventory_lots')
                            ->whereColumn('inventory_lots.branch_id', 'inventory_stocks.branch_id')
                            ->whereColumn('inventory_lots.product_id', 'inventory_stocks.product_id')
                            ->where('inventory_lots.quantity', '>', 0)
                            ->whereNotNull('inventory_lots.expiry_date')
                            ->whereDate('inventory_lots.expiry_date', '>=', Carbon::today())
                            ->whereDate('inventory_lots.expiry_date', '<=', Carbon::today()->addDays(30));
                    });
                })
                ->when($this->filter_status === 'expired', function ($q) {
                    $q->whereExists(function ($sub) {
                        $sub->selectRaw('1')
                            ->from('inventory_lots')
                            ->whereColumn('inventory_lots.branch_id', 'inventory_stocks.branch_id')
                            ->whereColumn('inventory_lots.product_id', 'inventory_stocks.product_id')
                            ->where('inventory_lots.quantity', '>', 0)
                            ->whereNotNull('inventory_lots.expiry_date')
                            ->whereDate('inventory_lots.expiry_date', '<', Carbon::today());
                    });
                })
                ->orderBy('branch_id')
                ->orderBy('product_id')
                ->paginate(20);
        }

        $viewingProduct = null;
        $branchStocks = collect();
        $recentMovements = collect();

        if ($this->viewingProductId) {
            $viewingProduct = Product::with(['category:id,name', 'units'])->find($this->viewingProductId);
            if ($viewingProduct) {
                $branchStocks = InventoryStock::query()
                    ->with('branch:id,name')
                    ->where('product_id', $viewingProduct->id)
                    ->when($branchId, fn ($q) => $q->where('branch_id', $branchId))
                    ->orderBy('branch_id')
                    ->get();

                $recentMovements = StockMovement::query()
                    ->with(['fromBranch:id,name', 'toBranch:id,name'])
                    ->where('product_id', $viewingProduct->id)
                    ->latest()
                    ->limit(15)
                    ->get();
            }
        }

        return $this->adminView('livewire.admin.inventory.manage-inventory', [
            'rows' => $rows,
            'branches' => $branches,
            'categories' => $categories,
            'viewingProduct' => $viewingProduct,
            'branchStocks' => $branchStocks,
            'recentMovements' => $recentMovements,
            'totalSkus' => (int) InventoryStock::query()->selectRaw('count(distinct product_id) as aggregate')->value('aggregate'),
            'lowStock' => InventoryStock::where('quantity', '<=', 10)->where('quantity', '>', 0)->count(),
            'outOfStock' => InventoryStock::where('quantity', '<=', 0)->count(),
            'expiringSoon' => InventoryLot::query()->expiringSoon(30)->count(),
            'expiredLots' => InventoryLot::query()->expired()->count(),
            'productCount' => Product::where('is_active', true)->count(),
        ], 'Inventory');
    }
}
