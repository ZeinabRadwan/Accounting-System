<?php

namespace App\Exports;

use App\Models\JournalEntry;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithStyles;
use Maatwebsite\Excel\Concerns\WithColumnWidths;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;

class ExportJournalEntries implements FromCollection, WithHeadings, WithMapping, WithStyles, WithColumnWidths
{
    protected $filters;

    public function __construct($filters = [])
    {
        $this->filters = $filters;
    }

    public function collection()
    {
        $query = JournalEntry::with(['lines.chartOfAccount.type', 'creator', 'poster']);

        // Apply filters
        if (isset($this->filters['status']) && $this->filters['status']) {
            $query->where('status', $this->filters['status']);
        }

        if (isset($this->filters['from_date']) && $this->filters['from_date']) {
            $query->where('entry_date', '>=', $this->filters['from_date']);
        }

        if (isset($this->filters['to_date']) && $this->filters['to_date']) {
            $query->where('entry_date', '<=', $this->filters['to_date']);
        }

        return $query->orderBy('entry_date', 'desc')->get();
    }

    public function headings(): array
    {
        return [
            'Entry Number',
            'Entry Date',
            'Reference',
            'Description',
            'Status',
            'Total Debit',
            'Total Credit',
            'Created By',
            'Posted By',
            'Posted At',
            'Source Type',
            'Source ID',
        ];
    }

    public function map($journalEntry): array
    {
        return [
            $journalEntry->formatted_entry_number,
            $journalEntry->entry_date->format('Y-m-d'),
            $journalEntry->reference ?? '',
            $journalEntry->description ?? '',
            ucfirst($journalEntry->status),
            number_format($journalEntry->total_debit, 2),
            number_format($journalEntry->total_credit, 2),
            $journalEntry->creator ? $journalEntry->creator->name : '',
            $journalEntry->poster ? $journalEntry->poster->name : '',
            $journalEntry->posted_at ? $journalEntry->posted_at->format('Y-m-d H:i:s') : '',
            $journalEntry->source_type ?? '',
            $journalEntry->source_id ?? '',
        ];
    }

    public function styles(Worksheet $sheet)
    {
        return [
            1 => [
                'font' => ['bold' => true],
                'fill' => [
                    'fillType' => \PhpOffice\PhpSpreadsheet\Style\Fill::FILL_SOLID,
                    'startColor' => ['rgb' => 'E5E7EB'],
                ],
            ],
        ];
    }

    public function columnWidths(): array
    {
        return [
            'A' => 15, // Entry Number
            'B' => 12, // Entry Date
            'C' => 15, // Reference
            'D' => 30, // Description
            'E' => 10, // Status
            'F' => 15, // Total Debit
            'G' => 15, // Total Credit
            'H' => 20, // Created By
            'I' => 20, // Posted By
            'J' => 20, // Posted At
            'K' => 15, // Source Type
            'L' => 15, // Source ID
        ];
    }
}
