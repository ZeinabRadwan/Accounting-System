<?php

namespace App\Domain\Notifications\Services;

use App\Domain\Branch\Models\Branch;
use App\Domain\Closing\Models\DailyClosing;
use App\Domain\Inventory\Models\InventoryStock;
use App\Domain\Notifications\Enums\NotificationEvent;
use App\Domain\Product\Models\Product;
use App\Domain\Purchase\Models\PurchaseInvoice;
use App\Domain\Purchase\Models\PurchaseReturn;
use App\Domain\Sales\Models\SalesInvoice;
use App\Domain\Sales\Models\SalesReturn;
use App\Domain\Transfer\Models\StockTransfer;
use App\Domain\Treasury\Models\Treasury;
use App\Models\User;
use Illuminate\Support\Facades\Route;

class SystemNotifier
{
    public function __construct(
        private readonly NotificationDispatcher $dispatcher,
        private readonly NotificationSettingsService $settings,
    ) {
    }

    public function salesInvoiceCreated(SalesInvoice $invoice): void
    {
        $this->dispatcher->send(
            event: NotificationEvent::SalesInvoiceCreated,
            title: __('New Sales Invoice'),
            body: __('Invoice :number was created for EGP :amount.', [
                'number' => $invoice->invoice_number,
                'amount' => number_format((float) $invoice->total, 2),
            ]),
            url: $this->safeRoute('admin.sales.index', ['invoice' => $invoice->id]),
            meta: [
                'reference_type' => SalesInvoice::class,
                'reference_id' => $invoice->id,
                'branch_id' => $invoice->branch_id,
            ],
        );
    }

    public function salesInvoiceCancelled(SalesInvoice $invoice): void
    {
        $this->dispatcher->send(
            event: NotificationEvent::SalesInvoiceCancelled,
            title: __('Sales Invoice Cancelled'),
            body: __('Invoice :number was cancelled.', ['number' => $invoice->invoice_number]),
            url: $this->safeRoute('admin.sales.index', ['invoice' => $invoice->id]),
            meta: [
                'reference_type' => SalesInvoice::class,
                'reference_id' => $invoice->id,
            ],
        );
    }

    public function salesInvoiceVisible(SalesInvoice $invoice): void
    {
        $this->dispatcher->send(
            event: NotificationEvent::SalesInvoiceVisible,
            title: __('Sales Invoice Became Visible'),
            body: __('Invoice :number is now visible according to Daily Invoice Visibility.', [
                'number' => $invoice->invoice_number,
            ]),
            url: $this->safeRoute('admin.sales.index', ['invoice' => $invoice->id]),
            roles: ['admin'],
            meta: [
                'reference_type' => SalesInvoice::class,
                'reference_id' => $invoice->id,
                'branch_id' => $invoice->branch_id,
            ],
        );
    }

    public function purchaseInvoiceCreated(PurchaseInvoice $invoice): void
    {
        $this->dispatcher->send(
            event: NotificationEvent::PurchaseInvoiceCreated,
            title: __('New Purchase Invoice'),
            body: __('Purchase invoice :number was created for EGP :amount.', [
                'number' => $invoice->invoice_number,
                'amount' => number_format((float) $invoice->total, 2),
            ]),
            url: $this->safeRoute('admin.purchases.index'),
            meta: [
                'reference_type' => PurchaseInvoice::class,
                'reference_id' => $invoice->id,
                'branch_id' => $invoice->branch_id,
            ],
        );
    }

    public function salesReturnCreated(SalesReturn $return): void
    {
        $this->dispatcher->send(
            event: NotificationEvent::SalesReturnCreated,
            title: __('Sales Return Created'),
            body: __('Sales return :number was created for EGP :amount.', [
                'number' => $return->return_number,
                'amount' => number_format((float) $return->total_refund, 2),
            ]),
            url: $this->safeRoute('admin.returns.index'),
            meta: [
                'reference_type' => SalesReturn::class,
                'reference_id' => $return->id,
                'branch_id' => $return->branch_id,
            ],
        );
    }

    public function purchaseReturnCreated(PurchaseReturn $return): void
    {
        $this->dispatcher->send(
            event: NotificationEvent::PurchaseReturnCreated,
            title: __('Purchase Return Created'),
            body: __('Purchase return :number was created for EGP :amount.', [
                'number' => $return->return_number,
                'amount' => number_format((float) $return->total_return_cost, 2),
            ]),
            url: $this->safeRoute('admin.returns.index'),
            meta: [
                'reference_type' => PurchaseReturn::class,
                'reference_id' => $return->id,
                'branch_id' => $return->branch_id,
            ],
        );
    }

