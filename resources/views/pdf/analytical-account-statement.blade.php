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
    
    <h3>@lang('print.Analytical Account Statement')</h3>
    
    @if(isset($reportData['analytical_account']))
        <div class="row mb-4">
            <div class="col-md-6">
                <strong>@lang('print.Analytical Account'):</strong> {{ $reportData['analytical_account']['code'] ?? '' }} - {{ $reportData['analytical_account']['name'] ?? '' }}<br>
                <strong>@lang('Account Type'):</strong> {{ $reportData['analytical_account']['type'] ?? '' }}
            </div>
            <div class="col-md-6">
                <strong>@lang('print.Generated'):</strong> {{ date('d-M-Y') }}<br>
                @if(isset($reportData['filters']['from_date']) && isset($reportData['filters']['to_date']))
                    <strong>@lang('print.Period'):</strong> {{ $reportData['filters']['from_date'] }} - {{ $reportData['filters']['to_date'] }}
                @endif
            </div>
        </div>
    @endif

    @if(isset($reportData['summary']))
        <div class="row mb-4">
            <div class="col-md-12">
                <h5>Summary</h5>
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
                        <th>@lang('print.Description')</th>
                        <th>@lang('print.Reference')</th>
                        <th>@lang('print.Chart of Account')</th>
                        <th>@lang('print.Debit')</th>
                        <th>@lang('print.Credit')</th>
                        <th>@lang('print.Running Balance')</th>
                        <th>@lang('print.Balance Type')</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($reportData['entries'] as $index => $entry)
                        <tr>
                            <td>{{ $index + 1 }}</td>
                            <td>{{ \Carbon\Carbon::parse($entry['entry_date'] ?? $entry['date'] ?? '')->format('d-M-Y') }}</td>
                            <td>{{ $entry['description'] ?? $entry['particulars'] ?? '' }}</td>
                            <td>{{ $entry['reference'] ?? '' }}</td>
                            <td>
                                @if(isset($entry['account_code']) && isset($entry['account_name']))
                                    {{ $entry['account_code'] }} - {{ $entry['account_name'] }}
                                @else
                                    -
                                @endif
                            </td>
                            <td>{!! formatPdfCurrency($entry['debit_amount'] ?? $entry['debit'] ?? 0) !!}</td>
                            <td>{!! formatPdfCurrency($entry['credit_amount'] ?? $entry['credit'] ?? 0) !!}</td>
                            <td>{!! formatPdfCurrency($entry['running_balance'] ?? $entry['balance'] ?? 0) !!}</td>
                            <td>
                                @if(($entry['balance_type'] ?? '') === 'Debit')
                                    @lang('print.Debit')
                                @elseif(($entry['balance_type'] ?? '') === 'Credit')
                                    @lang('print.Credit')
                                @else
                                    {{ $entry['balance_type'] ?? '-' }}
                                @endif
                            </td>
                        </tr>
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

