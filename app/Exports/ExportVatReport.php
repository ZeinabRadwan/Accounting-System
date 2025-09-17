<?php

namespace App\Exports;

use App\Http\Controllers\API\ReportController;
use Maatwebsite\Excel\Events\AfterSheet;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use PhpOffice\PhpSpreadsheet\Style\Alignment;

class ExportVatReport implements FromCollection, WithHeadings, ShouldAutoSize, WithEvents
{
    protected $filters;

    public function __construct($filters = [])
    {
        $this->filters = $filters;
    }

    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        // Use the same approach as the API endpoint
        $requestData = array_merge($this->filters, [
            'page' => 1,
            'per_page' => 100 // Maximum allowed by validation
        ]);
        
        $request = new \Illuminate\Http\Request($requestData);
        
        // Use the same method as the API
        $reportController = new \App\Http\Controllers\API\ReportController();
        $response = $reportController->vatReport($request);
        
        // Handle JsonResponse object
        if ($response instanceof \Illuminate\Http\JsonResponse) {
            $responseData = $response->getData(true);
        } else {
            $responseData = $response;
        }
        
        // Use the same logic as the API
        if (isset($responseData['success']) && $responseData['success'] && isset($responseData['data'])) {
            $data = $responseData['data'];
        } else {
            $data = $responseData;
        }
        
        $formattedData = collect([]);
        
        // Add report header
        $formattedData->push(['VAT REPORT', '', '', '', '', '', '', '']);
        $formattedData->push(['', '', '', '', '', '', '', '']);
        
        // Add period information
        if (isset($data['filters'])) {
            $filters = $data['filters'];
            if (isset($filters['from_date']) && isset($filters['to_date'])) {
                $formattedData->push(['Period:', $filters['from_date'] . ' to ' . $filters['to_date'], '', '', '', '', '', '']);
            } elseif (isset($filters['fiscal_year_id'])) {
                $formattedData->push(['Fiscal Year ID:', $filters['fiscal_year_id'], '', '', '', '', '', '']);
            } elseif (isset($filters['accounting_period_id'])) {
                $formattedData->push(['Accounting Period ID:', $filters['accounting_period_id'], '', '', '', '', '', '']);
            }
        }
        $formattedData->push(['', '', '', '', '', '', '', '']);
        
        // Add VAT Summary - Sales
        if (isset($data['summary']) && is_array($data['summary']) && count($data['summary']) > 0) {
            $formattedData->push(['SALES VAT SUMMARY', '', '', '', '', '', '', '']);
            $formattedData->push(['VAT Rate', 'Rate %', 'Total Sales', 'Sales VAT', 'Journal VAT', 'Total Sales VAT', '', '']);
            
            $totalSalesAmount = 0;
            $totalSalesVat = 0;
            $totalJournalVat = 0;
            
            foreach ($data['summary'] as $summary) {
                $salesAmount = $this->calculateAmountBeforeVat($summary['sales_vat'] ?? 0, $summary['vat_rate_percentage'] ?? 0);
                $totalSalesAmount += $salesAmount;
                $totalSalesVat += $summary['sales_vat'] ?? 0;
                $totalJournalVat += $summary['journal_vat'] ?? 0;
                
                $formattedData->push([
                    $summary['vat_rate_name'] ?? '',
                    ($summary['vat_rate_percentage'] ?? 0) . '%',
                    number_format($salesAmount, 2),
                    number_format($summary['sales_vat'] ?? 0, 2),
                    number_format($summary['journal_vat'] ?? 0, 2),
                    number_format(($summary['sales_vat'] ?? 0) + ($summary['journal_vat'] ?? 0), 2),
                    '',
                    ''
                ]);
            }
            
            $formattedData->push([
                'TOTAL',
                '',
                number_format($totalSalesAmount, 2),
                number_format($totalSalesVat, 2),
                number_format($totalJournalVat, 2),
                number_format($totalSalesVat + $totalJournalVat, 2),
                '',
                ''
            ]);
            $formattedData->push(['', '', '', '', '', '', '', '']);
        }
        