    public function transferCompleted(StockTransfer $transfer): void
    {
        $this->dispatcher->send(
            event: NotificationEvent::TransferCompleted,
            title: __('Warehouse Transfer Completed'),
            body: __('Transfer :number was completed.', ['number' => $transfer->transfer_number]),
            url: $this->safeRoute('admin.transfers.index'),
            meta: [
                'reference_type' => StockTransfer::class,
                'reference_id' => $transfer->id,
                'branch_id' => $transfer->branch_id_to,
            ],
        );

        $this->dispatcher->send(
            event: NotificationEvent::TransferStockReceived,
            title: __('Stock Received via Transfer'),
            body: __('Transfer :number added stock to your branch.', ['number' => $transfer->transfer_number]),
            url: $this->safeRoute('pos'),
            roles: ['sales'],
            branchId: (int) $transfer->branch_id_to,
            meta: [
                'reference_type' => StockTransfer::class,
                'reference_id' => $transfer->id,
                'branch_id' => $transfer->branch_id_to,
            ],
            fingerprint: 'transfer_stock_received|'.$transfer->id,
        );
    }

    public function userCreated(User $user): void
    {
        $this->dispatcher->send(
            event: NotificationEvent::UserCreated,
            title: __('User Created'),
            body: __('User :name (:role) was created.', [
                'name' => $user->name,
                'role' => $user->roleEnum()?->label() ?? (string) $user->role,
            ]),
            url: $this->safeRoute('admin.users.index'),
            meta: [
                'reference_type' => User::class,
                'reference_id' => $user->id,
                'user_id' => $user->id,
            ],
        );
    }

    public function userDeleted(User $user): void
    {
        $this->dispatcher->send(
            event: NotificationEvent::UserDeleted,
            title: __('User Deleted'),
            body: __('User :name was deleted.', ['name' => $user->name]),
            url: $this->safeRoute('admin.users.index'),
            meta: [
                'reference_type' => User::class,
                'reference_id' => $user->id,
                'user_id' => $user->id,
            ],
        );
    }

    public function userRoleChanged(User $user, string $oldRole, string $newRole): void
    {
        $this->dispatcher->send(
            event: NotificationEvent::UserRoleChanged,
            title: __('User Role Changed'),
            body: __('User :name role changed from :from to :to.', [
                'name' => $user->name,
                'from' => $oldRole,
                'to' => $newRole,
            ]),
            url: $this->safeRoute('admin.users.index'),
            meta: [
                'reference_type' => User::class,
                'reference_id' => $user->id,
                'user_id' => $user->id,
            ],
            fingerprint: 'user_role_changed|'.$user->id.'|'.$oldRole.'|'.$newRole.'|'.now()->format('YmdHi'),
            dedupeMinutes: 1,
        );

        if ($user->isSales()) {
            $this->dispatcher->send(
                event: NotificationEvent::UserRoleChanged,
                title: __('Your Role Changed'),
                body: __('Your account role was changed to :role.', ['role' => $newRole]),
                url: $this->safeRoute('profile'),
                roles: [],
                extraUserIds: [$user->id],
                fingerprint: 'user_role_self|'.$user->id.'|'.$newRole.'|'.now()->format('YmdHi'),
                dedupeMinutes: 1,
            );
        }
    }

    public function userPermissionsChanged(User $user): void
    {
        $this->dispatcher->send(
            event: NotificationEvent::UserPermissionsChanged,
            title: __('User Permissions Changed'),
            body: __('Permissions were updated for :name.', ['name' => $user->name]),
            url: $this->safeRoute('admin.settings.permissions'),
            meta: [
                'reference_type' => User::class,
                'reference_id' => $user->id,
                'user_id' => $user->id,
            ],
            fingerprint: 'user_permissions|'.$user->id.'|'.now()->format('YmdHi'),
            dedupeMinutes: 1,
        );

        if ($user->isSales()) {
            $this->dispatcher->send(
                event: NotificationEvent::UserPermissionsChanged,
                title: __('Your Permissions Changed'),
                body: __('Your account permissions were updated.'),
                url: $this->safeRoute('profile'),
                roles: [],
                extraUserIds: [$user->id],
                fingerprint: 'user_permissions_self|'.$user->id.'|'.now()->format('YmdHi'),
                dedupeMinutes: 1,
            );
        }
    }

    public function branchCreated(Branch $branch): void
    {
        $this->dispatcher->send(
            event: NotificationEvent::BranchCreated,
            title: __('Branch Created'),
            body: __('Branch :name was created.', ['name' => $branch->name]),
            url: $this->safeRoute('admin.branches.index'),
            meta: ['reference_type' => Branch::class, 'reference_id' => $branch->id, 'branch_id' => $branch->id],
        );
    }

