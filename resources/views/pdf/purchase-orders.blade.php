@extends('pdf')

@section('content-area')
    <h3>@lang('All Purchase Orders')</h3>
    <div class="table-responsive">
        <table class="table-listing table table-bordered table-striped table-sm">
            <thead class="thead-light">
                <tr>
                    <th>@lang('#')</th>
                    <th>@lang('Purchase Order No')</th>
                    <th>@lang('Order Date')</th>
                    <th>@lang('Supplier')</th>
                    <th>@lang('Sub Total')</th>
                    <th>@lang('Transport')</th>
                    <th>@lang('Discount')</th>
                    <th>@lang('Net Total')</th>
                    <th>@lang('Total Due')</th>
                    <th>@lang('Status')</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($purchaseOrders as $key => $purchaseOrder)
                    <tr>
                        <td> {{ ++$key }} </td>
                        <td> {{ config('config.purchasePrefix') . '-' . $purchaseOrder['purchase_no'] }} </td>
                        <td> {{ \Carbon\Carbon::parse($purchaseOrder['po_date'])->format('d-M-Y') }} </td>
                        <td> {{ $purchaseOrder['supplier']['name'] }} </td>
                        <td> @currency($purchaseOrder['sub_total']) </td>
                        <td> @currency($purchaseOrder['transport']) </td>
                        <td> @currency($purchaseOrder['discount']) </td>
                        <td> @currency($purchaseOrder['calculated_total']) </td>
                        <td> @currency($purchaseOrder['calculated_due']) </td>
                        <td>
                            @if ($purchaseOrder['status'])
                                @lang('Active')
                            @else
                                @lang('Inactive')
                            @endif
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
@endsection
