<?php

namespace App\Exports;

use App\Http\Controllers\API\ReportController;
use Maatwebsite\Excel\Events\AfterSheet;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use PhpOffice\PhpSpreadsheet\Style\Alignment;

class ExportTodayReport implements FromCollection, WithHeadings, ShouldAutoSize, WithEvents
{
    public function __construct()
    {
        // No parameters needed for today's report as it's always for current date
    }

    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        $reportController = new ReportController();
        $reportData = $reportController->todayReport();
        
        // Format the data for Excel export
        $formattedData = collect([
            [
                'Opening Stock (By Purchase Price)',
                $reportData['openingStockByPurchasePrice']
            ],
            [
                'Opening Stock (By Sale Price)',
                $reportData['openingStockBySalePrice']
            ],
            [
                'Total Purchase',
                $reportData['totalPurchase']
            ],
            [
                'Total Expense',
                $reportData['expenses']
            ],
            [
                'Total Payroll',
                $reportData['payrolls']
            ],
            [
                'Total Loan Interest',
                $reportData['loanInterest']
            ],
            [
                'Asset Depreciation',
                $reportData['assetDepriciation']
            ],
            [
                'Total Sell Discount',
                $reportData['invoiceDiscount']
            ],
            [
                'Total Sell Return',
                $reportData['invoiceReturn']
            ],
            [
                'Closing Stock (By Purchase Price)',
                $reportData['closingStockByPurchasePrice']
            ],
            [
                'Closing Stock (By Sale Price)',
                $reportData['closingStockBySalePrice']
            ],
            [
                'Total Sales',
                $reportData['invoiceSales']
            ],
            [
                'Total Purchase Return',
                $reportData['purchaseReturn']
            ],
            [
                'Total Purchase Discount',
                $reportData['todayPurchaseDiscount']
            ],
            [
                'Gross Profit/Loss',
                $reportData['grossProfit']
            ],
            [
                'Net Profit/Loss',
                $reportData['netProfit']
            ]
        ]);

        return $formattedData;
    }

    /**
     * @return array
     */
    public function headings(): array
    {
        return [
            'Item',
            'Amount'
        ];
    }

    /**
     * @return array
     */
    public function registerEvents(): array
    {
        return [
            AfterSheet::class => function (AfterSheet $event) {
                $event->sheet->getStyle('A1:B1')->applyFromArray([
                    'font' => [
                        'bold' => true,
                        'size' => 12,
                    ],
                    'alignment' => [
                        'horizontal' => Alignment::HORIZONTAL_CENTER,
                    ],
                ]);

                $event->sheet->getStyle('A:B')->applyFromArray([
                    'alignment' => [
                        'horizontal' => Alignment::HORIZONTAL_LEFT,
                    ],
                ]);

                // Auto-fit columns
                $event->sheet->getColumnDimension('A')->setWidth(30);
                $event->sheet->getColumnDimension('B')->setWidth(15);
            },
        ];
    }
}
