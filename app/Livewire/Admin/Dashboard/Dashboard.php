<?php

namespace App\Livewire\Admin\Dashboard;

use App\Domain\Branch\Models\Branch;
use App\Domain\Customer\Models\Customer;
use App\Domain\Expense\Models\Expense;
use App\Domain\Inventory\Models\InventoryLot;
use App\Domain\Inventory\Models\InventoryStock;
use App\Domain\Purchase\Models\PurchaseInvoice;
use App\Domain\Sales\Models\SalesInvoice;
use App\Domain\Treasury\Models\Treasury;
use App\Livewire\Concerns\InteractsWithAdminLayout;
use Illuminate\Contracts\View\View;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Dashboard extends Component
{
    use InteractsWithAdminLayout;

    public function render(): View
    {
        $today = Carbon::today();

        $salesTodayQuery = $this->activeSales()
            ->whereDate('created_at', $today);

        $todaySales = (float) (clone $salesTodayQuery)->sum('total');
        $todayOrders = (int) (clone $salesTodayQuery)->count();
        $todayPaid = (float) (clone $salesTodayQuery)->sum('paid_amount');
        $openReceivables = (float) $this->activeSales()->sum('remaining_amount');

        $lowStock = (int) InventoryStock::query()
            ->where('quantity', '>', 0)
            ->where('quantity', '<=', 10)
            ->count();

        $outOfStock = (int) InventoryStock::query()
            ->where('quantity', '<=', 0)
            ->count();

        $expiredLots = (int) InventoryLot::query()->expired()->count();
        $expiringSoonLots = (int) InventoryLot::query()->expiringSoon(30)->count();

        $expiryAlerts = InventoryLot::query()
            ->with(['product:id,display_name,sku', 'branch:id,name'])
            ->withRemaining()
            ->whereNotNull('expiry_date')
            ->whereDate('expiry_date', '<=', Carbon::today()->addDays(30))
            ->orderBy('expiry_date')
            ->limit(8)
            ->get();

        $customers = (int) Customer::query()->count();
        $treasuryBalance = (float) Treasury::query()->where('is_active', true)->sum('current_balance');
        $expensesToday = (float) Expense::query()->whereDate('expense_date', $today)->sum('amount');
        $purchasesToday = (float) PurchaseInvoice::query()->whereDate('created_at', $today)->sum('total');

        $recentSales = $this->activeSales()
            ->with(['customer:id,name', 'branch:id,name'])
            ->latest()
            ->limit(8)
            ->get();

        $branchPerformance = Branch::query()
            ->where('is_active', true)
            ->orderBy('name')
            ->get()
            ->map(function (Branch $branch) use ($today) {
                $query = $this->activeSales()
                    ->where('branch_id', $branch->id)
                    ->whereDate('created_at', $today);

                return [
                    'name' => $branch->name,
                    'total' => (float) (clone $query)->sum('total'),
                    'orders' => (int) (clone $query)->count(),
                ];
            });

        $treasuryRows = Treasury::query()
            ->where('is_active', true)
            ->orderBy('name')
            ->get(['id', 'name', 'payment_method', 'current_balance']);

        return $this->adminView('livewire.admin.dashboard.index', [
            'todaySales' => $todaySales,
            'todayOrders' => $todayOrders,
            'todayPaid' => $todayPaid,
            'openReceivables' => $openReceivables,
            'lowStock' => $lowStock,
            'outOfStock' => $outOfStock,
            'expiredLots' => $expiredLots,
            'expiringSoonLots' => $expiringSoonLots,
            'expiryAlerts' => $expiryAlerts,
            'customers' => $customers,
            'treasuryBalance' => $treasuryBalance,
            'expensesToday' => $expensesToday,
            'purchasesToday' => $purchasesToday,
            'recentSales' => $recentSales,
            'branchPerformance' => $branchPerformance,
            'treasuryRows' => $treasuryRows,
        ], 'Dashboard');
    }

    protected function activeSales(): Builder
    {
        $query = SalesInvoice::query()
            ->where(function ($q) {
                $q->where('is_cancelled', false)->orWhereNull('is_cancelled');
            });

        $user = Auth::user();
        if ($user) {
            $query->visibleToUser($user);
        }

        return $query;
    }
}
