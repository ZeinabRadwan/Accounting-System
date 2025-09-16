<?php

namespace App\Exports;

use App\Models\PurchaseOrder;
use Maatwebsite\Excel\Events\AfterSheet;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use PhpOffice\PhpSpreadsheet\Style\Alignment;

class ExportPurchaseOrder implements FromCollection, WithHeadings, ShouldAutoSize, WithEvents
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

    public function collection()
    {
        $term = $this->term;
        $query = PurchaseOrder::with('supplier');

        if ($this->startDate && $this->endDate) {
            $query = $query->whereBetween('po_date', [$this->startDate, $this->endDate]);
        }

        $query = $query->where(function ($query) use ($term) {
            $query->where('purchase_no', 'LIKE', '%'.$term.'%')
                ->orWhere('sub_total', 'LIKE', '%'.$term.'%')
                ->orWhere('transport', 'LIKE', '%'.$term.'%')
                ->orWhere('discount', 'LIKE', '%'.$term.'%')
                ->orWhere('po_reference', 'LIKE', '%'.$term.'%')
                ->orWhere('payment_terms', 'LIKE', '%'.$term.'%')
                ->orWhereHas('supplier', function ($newQuery) use ($term) {
                    $newQuery->where('name', 'LIKE', '%'.$term.'%')
                        ->orWhere('company_name', 'LIKE', '%'.$term.'%')
                        ->orWhere('phone_number', 'LIKE', '%'.$term.'%')
                        ->orWhere('phone_legacy', 'LIKE', '%'.$term.'%');
                });
        });

        $orders = $query->latest()->get()->map(function ($order) {
            $currencySymbol = getGeneralSettingsInfo()['currency']['symbol'];
            return [
                $order->purchase_no ? config('config.purchaseOrderPrefix') . '-' . $order->purchase_no : 'N/A',
                $order->po_date ? date('jS M, Y', strtotime($order->po_date)) : 'N/A',
                $order->status ? 'Active' : 'Inactive',
                $order->supplier->name ?? 'N/A',
                $currencySymbol . strval($order->net_total ?? $order->sub_total ?? 0),
            ];
        });

        $netTotal = $orders->sum(function ($row) {
            return floatval(str_replace(getGeneralSettingsInfo()['currency']['symbol'], '', $row[4] ?? 0));
        });

        $orders->push([
            '', '', '', '', 'Net Total = ' . getGeneralSettingsInfo()['currency']['symbol'] . $netTotal,
        ]);

        return $orders;
    }

    public function headings(): array
    {
        return [
            'Purchase Order No',
            'Date',
            'Status',
            'Supplier',
            'Net Total',
        ];
    }

    public function registerEvents(): array
    {
        return [
            AfterSheet::class => function (AfterSheet $event) {
                $lastRow = $event->getSheet()->getDelegate()->getHighestRow();

                $event->getSheet()->getDelegate()->getStyle('A'.$lastRow.':E'.$lastRow)->applyFromArray([
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
                    'alignment' => [
                        'horizontal' => Alignment::HORIZONTAL_RIGHT,
                    ],
                ]);

                $event->getSheet()->getDelegate()->getStyle('A1:E1')->applyFromArray([
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

                $event->getSheet()->getDelegate()->getStyle('E1')->applyFromArray([
                    'alignment' => [
                        'horizontal' => Alignment::HORIZONTAL_RIGHT,
                    ],
                ]);

                $columnE = 'E';
                $event->getSheet()->getDelegate()->getStyle("{$columnE}2:{$columnE}{$lastRow}")->getAlignment()->setHorizontal(Alignment::HORIZONTAL_RIGHT);
            },
        ];
    }
}


