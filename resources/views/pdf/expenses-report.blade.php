@extends('pdf')

@section('content-area')
    <h3>@lang('Expense Report')</h3>
    
    <div class="row mb-4">
        <div class="col-md-6">
            @if(isset($reportData['category']))
                <strong>@lang('Category'):</strong> {{ $reportData['category'] }}<br>
            @endif
            @if(isset($reportData['subCategory']))
                <strong>@lang('Sub Category'):</strong> {{ $reportData['subCategory'] }}<br>
            @endif
        </div>
        <div class="col-md-6">
            <strong>@lang('Date'):</strong> {{ date('d-M-Y') }}<br>
            <strong>@lang('Date Range'):</strong> {{ $reportData['fromDate'] ?? '' }} - {{ $reportData['toDate'] ?? '' }}
        </div>
    </div>

    <div class="table-responsive">
        <table class="table-listing table table-bordered table-striped table-sm">
            <thead class="thead-light">
                <tr>
                    <th>@lang('#')</th>
                    <th>@lang('Date')</th>
                    <th>@lang('Expense Reason')</th>
                    <th>@lang('Category')</th>
                    <th>@lang('Sub Category')</th>
                    <th>@lang('Amount')</th>
                    <th>@lang('Account')</th>
                    <th>@lang('Status')</th>
                    <th>@lang('Created By')</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($reportData['expenses'] as $key => $expense)
                    <tr>
                        <td>{{ ++$key }}</td>
                        <td>{{ \Carbon\Carbon::parse($expense['date'])->format('d-M-Y') }}</td>
                        <td>{{ $expense['reason'] ?? '' }}</td>
                        <td>
                            @if(isset($expense['category']))
                                {{ $expense['category']['name'] ?? '' }}<br>
                                [{{ config('config.expCatPrefix') . '-' . $expense['category']['code'] ?? '' }}]
                            @endif
                        </td>
                        <td>
                            @if(isset($expense['subCategory']))
                                {{ $expense['subCategory']['name'] ?? '' }}<br>
                                [{{ config('config.expSubCatPrefix') . '-' . $expense['subCategory']['code'] ?? '' }}]
                            @endif
                        </td>
                        <td>
                            @if(isset($expense['transaction']))
                                @currency($expense['transaction']['amount'] ?? 0)
                            @endif
                        </td>
                        <td>
                            @if(isset($expense['account']))
                                {{ $expense['account']['accountNumber'] ?? '' }}
                            @endif
                        </td>
                        <td>
                            @if(isset($expense['status']))
                                @if($expense['status'] == 1)
                                    @lang('Active')
                                @else
                                    @lang('Inactive')
                                @endif
                            @endif
                        </td>
                        <td>{{ $expense['createdBy'] ?? '' }}</td>
                    </tr>
                @endforeach
                <tr>
                    <td colspan="5" class="text-right"><strong>@lang('Total')</strong></td>
                    <td colspan="4"><strong>@currency($reportData['totalAmount'] ?? 0)</strong></td>
                </tr>
            </tbody>
        </table>
    </div>
@endsection