    public function branchUpdated(Branch $branch, bool $statusChanged = false, ?bool $wasActive = null): void
    {
        $this->dispatcher->send(
            event: NotificationEvent::BranchUpdated,
            title: __('Branch Updated'),
            body: __('Branch :name was updated.', ['name' => $branch->name]),
            url: $this->safeRoute('admin.branches.index'),
            meta: ['reference_type' => Branch::class, 'reference_id' => $branch->id, 'branch_id' => $branch->id],
            fingerprint: 'branch_updated|'.$branch->id.'|'.now()->format('YmdHi'),
            dedupeMinutes: 1,
        );

        if ($statusChanged) {
            $this->dispatcher->send(
                event: NotificationEvent::BranchStatusChanged,
                title: __('Branch Status Changed'),
                body: $branch->is_active
                    ? __('Your branch :name was activated.', ['name' => $branch->name])
                    : __('Your branch :name was deactivated.', ['name' => $branch->name]),
                url: $this->safeRoute('profile'),
                roles: ['sales'],
                branchId: $branch->id,
                meta: ['reference_type' => Branch::class, 'reference_id' => $branch->id, 'branch_id' => $branch->id],
                fingerprint: 'branch_status|'.$branch->id.'|'.((int) $branch->is_active).'|'.now()->format('YmdHi'),
                dedupeMinutes: 1,
            );
        }
    }

    public function branchDeleted(Branch $branch): void
    {
        $this->dispatcher->send(
            event: NotificationEvent::BranchDeleted,
            title: __('Branch Deleted'),
            body: __('Branch :name was deleted.', ['name' => $branch->name]),
            url: $this->safeRoute('admin.branches.index'),
            meta: ['reference_type' => Branch::class, 'reference_id' => $branch->id, 'branch_id' => $branch->id],
        );
    }

    public function branchGeofenceChanged(Branch $branch): void
    {
        $this->dispatcher->send(
            event: NotificationEvent::BranchGeofenceChanged,
            title: __('Branch Location Settings Changed'),
            body: __('Location settings for branch :name were updated.', ['name' => $branch->name]),
            url: $this->safeRoute('profile'),
            roles: ['sales'],
            branchId: $branch->id,
            meta: ['reference_type' => Branch::class, 'reference_id' => $branch->id, 'branch_id' => $branch->id],
            fingerprint: 'branch_geofence|'.$branch->id.'|'.now()->format('YmdHi'),
            dedupeMinutes: 1,
        );
    }

    public function productCreated(Product $product): void
    {
        $this->dispatcher->send(
            event: NotificationEvent::ProductCreated,
            title: __('Product Created'),
            body: __('Product :name was created.', ['name' => $product->display_name ?? $product->sku]),
            url: $this->safeRoute('admin.products.index'),
            meta: ['reference_type' => Product::class, 'reference_id' => $product->id, 'product_id' => $product->id],
        );
    }

    public function productUpdated(Product $product): void
    {
        $this->dispatcher->send(
            event: NotificationEvent::ProductUpdated,
            title: __('Product Updated'),
            body: __('Product :name was updated.', ['name' => $product->display_name ?? $product->sku]),
            url: $this->safeRoute('admin.products.index'),
            meta: ['reference_type' => Product::class, 'reference_id' => $product->id, 'product_id' => $product->id],
            fingerprint: 'product_updated|'.$product->id.'|'.now()->format('YmdHi'),
            dedupeMinutes: 1,
        );
    }

    public function productDeleted(Product $product): void
    {
        $this->dispatcher->send(
            event: NotificationEvent::ProductDeleted,
            title: __('Product Deleted'),
            body: __('Product :name was deleted.', ['name' => $product->display_name ?? $product->sku]),
            url: $this->safeRoute('admin.products.index'),
            meta: ['reference_type' => Product::class, 'reference_id' => $product->id, 'product_id' => $product->id],
        );
    }

    public function inventoryChanged(InventoryStock $stock, float $previousQty): void
    {
        app(\App\Domain\Inventory\Services\InventoryAlertService::class)
            ->evaluateStockChange($stock, $previousQty);
    }

    public function treasuryTransaction(Treasury $treasury, float $amount, string $type): void
    {
        $threshold = $this->settings->largeTreasuryThreshold();
        if ($amount < $threshold) {
            return;
        }

        $this->dispatcher->send(
            event: NotificationEvent::TreasuryLargeTransaction,
            title: __('Large Treasury Transaction'),
            body: __(':type of EGP :amount recorded on :treasury.', [
                'type' => $type,
                'amount' => number_format($amount, 2),
                'treasury' => $treasury->name,
            ]),
            url: $this->safeRoute('admin.treasuries.show', $treasury),
            meta: [
                'reference_type' => Treasury::class,
                'reference_id' => $treasury->id,
                'treasury_id' => $treasury->id,
            ],
            fingerprint: 'treasury_large|'.$treasury->id.'|'.$type.'|'.number_format($amount, 2).'|'.now()->format('YmdHi'),
            dedupeMinutes: 1,
        );
    }

