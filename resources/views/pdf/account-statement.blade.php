@extends('pdf')

@section('content-area')
    <h3>@lang('print.Account Statement')</h3>
    
    @if(isset($reportData['chart_of_account']))
        <div class="row mb-4">
            <div class="col-md-6">
                <strong>@lang('print.Account'):</strong> {{ $reportData['chart_of_account']['code'] ?? '' }} - {{ $reportData['chart_of_account']['name'] ?? '' }}<br>
                <strong>@lang('Account Type'):</strong> {{ $reportData['chart_of_account']['type'] ?? '' }}
            </div>
            <div class="col-md-6">
                <strong>@lang('print.Generated'):</strong> {{ date('d-M-Y') }}<br>
                @if(isset($reportData['filters']['from_date']) && isset($reportData['filters']['to_date']))
                    <strong>@lang('print.Period'):</strong> {{ $reportData['filters']['from_date'] }} - {{ $reportData['filters']['to_date'] }}
                @endif
            </div>
        </div>
    @endif

    @if(isset($reportData['report_account']) && $reportData['report_account']['id'] !== $reportData['chart_of_account']['id'])
        <div class="row mb-4">
            <div class="col-md-12">
                <h5>@lang('print.Sub Account')</h5>
                <strong>@lang('print.Sub Account'):</strong> {{ $reportData['report_account']['code'] ?? '' }} - {{ $reportData['report_account']['name'] ?? '' }}<br>
                <strong>@lang('Account Type'):</strong> {{ $reportData['report_account']['type'] ?? '' }}
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
                            <td>@currency($reportData['summary']['opening_balance'] ?? 0) 
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
                            <td>@currency($reportData['summary']['period_debits'] ?? 0)</td>
                        </tr>
                        <tr>
                            <td><strong>@lang('print.Period Credits')</strong></td>
                            <td>@currency($reportData['summary']['period_credits'] ?? 0)</td>
                        </tr>
                        <tr>
                            <td><strong>@lang('print.Closing Balance')</strong></td>
                            <td>@currency($reportData['summary']['closing_balance'] ?? 0) 
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
        @if(isset($reportData['total_entries_note']))
            <div style="background-color: #fff3cd; border: 1px solid #ffeaa7; padding: 10px; margin-bottom: 10px; border-radius: 4px;">
                <strong>Note:</strong> {{ $reportData['total_entries_note'] }}
            </div>
        @endif
        <div class="table-responsive">
            <table class="table-listing table table-bordered table-striped table-sm">
                <thead class="thead-light">
                    <tr>
                        <th>@lang('print.Row Number')</th>
                        <th>@lang('print.Date')</th>
                        <th>@lang('print.Description')</th>
                        <th>@lang('print.Reference')</th>
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
                            <td>@currency($entry['debit_amount'] ?? $entry['debit'] ?? 0)</td>
                            <td>@currency($entry['credit_amount'] ?? $entry['credit'] ?? 0)</td>
                            <td>@currency($entry['running_balance'] ?? $entry['balance'] ?? 0)</td>
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