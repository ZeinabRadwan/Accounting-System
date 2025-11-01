<?php

namespace App\Exports;

use App\Models\AdjustmentProduct;
use App\Models\InvoiceProduct;
use App\Models\InvoiceReturnProduct;
use App\Models\PurchaseProduct;
use App\Models\PurchaseReturnProduct;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Events\AfterSheet;
use Maatwebsite\Excel\Concerns\WithEvents;
use PhpOffice\PhpSpreadsheet\Style\Alignment;

class ExportInventoryHistory implements FromCollection, WithHeadings, ShouldAutoSize, WithEvents
{
    protected $term;
    protected $filterType;
    protected $locale;

    public function __construct($term = '', $filterType = 'default', $locale = null)
    {
        $this->term = $term;
        $this->filterType = $filterType;
        $this->locale = $locale ?: session('locale', app()->getLocale());
    }

    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        $history = collect();

        // Get all purchase products
        $purchaseQuery = PurchaseProduct::with(['purchase.supplier', 'product'])
            ->whereHas('purchase')
            ->whereHas('product')
            ->whereHas('purchase.supplier');
        if (!empty($this->term)) {
            $purchaseQuery->whereHas('product', function($q) {
                $q->where('name', 'LIKE', '%' . $this->term . '%')
                  ->orWhere('code', 'LIKE', '%' . $this->term . '%');
            });
        }
        $purchaseProducts = $purchaseQuery->orderBy('created_at', 'desc')->get();

        foreach ($purchaseProducts as $item) {
            try {
                if (($this->filterType === 'default' || $this->filterType === 'purchase' || $this->filterType === 'stock_in')) {
                    $purchase = $item->purchase ?? null;
                    $supplier = $purchase?->supplier ?? null;
                    $product = $item->product ?? null;
                    
                    if ($purchase && $supplier && $product) {
                        $history->push([
                            'operation_date' => $purchase->purchase_date,
                            'product_name' => $product->name,
                            'product_code' => $product->code,
                            'operation_type' => $this->locale === 'ar' ? 'شراء' : 'Purchase',
                            'price' => $item->purchase_price ?? 0,
                            'quantity_change' => $item->quantity ?? 0,
                            'notes' => ($this->locale === 'ar' ? 'شراء من ' : 'Purchase from ') . $supplier->name,
                            'reference_code' => config('config.purchasePrefix') . '-' . ($purchase->purchase_no ?? ''),
                        ]);
                    }
                }
            } catch (\Exception $e) {
                continue;
            }
        }

        // Get all invoice products
        $invoiceQuery = InvoiceProduct::with(['invoice.client', 'product'])
            ->whereHas('invoice')
            ->whereHas('product')
            ->whereHas('invoice.client');
        if (!empty($this->term)) {
            $invoiceQuery->whereHas('product', function($q) {
                $q->where('name', 'LIKE', '%' . $this->term . '%')
                  ->orWhere('code', 'LIKE', '%' . $this->term . '%');
            });
        }
        $invoiceProducts = $invoiceQuery->orderBy('created_at', 'desc')->get();

        foreach ($invoiceProducts as $item) {
            try {
                if (($this->filterType === 'default' || $this->filterType === 'invoice' || $this->filterType === 'stock_out')) {
                    $invoice = $item->invoice ?? null;
                    $client = $invoice?->client ?? null;
                    $product = $item->product ?? null;
                    
                    if ($invoice && $client && $product) {
                        $history->push([
                            'operation_date' => $invoice->invoice_date,
                            'product_name' => $product->name,
                            'product_code' => $product->code,
                            'operation_type' => $this->locale === 'ar' ? 'فاتورة' : 'Invoice',
                            'price' => $item->sale_price ?? 0,
                            'quantity_change' => -($item->quantity ?? 0),
                            'notes' => ($this->locale === 'ar' ? 'بيع إلى ' : 'Sale to ') . $client->name,
                            'reference_code' => config('config.invoicePrefix') . '-' . ($invoice->invoice_no ?? ''),
                        ]);
                    }
                }
            } catch (\Exception $e) {
                continue;
            }
        }

