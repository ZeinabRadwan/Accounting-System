<?php

namespace App\Exports;

use App\Models\Branch;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Events\AfterSheet;

class ExportBranch implements FromCollection, WithHeadings, ShouldAutoSize, WithEvents
{
    protected $term;

    public function __construct($term = null)
    {
        $this->term = $term;
    }

    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        $term = $this->term;
        $query = Branch::query();

        if ($term) {
            $query->where(function ($query) use ($term) {
                $query->where('name', 'LIKE', '%'.$term.'%')
                    ->orWhere('code', 'LIKE', '%'.$term.'%')
                    ->orWhere('phone', 'LIKE', '%'.$term.'%')
                    ->orWhere('email', 'LIKE', '%'.$term.'%');
            });
        }

        $branches = $query->latest()->get()->map(function ($branch) {
            return [
                $branch->name,
                $branch->code,
                $branch->phone,
                $branch->email,
                $branch->address,
                $branch->is_main ? 'Yes' : 'No',
                $branch->is_active ? 'Active' : 'Inactive',
            ];
        });

        return $branches;
    }

    public function headings(): array
    {
        return [
            'Name',
            'Code',
            'Phone',
            'Email',
            'Address',
            'Main Branch',
            'Status',
        ];
    }

    public function registerEvents(): array
    {
        return [
            AfterSheet::class => function (AfterSheet $event) {
                // Style the header row (headings)
                $event->getSheet()->getDelegate()->getStyle('A1:G1')->applyFromArray([
                    'font' => [
                        'bold' => true,
                        'size' => 13,
                    ],
                    'fill' => [
                        'fillType' => 'solid',
                        'startColor' => [
                            'rgb' => '00FF00',
                        ],
                    ],
                ]);
            },
        ];
    }
}
