<?php

namespace App\Exports;

use App\Http\Controllers\API\ReportController;
use Maatwebsite\Excel\Events\AfterSheet;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use PhpOffice\PhpSpreadsheet\Style\Alignment;

class ExportProfitLoss implements FromCollection, WithHeadings, ShouldAutoSize, WithEvents
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
        $reportController = new ReportController();
        $response = $reportController->profitLossReport(new \Illuminate\Http\Request($this->filters));
        
        if (!$response) {
            return collect([]);
        }
        
        $type = $response['type'];
        $reportData = $response['reportData'];
        
        $formattedData = collect();
        
        if ($type == 1) {
            // Gross Profit/Loss Report
            $formattedData->push([
                'Item Code' => '',
                'Item Name' => '',
                'Avg. Purchase Price' => '',
                'Avg. Selling Price' => '',
                'Sold Qty' => '',
                'Profit/Loss' => '',
            ]);
            
            $totalQty = 0;
            $totalProfitOrLoss = 0;
            $totalPurchased = 0;
            $totalSold = 0;
            
            foreach ($reportData as $item) {
                $formattedData->push([
                    'Item Code' => $item['itemCode'],
                    'Item Name' => $item['itemName'],
                    'Avg. Purchase Price' => number_format($item['avgPurchasePrice'], 2),
                    'Avg. Selling Price' => number_format($item['avgSalePrice'], 2),
                    'Sold Qty' => $item['currentQty'],
                    'Profit/Loss' => number_format($item['profitOrLoss'], 2),
                ]);
                
                $totalQty += $item['currentQty'];
                $totalProfitOrLoss += $item['profitOrLoss'];
                $totalPurchased += $item['avgPurchasePrice'] * $item['currentQty'];
                $totalSold += $item['avgSalePrice'] * $item['currentQty'];
            }
            
            // Add totals
            $formattedData->push([
                'Item Code' => '',
                'Item Name' => 'TOTAL',
                'Avg. Purchase Price' => '',
                'Avg. Selling Price' => '',
                'Sold Qty' => $totalQty,
                'Profit/Loss' => number_format($totalProfitOrLoss, 2),
            ]);
            
            // Add summary
            $formattedData->push(['', '', '', '', '', '']);
            $formattedData->push(['', 'Total Sales (Average)', '', '', '', number_format($totalSold, 2)]);
            $formattedData->push(['', 'Total Purchase (Average)', '', '', '', number_format($totalPurchased, 2)]);
            $formattedData->push(['', 'Profit/Loss', '', '', '', number_format($totalProfitOrLoss, 2)]);
            
        } else {
            // Net Profit/Loss Report
            $data = $reportData[0];
            
            $formattedData->push([
                'Description' => 'INCOME STATEMENT',
                'Amount' => '',
                'Total' => '',
            ]);
            
            $formattedData->push([
                'Description' => 'From ' . $this->filters['fromDate'] . ' To ' . $this->filters['toDate'],
                'Amount' => '',
                'Total' => '',
            ]);
            
            $formattedData->push(['', '', '']);
            
            $formattedData->push([
                'Description' => 'Total Sales',
                'Amount' => '',
                'Total' => number_format($data['totalSales'], 2),
            ]);
            
            $formattedData->push(['', '', '']);
            
            $formattedData->push([
                'Description' => 'Cost of Goods Sold',
                'Amount' => '',
                'Total' => '(' . number_format($data['costOfGoodsSold'], 2) . ')',
            ]);
            
            $formattedData->push(['', '', '']);
            
            $formattedData->push([
                'Description' => 'Inventory Adjustment',
                'Amount' => '',
                'Total' => '',
            ]);
            
            $formattedData->push([
                'Description' => 'Positive Adjusted',
                'Amount' => number_format($data['posAdjustment'], 2),
                'Total' => '',
            ]);
            
            $formattedData->push([
                'Description' => 'Negative Adjusted',
                'Amount' => '(' . number_format($data['negAdjustment'], 2) . ')',
                'Total' => '',
            ]);
            
            $formattedData->push([
                'Description' => 'Total Adjusted',
                'Amount' => '',
                'Total' => number_format($data['totalAdjustment'], 2),
            ]);
            
            $formattedData->push([
                'Description' => 'Total Sell Return',
                'Amount' => '',
                'Total' => number_format($data['totalSalesReturn'], 2),
            ]);
            
            $formattedData->push([
                'Description' => $data['grossProfitOrLoss'] >= 0 ? 'Gross Profit' : 'Gross Loss',
                'Amount' => '',
                'Total' => number_format($data['grossProfitOrLoss'], 2),
            ]);
            
            $formattedData->push(['', '', '']);
            
            $formattedData->push([
                'Description' => 'Operating Expenses',
                'Amount' => '',
                'Total' => '',
            ]);
            
            $formattedData->push([
                'Description' => 'Salaries',
                'Amount' => number_format($data['payrollAmount'], 2),
                'Total' => '',
            ]);
            
            $formattedData->push([
                'Description' => 'General Expenses',
                'Amount' => number_format($data['expenseAmount'], 2),
                'Total' => '',
            ]);
            
            $formattedData->push([
                'Description' => 'Loan Interest',
                'Amount' => number_format($data['loanInterest'], 2),
                'Total' => '',
            ]);
            
            $formattedData->push([
                'Description' => 'Asset Depreciation',
                'Amount' => number_format($data['assetDepriciation'], 2),
                'Total' => '',
            ]);
            
            $formattedData->push([
                'Description' => 'Total Expense',
                'Amount' => '',
                'Total' => '(' . number_format($data['totalExpense'], 2) . ')',
            ]);
            
            $formattedData->push([
                'Description' => $data['netProfitOrLoss'] >= 0 ? 'Net Profit' : 'Net Loss',
                'Amount' => '',
                'Total' => number_format($data['netProfitOrLoss'], 2),
            ]);
        }
        
        return $formattedData;
    }

    /**
     * @return array
     */
    public function headings(): array
    {
        if (isset($this->filters['reportType']) && $this->filters['reportType'] == 1) {
            return [
                'Item Code',
                'Item Name',
                'Avg. Purchase Price',
                'Avg. Selling Price',
                'Sold Qty',
                'Profit/Loss',
            ];
        } else {
            return [
                'Description',
                'Amount',
                'Total',
            ];
        }
    }

    /**
     * @return array
     */
    public function registerEvents(): array
    {
        return [
            AfterSheet::class => function (AfterSheet $event) {
                $event->sheet->getStyle('A1:F1')->applyFromArray([
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