        // Get all adjustment products
        $adjustmentQuery = AdjustmentProduct::with(['inventoryAdjustment', 'product'])
            ->whereHas('inventoryAdjustment')
            ->whereHas('product');
        if (!empty($this->term)) {
            $adjustmentQuery->whereHas('product', function($q) {
                $q->where('name', 'LIKE', '%' . $this->term . '%')
                  ->orWhere('code', 'LIKE', '%' . $this->term . '%');
            });
        }
        $adjustmentProducts = $adjustmentQuery->orderBy('created_at', 'desc')->get();

        foreach ($adjustmentProducts as $item) {
            try {
                $itemType = $item->type ?? null;
                if (($this->filterType === 'default' || $this->filterType === 'adjustment' || 
                    ($this->filterType === 'stock_in' && $itemType == 1) || 
                    ($this->filterType === 'stock_out' && $itemType == 0))) {
                    $adjustment = $item->inventoryAdjustment ?? null;
                    $product = $item->product ?? null;
                    
                    if ($adjustment && $product) {
                        $quantityChange = ($itemType == 1) ? ($item->quantity ?? 0) : -($item->quantity ?? 0);
                        $operationType = ($itemType == 1) ? 
                            ($this->locale === 'ar' ? 'دخول المخزون' : 'Stock In') : 
                            ($this->locale === 'ar' ? 'خروج المخزون' : 'Stock Out');
                        
                        $history->push([
                            'operation_date' => $adjustment->date,
                            'product_name' => $product->name,
                            'product_code' => $product->code,
                            'operation_type' => $operationType,
                            'price' => $item->purchase_price ?? 0,
                            'quantity_change' => $quantityChange,
                            'notes' => $adjustment->reason ?? ($this->locale === 'ar' ? 'تعديل' : 'Adjustment'),
                            'reference_code' => config('config.adjustmentPrefix') . '-' . ($adjustment->code ?? ''),
                        ]);
                    }
                }
            } catch (\Exception $e) {
                continue;
            }
        }

        // Get all invoice return products
        $invoiceReturnQuery = InvoiceReturnProduct::with(['invoiceReturn.invoice.client', 'product'])
            ->whereHas('invoiceReturn')
            ->whereHas('product')
            ->whereHas('invoiceReturn.invoice')
            ->whereHas('invoiceReturn.invoice.client');
        if (!empty($this->term)) {
            $invoiceReturnQuery->whereHas('product', function($q) {
                $q->where('name', 'LIKE', '%' . $this->term . '%')
                  ->orWhere('code', 'LIKE', '%' . $this->term . '%');
            });
        }
        $invoiceReturnProducts = $invoiceReturnQuery->orderBy('created_at', 'desc')->get();

        foreach ($invoiceReturnProducts as $item) {
            try {
                if (($this->filterType === 'default' || $this->filterType === 'invoice_return' || $this->filterType === 'stock_in')) {
                    $invoiceReturn = $item->invoiceReturn ?? null;
                    $invoice = $invoiceReturn?->invoice ?? null;
                    $client = $invoice?->client ?? null;
                    $product = $item->product ?? null;
                    
                    if ($invoiceReturn && $invoice && $client && $product) {
                        $history->push([
                            'operation_date' => $invoiceReturn->date,
                            'product_name' => $product->name,
                            'product_code' => $product->code,
                            'operation_type' => $this->locale === 'ar' ? 'إرجاع فاتورة' : 'Invoice Return',
                            'price' => $product->purchase_price ?? 0,
                            'quantity_change' => $item->quantity ?? 0,
                            'notes' => ($this->locale === 'ar' ? 'إرجاع من ' : 'Return from ') . $client->name,
                            'reference_code' => config('config.invoiceReturnPrefix') . '-' . ($invoiceReturn->return_no ?? ''),
                        ]);
                    }
                }
            } catch (\Exception $e) {
                continue;
            }
        }

