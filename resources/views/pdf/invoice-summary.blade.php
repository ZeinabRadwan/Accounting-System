@extends('pdf')

@section('content-area')
    <h3>@lang('Invoice Summary Report')</h3>
    
    <div class="row mb-4">
        <div class="col-md-6">
            <strong>@lang('Date'):</strong> {{ date('d-M-Y') }}<br>
            @if(isset($reportData['filters']['from_date']) && isset($reportData['filters']['to_date']))
                <strong>@lang('Period'):</strong> {{ $reportData['filters']['from_date'] }} - {{ $reportData['filters']['to_date'] }}
            @endif
        </div>
    </div>

    @if(isset($reportData['summary']))
        <div class="row mb-4">
            <div class="col-md-12">
                <h5>@lang('Summary')</h5>
                <div class="table-responsive">
                    <table class="table table-bordered table-sm">
                        <tr>
                            <td><strong>@lang('Total Invoices')</strong></td>
                            <td>{{ $reportData['summary']['total_invoices'] ?? 0 }}</td>
                        </tr>
                        <tr>
                            <td><strong>@lang('Total Amount')</strong></td>
                            <td>@currency($reportData['summary']['total_amount'] ?? 0)</td>
                        </tr>
                        <tr>
                            <td><strong>@lang('Paid Amount')</strong></td>
                            <td>@currency($reportData['summary']['paid_amount'] ?? 0)</td>
                        </tr>
                        <tr>
                            <td><strong>@lang('Unpaid Amount')</strong></td>
                            <td>@currency($reportData['summary']['unpaid_amount'] ?? 0)</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    @endif

    @if(isset($reportData['client_summary']) && count($reportData['client_summary']) > 0)
        <div class="table-responsive">
            <table class="table-listing table table-bordered table-striped table-sm">
                <thead class="thead-light">
                    <tr>
                        <th>@lang('#')</th>
                        <th>@lang('Client')</th>
                        <th>@lang('Invoice Count')</th>
                        <th>@lang('Total Amount')</th>
                        <th>@lang('Paid Amount')</th>
                        <th>@lang('Unpaid Amount')</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($reportData['client_summary'] as $index => $client)
                        <tr>
                            <td>{{ $index + 1 }}</td>
                            <td>{{ $client->client_name ?? $client['client_name'] ?? '' }}</td>
                            <td>{{ $client->invoice_count ?? $client['invoice_count'] ?? 0 }}</td>
                            <td>@currency($client->total_amount ?? $client['total_amount'] ?? 0)</td>
                            <td>@currency($client->paid_amount ?? $client['paid_amount'] ?? 0)</td>
                            <td>@currency($client->unpaid_amount ?? $client['unpaid_amount'] ?? 0)</td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    @else
        <div class="alert alert-info">
            @lang('No clients found for the selected period.')
        </div>
    @endif
@endsection
