<?php

namespace App\Livewire\Admin\Settings;

use App\Domain\Branch\Models\Branch;
use App\Domain\Notifications\Services\SystemNotifier;
use App\Domain\Settings\DailyVisibility\Models\DailyVisibilitySetting;
use App\Domain\Settings\DailyVisibility\Models\DailyVisibleInvoiceSet;
use App\Domain\Settings\DailyVisibility\Services\DailyInvoiceVisibilityService;
use App\Livewire\Concerns\InteractsWithAdminLayout;
use Illuminate\Contracts\View\View;
use InvalidArgumentException;
use Livewire\Component;

class DailyInvoiceVisibility extends Component
{
    use InteractsWithAdminLayout;

    /** @var array<int, array{id:int,name:string}> */
    public array $branches = [];

    /** @var array<int|string, float|string> */
    public array $limits = [];

    /** @var array<int|string, bool> */
    public array $enabled = [];

    public ?int $selected_branch_id = null;

    public ?array $today_set = null;

    /** @var array<int, array{invoice_id:int,invoice_number:string,total:float}> */
    public array $today_items = [];

    public bool $showRegenerateConfirm = false;

    public function mount(): void
    {
        $this->loadSettings();
    }

    protected function loadSettings(): void
    {
        $branches = Branch::query()->orderBy('name')->get(['id', 'name']);
        $this->branches = $branches->map(fn (Branch $b) => [
            'id' => $b->id,
            'name' => $b->name,
        ])->values()->toArray();

        $settings = DailyVisibilitySetting::query()->get()->keyBy('branch_id');
        foreach ($branches as $b) {
            $s = $settings->get($b->id);
            $this->limits[$b->id] = (float) ($s?->daily_limit ?? 0);
            $this->enabled[$b->id] = (bool) ($s?->is_enabled ?? false);
        }

        if (! $this->selected_branch_id && $branches->isNotEmpty()) {
            $this->selected_branch_id = $branches->first()->id;
        }

        $this->loadTodaySet();
    }

    public function updatedSelectedBranchId(): void
    {
        $this->loadTodaySet();
    }

    protected function loadTodaySet(): void
    {
        $this->today_set = null;
        $this->today_items = [];

        if (! $this->selected_branch_id) {
            return;
        }

        $set = DailyVisibleInvoiceSet::query()
            ->where('branch_id', $this->selected_branch_id)
            ->whereDate('business_date', now()->toDateString())
            ->with(['items.invoice:id,invoice_number,total'])
            ->first();

        if (! $set) {
            return;
        }

        $this->today_set = [
            'id' => $set->id,
            'target_limit' => (float) $set->target_limit,
            'actual_total' => (float) $set->actual_total,
            'status' => $set->status,
        ];

        $this->today_items = $set->items->map(function ($it) {
            return [
                'invoice_id' => (int) $it->sales_invoice_id,
                'invoice_number' => (string) ($it->invoice?->invoice_number ?? '#'.$it->sales_invoice_id),
                'total' => (float) ($it->invoice?->total ?? 0),
            ];
        })->values()->toArray();
    }

    public function saveLimits(): void
    {
        foreach ($this->branches as $b) {
            $branchId = (int) $b['id'];
            DailyVisibilitySetting::query()->updateOrCreate(
                ['branch_id' => $branchId],
                [
                    'daily_limit' => (float) ($this->limits[$branchId] ?? 0),
                    'is_enabled' => (bool) ($this->enabled[$branchId] ?? false),
                ]
            );
        }

        app(SystemNotifier::class)->settingsChanged('Daily visibility limits');

        $this->toast('Daily visibility settings saved');
        $this->loadSettings();
    }

    public function generate(DailyInvoiceVisibilityService $svc): void
    {
        if (! $this->selected_branch_id) {
            $this->toastWarning('Select a branch first.');

            return;
        }

        $svc->getOrGenerateTodaySet($this->selected_branch_id);
        $this->loadTodaySet();
        $this->toast("Today's visibility set generated");
    }

    public function prepareRegenerate(): void
    {
        if (! $this->selected_branch_id) {
            $this->toastWarning('Select a branch first.');

            return;
        }

        $this->showRegenerateConfirm = true;
    }

    public function cancelRegenerate(): void
    {
        $this->showRegenerateConfirm = false;
    }

    public function confirmRegenerate(DailyInvoiceVisibilityService $svc): void
    {
        if (! $this->selected_branch_id) {
            return;
        }

        try {
            $svc->regenerateToday($this->selected_branch_id);
            $this->loadTodaySet();
            $this->toast("Today's visibility set regenerated");
        } catch (InvalidArgumentException $e) {
            $this->toastError($e->getMessage());
        } finally {
            $this->showRegenerateConfirm = false;
        }
    }

    public function render(): View
    {
        return $this->adminView('livewire.admin.settings.daily-invoice-visibility', [], 'Daily Visibility');
    }
}
