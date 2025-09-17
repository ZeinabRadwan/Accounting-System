<?php

namespace App\Exports;

use App\Http\Controllers\API\ReportController;
use Maatwebsite\Excel\Events\AfterSheet;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use PhpOffice\PhpSpreadsheet\Style\Alignment;

class ExportExpensesReport implements FromCollection, WithHeadings, ShouldAutoSize, WithEvents
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
        $data = $reportController->expenseReport(new \Illuminate\Http\Request($this->filters));
        
        $formattedData = collect([]);
        
        // Add report header
        $formattedData->push(['EXPENSE REPORT', '', '', '', '', '', '', '']);
        $formattedData->push(['', '', '', '', '', '', '', '']);
        
        // Add filter information
        if (isset($this->filters['category']) && isset($this->filters['category']['name'])) {
            $formattedData->push(['Category:', $this->filters['category']['name'], '', '', '', '', '', '']);
        }
        if (isset($this->filters['subCategory']) && isset($this->filters['subCategory']['name'])) {
            $formattedData->push(['Sub Category:', $this->filters['subCategory']['name'], '', '', '', '', '', '']);
        }
        if (isset($this->filters['fromDate']) && isset($this->filters['toDate'])) {
            $formattedData->push(['Date Range:', $this->filters['fromDate'] . ' to ' . $this->filters['toDate'], '', '', '', '', '', '']);
        }
        $formattedData->push(['', '', '', '', '', '', '', '']);
        
        // Add table headers
        $formattedData->push(['#', 'Date', 'Expense Reason', 'Category', 'Sub Category', 'Amount', 'Account', 'Status', 'Created By']);
        
        // Add expense data
        $totalAmount = 0;
        
        foreach ($data as $index => $expense) {
            $formattedData->push([
                $index + 1,
                $expense['date'] ?? '',
                $expense['reason'] ?? '',
                $expense['category']['name'] ?? '',
                $expense['subCategory']['name'] ?? '',
                $expense['transaction']['amount'] ?? 0,
                $expense['account']['accountNumber'] ?? '',
                $expense['status'] == 1 ? 'Active' : 'Inactive',
                $expense['createdBy'] ?? '',
            ]);
            
            $totalAmount += $expense['transaction']['amount'] ?? 0;
        }
        
        // Add total
        $formattedData->push(['', '', '', '', 'Total', $totalAmount, '', '', '']);
        
        return $formattedData;
    }

    /**
     * @return array
     */
    public function headings(): array
    {
        return [
            'Field 1',
            'Field 2',
            'Field 3',
            'Field 4',
            'Field 5',
            'Field 6',
            'Field 7',
            'Field 8',
            'Field 9',
        ];
    }

    /**
     * @return array
     */
    public function registerEvents(): array
    {
        return [
            AfterSheet::class => function (AfterSheet $event) {
                $event->sheet->getStyle('A1:I1')->applyFromArray([
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
