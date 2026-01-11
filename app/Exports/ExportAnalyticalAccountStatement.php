<?php

namespace App\Exports;

use App\Http\Controllers\API\ReportController;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Events\AfterSheet;
use PhpOffice\PhpSpreadsheet\Style\Alignment;

class ExportAnalyticalAccountStatement implements FromCollection, ShouldAutoSize, WithEvents, WithHeadings
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
        $response = $reportController->analyticalAccountStatementForPrint(new \Illuminate\Http\Request($this->filters));

        // Check if the response has the expected structure
        if (isset($response['success']) && $response['success'] && isset($response['data'])) {
            $data = $response['data'];
        } else {
            // If the response doesn't have the expected structure, use it directly
            $data = $response;
        }

        $formattedData = collect([]);

        // Add report header
        $formattedData->push(['ANALYTICAL ACCOUNT STATEMENT', '', '', '', '', '']);
        $formattedData->push(['', '', '', '', '', '']);

        // Add analytical account information
        if (isset($data['analytical_account'])) {
            $account = $data['analytical_account'];
            $formattedData->push(['Analytical Account Code:', $account['code'] ?? '', '', '', '', '']);
            $formattedData->push(['Analytical Account Name:', $account['name'] ?? '', '', '', '', '']);
            $formattedData->push(['Analytical Account Type:', $account['type'] ?? '', '', '', '', '']);
        }

        // Add period information
        if (isset($data['filters'])) {
            $filters = $data['filters'];
            if (isset($filters['from_date']) && isset($filters['to_date'])) {
                $formattedData->push(['Period:', $filters['from_date'].' to '.$filters['to_date'], '', '', '', '']);
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
        $formattedData->push(['#', 'Date', 'Particulars', 'Debit', 'Credit', 'Balance']);

        // Add entries data
        if (isset($data['entries']) && is_array($data['entries'])) {
            foreach ($data['entries'] as $index => $entry) {
                $formattedData->push([
                    $index + 1,
                    $entry['entry_date'] ?? $entry['date'] ?? '',
                    $entry['description'] ?? $entry['particulars'] ?? '',
                    $entry['debit_amount'] ?? $entry['debit'] ?? 0,
                    $entry['credit_amount'] ?? $entry['credit'] ?? 0,
                    $entry['running_balance'] ?? $entry['balance'] ?? 0,
                ]);
            }
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
        ];
    }

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
