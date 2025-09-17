<?php

namespace App\Exports;

use App\Http\Controllers\API\ReportController;
use Maatwebsite\Excel\Events\AfterSheet;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use PhpOffice\PhpSpreadsheet\Style\Alignment;

class ExportPurchaseSummary implements FromCollection, WithHeadings, ShouldAutoSize, WithEvents
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
        // Use the EXACT same approach as the PDF export
        $requestData = array_merge($this->filters, [
            'page' => 1,
            'per_page' => 100 // Maximum allowed by validation
        ]);
        
        $request = new \Illuminate\Http\Request($requestData);
        
        // Use the EXACT same method as PDF export
        $reportController = new \App\Http\Controllers\API\ReportController();
        $response = $reportController->purchaseSummary($request);
        
        // Handle JsonResponse object
        if ($response instanceof \Illuminate\Http\JsonResponse) {
            $responseData = $response->getData(true);
        } else {
            $responseData = $response;
        }
        
        // Use the EXACT same logic as the PDF export
        if (isset($responseData['success']) && $responseData['success'] && isset($responseData['data'])) {
            $data = $responseData['data'];
        } else {
            $data = $responseData;
        }
        
        $formattedData = collect([]);
        
        // Add filters to data like PDF export does
        $data['filters'] = [
            'from_date' => $request->input('from_date'),
            'to_date' => $request->input('to_date'),
            'fiscal_year_id' => $request->input('fiscal_year_id'),
            'accounting_period_id' => $request->input('accounting_period_id'),
        ];
        
        // Add report header
        $formattedData->push(['PURCHASE SUMMARY REPORT', '', '', '', '', '', '', '']);
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
        
        // Add summary
        if (isset($data['summary'])) {
            $summary = $data['summary'];
            $formattedData->push(['SUMMARY', '', '', '', '', '', '', '']);
            $formattedData->push(['Total Purchases:', $summary['total_purchases'] ?? 0, '', '', '', '', '', '']);
            $formattedData->push(['Total Amount:', number_format($summary['total_amount'] ?? 0, 2), '', '', '', '', '', '']);
            $formattedData->push(['Paid Amount:', number_format($summary['total_paid'] ?? 0, 2), '', '', '', '', '', '']);
            $formattedData->push(['Unpaid Amount:', number_format($summary['total_due'] ?? 0, 2), '', '', '', '', '', '']);
            $formattedData->push(['Total Discount:', number_format($summary['total_discount'] ?? 0, 2), '', '', '', '', '', '']);
            $formattedData->push(['Total Tax:', number_format($summary['total_tax'] ?? 0, 2), '', '', '', '', '', '']);
            $formattedData->push(['Total Returns:', $summary['total_returns'] ?? 0, '', '', '', '', '', '']);
            $formattedData->push(['Net Purchases:', number_format($summary['net_purchases'] ?? 0, 2), '', '', '', '', '', '']);
            $formattedData->push(['Payment Percentage:', ($summary['payment_percentage'] ?? 0) . '%', '', '', '', '', '', '']);
            $formattedData->push(['', '', '', '', '', '', '', '']);
        }
        
        // Add table headers
        $formattedData->push(['#', 'Supplier Name', 'Phone', 'Purchase Count', 'Total Amount', 'Paid Amount', 'Due Amount', 'Discount', 'Tax']);
        
        // Add suppliers data
        if (isset($data['supplier_summary'])) {
            // Convert object to array if needed
            $supplierSummary = $data['supplier_summary'];
            if (is_object($supplierSummary) && method_exists($supplierSummary, 'toArray')) {
                $supplierSummary = $supplierSummary->toArray();
            } elseif (is_object($supplierSummary)) {
                $supplierSummary = (array) $supplierSummary;
            }
            
            if (is_array($supplierSummary) && count($supplierSummary) > 0) {
                foreach ($supplierSummary as $index => $supplier) {
                    // Handle both array and object formats
                    $supplierData = is_array($supplier) ? $supplier : (array) $supplier;
                    
                    $formattedData->push([
                        $index + 1,
                        $supplierData['supplier_name'] ?? '',
                        $supplierData['supplier_phone'] ?? '',
                        $supplierData['purchase_count'] ?? 0,
                        number_format($supplierData['total_amount'] ?? 0, 2),
                        number_format($supplierData['paid_amount'] ?? 0, 2),
                        number_format($supplierData['due_amount'] ?? 0, 2),
                        number_format($supplierData['discount_amount'] ?? 0, 2),
                        number_format($supplierData['tax_amount'] ?? 0, 2),
                    ]);
                }
            } else {
                $formattedData->push(['No supplier data available', '', '', '', '', '', '', '', '']);
            }
        } else {
            $formattedData->push(['No supplier data available', '', '', '', '', '', '', '', '']);
        }
        
        // Add monthly summary if available
        if (isset($data['monthly_summary'])) {
            // Convert object to array if needed
            $monthlySummary = $data['monthly_summary'];
            if (is_object($monthlySummary) && method_exists($monthlySummary, 'toArray')) {
                $monthlySummary = $monthlySummary->toArray();
            } elseif (is_object($monthlySummary)) {
                $monthlySummary = (array) $monthlySummary;
            }
            
            if (is_array($monthlySummary) && count($monthlySummary) > 0) {
                $formattedData->push(['', '', '', '', '', '', '', '', '']);
                $formattedData->push(['MONTHLY SUMMARY', '', '', '', '', '', '', '', '']);
                $formattedData->push(['Month', 'Purchase Count', 'Total Amount', 'Paid Amount', 'Due Amount', '', '', '', '']);
                
                foreach ($monthlySummary as $month) {
                    // Handle both array and object formats
                    $monthData = is_array($month) ? $month : (array) $month;
                    
                    $formattedData->push([
                        $monthData['month_name'] ?? '',
                        $monthData['purchase_count'] ?? 0,
                        number_format($monthData['total_amount'] ?? 0, 2),
                        number_format($monthData['paid_amount'] ?? 0, 2),
                        number_format($monthData['due_amount'] ?? 0, 2),
                        '', '', '', ''
                    ]);
                }
            }
        }
        
        return $formattedData;
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
            'Column I',
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
                $event->sheet->getStyle('A1:I1')->applyFromArray([
                    'font' => [
                        'bold' => true,
                        'size' => 14,
                    ],
                    'alignment' => [
                        'horizontal' => Alignment::HORIZONTAL_CENTER,
                    ],
                ]);
                
                // Style the summary section
                $event->sheet->getStyle('A4:I4')->applyFromArray([
                    'font' => [
                        'bold' => true,
                    ],
                ]);
                
                // Style the table headers
                $event->sheet->getStyle('A11:I11')->applyFromArray([
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
