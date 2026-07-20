<?php

namespace App\Http\Controllers\Sales;

use App\Domain\Sales\Models\SalesInvoice;
use App\Domain\Settings\Services\SettingsService;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\View\View;

class InvoicePrintController extends Controller
{
    public function __invoke(Request $request, SalesInvoice $invoice, SettingsService $settings): View
    {
        $this->authorize('view', $invoice);

        $invoice->load([
            'items',
            'customer:id,name,phone',
            'branch:id,name',
            'user:id,name',
        ]);

        return view('sales.invoices.print', [
            'invoice' => $invoice,
            'template' => $settings->getInvoiceTemplate(),
            'autoPrint' => $request->boolean('auto'),
        ]);
    }
}
