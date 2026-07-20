<?php

namespace App\Livewire\Admin\Settings;

use App\Domain\Settings\Services\SettingsService;
use App\Domain\Treasury\Enums\PaymentMethod;
use App\Livewire\Concerns\InteractsWithAdminLayout;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;
use Livewire\Component;

class DailySettings extends Component
{
    use InteractsWithAdminLayout;

    public float $daily_sales_limit = 0;

    public string $invoice_prefix = 'INV-';

    public string $default_payment_method = 'cash';

    public function mount(SettingsService $service): void
    {
        $s = $service->getDailySettings();
        $this->daily_sales_limit = (float) ($s['daily_sales_limit'] ?? 0);
        $this->invoice_prefix = (string) ($s['invoice_prefix'] ?? 'INV-');
        $this->default_payment_method = PaymentMethod::normalize(
            (string) ($s['default_payment_method'] ?? 'cash')
        );
    }

    public function save(SettingsService $service): void
    {
        $this->validate([
            'daily_sales_limit' => ['required', 'numeric', 'gte:0'],
            'invoice_prefix' => ['required', 'string', 'max:20'],
            'default_payment_method' => ['required', 'string', Rule::in(PaymentMethod::values())],
        ]);

        $service->saveDailySettings([
            'daily_sales_limit' => $this->daily_sales_limit,
            'invoice_prefix' => $this->invoice_prefix,
            'default_payment_method' => $this->default_payment_method,
        ], Auth::id());

        $this->toast('Daily settings saved');
    }

    public function render(): View
    {
        return $this->adminView('livewire.admin.settings.daily-settings', [
            'paymentMethods' => PaymentMethod::cases(),
        ], 'Daily Settings');
    }
}
