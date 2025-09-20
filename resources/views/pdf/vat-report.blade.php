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
        if (!function_exists('formatPdfCurrency')) {
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
    }
    @endphp
    
    <h3>@lang('print.VAT Report')</h3>
    
    <div class="row mb-4">
        <div class="col-md-6">
            <strong>@lang('print.Generated'):</strong> {{ date('d-M-Y') }}<br>
            @if(isset($reportData['filters']['from_date']) && isset($reportData['filters']['to_date']))
                <strong>@lang('print.Period'):</strong> {{ $reportData['filters']['from_date'] }} - {{ $reportData['filters']['to_date'] }}
        @endif
        </div>
    </div>

    <!-- VAT Summary -->
    @if(isset($reportData['summary']) && count($reportData['summary']) > 0)
        <div class="row mb-4">
            <div class="col-md-12">
                <h5>@lang('print.VAT Summary')</h5>
                <div class="table-responsive">
                    <table class="table table-bordered table-sm">
                <thead>
                    <tr>
                                <th>@lang('print.VAT Rate')</th>
                                <th>@lang('print.Rate %')</th>
                                <th>@lang('print.Sales VAT')</th>
                                <th>@lang('print.Purchase VAT')</th>
                                <th>@lang('print.Journal VAT')</th>
                                <th>@lang('print.Net VAT')</th>
                    </tr>
                </thead>
                <tbody>
                            @foreach ($reportData['summary'] as $summary)
                        <tr>
                            <td>
                                <strong>{{ $summary['vat_rate_name'] ?? '' }}</strong><br>
                                        <small>{{ $summary['vat_rate_code'] ?? '' }}</small>
                            </td>
                                    <td>{{ $summary['vat_rate_percentage'] ?? 0 }}%</td>
                                    <td>{!! formatPdfCurrency($summary['sales_vat'] ?? 0) !!}</td>
                                    <td>{!! formatPdfCurrency($summary['purchase_vat'] ?? 0) !!}</td>
                                    <td>{!! formatPdfCurrency($summary['journal_vat'] ?? 0) !!}</td>
                                    <td>
                                        @if(($summary['net_vat'] ?? 0) >= 0)
                                            <span style="color: #059669;">
                                                {!! formatPdfCurrency($summary['net_vat'] ?? 0) !!}
                                            </span>
                                        @else
                                            <span style="color: #dc2626;">
                                                ({!! formatPdfCurrency(abs($summary['net_vat'] ?? 0)) !!})
                                            </span>
                                        @endif
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
            </div>
        </div>
    @endif

        <!-- VAT Transactions -->
    @if(isset($reportData['transactions']) && count($reportData['transactions']) > 0)
        <div class="row mb-4">
            <div class="col-md-12">
                <h5>@lang('print.VAT Transactions')</h5>
                <div class="table-responsive">
                    <table class="table-listing table table-bordered table-striped table-sm">
                        <thead class="thead-light">
                            <tr>
                                <th>@lang('print.Date')</th>
                                <th>@lang('print.Reference')</th>
                                <th>@lang('print.Client/Supplier')</th>
                                <th>@lang('print.Type')</th>
                                <th>@lang('print.Source')</th>
                                <th>@lang('print.VAT Amount')</th>
                    </tr>
                </thead>
                <tbody>
                            @foreach ($reportData['transactions'] as $transaction)
                        <tr>
                            <td>{{ $transaction['date'] ?? '' }}</td>
                            <td>{{ $transaction['reference'] ?? '' }}</td>
                            <td>{{ $transaction['client_supplier'] ?? '' }}</td>
                                    <td>{{ $transaction['type'] ?? '' }}</td>
                                    <td>{{ $transaction['source'] ?? '' }}</td>
                                    <td>{!! formatPdfCurrency($transaction['vat_amount'] ?? 0) !!}</td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>

                <div style="text-align: center; color: #6b7280; margin-top: 15px;">
                    @lang('print.Total transactions'): {{ count($reportData['transactions']) }}
                </div>
            </div>
        </div>
    @endif

    @if((!isset($reportData['summary']) || count($reportData['summary']) === 0) && (!isset($reportData['transactions']) || count($reportData['transactions']) === 0))
        <div class="alert alert-info">
            @lang('print.No VAT data found for the selected period.')
    </div>
    @endif
@endsection