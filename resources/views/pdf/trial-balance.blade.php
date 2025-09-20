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
        // Custom currency formatter for PDF to fix riyal symbol display
        function formatPdfCurrency($amount) {
            $currencySymbol = config('config.currencySymbol');
            $currencyPosition = config('config.currencyPosition');
            $formattedAmount = number_format($amount, 2, '.', ',');
            
            // Replace the problematic 'ê' with proper riyal symbol
            if ($currencySymbol === 'ê') {
                $currencySymbol = '﷼'; // Proper Saudi Riyal symbol
            }
            
            if ($currencyPosition == 'left') {
                return '<span class="currency-symbol">' . $currencySymbol . '</span>' . $formattedAmount;
            } else {
                return $formattedAmount . '<span class="currency-symbol">' . $currencySymbol . '</span>';
            }
        }
    @endphp
    
    <h3>@lang('print.Trial Balance')</h3>
    
    <div class="row mb-4">
        <div class="col-md-6">
            <strong>@lang('print.Generated'):</strong> {{ date('d-M-Y') }}<br>
            @if(isset($reportData['filters']['from_date']) && isset($reportData['filters']['to_date']))
                <strong>@lang('print.Period'):</strong> {{ $reportData['filters']['from_date'] }} - {{ $reportData['filters']['to_date'] }}
            @endif
        </div>
    </div>

    @if(isset($reportData['trial_balance']) && count($reportData['trial_balance']) > 0)
        <div class="table-responsive">
            <table class="table-listing table table-bordered table-striped table-sm">
                <thead class="thead-light">
                    <tr>
                        <th>@lang('print.Account Name')</th>
                        <th>@lang('print.Code')</th>
                        <th>@lang('print.Debit')</th>
                        <th>@lang('print.Credit')</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($reportData['trial_balance'] as $account)
                        <tr>
                            <td>{{ $account['name'] ?? '' }}</td>
                            <td>{{ $account['code'] ?? '' }}</td>
                            <td>
                                @if(isset($account['closing_debit']) && $account['closing_debit'] > 0)
                                    {!! formatPdfCurrency($account['closing_debit']) !!}
                                @else
                                    -
                                @endif
                            </td>
                            <td>
                                @if(isset($account['closing_credit']) && $account['closing_credit'] > 0)
                                    {!! formatPdfCurrency($account['closing_credit']) !!}
                                @else
                                    -
                                @endif
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>

        @if(isset($reportData['grand_totals']))
            <div class="row mt-4">
                <div class="col-md-12">
                    <h5>@lang('print.Summary')</h5>
                    <div class="table-responsive">
                        <table class="table table-bordered table-sm">
                            <tr>
                                <td><strong>@lang('print.Total Debit')</strong></td>
                                <td>{!! formatPdfCurrency($reportData['grand_totals']['total_debit'] ?? 0) !!}</td>
                            </tr>
                            <tr>
                                <td><strong>@lang('print.Total Credit')</strong></td>
                                <td>{!! formatPdfCurrency($reportData['grand_totals']['total_credit'] ?? 0) !!}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        @endif

        <div style="text-align: center; color: #6b7280; margin-top: 15px;">
            @lang('print.Total accounts'): {{ count($reportData['trial_balance']) }}
        </div>
    @else
        <div class="alert alert-info">
            @lang('print.No accounts found for the selected period.')
        </div>
    @endif
@endsection
