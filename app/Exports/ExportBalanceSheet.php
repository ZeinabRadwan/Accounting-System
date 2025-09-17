<?php

namespace App\Exports;

use App\Http\Controllers\API\ReportController;
use Maatwebsite\Excel\Events\AfterSheet;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use PhpOffice\PhpSpreadsheet\Style\Alignment;

class ExportBalanceSheet implements FromCollection, WithHeadings, ShouldAutoSize, WithEvents
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
        $response = $reportController->balanceSheet(new \Illuminate\Http\Request($this->filters));
        
        if (!$response['success']) {
            return collect([]);
        }
        
        $data = $response['data'];
        $formattedData = collect([]);
        
        // Add header row
        $formattedData->push(['BALANCE SHEET', '', '', '']);
        $formattedData->push(['', '', '', '']);
        
        // Add period information if available
        if (isset($data['filters']['from_date']) && isset($data['filters']['to_date'])) {
            $formattedData->push(['Period:', $data['filters']['from_date'] . ' to ' . $data['filters']['to_date'], '', '']);
        }
        $formattedData->push(['', '', '', '']);
        
        // Add Assets section header
        $formattedData->push(['ASSETS', '', 'LIABILITIES & EQUITY', '']);
        $formattedData->push(['', '', '', '']);
        
        // Add Assets
        if (isset($data['accounts']['assets'])) {
            foreach ($data['accounts']['assets'] as $account) {
                $formattedData->push([
                    $account['name'] . ' (' . $account['code'] . ')',
                    number_format($account['absolute_balance'], 2),
                    '',
                    ''
                ]);
            }
        }
        
        // Add Liabilities
        if (isset($data['accounts']['liabilities'])) {
            foreach ($data['accounts']['liabilities'] as $account) {
                $formattedData->push([
                    '',
                    '',
                    $account['name'] . ' (' . $account['code'] . ')',
                    number_format($account['absolute_balance'], 2)
                ]);
            }
        }
        
        // Add Equity
        if (isset($data['accounts']['equity'])) {
            foreach ($data['accounts']['equity'] as $account) {
                $formattedData->push([
                    '',
                    '',
                    $account['name'] . ' (' . $account['code'] . ')',
                    number_format($account['absolute_balance'], 2)
                ]);
            }
        }
        
        // Add Net Income if not zero
        if (isset($data['totals']['net_income']) && $data['totals']['net_income'] != 0) {
            $formattedData->push([
                '',
                '',
                'Net Income',
                number_format($data['totals']['net_income'], 2)
            ]);
        }
        
        $formattedData->push(['', '', '', '']);
        
        // Add totals
        $formattedData->push([
            'TOTAL ASSETS',
            number_format($data['totals']['total_assets'], 2),
            'TOTAL LIABILITIES & EQUITY',
            number_format($data['totals']['total_liabilities_and_equity'], 2)
        ]);
        
        return $formattedData;
    }

    /**
     * @return array
     */
    public function headings(): array
    {
        return [
            'Description',
            'Amount',
            'Description',
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
                $event->sheet->getStyle('A1:D1')->applyFromArray([
                    'font' => [
                        'bold' => true,
                        'size' => 12,
                    ],
                    'alignment' => [
                        'horizontal' => Alignment::HORIZONTAL_CENTER,
                    ],
                ]);

                $event->sheet->getStyle('A:D')->applyFromArray([
                    'alignment' => [
                        'horizontal' => Alignment::HORIZONTAL_LEFT,
                    ],
                ]);

                // Auto-fit columns
                $event->sheet->getColumnDimension('A')->setWidth(30);
                $event->sheet->getColumnDimension('B')->setWidth(15);
                $event->sheet->getColumnDimension('C')->setWidth(30);
                $event->sheet->getColumnDimension('D')->setWidth(15);
            },
        ];
    }
}

