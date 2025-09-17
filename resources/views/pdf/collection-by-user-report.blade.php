@extends('pdf')

@section('content-area')
    <h3>@lang('Collection By User Report')</h3>
    
    @if(isset($collectionByUserData['filters']['start_date']) && isset($collectionByUserData['filters']['end_date']))
        <div class="row mt-3">
            <div class="col-12 text-center">
                <h6 class="text-muted">
                    @lang('Period'): {{ $collectionByUserData['filters']['start_date'] }} - {{ $collectionByUserData['filters']['end_date'] }}
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
                            <th>@lang('Collection By')</th>
                            <th>@lang('Invoice No')</th>
                            <th>@lang('Client')</th>
                            <th>@lang('Invoice Amount')</th>
                            <th>@lang('Collected Amount')</th>
                            <th>@lang('Transaction Date')</th>
                        </tr>
                    </thead>
                    <tbody>
                        @if(isset($collectionByUserData) && count($collectionByUserData) > 0)
                            @foreach($collectionByUserData as $index => $item)
                                <tr>
                                    <td>{{ $index + 1 }}</td>
                                    <td>{{ $item['collectionBy'] }}</td>
                                    <td>{{ $item['invoice']['invoiceLabel'] }}</td>
                                    <td>{{ $item['client']['name'] }}</td>
                                    <td>@currency($item['invoice']['invoiceTotal'])</td>
                                    <td>@currency($item['amount'])</td>
                                    <td>{{ \Carbon\Carbon::parse($item['transaction']['transaction_date'])->format('d M, Y') }}</td>
                                </tr>
                            @endforeach
                        @else
                            <tr>
                                <td colspan="7" class="text-center">@lang('No data available')</td>
                            </tr>
                        @endif
                    </tbody>
                </table>
            </div>
        </div>
    </div>
@endsection

