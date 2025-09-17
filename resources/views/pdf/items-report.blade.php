@extends('pdf')

@section('content-area')
    <h3>@lang('Item Report')</h3>
    
    @if(isset($reportData['product']))
        <div class="row mb-4">
            <div class="col-md-6">
                <strong>@lang('Product Code'):</strong> {{ $reportData['product']['code'] ?? '' }}<br>
                <strong>@lang('Product Name'):</strong> {{ $reportData['product']['name'] ?? '' }}<br>
                <strong>@lang('Category'):</strong> {{ $reportData['product']['category']['name'] ?? '' }}<br>
                <strong>@lang('Sub Category'):</strong> {{ $reportData['product']['subCategory']['name'] ?? '' }}<br>
                <strong>@lang('Available Stock'):</strong> {{ $reportData['product']['availableQty'] ?? 0 }} {{ $reportData['product']['itemUnit']['code'] ?? '' }}
            </div>
            <div class="col-md-6">
                <strong>@lang('Date'):</strong> {{ date('d-M-Y') }}<br>
                <strong>@lang('Date Range'):</strong> {{ $reportData['fromDate'] ?? '' }} - {{ $reportData['toDate'] ?? '' }}
            </div>
        </div>
    @endif

    @if(isset($reportData['stockIns']) && count($reportData['stockIns']) > 0)
        <h4>@lang('Stock In')</h4>
        <div class="table-responsive">
            <table class="table-listing table table-bordered table-striped table-sm">
                <thead class="thead-light">
                    <tr>
                        <th>@lang('#')</th>
                        <th>@lang('Date')</th>
                        <th>@lang('Stock In')</th>
                        <th>@lang('Price')</th>
                        <th>@lang('Type')</th>
                        <th>@lang('Code')</th>
                        <th>@lang('Supplier')/@lang('Client')</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($reportData['stockIns'] as $key => $stockIn)
                        <tr>
                            <td>{{ ++$key }}</td>
                            <td>{{ \Carbon\Carbon::parse($stockIn['date'])->format('d-M-Y') }}</td>
                            <td>{{ $stockIn['quantity'] ?? 0 }}</td>
                            <td>@currency($stockIn['price'] ?? 0)</td>
                            <td>{{ $stockIn['type'] ?? '' }}</td>
                            <td>{{ $stockIn['code'] ?? '' }}</td>
                            <td>{{ $stockIn['supplier'] ?? $stockIn['client'] ?? '' }}</td>
                        </tr>
                    @endforeach
                    <tr>
                        <td colspan="2" class="text-right"><strong>@lang('Total Quantity')</strong></td>
                        <td><strong>{{ collect($reportData['stockIns'])->sum('quantity') }}</strong></td>
                        <td colspan="4"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    @endif

    @if(isset($reportData['stockOuts']) && count($reportData['stockOuts']) > 0)
        <h4>@lang('Stock Out')</h4>
        <div class="table-responsive">
            <table class="table-listing table table-bordered table-striped table-sm">
                <thead class="thead-light">
                    <tr>
                        <th>@lang('#')</th>
                        <th>@lang('Date')</th>
                        <th>@lang('Stock Out')</th>
                        <th>@lang('Price')</th>
                        <th>@lang('Type')</th>
                        <th>@lang('Code')</th>
                        <th>@lang('Client')</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($reportData['stockOuts'] as $key => $stockOut)
                        <tr>
                            <td>{{ ++$key }}</td>
                            <td>{{ \Carbon\Carbon::parse($stockOut['date'])->format('d-M-Y') }}</td>
                            <td>{{ $stockOut['quantity'] ?? 0 }}</td>
                            <td>@currency($stockOut['price'] ?? 0)</td>
                            <td>{{ $stockOut['type'] ?? '' }}</td>
                            <td>{{ $stockOut['code'] ?? '' }}</td>
                            <td>{{ $stockOut['client'] ?? $stockOut['supplier'] ?? '' }}</td>
                        </tr>
                    @endforeach
                    <tr>
                        <td colspan="2" class="text-right"><strong>@lang('Total Quantity')</strong></td>
                        <td><strong>{{ collect($reportData['stockOuts'])->sum('quantity') }}</strong></td>
                        <td colspan="4"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    @endif
@endsection
