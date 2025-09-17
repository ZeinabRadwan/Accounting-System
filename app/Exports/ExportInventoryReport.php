<?php

namespace App\Exports;

use App\Http\Controllers\API\ReportController;
use Maatwebsite\Excel\Events\AfterSheet;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use PhpOffice\PhpSpreadsheet\Style\Alignment;

class ExportInventoryReport implements FromCollection, WithHeadings, ShouldAutoSize, WithEvents
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
        $data = $reportController->inventoryReport(new \Illuminate\Http\Request($this->filters));
        
        $formattedData = collect([]);
        
        // Add report header
        $formattedData->push(['INVENTORY REPORT', '', '', '', '', '']);
        $formattedData->push(['', '', '', '', '', '']);
        
        // Add filter information
        if (isset($this->filters['category']) && isset($this->filters['category']['name'])) {
            $formattedData->push(['Category:', $this->filters['category']['name'], '', '', '', '']);
        }
        if (isset($this->filters['subCategory']) && isset($this->filters['subCategory']['name'])) {
            $formattedData->push(['Sub Category:', $this->filters['subCategory']['name'], '', '', '', '']);
        }
        if (isset($this->filters['itemName']) && isset($this->filters['itemName']['name'])) {
            $formattedData->push(['Item Name:', $this->filters['itemName']['name'], '', '', '', '']);
        }
        if (isset($this->filters['fromDate']) && isset($this->filters['toDate'])) {
            $formattedData->push(['Date Range:', $this->filters['fromDate'] . ' to ' . $this->filters['toDate'], '', '', '', '']);
        }
        $formattedData->push(['', '', '', '', '', '']);
        
        // Add table headers
        $formattedData->push(['#', 'Code', 'Name', 'Stock In', 'Stock Out', 'Stock in Hand']);
        
        // Add inventory data
        $totalStockIn = 0;
        $totalStockOut = 0;
        $totalStockInHand = 0;
        
        foreach ($data as $index => $item) {
            $formattedData->push([
                $index + 1,
                $item['productCode'] ?? '',
                $item['productName'] ?? '',
                $item['stockIn'] ?? 0,
                $item['stockOut'] ?? 0,
                $item['availableStock'] ?? 0,
            ]);
            
            $totalStockIn += $item['stockIn'] ?? 0;
            $totalStockOut += $item['stockOut'] ?? 0;
            $totalStockInHand += $item['availableStock'] ?? 0;
        }
        
        // Add totals
        $formattedData->push(['', '', 'Total', $totalStockIn, $totalStockOut, $totalStockInHand]);
        
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
        ];
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
