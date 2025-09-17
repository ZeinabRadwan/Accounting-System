@extends('pdf')

@section('content-area')
    <h3>@lang('Group Account Statement')</h3>
    
    @if(isset($reportData['chart_of_accounts']) && count($reportData['chart_of_accounts']) > 0)
        <div class="row mb-4">
            <div class="col-md-12">
                <h5>@lang('Selected Accounts')</h5>
                <div class="table-responsive">
                    <table class="table table-bordered table-sm">
                        <thead>
                            <tr>
                                <th>@lang('Code')</th>
                                <th>@lang('Name')</th>
                                <th>@lang('Type')</th>
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
                <h5>@lang('Summary')</h5>
                <div class="table-responsive">
                    <table class="table table-bordered table-sm">
                        <tr>
                            <td><strong>@lang('Total Opening Balance')</strong></td>
                            <td>@currency($reportData['summary']['total_opening_balance'] ?? 0) {{ $reportData['summary']['total_opening_balance_type'] ?? '' }}</td>
                        </tr>
                        <tr>
                            <td><strong>@lang('Total Period Debits')</strong></td>
                            <td>@currency($reportData['summary']['total_period_debits'] ?? 0)</td>
                        </tr>
                        <tr>
                            <td><strong>@lang('Total Period Credits')</strong></td>
                            <td>@currency($reportData['summary']['total_period_credits'] ?? 0)</td>
                        </tr>
                        <tr>
                            <td><strong>@lang('Total Closing Balance')</strong></td>
                            <td>@currency($reportData['summary']['total_closing_balance'] ?? 0) {{ $reportData['summary']['total_closing_balance_type'] ?? '' }}</td>
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
                        <th>@lang('Account')</th>
                        <th>@lang('Particulars')</th>
                        <th>@lang('Debit')</th>
                        <th>@lang('Credit')</th>
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
                                    <td>@currency($accountEntry['debit'] ?? 0)</td>
                                    <td>@currency($accountEntry['credit'] ?? 0)</td>
                                </tr>
                            @endforeach
                        @else
                            <tr>
                                <td>{{ $index + 1 }}</td>
                                <td>{{ \Carbon\Carbon::parse($entry['entry_date'])->format('d-M-Y') }}</td>
                                <td>{{ $entry['account_code'] ?? '' }}</td>
                                <td>{{ $entry['description'] ?? '' }}</td>
                                <td>@currency($entry['debit_amount'] ?? 0)</td>
                                <td>@currency($entry['credit_amount'] ?? 0)</td>
                            </tr>
                        @endif
                    @endforeach
                </tbody>
            </table>
        </div>
    @else
        <div class="alert alert-info">
            @lang('No entries found for the selected accounts and period.')
        </div>
    @endif
@endsection
