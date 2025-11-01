@extends('pdf')

@section('content-area')
    <style>
        body {
            font-family: 'DejaVu Sans', 'Arial Unicode MS', 'Tahoma', sans-serif !important;
            direction: {{ $locale === 'ar' ? 'rtl' : 'ltr' }};
            margin: 0;
            padding: 10px;
        }
        .arabic-text {
            font-family: 'DejaVu Sans', 'Arial Unicode MS', 'Tahoma', sans-serif !important;
            direction: rtl !important;
            text-align: right !important;
        }
        .english-text {
            font-family: 'DejaVu Sans', 'Arial', sans-serif;
            direction: ltr;
            text-align: left;
        }
        .table-listing {
            border-collapse: collapse;
            width: 100%;
            margin-top: 10px;
        }
        .table-listing th, .table-listing td {
            padding: 8px;
            border: 1px solid #ddd;
            font-size: 11px;
        }
        .table-listing th {
            font-weight: bold;
            background-color: #f5f5f5;
        }
        h3 {
            text-align: {{ $locale === 'ar' ? 'right' : 'left' }};
            margin-bottom: 10px;
        }
        .text-right {
            text-align: right;
        }
        .text-center {
            text-align: center;
        }
    </style>
    
    <h3 class="{{ $locale === 'ar' ? 'arabic-text' : 'english-text' }}">{{ $locale === 'ar' ? 'سجل حركات المخزون' : 'Inventory History' }}</h3>
    <div class="table-responsive">
        <table class="table-listing table table-bordered table-striped table-sm">
            <thead class="thead-light">
                <tr class="{{ $locale === 'ar' ? 'arabic-text' : 'english-text' }}">
                    <th class="{{ $locale === 'ar' ? 'arabic-text' : '' }}">#</th>
                    <th class="{{ $locale === 'ar' ? 'arabic-text' : '' }}">{{ $locale === 'ar' ? 'تاريخ العملية' : 'Operation Date' }}</th>
                    <th class="{{ $locale === 'ar' ? 'arabic-text' : '' }}">{{ $locale === 'ar' ? 'اسم المنتج' : 'Product Name' }}</th>
                    <th class="{{ $locale === 'ar' ? 'arabic-text' : '' }}">{{ $locale === 'ar' ? 'كود المنتج' : 'Product Code' }}</th>
                    <th class="{{ $locale === 'ar' ? 'arabic-text' : '' }}">{{ $locale === 'ar' ? 'نوع العملية' : 'Operation Type' }}</th>
                    <th class="{{ $locale === 'ar' ? 'arabic-text text-right' : 'text-right' }}">{{ $locale === 'ar' ? 'السعر' : 'Price' }}</th>
                    <th class="{{ $locale === 'ar' ? 'arabic-text text-right' : 'text-right' }}">{{ $locale === 'ar' ? 'تغيير الكمية' : 'Quantity Change' }}</th>
                    <th class="{{ $locale === 'ar' ? 'arabic-text' : '' }}">{{ $locale === 'ar' ? 'ملاحظات' : 'Notes' }}</th>
                    <th class="{{ $locale === 'ar' ? 'arabic-text' : '' }}">{{ $locale === 'ar' ? 'رمز المرجع' : 'Reference Code' }}</th>
                </tr>
            </thead>
            <tbody>
                @php
                    $totalPrice = 0;
                    $totalQuantity = 0;
                @endphp
                @forelse ($history as $key => $item)
                    @php
                        // Safety check to ensure item is an array
                        if (!is_array($item)) {
                            continue;
                        }
                        
                        $price = $item['price'] ?? 0;
                        $quantityChange = $item['quantity_change'] ?? 0;
                        
                        $totalPrice += $price;
                        $totalQuantity += abs($quantityChange);
                    @endphp
                    <tr>
                        <td class="text-center">{{ ++$key }}</td>
                        <td>{{ \Carbon\Carbon::parse($item['operation_date'] ?? now())->format('d-M-Y') }}</td>
                        <td class="{{ $locale === 'ar' ? 'arabic-text' : '' }}">{{ $item['product_name'] ?? '-' }}</td>
                        <td>{{ $item['product_code'] ?? '-' }}</td>
                        <td class="{{ $locale === 'ar' ? 'arabic-text' : '' }}">{{ $item['operation_type'] ?? '-' }}</td>
                        <td class="text-right">@currency($price)</td>
                        <td class="text-right">{{ $quantityChange > 0 ? '+' : '' }}{{ $quantityChange }}</td>
                        <td class="{{ $locale === 'ar' ? 'arabic-text' : '' }}">{{ $item['notes'] ?? '-' }}</td>
                        <td>{{ $item['reference_code'] ?? '-' }}</td>
                    </tr>
                @empty
                    <tr>
                        <td colspan="9" class="text-center {{ $locale === 'ar' ? 'arabic-text' : '' }}">
                            {{ $locale === 'ar' ? 'لا توجد بيانات' : 'No data available' }}
                        </td>
                    </tr>
                @endforelse
                {{-- Footer totals row --}}
                @if(count($history) > 0)
                    <tr style="background-color: #f5f5f5; font-weight: bold;">
                        <td colspan="5" class="{{ $locale === 'ar' ? 'arabic-text' : '' }}" style="text-align: {{ $locale === 'ar' ? 'right' : 'left' }};">
                            {{ $locale === 'ar' ? 'الإجمالي' : 'Total' }}
                        </td>
                        <td class="text-right">@currency($totalPrice)</td>
                        <td class="text-right">{{ $totalQuantity }}</td>
                        <td colspan="2"></td>
                    </tr>
                @endif
            </tbody>
        </table>
    </div>
@endsection

