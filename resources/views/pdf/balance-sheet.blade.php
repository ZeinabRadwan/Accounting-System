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
        if (!function_exists('formatPdfCurrency')) {
            function formatPdfCurrency($amount) {
                $formattedAmount = number_format($amount, 2, '.', ',');
                return $formattedAmount; // Return only the amount without currency symbol
            }
        }
    @endphp
    
    <h3>@lang('print.Balance Sheet')</h3>
    
    @if(isset($balanceData['filters']['from_date']) && isset($balanceData['filters']['to_date']))
        <div class="row mt-3">
            <div class="col-12 text-center">
                <h6 class="text-muted">
                    @lang('print.Period'): {{ $balanceData['filters']['from_date'] }} - {{ $balanceData['filters']['to_date'] }}
                </h6>
            </div>
        </div>
    @endif

    <div class="row mt-3">
        <div class="col-12">
            <div class="table-responsive">
                <table class="table-listing table table-bordered table-striped table-sm">
                    <thead>
                        <tr class="text-center">
                            <th colspan="2">
                                <h5>@lang('print.Assets')</h5>
                            </th>
                            <th class="red" colspan="2">
                                <h5>@lang('print.Liabilities') & @lang('print.Equity')</h5>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        @if(isset($balanceData['accounts']))
                            <!-- Assets Section -->
                            @foreach($balanceData['accounts']['assets'] as $account)
                                <tr>
                                    <th>{{ $account['name'] }} ({{ $account['code'] }})</th>
                                    <th class="text-right">
                                        @if($account['balance_type'] === 'Debit')
                                            <span class="text-success">
                                                {!! formatPdfCurrency($account['absolute_balance']) !!} !!}
                                            </span>
                                        @else
                                            <span class="text-danger">
                                                ({!! formatPdfCurrency($account['absolute_balance']) !!} !!})
                                            </span>
                                        @endif
                                    </th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            @endforeach

                            <!-- Liabilities Section -->
                            @foreach($balanceData['accounts']['liabilities'] as $account)
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th>{{ $account['name'] }} ({{ $account['code'] }})</th>
                                    <th class="text-right">
                                        @if($account['balance_type'] === 'Credit')
                                            <span class="text-danger">
                                                {!! formatPdfCurrency($account['absolute_balance']) !!}
                                            </span>
                                        @else
                                            <span class="text-success">
                                                ({!! formatPdfCurrency($account['absolute_balance']) !!})
                                            </span>
                                        @endif
                                    </th>
                                </tr>
                            @endforeach

                            <!-- Equity Section -->
                            @foreach($balanceData['accounts']['equity'] as $account)
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th>{{ $account['name'] }} ({{ $account['code'] }})</th>
                                    <th class="text-right">
                                        @if($account['balance_type'] === 'Credit')
                                            <span class="text-danger">
                                                {!! formatPdfCurrency($account['absolute_balance']) !!}
                                            </span>
                                        @else
                                            <span class="text-success">
                                                ({!! formatPdfCurrency($account['absolute_balance']) !!})
                                            </span>
                                        @endif
                                    </th>
                                </tr>
                            @endforeach

                            <!-- Net Income Row -->
                            @if(isset($balanceData['totals']['net_income']) && $balanceData['totals']['net_income'] != 0)
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th>@lang('Net Income')</th>
                                    <th class="text-right">
                                        @if($balanceData['totals']['net_income'] > 0)
                                            <span class="text-danger">
                                                {!! formatPdfCurrency($balanceData['totals']['net_income']) !!}
                                            </span>
                                        @else
                                            <span class="text-success">
                                                ({!! formatPdfCurrency(abs($balanceData['totals']['net_income'])) !!})
                                            </span>
                                        @endif
                                    </th>
                                </tr>
                            @endif

                            <!-- Totals Row -->
                            <tr class="text-right font-weight-bold">
                <th>@lang('print.Total Assets')</th>
                <th class="text-success">
                    {!! formatPdfCurrency($balanceData['totals']['total_assets']) !!}
                </th>
                <th>@lang('print.Total Liabilities') & @lang('print.Equity')</th>
                                <th class="text-danger">
                                    {!! formatPdfCurrency($balanceData['totals']['total_liabilities_and_equity']) !!}
                                </th>
                            </tr>
                        @else
                            <tr>
                                <td colspan="4" class="text-center">
                                    <p class="text-muted">@lang('No data available. Please generate a report.')</p>
                                </td>
                            </tr>
                        @endif
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    @if(isset($balanceData['totals']))
        <div class="row mt-3">
            <div class="col-12 text-center">
                <strong>@lang('Balance Sheet Summary')</strong><br />
                <h4 class="mt-2">
                    @lang('Total Assets'):
                    @if($balanceData['totals']['total_assets'] > $balanceData['totals']['total_liabilities_and_equity'])
                        <span class="text-success">
                            {!! formatPdfCurrency($balanceData['totals']['total_assets']) !!}
                        </span>
                    @elseif($balanceData['totals']['total_assets'] < $balanceData['totals']['total_liabilities_and_equity'])
                        <span class="text-danger">
                            {!! formatPdfCurrency($balanceData['totals']['total_assets']) !!}
                        </span>
                    @else
                        <span class="text-success">
                            {!! formatPdfCurrency($balanceData['totals']['total_assets']) !!}
                        </span>
                    @endif
                </h4>
                <h4>
                    @lang('Total Liabilities & Equity'):
                    @if($balanceData['totals']['total_liabilities_and_equity'] > $balanceData['totals']['total_assets'])
                        <span class="text-danger">
                            {!! formatPdfCurrency($balanceData['totals']['total_liabilities_and_equity']) !!}
                        </span>
                    @elseif($balanceData['totals']['total_liabilities_and_equity'] < $balanceData['totals']['total_assets'])
                        <span class="text-success">
                            {!! formatPdfCurrency($balanceData['totals']['total_liabilities_and_equity']) !!}
                        </span>
                    @else
                        <span class="text-success">
                            {!! formatPdfCurrency($balanceData['totals']['total_liabilities_and_equity']) !!}
                        </span>
                    @endif
                </h4>
            </div>
        </div>
    @endif

    <div class="row mt-3">
        <div class="col-12">
            <p class="text-muted">
                <small>@lang('Report generated on') {{ now()->format('d-M-Y H:i:s') }}</small>
            </p>
        </div>
    </div>
@endsection

@section('page-style')
    <style>
        .text-success {
            color: #28a745 !important;
        }
        .text-danger {
            color: #dc3545 !important;
        }
        .text-muted {
            color: #6c757d !important;
        }
        .mt-2 {
            margin-top: 0.5rem !important;
        }
        .mt-3 {
            margin-top: 1rem !important;
        }
        .red {
            color: #dc3545 !important;
        }
        .font-weight-bold {
            font-weight: bold !important;
        }
        .text-center {
            text-align: center !important;
        }
        .text-right {
            text-align: right !important;
        }
        .table-responsive {
            overflow-x: auto;
        }
        h4 {
            margin-bottom: 0.5rem;
            font-size: 1.1em;
            font-weight: 600;
        }
        h5 {
            margin-bottom: 0.5rem;
            font-size: 1em;
            font-weight: 600;
        }
        h6 {
            margin-bottom: 0.5rem;
            font-size: 0.9em;
            font-weight: 500;
        }
    </style>
@endsection
