@extends('pdf')

@section('page-style')
    <style>
        body {
            font-family: "DejaVu Sans", "Arial Unicode MS", "Tahoma", sans-serif;
        }
        .currency-symbol {
            font-family: "DejaVu Sans", "Arial Unicode MS", "Tahoma", sans-serif;
        }
        .riyal-symbol {
            font-family: "DejaVu Sans", "Arial Unicode MS", "Tahoma", sans-serif;
        }
    </style>
@endsection

@section('content-area')
    @php
        function formatPdfCurrency($amount) {
            $formattedAmount = number_format($amount, 2, '.', ',');
            return $formattedAmount;
        }
    @endphp
    
    <h3>@lang('print.Cash Flow Analysis')</h3>
    
    <div class="row mb-4">
        <div class="col-md-6">
            <strong>@lang('print.Generated'):</strong> {{ date('d-M-Y') }}<br>
            @if(isset($filters['from_date']) && isset($filters['to_date']))
                <strong>@lang('print.Period'):</strong> {{ $filters['from_date'] }} - {{ $filters['to_date'] }}
            @endif
        </div>
        <div class="col-md-6">
            @if(isset($filters['branch_id']))
                <strong>@lang('Branch'):</strong> {{ \App\Models\Branch::find($filters['branch_id'])->name ?? '' }}<br>
            @endif
        </div>
    </div>

    @if(isset($summary))
        <div class="row mb-4">
            <div class="col-md-12">
                <h5>Summary</h5>
                <div class="table-responsive">
                    <table class="table table-bordered table-sm">
                        <tr>
                            <th>@lang('Opening Balance')</th>
                            <td class="text-right">{{ formatPdfCurrency($summary['opening_balance'] ?? 0) }}</td>
                        </tr>
                        <tr>
                            <th>@lang('Total Inflows')</th>
                            <td class="text-right text-success">{{ formatPdfCurrency($summary['total_inflows'] ?? 0) }}</td>
                        </tr>
                        <tr>
                            <th>@lang('Total Outflows')</th>
                            <td class="text-right text-danger">{{ formatPdfCurrency($summary['total_outflows'] ?? 0) }}</td>
                        </tr>
                        <tr>
                            <th>@lang('Net Cash Flow')</th>
                            <td class="text-right {{ ($summary['net_cash_flow'] ?? 0) >= 0 ? 'text-success' : 'text-danger' }}">
                                {{ formatPdfCurrency($summary['net_cash_flow'] ?? 0) }}
                            </td>
                        </tr>
                        <tr>
                            <th>@lang('Closing Balance')</th>
                            <td class="text-right"><strong>{{ formatPdfCurrency($summary['closing_balance'] ?? 0) }}</strong></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    @endif

    @if(isset($data) && count($data) > 0)
        <div class="row">
            <div class="col-md-12">
                <h5>Cash Flow by Analytical Account</h5>
                <div class="table-responsive">
                    <table class="table table-bordered table-sm">
                        <thead>
                            <tr>
                                <th>@lang('Analytical Account')</th>
                                <th class="text-right">@lang('Inflows')</th>
                                <th class="text-right">@lang('Outflows')</th>
                                <th class="text-right">@lang('Net Cash Flow')</th>
                                <th class="text-right">@lang('Inflow Transactions')</th>
                                <th class="text-right">@lang('Outflow Transactions')</th>
                                <th class="text-right">@lang('Total Transactions')</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($data as $item)
                                <tr>
                                    <td>
                                        @if(isset($item['analytical_account']))
                                            <strong>{{ $item['analytical_account']['code'] ?? '' }}</strong> - {{ $item['analytical_account']['name'] ?? '' }}
                                        @else
                                            -
                                        @endif
                                    </td>
                                    <td class="text-right">{{ formatPdfCurrency($item['inflows'] ?? 0) }}</td>
                                    <td class="text-right">{{ formatPdfCurrency($item['outflows'] ?? 0) }}</td>
                                    <td class="text-right {{ ($item['net_cash_flow'] ?? 0) >= 0 ? 'text-success' : 'text-danger' }}">
                                        {{ formatPdfCurrency($item['net_cash_flow'] ?? 0) }}
                                    </td>
                                    <td class="text-right">{{ $item['inflow_transactions'] ?? 0 }}</td>
                                    <td class="text-right">{{ $item['outflow_transactions'] ?? 0 }}</td>
                                    <td class="text-right">{{ $item['total_transactions'] ?? 0 }}</td>
                                </tr>
                            @endforeach
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>@lang('Total')</th>
                                <th class="text-right">{{ formatPdfCurrency($summary['total_inflows'] ?? 0) }}</th>
                                <th class="text-right">{{ formatPdfCurrency($summary['total_outflows'] ?? 0) }}</th>
                                <th class="text-right">{{ formatPdfCurrency($summary['net_cash_flow'] ?? 0) }}</th>
                                <th class="text-right">{{ array_sum(array_column($data, 'inflow_transactions')) }}</th>
                                <th class="text-right">{{ array_sum(array_column($data, 'outflow_transactions')) }}</th>
                                <th class="text-right">{{ array_sum(array_column($data, 'total_transactions')) }}</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    @else
        <div class="row">
            <div class="col-md-12">
                <p class="text-center">@lang('No data available for the selected period')</p>
            </div>
        </div>
    @endif
@endsection

