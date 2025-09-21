@extends('pdf')

@section('content-area')
    <h3>@lang('Chart of Accounts')</h3>
    <div class="table-responsive">
        <table class="table-listing table table-bordered table-striped table-sm">
            <thead class="thead-light">
                <tr>
                    <th>@lang('#')</th>
                    <th>@lang('Account Code')</th>
                    <th>@lang('Account Name')</th>
                    <th>@lang('Account Type')</th>
                    <th>@lang('Parent Account')</th>
                    <th>@lang('Balance')</th>
                    <th>@lang('Balance Type')</th>
                    <th>@lang('Status')</th>
                    <th>@lang('Created By')</th>
                    <th>@lang('Date Created')</th>
                </tr>
            </thead>
            <tbody>
                @php
                    $totalBalance = 0;
                @endphp
                @foreach ($chartOfAccounts as $key => $account)
                    @php
                        $chartOfAccount = \App\Models\ChartOfAccount::find($account['id']);
                        $balance = $chartOfAccount ? $chartOfAccount->getBalance() : 0;
                        $balanceType = $chartOfAccount ? $chartOfAccount->getBalanceType() : 'Debit';
                        $totalBalance += abs($balance);
                    @endphp
                    <tr>
                        <td>{{ ++$key }}</td>
                        <td>{{ $account['code'] ?? 'N/A' }}</td>
                        <td>{{ $account['name'] ?? 'N/A' }}</td>
                        <td>{{ $account['type']['name'] ?? 'N/A' }}</td>
                        <td>{{ $account['parent']['name'] ?? 'None' }}</td>
                        <td>
                            @currency(abs($balance))
                        </td>
                        <td>{{ $balanceType }}</td>
                        <td>
                            @if ($account['is_active'])
                                @lang('Active')
                            @else
                                @lang('Inactive')
                            @endif
                        </td>
                        <td>{{ $account['creator']['name'] ?? 'N/A' }}</td>
                        <td>{{ isset($account['created_at']) ? \Carbon\Carbon::parse($account['created_at'])->format('Y-m-d') : 'N/A' }}</td>
                    </tr>
                @endforeach
            </tbody>
            <tfoot>
                <tr class="font-weight-bold">
                    <td colspan="5" class="text-right"><strong>@lang('Total Balance'):</strong></td>
                    <td><strong>@currency($totalBalance)</strong></td>
                    <td colspan="4"></td>
                </tr>
            </tfoot>
        </table>
    </div>
@endsection
