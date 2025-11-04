<?php

namespace App\Exports;

use App\Models\Product;
use Maatwebsite\Excel\Events\AfterSheet;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use PhpOffice\PhpSpreadsheet\Style\Alignment;

class ExportInventoryCount implements FromCollection, WithHeadings, ShouldAutoSize, WithEvents
{
    protected $term;
    protected $filterType;

    public function __construct($term = '', $filterType = 'default')
    {
        $this->term = $term;
        $this->filterType = $filterType;
    }

    /**
     * @return \Illuminate\Support\Collection
     */
    public function collection()
    {
        $term = $this->term;
        $query = Product::query();

        // Apply search term conditions
        if (!empty($term)) {
            $query->where(function ($query) use ($term) {
                $query->where('name', 'LIKE', '%' . $term . '%')
                    ->orWhere('slug', 'LIKE', '%' . $term . '%')
                    ->orWhere('model', 'LIKE', '%' . $term . '%')
                    ->orWhere('code', 'LIKE', '%' . $term . '%')
                    ->orWhere('inventory_count', 'LIKE', '%' . $term . '%')
                    ->orWhereHas('proSubCategory', function ($newQuery) use ($term) {
                        $newQuery->where('name', 'LIKE', '%' . $term . '%')
                            ->orWhereHas('category', function ($newQuery) use ($term) {
                                $newQuery->where('name', 'LIKE', '%' . $term . '%');
                            });
                    });
            });
        }

        // Apply filtering based on filterType
        if ($this->filterType && $this->filterType !== 'default') {
            switch ($this->filterType) {
                case 'with_products':
                    $query->where('inventory_count', '>', 0);
                    break;
                case 'with_data':
                    $query->whereNotNull('inventory_count')
                          ->where('inventory_count', '>', 0);
                    break;
                case 'low_to_high_stock':
                    $query->orderBy('inventory_count', 'ASC');
                    break;
                case 'high_to_low_stock':
                    $query->orderBy('inventory_count', 'DESC');
                    break;
                case 'active':
                    $query->where('status', true);
                    break;
                case 'inactive':
                    $query->where('status', false);
                    break;
                case 'zero_stock':
                    $query->where(function ($query) {
                        $query->where('inventory_count', 0)
                            ->orWhereNull('inventory_count');
                    });
                    break;
                case 'non_zero_stock':
                    $query->where('inventory_count', '>', 0);
                    break;
                default:
                    $query->orderBy('code', 'ASC');
                    break;
            }
        } else {
            $query->orderBy('code', 'ASC');
        }

        // Get products with relationships
        $products = $query->with('proSubCategory.category', 'productUnit', 'productTax', 'productBrand')->get();

        // Format data for Excel
        $formattedData = $products->map(function ($product) {
            $prefix = config('config.productPrefix', '');
            $code = is_numeric($product->code) ? str_pad($product->code, 5, '0', STR_PAD_LEFT) : $product->code;
            $code = $prefix ? $prefix . ' - ' . $code : $code;
            
            // Get unit code
            $unitCode = $product->productUnit ? $product->productUnit->code : '';
            
            // Calculate availableQty (same as ProductResource)
            $availableQty = $product->inventory_count > 0 ? $product->inventory_count : 0;
            
            return [
                $code,
                $product->name,
                $availableQty,
                $unitCode,
                $product->status ? 'Active' : 'Inactive',
            ];
        });

        return $formattedData;
    }

    public function headings(): array
    {
        return [
            'Code',
            'Name',
            'Current Stock',
            'Unit',
            'Status',
        ];
    }

    public function registerEvents(): array
    {
        return [
            AfterSheet::class => function (AfterSheet $event) {
                // Style the header row (headings)
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
            },
        ];
    }
}

