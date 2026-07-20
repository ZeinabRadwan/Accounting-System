<?php

namespace App\Livewire\Admin\Customers;

use App\Domain\Branch\Models\Branch;
use App\Domain\Customer\Models\Customer;
use App\Domain\Customer\Services\CustomerPaymentService;
use App\Domain\Reports\Services\CustomerStatementService;
use App\Domain\Sales\Models\SalesInvoice;
use App\Domain\Treasury\Enums\PaymentMethod;
use App\Domain\Treasury\Models\Treasury;
use App\Livewire\Concerns\InteractsWithAdminLayout;
use DomainException;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;
use Livewire\Component;

class CustomerAccountStatement extends Component
{
    use InteractsWithAdminLayout;

    public Customer $customer;

    public ?int $branch_id = null;

    public ?string $date_from = null;

    public ?string $date_to = null;

    public bool $showPaymentForm = false;

    public string $pay_amount = '';

    public string $pay_paid_at = '';

    public string $pay_payment_method = 'cash';

    public ?int $pay_treasury_id = null;

    public string $pay_notes = '';

    public string $pay_apply_mode = 'fifo';

    public ?int $pay_sales_invoice_id = null;

    public function mount(Customer $customer): void
    {
        $this->customer = $customer;
        $this->date_from = now()->startOfMonth()->toDateString();
        $this->date_to = now()->toDateString();
        $this->pay_paid_at = now()->format('Y-m-d\TH:i');
        $this->syncTreasuryForMethod();
    }

    public function updatedPayPaymentMethod(): void
    {
        $this->syncTreasuryForMethod();
    }

    public function openPaymentForm(): void
    {
        $this->resetPaymentForm();
        $this->showPaymentForm = true;
    }

    public function closePaymentForm(): void
    {
        $this->showPaymentForm = false;
        $this->resetPaymentForm();
    }

    public function savePayment(CustomerPaymentService $service): void
    {
        $validated = $this->validate([
            'pay_amount' => ['required', 'numeric', 'gt:0'],
            'pay_paid_at' => ['required', 'date'],
            'pay_payment_method' => ['required', 'string', Rule::in(PaymentMethod::values())],
            'pay_treasury_id' => ['required', 'integer', 'exists:treasuries,id'],
            'pay_notes' => ['nullable', 'string', 'max:1000'],
            'pay_apply_mode' => ['required', 'in:fifo,invoice'],
            'pay_sales_invoice_id' => [
                Rule::requiredIf(fn () => $this->pay_apply_mode === 'invoice'),
                'nullable',
                'integer',
                Rule::exists('sales_invoices', 'id')->where(fn ($q) => $q->where('customer_id', $this->customer->id)),
            ],
        ]);

        try {
            $service->record($this->customer, [
                'amount' => (float) $validated['pay_amount'],
                'paid_at' => $validated['pay_paid_at'],
                'payment_method' => $validated['pay_payment_method'],
                'treasury_id' => (int) $validated['pay_treasury_id'],
                'notes' => $validated['pay_notes'] ?: null,
                'created_by' => Auth::id(),
                'sales_invoice_id' => $this->pay_apply_mode === 'invoice'
                    ? (int) $this->pay_sales_invoice_id
                    : null,
            ]);
        } catch (DomainException $e) {
            $this->addError('pay_amount', $e->getMessage());

            return;
        }

        $this->showPaymentForm = false;
        $this->resetPaymentForm();
        $this->customer->refresh();
        $this->toast('Payment recorded successfully.');
    }

    protected function resetPaymentForm(): void
    {
        $this->pay_amount = '';
        $this->pay_paid_at = now()->format('Y-m-d\TH:i');
        $this->pay_payment_method = 'cash';
        $this->pay_notes = '';
        $this->pay_apply_mode = 'fifo';
        $this->pay_sales_invoice_id = null;
        $this->syncTreasuryForMethod();
        $this->resetErrorBag();
    }

    protected function syncTreasuryForMethod(): void
    {
        $treasury = Treasury::query()
            ->where('payment_method', PaymentMethod::normalize($this->pay_payment_method))
            ->where('is_active', true)
            ->first();

        $this->pay_treasury_id = $treasury?->id;
    }

    public function render(CustomerStatementService $service): View
    {
        $statement = $service->statement(
            $this->customer->id,
            $this->date_from,
            $this->date_to,
            $this->branch_id,
        );

        $openInvoices = SalesInvoice::query()
            ->where('customer_id', $this->customer->id)
            ->where(function ($q) {
                $q->where('is_cancelled', false)->orWhereNull('is_cancelled');
            })
            ->where('remaining_amount', '>', 0)
            ->orderBy('created_at')
            ->get(['id', 'invoice_number', 'remaining_amount', 'total', 'created_at']);

        return $this->adminView('livewire.admin.customers.account-statement', [
            'statement' => $statement,
            'branches' => Branch::query()->orderBy('name')->get(['id', 'name']),
            'treasuries' => Treasury::query()->where('is_active', true)->orderBy('name')->get(),
            'paymentMethods' => PaymentMethod::cases(),
            'openInvoices' => $openInvoices,
            'printUrl' => route('admin.customers.statement.print', [
                'customer' => $this->customer->id,
                'date_from' => $this->date_from,
                'date_to' => $this->date_to,
                'branch_id' => $this->branch_id,
            ]),
        ], __('Statement of Account').' · '.$this->customer->name);
    }
}
