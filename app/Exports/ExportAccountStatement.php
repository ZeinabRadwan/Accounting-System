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

        // Check if the response has the expected structure
        if (isset($response['success']) && $response['success'] && isset($response['data'])) {
            $data = $response['data'];
        } else {
            // If the response doesn't have the expected structure, use it directly
            $data = $response;
        }

        $formattedData = collect([]);

        // Add report header
        $formattedData->push(['ACCOUNT STATEMENT', '', '', '', '', '']);
        $formattedData->push(['', '', '', '', '', '']);

        // Add account information
        if (isset($data['chart_of_account'])) {
            $account = $data['chart_of_account'];
            $formattedData->push(['Account Code:', $account['code'] ?? '', '', '', '', '']);
            $formattedData->push(['Account Name:', $account['name'] ?? '', '', '', '', '']);
            $formattedData->push(['Account Type:', $account['type'] ?? '', '', '', '', '']);
        }

        if (isset($data['report_account']) && $data['report_account']['id'] !== $data['chart_of_account']['id']) {
            $subAccount = $data['report_account'];
            $formattedData->push(['Sub Account Code:', $subAccount['code'] ?? '', '', '', '', '']);
            $formattedData->push(['Sub Account Name:', $subAccount['name'] ?? '', '', '', '', '']);
            $formattedData->push(['Sub Account Type:', $subAccount['type'] ?? '', '', '', '', '']);
        }

        // Add period information
        if (isset($data['filters'])) {
            $filters = $data['filters'];
            if (isset($filters['from_date']) && isset($filters['to_date'])) {
                $formattedData->push(['Period:', $filters['from_date'] . ' to ' . $filters['to_date'], '', '', '', '']);
            }
        }
        $formattedData->push(['', '', '', '', '', '']);

        // Add summary
        if (isset($data['summary'])) {
            $summary = $data['summary'];
            $formattedData->push(['SUMMARY', '', '', '', '', '']);
            $formattedData->push(['Opening Balance:', $summary['opening_balance'] ?? 0, $summary['opening_balance_type'] ?? '', '', '', '']);
            $formattedData->push(['Period Debits:', $summary['period_debits'] ?? 0, '', '', '', '']);
            $formattedData->push(['Period Credits:', $summary['period_credits'] ?? 0, '', '', '', '']);
            $formattedData->push(['Closing Balance:', $summary['closing_balance'] ?? 0, $summary['closing_balance_type'] ?? '', '', '', '']);
            $formattedData->push(['', '', '', '', '', '']);
        }

        // Add table headers
        $formattedData->push(['#', 'Date', 'Analytical Account', 'Description', 'Debit', 'Credit', 'Balance']);

        // Add entries data
        if (isset($data['entries']) && is_array($data['entries'])) {
            $formattedData->push([
                $index + 1,
                $entry['entry_date'] ?? $entry['date'] ?? '',
                $entry['analytical_account_name'] ?? '-',
                $entry['description'] ?? $entry['particulars'] ?? '',
                $entry['debit_amount'] ?? $entry['debit'] ?? 0,
                $entry['credit_amount'] ?? $entry['credit'] ?? 0,
                $entry['running_balance'] ?? $entry['balance'] ?? 0,
            ]);
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
            'Field 7',
        ];
    }

    /**
     * @return array
     */
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
