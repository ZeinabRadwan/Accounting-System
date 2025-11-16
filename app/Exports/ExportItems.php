<?php

namespace App\Exports;

use App\Http\Controllers\API\ReportController;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Events\AfterSheet;
use PhpOffice\PhpSpreadsheet\Style\Alignment;

class ExportItems implements FromCollection, WithHeadings, ShouldAutoSize, WithEvents
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
        $response = $reportController->itemsReport(new \Illuminate\Http\Request($this->filters));

        // Handle JsonResponse
        if ($response instanceof \Illuminate\Http\JsonResponse) {
            $data = $response->getData(true);
        } else {
            $data = $response;
        }

        // If product is a Resource object, convert to array
        if (isset($data['product']) && is_object($data['product'])) {
            if (method_exists($data['product'], 'toArray')) {
                $data['product'] = $data['product']->toArray(request());
            } elseif (method_exists($data['product'], 'resolve')) {
                $data['product'] = $data['product']->resolve();
            }
        }

        $formattedData = collect([]);

        // Add product information
        if (isset($data['product'])) {
            $product = $data['product'];
            $formattedData->push([
                'Product Code' => $product['code'] ?? '',
                'Product Name' => $product['name'] ?? '',
                'Category' => $product['category']['name'] ?? '',
                'Sub Category' => $product['subCategory']['name'] ?? '',
                'Available Stock' => $product['availableQty'] ?? 0,
                'Unit' => $product['itemUnit']['code'] ?? '',
            ]);
            $formattedData->push(['', '', '', '', '', '']); // Empty row
        }

        // Add Stock In data
        if (isset($data['stockIns']) && count($data['stockIns']) > 0) {
            $formattedData->push(['STOCK IN', '', '', '', '', '']);
            $formattedData->push(['#', 'Date', 'Quantity', 'Price', 'Type', 'Code', 'Supplier/Client']);

            foreach ($data['stockIns'] as $index => $stockIn) {
                $formattedData->push([
                    $index + 1,
                    $stockIn['date'] ?? '',
                    $stockIn['quantity'] ?? 0,
                    $stockIn['price'] ?? 0,
                    $stockIn['type'] ?? '',
                    $stockIn['code'] ?? '',
                    $stockIn['supplier'] ?? $stockIn['client'] ?? '',
                ]);
            }

            // Add total
            $totalQty = collect($data['stockIns'])->sum('quantity');
            $formattedData->push(['', 'Total Quantity', $totalQty, '', '', '', '']);
            $formattedData->push(['', '', '', '', '', '', '']); // Empty row
        }

        // Add Stock Out data
        if (isset($data['stockOuts']) && count($data['stockOuts']) > 0) {
            $formattedData->push(['STOCK OUT', '', '', '', '', '']);
            $formattedData->push(['#', 'Date', 'Quantity', 'Price', 'Type', 'Code', 'Client']);

            foreach ($data['stockOuts'] as $index => $stockOut) {
                $formattedData->push([
                    $index + 1,
                    $stockOut['date'] ?? '',
                    $stockOut['quantity'] ?? 0,
                    $stockOut['price'] ?? 0,
                    $stockOut['type'] ?? '',
                    $stockOut['code'] ?? '',
                    $stockOut['client'] ?? $stockOut['supplier'] ?? '',
                ]);
            }

            // Add total
            $totalQty = collect($data['stockOuts'])->sum('quantity');
            $formattedData->push(['', 'Total Quantity', $totalQty, '', '', '', '']);
        }

        return $formattedData;
    }

    public function headings(): array
    {
        return [
            'Field',
            'Value 1',
            'Value 2',
            'Value 3',
            'Value 4',
            'Value 5',
            'Value 6',
        ];
    }

    public function registerEvents(): array
    {
        return [
            AfterSheet::class => function (AfterSheet $event) {
                $event->sheet->getStyle('A1:G1')->applyFromArray([
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
