<?php

namespace App\Exports;

use App\Models\Quotation;
use Maatwebsite\Excel\Events\AfterSheet;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithHeadings;
use App\Http\Resources\QuotationListResource;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use PhpOffice\PhpSpreadsheet\Style\Alignment;

class ExportQuotation implements FromCollection,  WithHeadings, ShouldAutoSize, WithEvents
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
        $query = Quotation::with('client', 'user');

        if ($this->startDate && $this->endDate) {
            $query = $query->whereBetween('quotation_date', [$this->startDate, $this->endDate]);
        }

        $query = $query->where(function ($query) use ($term) {
            $query->where('quotation_no', 'LIKE', '%' . $term . '%')
                ->orWhere('reference', 'LIKE', '%' . $term . '%')
                ->orWhere('delivery_place', 'LIKE', '%' . $term . '%')
                ->orWhere('discount', 'LIKE', '%' . $term . '%')
                ->orWhere('total_tax', 'LIKE', '%' . $term . '%')
                ->orWhere('sub_total', 'LIKE', '%' . $term . '%')
                ->orWhereHas('client', function ($newQuery) use ($term) {
                    $newQuery->where('name', 'LIKE', '%' . $term . '%')
                        ->orWhere('email', 'LIKE', '%' . $term . '%')
                        ->orWhere('company_name', 'LIKE', '%' . $term . '%')
                        ->orWhere('phone', 'LIKE', '%' . $term . '%');
                });
        });

        $salesQuotations = QuotationListResource::collection($query->latest()->get())->map(function ($salesQuotation) {
            $currencySymbol = getExcelCompatibleCurrencySymbol();
            
            // Calculate correct subtotal (without VAT)
            $subtotalWithoutVat = $salesQuotation->sub_total - $salesQuotation->total_tax;
            
            // Translate status using stored locale
            $statusText = $salesQuotation->status ? 
                ($this->locale === 'ar' ? 'نشط' : 'Active') : 
                ($this->locale === 'ar' ? 'غير نشط' : 'Inactive');
            
            return [
                config('config.quotationPrefix') . ' - ' . $salesQuotation->quotation_no,
                date('jS M, Y', strtotime($salesQuotation->quotation_date)),
                $statusText,
                $salesQuotation->client?->name,
                $currencySymbol . strval($subtotalWithoutVat),
                $currencySymbol . strval($salesQuotation->transport > 0 ? $salesQuotation->transport : '0'),
                $currencySymbol . strval($salesQuotation->discount > 0 ? $salesQuotation->discount : '0'),
                $currencySymbol . strval($salesQuotation->total_tax > 0 ? $salesQuotation->total_tax : '0'),
                $currencySymbol . strval($salesQuotation->quotationTotal()),
            ];
        });

        $currencySymbol = getExcelCompatibleCurrencySymbol();
        
        $totalSub_Total = $salesQuotations->sum(function ($row) use ($currencySymbol) {
            return floatval(str_replace($currencySymbol, '', $row[4]  ?? 0));
        });
        $totalTransport = $salesQuotations->sum(function ($row) use ($currencySymbol) {
            return floatval(str_replace($currencySymbol, '', $row[5]  ?? 0));
        });
        $totalDiscount = $salesQuotations->sum(function ($row) use ($currencySymbol) {
            return floatval(str_replace($currencySymbol, '', $row[6] ?? 0));
        });
        $totalVat = $salesQuotations->sum(function ($row) use ($currencySymbol) {
            return floatval(str_replace($currencySymbol, '', $row[7]  ?? 0));
        });
        $totalNetTotal = $salesQuotations->sum(function ($row) use ($currencySymbol) {
            return floatval(str_replace($currencySymbol, '',  $row[8] ?? 0));
        });

        // Use stored locale for total row labels
        $locale = $this->locale;
        
        // Define translations for total row labels
        $totalLabels = [
            'en' => [
                'Total Subtotal = ',
                'Total Transport = ',
                'Total Discount = ',
                'Total Vat = ',
                'Total NetTotal = '
            ],
            'ar' => [
                'إجمالي الإجمالي قبل الضريبة = ',
                'إجمالي النقل = ',
                'إجمالي الخصم = ',
                'إجمالي الضريبة = ',
                'إجمالي الإجمالي بعد الضريبة = '
            ]
        ];
        
        $labels = $totalLabels[$locale] ?? $totalLabels['en'];
        
        // Add the total paid as a new row
        $salesQuotations->push([
            '', '', '', '', 
            $labels[0] . $currencySymbol . $totalSub_Total, 
            $labels[1] . $currencySymbol . $totalTransport, 
            $labels[2] . $currencySymbol . $totalDiscount, 
            $labels[3] . $currencySymbol . $totalVat, 
            $labels[4] . $currencySymbol . $totalNetTotal,
        ]);

        return $salesQuotations;
    }

    public function headings(): array
    {
        // Use stored locale
        $locale = $this->locale;
        
        // Define translations for Excel headers
        $translations = [
            'en' => [
                'Quotation No',
                'Quotation Date',
                'Status',
                'Client',
                'Subtotal',
                'Transport',
                'Discount',
                'Tax',
                'Net Total',
            ],
            'ar' => [
                'رقم عرض السعر',
                'تاريخ عرض السعر',
                'الحالة',
                'العميل',
                'الإجمالي قبل الضريبة',
                'النقل',
                'الخصم',
                'الضريبة',
                'الإجمالي بعد الضريبة',
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
                $event->getSheet()->getDelegate()->getStyle('A' . $lastRow . ':I' . $lastRow)->applyFromArray([
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
                $event->getSheet()->getDelegate()->getStyle('A1:I1')->applyFromArray([
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
                $event->getSheet()->getDelegate()->getStyle('H1')->applyFromArray([
                    'alignment' => [
                        'horizontal' => Alignment::HORIZONTAL_RIGHT,
                    ],
                ]);
                $event->getSheet()->getDelegate()->getStyle('I1')->applyFromArray([
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
                $columnH = 'H';
                $event->getSheet()->getDelegate()->getStyle("{$columnH}2:{$columnH}{$lastRow}")->getAlignment()->setHorizontal(Alignment::HORIZONTAL_RIGHT);
                $columnI = 'I';
                $event->getSheet()->getDelegate()->getStyle("{$columnI}2:{$columnI}{$lastRow}")->getAlignment()->setHorizontal(Alignment::HORIZONTAL_RIGHT);
            },
        ];
    }
}
