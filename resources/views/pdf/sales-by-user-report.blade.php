@extends('pdf')

@section('content-area')
    <h3>@lang('Sales By User Report')</h3>
    
    @if(isset($salesByUserData['filters']['start_date']) && isset($salesByUserData['filters']['end_date']))
        <div class="row mt-3">
            <div class="col-12 text-center">
                <h6 class="text-muted">
                    @lang('Period'): {{ $salesByUserData['filters']['start_date'] }} - {{ $salesByUserData['filters']['end_date'] }}
                </h6>
            </div>
        </div>
    @endif

    <div class="row mt-3">
        <div class="col-12">
            <div class="table-responsive">
                <table class="table-listing table table-bordered table-striped table-sm">
                    <thead>
                        <tr>
                            <th>@lang('#')</th>
                            <th>@lang('Sales By')</th>
                            <th>@lang('Invoice No')</th>
                            <th>@lang('Client')</th>
                            <th>@lang('Net Total')</th>
                            <th>@lang('Invoice Date')</th>
                        </tr>
                    </thead>
                    <tbody>
                        @if(isset($salesByUserData) && count($salesByUserData) > 0)
                            @foreach($salesByUserData as $index => $item)
                                <tr>
                                    <td>{{ $index + 1 }}</td>
                                    <td>{{ $item['salesBy'] }}</td>
                                    <td>{{ $item['invoiceLabel'] }}</td>
                                    <td>{{ $item['client'] }}</td>
                                    <td>@currency($item['invoiceTotal'])</td>
                                    <td>{{ \Carbon\Carbon::parse($item['invoiceDate'])->format('d M, Y') }}</td>
                                </tr>
                            @endforeach
                        @else
                            <tr>
                                <td colspan="6" class="text-center">@lang('No data available')</td>
                            </tr>
                        @endif
                    </tbody>
                </table>
            </div>
        </div>
    </div>
@endsection

