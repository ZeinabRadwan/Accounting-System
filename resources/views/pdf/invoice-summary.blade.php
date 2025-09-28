@extends('pdf')

@section('page-style')
    <style>
        body {
            font-family: "DejaVu Sans", "Arial Unicode MS", "Tahoma", sans-serif;
        }
        .currency-symbol {
            font-family: "DejaVu Sans", "Arial Unicode MS", "Tahoma", sans-serif;
        }
        /* Fix for riyal symbol display */
        .riyal-symbol {
            font-family: "DejaVu Sans", "Arial Unicode MS", "Tahoma", sans-serif;
        }
        .table-listing th, .table-listing td {
            text-align: center;
        }
    </style>
@endsection

@section('content-area')
    @php
        // Custom currency formatter for PDF - no currency symbols as requested
        function formatPdfCurrency($amount) {
            $formattedAmount = number_format($amount, 2, '.', ',');
            return $formattedAmount; // Return only the amount without currency symbol
        }
    @endphp
    
    <h3>@lang('print.Invoice Summary')</h3>
    
    <div class="row mb-4">
        <div class="col-md-6">
            <strong>@lang('print.Generated'):</strong> {{ date('d-M-Y') }}<br>
            @if(isset($reportData['filters']['from_date']) && isset($reportData['filters']['to_date']))
                <strong>@lang('print.Period'):</strong> {{ $reportData['filters']['from_date'] }} - {{ $reportData['filters']['to_date'] }}
            @endif
        </div>
    </div>

    @if(isset($reportData['summary']))
        <div class="row mb-4">
            <div class="col-md-12">
                <h5>@lang('print.Summary')</h5>
                <div class="table-responsive">
                    <table class="table table-bordered table-sm">
                        <tr>
                            <td><strong>@lang('print.Total Clients')</strong></td>
                            <td>{{ $reportData['summary']['total_clients'] ?? 0 }}</td>
                        </tr>
                        <tr>
                            <td><strong>@lang('print.Total Invoices')</strong></td>
                            <td>{{ $reportData['summary']['total_invoices'] ?? 0 }}</td>
                        </tr>
                        <tr>
                            <td><strong>@lang('print.Total Amount')</strong></td>
                            <td>{!! formatPdfCurrency($reportData['summary']['total_amount'] ?? 0) !!}</td>
                        </tr>
                        <tr>
                            <td><strong>@lang('print.Total Tax')</strong></td>
                            <td>{!! formatPdfCurrency($reportData['summary']['total_tax'] ?? 0) !!}</td>
                        </tr>
                        <tr>
                            <td><strong>@lang('print.Total Paid')</strong></td>
                            <td>{!! formatPdfCurrency($reportData['summary']['total_paid'] ?? 0) !!}</td>
                        </tr>
                        <tr>
                            <td><strong>@lang('print.Total Due')</strong></td>
                            <td>{!! formatPdfCurrency($reportData['summary']['total_due'] ?? 0) !!}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    @endif

    @if(isset($reportData['clients']) && count($reportData['clients']) > 0)
        <div class="table-responsive">
            <table class="table-listing table table-bordered table-striped table-sm">
                <thead class="thead-light">
                    <tr>
                        <th>@lang('print.Row Number')</th>
                        <th>@lang('print.Client Name')</th>
                        <th>@lang('print.Total Invoices')</th>
                        <th>@lang('print.Total Amount')</th>
                        <th>@lang('print.Total Tax')</th>
                        <th>@lang('print.Total Paid')</th>
                        <th>@lang('print.Total Due')</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($reportData['clients'] as $index => $client)
                        <tr>
                            <td>{{ $index + 1 }}</td>
                            <td>{{ $client['client_name'] ?? 'Unknown Client' }}</td>
                            <td>{{ $client['total_invoices'] ?? 0 }}</td>
                            <td>{!! formatPdfCurrency($client['total_amount'] ?? 0) !!}</td>
                            <td>{!! formatPdfCurrency($client['total_tax'] ?? 0) !!}</td>
                            <td>{!! formatPdfCurrency($client['total_paid'] ?? 0) !!}</td>
                            <td>{!! formatPdfCurrency($client['total_due'] ?? 0) !!}</td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    @else
        <div class="alert alert-info">
            @lang('print.No clients found for the selected period.')
        </div>
    @endif
@endsection