        // Add VAT Summary - Purchase
        if (isset($data['summary']) && is_array($data['summary']) && count($data['summary']) > 0) {
            $formattedData->push(['PURCHASE VAT SUMMARY', '', '', '', '', '', '', '']);
            $formattedData->push(['VAT Rate', 'Rate %', 'Total Purchases', 'Purchase VAT', 'Journal VAT', 'Total Purchase VAT', '', '']);
            
            $totalPurchaseAmount = 0;
            $totalPurchaseVat = 0;
            $totalJournalVat = 0;
            
            foreach ($data['summary'] as $summary) {
                $purchaseAmount = $this->calculateAmountBeforeVat($summary['purchase_vat'] ?? 0, $summary['vat_rate_percentage'] ?? 0);
                $totalPurchaseAmount += $purchaseAmount;
                $totalPurchaseVat += $summary['purchase_vat'] ?? 0;
                $totalJournalVat += $summary['journal_vat'] ?? 0;
                
                $formattedData->push([
                    $summary['vat_rate_name'] ?? '',
                    ($summary['vat_rate_percentage'] ?? 0) . '%',
                    number_format($purchaseAmount, 2),
                    number_format($summary['purchase_vat'] ?? 0, 2),
                    number_format($summary['journal_vat'] ?? 0, 2),
                    number_format(($summary['purchase_vat'] ?? 0) + ($summary['journal_vat'] ?? 0), 2),
                    '',
                    ''
                ]);
            }
            
            $formattedData->push([
                'TOTAL',
                '',
                number_format($totalPurchaseAmount, 2),
                number_format($totalPurchaseVat, 2),
                number_format($totalJournalVat, 2),
                number_format($totalPurchaseVat + $totalJournalVat, 2),
                '',
                ''
            ]);
            $formattedData->push(['', '', '', '', '', '', '', '']);
        }
        
        // Add VAT Transactions
        if (isset($data['transactions']) && is_array($data['transactions']) && count($data['transactions']) > 0) {
            $formattedData->push(['VAT TRANSACTIONS', '', '', '', '', '', '', '']);
            $formattedData->push(['Date', 'Reference', 'Client/Supplier', 'Type', 'Source', 'VAT Amount', '', '']);
            
            foreach ($data['transactions'] as $transaction) {
                $formattedData->push([
                    $transaction['date'] ?? '',
                    $transaction['reference'] ?? '',
                    $transaction['client_supplier'] ?? '',
                    $transaction['type'] ?? '',
                    $transaction['source'] ?? '',
                    number_format($transaction['vat_amount'] ?? 0, 2),
                    '',
                    ''
                ]);
            }
        }
        
        return $formattedData;
    }

    /**
     * Calculate amount before VAT
     */
    private function calculateAmountBeforeVat($vatAmount, $vatRatePercentage)
    {
        $vatAmountNum = (float) ($vatAmount ?? 0);
        $vatRate = (float) ($vatRatePercentage ?? 0);
        
        // Handle edge cases
        if ($vatAmountNum === 0) {
            return 0;
        }
        // If no VAT rate, return the amount as-is (to mirror frontend behavior)
        if ($vatRate <= 0) {
            return $vatAmountNum;
        }
        if (is_nan($vatAmountNum) || is_nan($vatRate)) {
            return 0;
        }

        $denominator = ($vatRate / 100.0);
        if ($denominator <= 0) {
            return $vatAmountNum;
        }

        $result = $vatAmountNum / $denominator;
        return is_nan($result) ? 0 : $result;
    }

    /**
     * @return array
     */
    public function headings(): array
    {
        return [
            'Column A',
            'Column B',
            'Column C',
            'Column D',
            'Column E',
            'Column F',
            'Column G',
            'Column H',
        ];
    }

    /**
     * @return array
     */
    public function registerEvents(): array
    {
        return [
            AfterSheet::class => function (AfterSheet $event) {
                // Style the report header
                $event->sheet->getStyle('A1:H1')->applyFromArray([
                    'font' => [
                        'bold' => true,
                        'size' => 14,
                    ],
                    'alignment' => [
                        'horizontal' => Alignment::HORIZONTAL_CENTER,
                    ],
                ]);
                
                // Style the section headers
                $event->sheet->getStyle('A4:H4')->applyFromArray([
                    'font' => [
                        'bold' => true,
                    ],
                ]);
                
                // Style the table headers
                $event->sheet->getStyle('A6:H6')->applyFromArray([
                    'font' => [
                        'bold' => true,
                    ],
                    'alignment' => [
                        'horizontal' => Alignment::HORIZONTAL_CENTER,
                    ],
                ]);
            },
        ];
    }
}
