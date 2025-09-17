<?php

namespace App\Exports;

use App\Http\Controllers\API\ReportController;
use Maatwebsite\Excel\Events\AfterSheet;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use PhpOffice\PhpSpreadsheet\Style\Alignment;

class ExportInvoiceSummary implements FromCollection, WithHeadings, ShouldAutoSize, WithEvents
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
        $response = $reportController->invoiceSummary(new \Illuminate\Http\Request($this->filters));
        
        // Check if the response has the expected structure
        if (isset($response['success']) && $response['success'] && isset($response['data'])) {
            $data = $response['data'];
        } else {
            // If the response doesn't have the expected structure, use it directly
            $data = $response;
        }
        
        $formattedData = collect([]);
        
        // Add report header
        $formattedData->push(['INVOICE SUMMARY REPORT', '', '', '', '', '']);
        $formattedData->push(['', '', '', '', '', '']);
        
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
            $formattedData->push(['Total Invoices:', $summary['total_invoices'] ?? 0, '', '', '', '']);
            $formattedData->push(['Total Amount:', $summary['total_amount'] ?? 0, '', '', '', '']);
            $formattedData->push(['Paid Amount:', $summary['paid_amount'] ?? 0, '', '', '', '']);
            $formattedData->push(['Unpaid Amount:', $summary['unpaid_amount'] ?? 0, '', '', '', '']);
            $formattedData->push(['', '', '', '', '', '']);
        }
        
        // Add table headers
        $formattedData->push(['#', 'Client', 'Invoice #', 'Date', 'Amount', 'Paid', 'Balance']);
        
        // Add clients data
        if (isset($data['client_summary']) && is_array($data['client_summary'])) {
            foreach ($data['client_summary'] as $index => $client) {
                $formattedData->push([
                    $index + 1,
                    $client->client_name ?? $client['client_name'] ?? '',
                    $client->invoice_count ?? $client['invoice_count'] ?? 0,
                    $client->total_amount ?? $client['total_amount'] ?? 0,
                    $client->paid_amount ?? $client['paid_amount'] ?? 0,
                    $client->unpaid_amount ?? $client['unpaid_amount'] ?? 0,
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
