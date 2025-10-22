@extends('pdf.layout')

@section('content')
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
            font-size: 12px;
        }
        .table-listing th {
            font-weight: bold;
        }
        h3 {
            text-align: {{ $locale === 'ar' ? 'right' : 'left' }};
            margin-bottom: 10px;
        }
    </style>
    
    <h3 class="{{ $locale === 'ar' ? 'arabic-text' : 'english-text' }}">{{ $locale === 'ar' ? 'قائمة عروض الأسعار' : 'Quotations list' }}</h3>
    <div class="table-responsive">
        <table class="table-listing table table-bordered table-striped table-sm">
            <thead class="thead-light">
                <tr class="{{ $locale === 'ar' ? 'arabic-text' : 'english-text' }}">
                    <th class="{{ $locale === 'ar' ? 'arabic-text' : '' }}">#</th>
                    <th class="{{ $locale === 'ar' ? 'arabic-text' : '' }}">{{ $locale === 'ar' ? 'رقم عرض السعر' : 'Quotation No' }}</th>
                    <th class="{{ $locale === 'ar' ? 'arabic-text' : '' }}">{{ $locale === 'ar' ? 'تاريخ عرض السعر' : 'Quotation Date' }}</th>
                    <th class="{{ $locale === 'ar' ? 'arabic-text' : '' }}">{{ $locale === 'ar' ? 'العميل' : 'Client' }}</th>
                    <th class="{{ $locale === 'ar' ? 'arabic-text' : '' }}">{{ $locale === 'ar' ? 'الإجمالي قبل الضريبة' : 'Subtotal' }}</th>
                    <th class="{{ $locale === 'ar' ? 'arabic-text' : '' }}">{{ $locale === 'ar' ? 'النقل' : 'Transport' }}</th>
                    <th class="{{ $locale === 'ar' ? 'arabic-text' : '' }}">{{ $locale === 'ar' ? 'الخصم' : 'Discount' }}</th>
                    <th class="{{ $locale === 'ar' ? 'arabic-text' : '' }}">{{ $locale === 'ar' ? 'الضريبة' : 'Tax' }}</th>
                    <th class="{{ $locale === 'ar' ? 'arabic-text' : '' }}">{{ $locale === 'ar' ? 'الإجمالي بعد الضريبة' : 'Net Total' }}</th>
                    <th class="{{ $locale === 'ar' ? 'arabic-text' : '' }}">{{ $locale === 'ar' ? 'الحالة' : 'Status' }}</th>
                </tr>
            </thead>
            <tbody>
                @php
                    $totalSubtotal = 0;
                    $totalTransport = 0;
                    $totalDiscount = 0;
                    $totalTax = 0;
                    $totalNetTotal = 0;
                @endphp
                @foreach ($quotations as $key => $quotation)
                    @php
                        // Safety check to ensure quotation is an array
                        if (!is_array($quotation)) {
                            continue;
                        }
                        
                        $subtotalWithoutVat = ($quotation['sub_total'] ?? 0) - ($quotation['total_tax'] ?? 0);
                        $netTotal = ($quotation['sub_total'] ?? 0) + ($quotation['transport'] ?? 0) - ($quotation['discount'] ?? 0);
                        
                        $totalSubtotal += $subtotalWithoutVat;
                        $totalTransport += $quotation['transport'] ?? 0;
                        $totalDiscount += $quotation['discount'] ?? 0;
                        $totalTax += $quotation['total_tax'] ?? 0;
                        $totalNetTotal += $netTotal;
                    @endphp
                    <tr>
                        <td> {{ ++$key }} </td>
                        <td> {{ config('config.quotationPrefix') . '-' . ($quotation['quotation_no'] ?? '') }} </td>
                        <td> {{ \Carbon\Carbon::parse($quotation['quotation_date'] ?? now())->format('d-M-Y') }} </td>
                        <td class="arabic-text"> {{ $quotation['client']['name'] ?? '' }} </td>
                        <td> @currency($subtotalWithoutVat) </td>
                        <td> @currency($quotation['transport'] ?? 0) </td>
                        <td> @currency($quotation['discount'] ?? 0) </td>
                        <td> @currency($quotation['total_tax'] ?? 0) </td>
                        <td> @currency($netTotal) </td>
                        <td class="{{ $locale === 'ar' ? 'arabic-text' : '' }}">
                            @if ($quotation['status'] ?? false)
                                {{ $locale === 'ar' ? 'نشط' : 'Active' }}
                            @else
                                {{ $locale === 'ar' ? 'غير نشط' : 'Inactive' }}
                            @endif
                        </td>
                    </tr>
                @endforeach
                {{-- Footer totals row --}}
                <tr style="background-color: #f8f9fa; font-weight: bold;">
                    <td colspan="4" style="text-align: right;" class="{{ $locale === 'ar' ? 'arabic-text' : 'english-text' }}">
                        {{ $locale === 'ar' ? 'إجمالي الإجمالي قبل الضريبة =' : 'Total Subtotal =' }}
                    </td>
                    <td>@currency($totalSubtotal)</td>
                    <td class="{{ $locale === 'ar' ? 'arabic-text' : 'english-text' }}">
                        {{ $locale === 'ar' ? 'إجمالي النقل =' : 'Total Transport =' }}
                        @currency($totalTransport)
                    </td>
                    <td class="{{ $locale === 'ar' ? 'arabic-text' : 'english-text' }}">
                        {{ $locale === 'ar' ? 'إجمالي الخصم =' : 'Total Discount =' }}
                        @currency($totalDiscount)
                    </td>
                    <td class="{{ $locale === 'ar' ? 'arabic-text' : 'english-text' }}">
                        {{ $locale === 'ar' ? 'إجمالي الضريبة =' : 'Total Vat =' }}
                        @currency($totalTax)
                    </td>
                    <td class="{{ $locale === 'ar' ? 'arabic-text' : 'english-text' }}">
                        {{ $locale === 'ar' ? 'إجمالي الإجمالي بعد الضريبة =' : 'Total NetTotal =' }}
                        @currency($totalNetTotal)
                    </td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
@endsection
