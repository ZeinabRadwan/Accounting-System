@extends('pdf')

@section('content-area')
    <h3>@lang('Account Statement')</h3>
    
    @if(isset($reportData['chart_of_account']))
        <div class="row mb-4">
            <div class="col-md-6">
                <strong>@lang('Account Code'):</strong> {{ $reportData['chart_of_account']['code'] ?? '' }}<br>
                <strong>@lang('Account Name'):</strong> {{ $reportData['chart_of_account']['name'] ?? '' }}<br>
                <strong>@lang('Account Type'):</strong> {{ $reportData['chart_of_account']['type'] ?? '' }}
            </div>
            <div class="col-md-6">
                <strong>@lang('Date'):</strong> {{ date('d-M-Y') }}<br>
                @if(isset($reportData['filters']['from_date']) && isset($reportData['filters']['to_date']))
                    <strong>@lang('Period'):</strong> {{ $reportData['filters']['from_date'] }} - {{ $reportData['filters']['to_date'] }}
                @endif
            </div>
        </div>
    @endif

    @if(isset($reportData['report_account']) && $reportData['report_account']['id'] !== $reportData['chart_of_account']['id'])
        <div class="row mb-4">
            <div class="col-md-12">
                <h5>@lang('Sub Account Details')</h5>
                <strong>@lang('Sub Account Code'):</strong> {{ $reportData['report_account']['code'] ?? '' }}<br>
                <strong>@lang('Sub Account Name'):</strong> {{ $reportData['report_account']['name'] ?? '' }}<br>
                <strong>@lang('Sub Account Type'):</strong> {{ $reportData['report_account']['type'] ?? '' }}
            </div>
        </div>
    @endif

    @if(isset($reportData['summary']))
        <div class="row mb-4">
            <div class="col-md-12">
                <h5>@lang('Summary')</h5>
                <div class="table-responsive">
                    <table class="table table-bordered table-sm">
                        <tr>
                            <td><strong>@lang('Opening Balance')</strong></td>
                            <td>{{ $reportData['summary']['opening_balance'] ?? 0 | withAbsoluteCurrency }} {{ $reportData['summary']['opening_balance_type'] ?? '' }}</td>
                        </tr>
                        <tr>
                            <td><strong>@lang('Period Debits')</strong></td>
                            <td>{{ $reportData['summary']['period_debits'] ?? 0 | withAbsoluteCurrency }}</td>
                        </tr>
                        <tr>
                            <td><strong>@lang('Period Credits')</strong></td>
                            <td>{{ $reportData['summary']['period_credits'] ?? 0 | withAbsoluteCurrency }}</td>
                        </tr>
                        <tr>
                            <td><strong>@lang('Closing Balance')</strong></td>
                            <td>{{ $reportData['summary']['closing_balance'] ?? 0 | withAbsoluteCurrency }} {{ $reportData['summary']['closing_balance_type'] ?? '' }}</td>
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
                        <th>@lang('#')</th>
                        <th>@lang('Date')</th>
                        <th>@lang('Particulars')</th>
                        <th>@lang('Debit')</th>
                        <th>@lang('Credit')</th>
                        <th>@lang('Balance')</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($reportData['entries'] as $index => $entry)
                        <tr>
                            <td>{{ $index + 1 }}</td>
                            <td>{{ \Carbon\Carbon::parse($entry['date'])->format('d-M-Y') }}</td>
                            <td>{{ $entry['particulars'] ?? '' }}</td>
                            <td>@currency($entry['debit'] ?? 0)</td>
                            <td>@currency($entry['credit'] ?? 0)</td>
                            <td>@currency($entry['balance'] ?? 0)</td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    @else
        <div class="alert alert-info">
            @lang('No entries found for the selected period.')
        </div>
    @endif
@endsection
