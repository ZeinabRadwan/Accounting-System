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
    
    <h3>@lang('print.Group Account Statement')</h3>
    
    @if(isset($reportData['chart_of_accounts']) && count($reportData['chart_of_accounts']) > 0)
        <div class="row mb-4">
            <div class="col-md-12">
                <h5>@lang('print.Selected Accounts')</h5>
                <div class="table-responsive">
                    <table class="table table-bordered table-sm">
                        <thead>
                            <tr>
                                <th>@lang('print.Code')</th>
                                <th>@lang('print.Name')</th>
                                <th>@lang('print.Type')</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($reportData['chart_of_accounts'] as $account)
                                <tr>
                                    <td>{{ $account['code'] ?? '' }}</td>
                                    <td>{{ $account['name'] ?? '' }}</td>
                                    <td>{{ $account['type'] ?? '' }}</td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    @endif

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
                <h5>@lang('print.Summary')</h5>
                <div class="table-responsive">
                    <table class="table table-bordered table-sm">
                        <tr>
                            <td><strong>@lang('print.Opening Balance')</strong></td>
                            <td>{!! formatPdfCurrency($reportData['summary']['opening_balance'] ?? 0) !!} 
                                @if(($reportData['summary']['opening_balance_type'] ?? '') === 'Debit')
                                    @lang('print.Debit')
                                @elseif(($reportData['summary']['opening_balance_type'] ?? '') === 'Credit')
                                    @lang('print.Credit')
                                @else
                                    {{ $reportData['summary']['opening_balance_type'] ?? '' }}
                                @endif
                            </td>
                        </tr>
                        <tr>
                            <td><strong>@lang('print.Period Debits')</strong></td>
                            <td>{!! formatPdfCurrency($reportData['summary']['period_debits'] ?? 0) !!}</td>
                        </tr>
                        <tr>
                            <td><strong>@lang('print.Period Credits')</strong></td>
                            <td>{!! formatPdfCurrency($reportData['summary']['period_credits'] ?? 0) !!}</td>
                        </tr>
                        <tr>
                            <td><strong>@lang('print.Closing Balance')</strong></td>
                            <td>{!! formatPdfCurrency($reportData['summary']['closing_balance'] ?? 0) !!} 
                                @if(($reportData['summary']['closing_balance_type'] ?? '') === 'Debit')
                                    @lang('print.Debit')
                                @elseif(($reportData['summary']['closing_balance_type'] ?? '') === 'Credit')
                                    @lang('print.Credit')
                                @else
                                    {{ $reportData['summary']['closing_balance_type'] ?? '' }}
                                @endif
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    @endif

    @if(isset($reportData['entries']) && count($reportData['entries']) > 0)
        <div class="table-responsive">
            <table class="table-listing table table-bordered table-striped table-sm">
                <thead class="thead-light">
                    <tr>
                        <th>@lang('print.Row Number')</th>
                        <th>@lang('print.Date')</th>
                        <th>@lang('print.Account')</th>
                        <th>@lang('print.Description')</th>
                        <th>@lang('print.Debit')</th>
                        <th>@lang('print.Credit')</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($reportData['entries'] as $index => $entry)
                        @if(isset($entry['accounts']) && is_array($entry['accounts']))
                            @foreach($entry['accounts'] as $accountEntry)
                                <tr>
                                    <td>{{ $index + 1 }}</td>
                                    <td>{{ \Carbon\Carbon::parse($entry['entry_date'])->format('d-M-Y') }}</td>
                                    <td>{{ $accountEntry['code'] ?? '' }}</td>
                                    <td>{{ $entry['description'] ?? '' }}</td>
                                    <td>{!! formatPdfCurrency($accountEntry['debit'] ?? 0) !!}</td>
                                    <td>{!! formatPdfCurrency($accountEntry['credit'] ?? 0) !!}</td>
                                </tr>
                            @endforeach
                        @else
                            <tr>
                                <td>{{ $index + 1 }}</td>
                                <td>{{ \Carbon\Carbon::parse($entry['entry_date'])->format('d-M-Y') }}</td>
                                <td>{{ $entry['account_code'] ?? '' }}</td>
                                <td>{{ $entry['description'] ?? '' }}</td>
                                <td>{!! formatPdfCurrency($entry['debit_amount'] ?? 0) !!}</td>
                                <td>{!! formatPdfCurrency($entry['credit_amount'] ?? 0) !!}</td>
                            </tr>
                        @endif
                    @endforeach
                </tbody>
            </table>
        </div>
    @else
        <div class="alert alert-info">
            @lang('print.No entries found for the selected period.')
        </div>
    @endif
@endsection
