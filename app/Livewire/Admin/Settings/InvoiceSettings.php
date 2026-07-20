<?php

namespace App\Livewire\Admin\Settings;

use App\Domain\Settings\Services\SettingsService;
use App\Livewire\Concerns\InteractsWithAdminLayout;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class InvoiceSettings extends Component
{
    use InteractsWithAdminLayout;

    public string $store_name = '';

    public string $logo_path = '';

    public string $address = '';

    public string $phone = '';

    public string $receipt_header = '';

    public string $receipt_footer = '';

    public function mount(SettingsService $service): void
    {
        $s = $service->getInvoiceTemplate();
        $this->store_name = (string) ($s['store_name'] ?? '');
        $this->logo_path = (string) ($s['logo_path'] ?? '');
        $this->address = (string) ($s['address'] ?? '');
        $this->phone = (string) ($s['phone'] ?? '');
        $this->receipt_header = (string) ($s['receipt_header'] ?? '');
        $this->receipt_footer = (string) ($s['receipt_footer'] ?? '');
    }

    public function save(SettingsService $service): void
    {
        $this->validate([
            'store_name' => ['required', 'string', 'max:255'],
            'logo_path' => ['nullable', 'string', 'max:255'],
            'address' => ['nullable', 'string', 'max:500'],
            'phone' => ['nullable', 'string', 'max:50'],
            'receipt_header' => ['nullable', 'string', 'max:1000'],
            'receipt_footer' => ['nullable', 'string', 'max:1000'],
        ]);

        $service->saveInvoiceTemplate([
            'store_name' => $this->store_name,
            'logo_path' => $this->logo_path,
            'address' => $this->address,
            'phone' => $this->phone,
            'receipt_header' => $this->receipt_header,
            'receipt_footer' => $this->receipt_footer,
        ], Auth::id());

        $this->toast('Invoice settings saved');
    }

    public function render(): View
    {
        return $this->adminView('livewire.admin.settings.invoice-settings', [], 'Invoice Settings');
    }
}