        // Get all purchase return products
        $purchaseReturnQuery = PurchaseReturnProduct::with(['purchaseReturn.purchase.supplier', 'product'])
            ->whereHas('purchaseReturn')
            ->whereHas('product')
            ->whereHas('purchaseReturn.purchase')
            ->whereHas('purchaseReturn.purchase.supplier');
        if (!empty($this->term)) {
            $purchaseReturnQuery->whereHas('product', function($q) {
                $q->where('name', 'LIKE', '%' . $this->term . '%')
                  ->orWhere('code', 'LIKE', '%' . $this->term . '%');
            });
        }
        $purchaseReturnProducts = $purchaseReturnQuery->orderBy('created_at', 'desc')->get();

        foreach ($purchaseReturnProducts as $item) {
            try {
                if (($this->filterType === 'default' || $this->filterType === 'purchase_return' || $this->filterType === 'stock_out')) {
                    $purchaseReturn = $item->purchaseReturn ?? null;
                    $purchase = $purchaseReturn?->purchase ?? null;
                    $supplier = $purchase?->supplier ?? null;
                    $product = $item->product ?? null;
                    
                    if ($purchaseReturn && $purchase && $supplier && $product) {
                        $history->push([
                            'operation_date' => $purchaseReturn->date,
                            'product_name' => $product->name,
                            'product_code' => $product->code,
                            'operation_type' => $this->locale === 'ar' ? 'إرجاع شراء' : 'Purchase Return',
                            'price' => $item->purchase_price ?? 0,
                            'quantity_change' => -($item->quantity ?? 0),
                            'notes' => ($this->locale === 'ar' ? 'إرجاع إلى ' : 'Return to ') . $supplier->name,
                            'reference_code' => config('config.purchaseReturnPrefix') . '-' . ($purchaseReturn->code ?? ''),
                        ]);
                    }
                }
            } catch (\Exception $e) {
                continue;
            }
        }

        // Sort by operation date descending
        $history = $history->sortByDesc('operation_date');

        // Format for Excel
        $currencySymbol = getExcelCompatibleCurrencySymbol();
        
        return $history->map(function ($item) use ($currencySymbol) {
            return [
                date('jS M, Y', strtotime($item['operation_date'])),
                $item['product_name'],
                $item['product_code'],
                $item['operation_type'],
                $currencySymbol . strval($item['price'] ?? 0),
                $item['quantity_change'] > 0 ? '+' . $item['quantity_change'] : strval($item['quantity_change']),
                $item['notes'] ?? '-',
                $item['reference_code'] ?? '-',
            ];
        });
    }

    public function headings(): array
    {
        $translations = [
            'en' => [
                'Operation Date',
                'Product Name',
                'Product Code',
                'Operation Type',
                'Price',
                'Quantity Change',
                'Notes',
                'Reference Code',
            ],
            'ar' => [
                'تاريخ العملية',
                'اسم المنتج',
                'كود المنتج',
                'نوع العملية',
                'السعر',
                'تغيير الكمية',
                'ملاحظات',
                'رمز المرجع',
            ]
        ];
        
        return $translations[$this->locale] ?? $translations['en'];
    }

    public function registerEvents(): array
    {
        return [
            AfterSheet::class => function (AfterSheet $event) {
                $lastRow = $event->getSheet()->getDelegate()->getHighestRow();

                // Style the header row
                $event->getSheet()->getDelegate()->getStyle('A1:H1')->applyFromArray([
                    'font' => [
                        'bold' => true,
                        'size' => 13,
                    ],
                    'fill' => [
                        'fillType' => 'solid',
                        'startColor' => [
                            'rgb' => '00FF00',
                        ],
                    ],
                ]);

                // Align numeric columns to right
                $event->getSheet()->getDelegate()->getStyle("E2:E{$lastRow}")->getAlignment()->setHorizontal(Alignment::HORIZONTAL_RIGHT);
                $event->getSheet()->getDelegate()->getStyle("F2:F{$lastRow}")->getAlignment()->setHorizontal(Alignment::HORIZONTAL_RIGHT);
            },
        ];
    }
}



