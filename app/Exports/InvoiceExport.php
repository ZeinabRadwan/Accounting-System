<?php

namespace App\Exports;

use App\Models\Invoice;
use Maatwebsite\Excel\Events\AfterSheet;
use Maatwebsite\Excel\Concerns\WithEvents;
use App\Http\Resources\InvoiceListResource;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\FromCollection;
use PhpOffice\PhpSpreadsheet\Style\Alignment;

class InvoiceExport implements FromCollection, WithHeadings, WithEvents
{
    protected $startDate;
    protected $endDate;
    protected $term;
    protected $locale;

    public function __construct($startDate, $endDate, $term, $locale = null)
    {
        $this->startDate = $startDate;
        $this->endDate = $endDate;
        $this->term = $term;
        $this->locale = $locale ?: session('locale', app()->getLocale());
    }


    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        $term = $this->term;
        $query = Invoice::with('client', 'invoicePayments', 'user');

        if ($this->startDate && $this->endDate) {
            $query = $query->whereBetween('invoice_date', [$this->startDate, $this->endDate]);
        }

        $query = $query->where(function ($query) use ($term) {
            $query->where('invoice_no', 'LIKE', '%' . $term . '%')
                ->where('reference', 'LIKE', '%' . $term . '%')
                ->orWhere('sub_total', 'LIKE', '%' . $term . '%')
                ->orWhere('po_reference', 'LIKE', '%' . $term . '%')
                ->orWhere('payment_terms', 'LIKE', '%' . $term . '%')
                ->orWhere('delivery_place', 'LIKE', '%' . $term . '%')
                ->orWhereHas('client', function ($newQuery) use ($term) {
                    $newQuery->where('name', 'LIKE', '%' . $term . '%')
                        ->orWhere('client_id', 'LIKE', '%' . $term . '%');
                });
        });

        $invoices = InvoiceListResource::collection($query->latest()->get())->map(function ($invoice) {
            $currencySymbol = getExcelCompatibleCurrencySymbol();
            
            // Translate status using stored locale
            $statusText = $invoice->status ? 
                ($this->locale === 'ar' ? 'نشط' : 'Active') : 
                ($this->locale === 'ar' ? 'غير نشط' : 'Inactive');
            
            return [
                config('config.invoicePrefix') . ' - ' . $invoice->invoice_no,
                date('jS M, Y', strtotime($invoice->invoice_date)),
                $statusText,
                $invoice->client->name ?? 'N/A',
                $currencySymbol . strval($invoice->invoiceTotal()),
                $currencySymbol . strval($invoice->invoiceTotalPaid() > 0 ? $invoice->invoiceTotalPaid() : '0'),
                $currencySymbol . strval($invoice->totalDue() > 0 ? $invoice->totalDue() : '0'),
            ];
        });

        // Calculate the total of the amount related columns
        $currencySymbol = getExcelCompatibleCurrencySymbol();
        
        $netTotal = $invoices->sum(function ($row) use ($currencySymbol) {
            return floatval(str_replace($currencySymbol, '', $row[4]  ?? 0));
        });

        $paidTotal = $invoices->sum(function ($row) use ($currencySymbol) {
            return floatval(str_replace($currencySymbol, '', $row[5]  ?? 0));
        });

        $totalDue = $invoices->sum(function ($row) use ($currencySymbol) {
            return floatval(str_replace($currencySymbol, '', $row[6]  ?? 0));
        });

        // Use stored locale for total row labels
        $locale = $this->locale;
        
        // Define translations for total row labels
        $totalLabels = [
            'en' => [
                'Net Total = ',
                'Total Paid = ',
                'Total Due = '
            ],
            'ar' => [
                'صافي الإجمالي = ',
                'إجمالي المدفوع = ',
                'إجمالي المستحقات = '
            ]
        ];
        
        $labels = $totalLabels[$locale] ?? $totalLabels['en'];
        
        // Add the total paid as a new row
        $invoices->push([
            '', '', '', '', 
            $labels[0] . $currencySymbol . $netTotal, 
            $labels[1] . $currencySymbol . $paidTotal, 
            $labels[2] . $currencySymbol . $totalDue,
        ]);

        return $invoices;
    }

    // excel file columns
    public function headings(): array
    {
        // Use stored locale
        $locale = $this->locale;
        
        // Define translations for Excel headers
        $translations = [
            'en' => [
                'Invoice No',
                'Invoice Date',
                'Status',
                'Client',
                'Net Total',
                'Total Paid',
                'Total Due',
            ],
            'ar' => [
                'رقم الفاتورة',
                'تاريخ الفاتورة',
                'الحالة',
                'العميل',
                'صافي الإجمالي',
                'إجمالي المدفوع',
                'إجمالي المستحقات',
            ]
        ];
        
        return $translations[$locale] ?? $translations['en'];
    }

    public function registerEvents(): array
    {
        return [
            AfterSheet::class => function (AfterSheet $event) {
                // Get the last row index
                $lastRow = $event->getSheet()->getDelegate()->getHighestRow();

                // Style the last row (total amount row)
                $event->getSheet()->getDelegate()->getStyle('A' . $lastRow . ':G' . $lastRow)->applyFromArray([
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
                    'alignment' => [
                        'horizontal' => \PhpOffice\PhpSpreadsheet\Style\Alignment::HORIZONTAL_RIGHT,
                    ],
                ]);

                // Style the header row (headings)
                $event->getSheet()->getDelegate()->getStyle('A1:G1')->applyFromArray([
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

                // Style the header row (headings)
                $event->getSheet()->getDelegate()->getStyle('E1')->applyFromArray([
                    'alignment' => [
                        'horizontal' => Alignment::HORIZONTAL_RIGHT,
                    ],
                ]);
                $event->getSheet()->getDelegate()->getStyle('F1')->applyFromArray([
                    'alignment' => [
                        'horizontal' => Alignment::HORIZONTAL_RIGHT,
                    ],
                ]);
                $event->getSheet()->getDelegate()->getStyle('G1')->applyFromArray([
                    'alignment' => [
                        'horizontal' => Alignment::HORIZONTAL_RIGHT,
                    ],
                ]);

                // Align column to the right
                $columnE = 'E';
                $event->getSheet()->getDelegate()->getStyle("{$columnE}2:{$columnE}{$lastRow}")->getAlignment()->setHorizontal(Alignment::HORIZONTAL_RIGHT);
                $columnF = 'F';
                $event->getSheet()->getDelegate()->getStyle("{$columnF}2:{$columnF}{$lastRow}")->getAlignment()->setHorizontal(Alignment::HORIZONTAL_RIGHT);
                $columnG = 'G';
                $event->getSheet()->getDelegate()->getStyle("{$columnG}2:{$columnG}{$lastRow}")->getAlignment()->setHorizontal(Alignment::HORIZONTAL_RIGHT);
            },
        ];
    }
}