    public function dailyClosingCompleted(DailyClosing $closing): void
    {
        $body = __('Daily Closing Completed').' · '.$closing->closing_datetime?->format('Y-m-d H:i')
            .' · '.__('Net Profit').': EGP '.number_format((float) $closing->net_profit, 2);

        $this->dispatcher->send(
            event: NotificationEvent::DailyClosingCompleted,
            title: __('Daily Closing Completed'),
            body: $body,
            url: $this->safeRoute('admin.daily-closings.show', $closing),
            meta: [
                'reference_type' => DailyClosing::class,
                'reference_id' => $closing->id,
                'closing_id' => $closing->id,
                'closing_datetime' => $closing->closing_datetime?->format('Y-m-d H:i'),
                'total_sales' => (float) $closing->total_sales,
                'total_purchases' => (float) $closing->total_purchases,
                'total_expenses' => (float) $closing->total_expenses,
                'net_profit' => (float) $closing->net_profit,
                'treasuries' => collect($closing->treasuries())->map(fn ($r) => [
                    'treasury_name' => $r['treasury_name'] ?? '',
                    'closing_balance' => (float) ($r['closing_balance'] ?? 0),
                ])->all(),
            ],
            fingerprint: 'daily_closing|'.$closing->id,
            dedupeMinutes: 1440,
        );
    }

    public function dailyVisibilityGenerated(int $branchId, string $date, int $invoiceCount): void
    {
        $branch = Branch::query()->find($branchId);
        $this->dispatcher->send(
            event: NotificationEvent::DailyVisibilityGenerated,
            title: __('Daily Invoice Visibility Generated'),
            body: __('Visibility set for :branch on :date (:count invoices).', [
                'branch' => $branch?->name ?? '#'.$branchId,
                'date' => $date,
                'count' => $invoiceCount,
            ]),
            url: $this->safeRoute('admin.settings.daily_visibility'),
            meta: [
                'branch_id' => $branchId,
                'reference_id' => $branchId,
                'business_date' => $date,
            ],
            fingerprint: 'daily_visibility|'.$branchId.'|'.$date,
            dedupeMinutes: 1440,
        );
    }

    public function settingsChanged(string $area): void
    {
        $this->dispatcher->send(
            event: NotificationEvent::SettingsChanged,
            title: __('System Settings Changed'),
            body: __('System settings were updated (:area).', ['area' => $area]),
            url: $this->safeRoute('admin.settings.index'),
            meta: ['area' => $area],
            fingerprint: 'settings|'.$area.'|'.now()->format('YmdHi'),
            dedupeMinutes: 1,
        );
    }

    public function invoiceTemplateUpdated(): void
    {
        $this->dispatcher->send(
            event: NotificationEvent::InvoiceTemplateUpdated,
            title: __('Invoice Template Updated'),
            body: __('Invoice template settings were updated.'),
            url: $this->safeRoute('admin.settings.invoice'),
            fingerprint: 'invoice_template|'.now()->format('YmdHi'),
            dedupeMinutes: 1,
        );
    }

    public function sessionExpiring(User $user, int $minutesLeft): void
    {
        $this->dispatcher->send(
            event: NotificationEvent::SessionExpiring,
            title: __('Session About to Expire'),
            body: __('Your session will expire in about :minutes minutes.', ['minutes' => $minutesLeft]),
            url: $this->safeRoute('profile'),
            roles: [],
            extraUserIds: [$user->id],
            fingerprint: 'session_expiring|'.$user->id.'|'.now()->format('YmdH'),
            dedupeMinutes: 55,
        );
    }

    public function outsideGeofence(User $user): void
    {
        $this->dispatcher->send(
            event: NotificationEvent::OutsideGeofence,
            title: __('Outside Allowed Location'),
            body: __('You attempted to work outside your assigned branch location.'),
            url: $this->safeRoute('login'),
            roles: [],
            extraUserIds: [$user->id],
            fingerprint: 'outside_geofence|'.$user->id.'|'.now()->format('YmdHi'),
            dedupeMinutes: 30,
        );
    }

    protected function safeRoute(string $name, mixed $parameters = []): ?string
    {
        if (! Route::has($name)) {
            return null;
        }

        try {
            return route($name, $parameters);
        } catch (\Throwable) {
            return route($name);
        }
    }
}
