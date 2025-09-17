@extends('pdf')

@section('content-area')
    <h3>@lang('Inventory Report')</h3>
    
    <div class="row mb-4">
        <div class="col-md-6">
            @if(isset($reportData['category']))
                <strong>@lang('Category'):</strong> {{ $reportData['category'] }}<br>
            @endif
            @if(isset($reportData['subCategory']))
                <strong>@lang('Sub Category'):</strong> {{ $reportData['subCategory'] }}<br>
            @endif
            @if(isset($reportData['itemName']))
                <strong>@lang('Item Name'):</strong> {{ $reportData['itemName'] }}<br>
            @endif
        </div>
        <div class="col-md-6">
            <strong>@lang('Date'):</strong> {{ date('d-M-Y') }}<br>
            <strong>@lang('Date Range'):</strong> {{ $reportData['fromDate'] ?? '' }} - {{ $reportData['toDate'] ?? '' }}
        </div>
    </div>

    <div class="table-responsive">
        <table class="table-listing table table-bordered table-striped table-sm">
            <thead class="thead-light">
                <tr>
                    <th>@lang('#')</th>
                    <th>@lang('Code')</th>
                    <th>@lang('Name')</th>
                    <th>@lang('Stock In')</th>
                    <th>@lang('Stock Out')</th>
                    <th>@lang('Stock in Hand')</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($reportData['inventoryData'] as $key => $item)
                    <tr>
                        <td>{{ ++$key }}</td>
                        <td>{{ $item['productCode'] ?? '' }}</td>
                        <td>{{ $item['productName'] ?? '' }}</td>
                        <td>{{ $item['stockIn'] ?? 0 }}</td>
                        <td>{{ $item['stockOut'] ?? 0 }}</td>
                        <td>{{ $item['availableStock'] ?? 0 }}</td>
                    </tr>
                @endforeach
                <tr>
                    <td colspan="3" class="text-right"><strong>@lang('Total Quantity')</strong></td>
                    <td><strong>{{ $reportData['totalStockIn'] ?? 0 }}</strong></td>
                    <td><strong>{{ $reportData['totalStockOut'] ?? 0 }}</strong></td>
                    <td><strong>{{ $reportData['totalStockInHand'] ?? 0 }}</strong></td>
                </tr>
            </tbody>
        </table>
    </div>
@endsection
