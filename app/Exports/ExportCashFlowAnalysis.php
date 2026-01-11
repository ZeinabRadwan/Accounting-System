<?php

namespace App\Exports;

use App\Http\Controllers\API\ReportController;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Events\AfterSheet;
use PhpOffice\PhpSpreadsheet\Style\Alignment;

class ExportCashFlowAnalysis implements FromCollection, ShouldAutoSize, WithEvents, WithHeadings
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
        $reportController = new ReportController;
        $reportData = $reportController->cashFlowAnalysisForPrint(new \Illuminate\Http\Request($this->filters));

        if (! $reportData || ! isset($reportData['data'])) {
            return collect([]);
        }

        $data = $reportData['data'];
        $summary = $reportData['summary'];

        $formattedData = collect([]);

        // Add report header
        $formattedData->push(['CASH FLOW ANALYSIS', '', '', '', '', '', '']);
        $formattedData->push(['', '', '', '', '', '', '']);

        // Add period information
        if (isset($this->filters['from_date']) && isset($this->filters['to_date'])) {
            $formattedData->push(['Period:', $this->filters['from_date'].' to '.$this->filters['to_date'], '', '', '', '', '']);
        }
        $formattedData->push(['', '', '', '', '', '', '']);

        // Add summary
        if (isset($summary)) {
            $formattedData->push(['SUMMARY', '', '', '', '', '', '']);
            $formattedData->push(['Opening Balance:', $summary['opening_balance'] ?? 0, '', '', '', '', '']);
            $formattedData->push(['Total Inflows:', $summary['total_inflows'] ?? 0, '', '', '', '', '']);
            $formattedData->push(['Total Outflows:', $summary['total_outflows'] ?? 0, '', '', '', '', '']);
            $formattedData->push(['Net Cash Flow:', $summary['net_cash_flow'] ?? 0, '', '', '', '', '']);
            $formattedData->push(['Closing Balance:', $summary['closing_balance'] ?? 0, '', '', '', '', '']);
            $formattedData->push(['', '', '', '', '', '', '']);
        }

        // Add table headers
        $formattedData->push(['Analytical Account', 'Inflows', 'Outflows', 'Net Cash Flow', 'Inflow Transactions', 'Outflow Transactions', 'Total Transactions']);

        // Add entries data
        if (is_array($data)) {
            foreach ($data as $item) {
                $analyticalAccount = '';
                if (isset($item['analytical_account'])) {
                    $analyticalAccount = ($item['analytical_account']['code'] ?? '').' - '.($item['analytical_account']['name'] ?? '');
                }

                $formattedData->push([
                    $analyticalAccount,
                    $item['inflows'] ?? 0,
                    $item['outflows'] ?? 0,
                    $item['net_cash_flow'] ?? 0,
                    $item['inflow_transactions'] ?? 0,
                    $item['outflow_transactions'] ?? 0,
                    $item['total_transactions'] ?? 0,
                ]);
            }
        }

        // Add totals row
        if (count($data) > 0) {
            $formattedData->push(['', '', '', '', '', '', '']);
            $formattedData->push([
                'TOTAL',
                $summary['total_inflows'] ?? 0,
                $summary['total_outflows'] ?? 0,
                $summary['net_cash_flow'] ?? 0,
                array_sum(array_column($data, 'inflow_transactions')),
                array_sum(array_column($data, 'outflow_transactions')),
                array_sum(array_column($data, 'total_transactions')),
            ]);
        }

        return $formattedData;
    }

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
        ];
    }

    public function registerEvents(): array
    {
        return [
            AfterSheet::class => function (AfterSheet $event) {
                $sheet = $event->sheet->getDelegate();

                // Style the header row
                $sheet->getStyle('A1:G1')->applyFromArray([
                    'font' => [
                        'bold' => true,
                        'size' => 14,
                    ],
                    'alignment' => [
                        'horizontal' => Alignment::HORIZONTAL_CENTER,
                    ],
                ]);

                // Find the header row (first row with "Analytical Account")
                $headerRow = null;
                foreach ($sheet->getRowIterator() as $row) {
                    $cellValue = $sheet->getCell('A'.$row->getRowIndex())->getValue();
                    if ($cellValue === 'Analytical Account') {
                        $headerRow = $row->getRowIndex();
                        break;
                    }
                }

                if ($headerRow) {
                    // Style the table header
                    $sheet->getStyle('A'.$headerRow.':G'.$headerRow)->applyFromArray([
                        'font' => [
                            'bold' => true,
                        ],
                        'fill' => [
                            'fillType' => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID,
                            'startColor' => [
                                'rgb' => 'E0E0E0',
                            ],
                        ],
                    ]);
                }
            },
        ];
    }
}
