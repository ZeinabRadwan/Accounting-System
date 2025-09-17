<?php

namespace App\Exports;

use App\Http\Controllers\API\ReportController;
use Maatwebsite\Excel\Events\AfterSheet;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use PhpOffice\PhpSpreadsheet\Style\Alignment;

class ExportGroupAccountStatement implements FromCollection, WithHeadings, ShouldAutoSize, WithEvents
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
        $response = $reportController->groupAccountStatement(new \Illuminate\Http\Request($this->filters));
        
        // Check if the response has the expected structure
        if (isset($response['success']) && $response['success'] && isset($response['data'])) {
            $data = $response['data'];
        } else {
            // If the response doesn't have the expected structure, use it directly
            $data = $response;
        }
        
        $formattedData = collect([]);
        
        // Add report header
        $formattedData->push(['GROUP ACCOUNT STATEMENT', '', '', '', '', '']);
        $formattedData->push(['', '', '', '', '', '']);
        
        // Add account information
        if (isset($data['chart_of_accounts']) && is_array($data['chart_of_accounts'])) {
            $formattedData->push(['Selected Accounts:', '', '', '', '', '']);
            foreach ($data['chart_of_accounts'] as $account) {
                $formattedData->push(['', $account['code'] ?? '', $account['name'] ?? '', $account['type'] ?? '', '', '']);
            }
            $formattedData->push(['', '', '', '', '', '']);
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
            $formattedData->push(['Total Opening Balance:', $summary['total_opening_balance'] ?? 0, $summary['total_opening_balance_type'] ?? '', '', '', '']);
            $formattedData->push(['Total Period Debits:', $summary['total_period_debits'] ?? 0, '', '', '', '']);
            $formattedData->push(['Total Period Credits:', $summary['total_period_credits'] ?? 0, '', '', '', '']);
            $formattedData->push(['Total Closing Balance:', $summary['total_closing_balance'] ?? 0, $summary['total_closing_balance_type'] ?? '', '', '', '']);
            $formattedData->push(['', '', '', '', '', '']);
        }
        
        // Add table headers
        $formattedData->push(['#', 'Date', 'Account', 'Particulars', 'Debit', 'Credit']);
        
        // Add entries data
        if (isset($data['entries']) && is_array($data['entries'])) {
            foreach ($data['entries'] as $index => $entry) {
                if (isset($entry['accounts']) && is_array($entry['accounts'])) {
                    foreach ($entry['accounts'] as $accountEntry) {
                        $formattedData->push([
                            $index + 1,
                            $entry['entry_date'] ?? '',
                            $accountEntry['code'] ?? '',
                            $entry['description'] ?? '',
                            $accountEntry['debit'] ?? 0,
                            $accountEntry['credit'] ?? 0,
                        ]);
                    }
                } else {
                    $formattedData->push([
                        $index + 1,
                        $entry['entry_date'] ?? '',
                        $entry['account_code'] ?? '',
                        $entry['description'] ?? '',
                        $entry['debit_amount'] ?? 0,
                        $entry['credit_amount'] ?? 0,
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
