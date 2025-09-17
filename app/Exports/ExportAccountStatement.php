<?php

namespace App\Exports;

use App\Http\Controllers\API\ReportController;
use Maatwebsite\Excel\Events\AfterSheet;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use PhpOffice\PhpSpreadsheet\Style\Alignment;

class ExportAccountStatement implements FromCollection, WithHeadings, ShouldAutoSize, WithEvents
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
        $response = $reportController->accountStatement(new \Illuminate\Http\Request($this->filters));
        
        $formattedData = collect([]);
        
        // Add report header
        $formattedData->push(['ACCOUNT STATEMENT', '', '', '', '', '']);
        $formattedData->push(['', '', '', '', '', '']);
        
        // Add account information
        if (isset($response['chart_of_account'])) {
            $account = $response['chart_of_account'];
            $formattedData->push(['Account Code:', $account['code'] ?? '', '', '', '', '']);
            $formattedData->push(['Account Name:', $account['name'] ?? '', '', '', '', '']);
            $formattedData->push(['Account Type:', $account['type'] ?? '', '', '', '', '']);
        }
        
        if (isset($response['report_account']) && $response['report_account']['id'] !== $response['chart_of_account']['id']) {
            $subAccount = $response['report_account'];
            $formattedData->push(['Sub Account Code:', $subAccount['code'] ?? '', '', '', '', '']);
            $formattedData->push(['Sub Account Name:', $subAccount['name'] ?? '', '', '', '', '']);
            $formattedData->push(['Sub Account Type:', $subAccount['type'] ?? '', '', '', '', '']);
        }
        
        // Add period information
        if (isset($response['filters'])) {
            $filters = $response['filters'];
            if (isset($filters['from_date']) && isset($filters['to_date'])) {
                $formattedData->push(['Period:', $filters['from_date'] . ' to ' . $filters['to_date'], '', '', '', '']);
            }
        }
        $formattedData->push(['', '', '', '', '', '']);
        
        // Add summary
        if (isset($response['summary'])) {
            $summary = $response['summary'];
            $formattedData->push(['SUMMARY', '', '', '', '', '']);
            $formattedData->push(['Opening Balance:', $summary['opening_balance'] ?? 0, $summary['opening_balance_type'] ?? '', '', '', '']);
            $formattedData->push(['Period Debits:', $summary['period_debits'] ?? 0, '', '', '', '']);
            $formattedData->push(['Period Credits:', $summary['period_credits'] ?? 0, '', '', '', '']);
            $formattedData->push(['Closing Balance:', $summary['closing_balance'] ?? 0, $summary['closing_balance_type'] ?? '', '', '', '']);
            $formattedData->push(['', '', '', '', '', '']);
        }
        
        // Add table headers
        $formattedData->push(['#', 'Date', 'Particulars', 'Debit', 'Credit', 'Balance']);
        
        // Add entries data
        if (isset($response['entries']) && is_array($response['entries'])) {
            foreach ($response['entries'] as $index => $entry) {
                $formattedData->push([
                    $index + 1,
                    $entry['date'] ?? '',
                    $entry['particulars'] ?? '',
                    $entry['debit'] ?? 0,
                    $entry['credit'] ?? 0,
                    $entry['balance'] ?? 0,
                ]);
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
