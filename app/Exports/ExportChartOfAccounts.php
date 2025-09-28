<?php

namespace App\Exports;

use App\Models\ChartOfAccount;
use Maatwebsite\Excel\Events\AfterSheet;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use PhpOffice\PhpSpreadsheet\Style\Alignment;

class ExportChartOfAccounts implements FromCollection, WithHeadings, ShouldAutoSize, WithEvents
{
    protected $startDate;
    protected $endDate;
    protected $term;

    public function __construct($startDate, $endDate, $term)
    {
        $this->startDate = $startDate;
        $this->endDate = $endDate;
        $this->term = $term;
    }

    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        $term = $this->term;
        $query = ChartOfAccount::with('type', 'parent', 'creator');

        // Apply date range filter if provided
        if ($this->startDate && $this->endDate) {
            $query = $query->whereBetween('created_at', [$this->startDate, $this->endDate]);
        }

        // Apply search term filter
        if ($term) {
            $query->where(function ($query) use ($term) {
                $query->where('name', 'LIKE', '%' . $term . '%')
                    ->orWhere('code', 'LIKE', '%' . $term . '%')
                    ->orWhereHas('type', function ($typeQuery) use ($term) {
                        $typeQuery->where('name', 'LIKE', '%' . $term . '%');
                    });
            });
        }

        // Retrieve chart of accounts
        $chartOfAccounts = $query->orderBy('code')->get()->map(function ($account) {
            $currencySymbol = getExcelCompatibleCurrencySymbol();
            $balance = $account->getBalance();
            $balanceType = $account->getBalanceType();
            
            return [
                $account->code ?? 'N/A',
                $account->name ?? 'N/A',
                $account->type->name ?? 'N/A',
                $account->parent ? $account->parent->name : 'None',
                $account->is_active ? 'Active' : 'Inactive',
                $currencySymbol . number_format(abs($balance), 2),
                $balanceType,
                $account->creator ? $account->creator->name : 'N/A',
                $account->created_at ? $account->created_at->format('Y-m-d') : 'N/A',
            ];
        });

        // Calculate totals
        $totalBalance = $chartOfAccounts->sum(function ($row) {
            // Extract numeric value from formatted balance (remove currency symbol and commas)
            $balance = str_replace([getExcelCompatibleCurrencySymbol(), ','], '', $row[5]);
            return floatval($balance);
        });

        $currencySymbol = getExcelCompatibleCurrencySymbol();
        
        // Add total row
        $chartOfAccounts->push([
            '',
            '',
            '',
            '',
            'TOTAL:',
            $currencySymbol . number_format($totalBalance, 2),
            '',
            '',
            '',
        ]);

        return $chartOfAccounts;
    }

    /**
     * @return array
     */
    public function headings(): array
    {
        return [
            'Account Code',
            'Account Name', 
            'Account Type',
            'Parent Account',
            'Status',
            'Balance',
            'Balance Type',
            'Created By',
            'Date Created',
        ];
    }

    /**
     * @return array
     */
    public function registerEvents(): array
    {
        return [
            AfterSheet::class => function (AfterSheet $event) {
                $cellRange = 'A1:I1'; // All headers
                $event->sheet->getDelegate()->getStyle($cellRange)->getFont()->setBold(true);
                $event->sheet->getDelegate()->getStyle($cellRange)->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
                
                // Style the total row (last row)
                $highestRow = $event->sheet->getDelegate()->getHighestRow();
                $totalRowRange = 'A' . $highestRow . ':I' . $highestRow;
                $event->sheet->getDelegate()->getStyle($totalRowRange)->getFont()->setBold(true);
                $event->sheet->getDelegate()->getStyle($totalRowRange)->getAlignment()->setHorizontal(Alignment::HORIZONTAL_CENTER);
            },
        ];
    }
}
