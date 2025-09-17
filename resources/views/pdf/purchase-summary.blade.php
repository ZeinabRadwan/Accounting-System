@extends('pdf')

@section('content-area')
    <h3>@lang('Purchase Summary Report')</h3>
    
    <div class="row mb-4">
        <div class="col-md-6">
            <strong>@lang('Date'):</strong> {{ date('d-M-Y') }}<br>
            @if(isset($reportData['filters']['from_date']) && isset($reportData['filters']['to_date']))
                <strong>@lang('Period'):</strong> {{ $reportData['filters']['from_date'] }} - {{ $reportData['filters']['to_date'] }}
            @elseif(isset($reportData['filters']['fiscal_year_id']))
                <strong>@lang('Fiscal Year ID'):</strong> {{ $reportData['filters']['fiscal_year_id'] }}
            @elseif(isset($reportData['filters']['accounting_period_id']))
                <strong>@lang('Accounting Period ID'):</strong> {{ $reportData['filters']['accounting_period_id'] }}
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
                            <td><strong>@lang('Total Purchases')</strong></td>
                            <td>{{ $reportData['summary']['total_purchases'] ?? 0 }}</td>
                            <td><strong>@lang('Total Amount')</strong></td>
                            <td>@currency($reportData['summary']['total_amount'] ?? 0)</td>
                        </tr>
                        <tr>
                            <td><strong>@lang('Paid Amount')</strong></td>
                            <td>@currency($reportData['summary']['total_paid'] ?? 0)</td>
                            <td><strong>@lang('Unpaid Amount')</strong></td>
                            <td>@currency($reportData['summary']['total_due'] ?? 0)</td>
                        </tr>
                        <tr>
                            <td><strong>@lang('Total Discount')</strong></td>
                            <td>@currency($reportData['summary']['total_discount'] ?? 0)</td>
                            <td><strong>@lang('Total Tax')</strong></td>
                            <td>@currency($reportData['summary']['total_tax'] ?? 0)</td>
                        </tr>
                        <tr>
                            <td><strong>@lang('Total Returns')</strong></td>
                            <td>{{ $reportData['summary']['total_returns'] ?? 0 }}</td>
                            <td><strong>@lang('Net Purchases')</strong></td>
                            <td>@currency($reportData['summary']['net_purchases'] ?? 0)</td>
                        </tr>
                        <tr>
                            <td><strong>@lang('Payment Percentage')</strong></td>
                            <td>{{ $reportData['summary']['payment_percentage'] ?? 0 }}%</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    @endif

    @if(isset($reportData['supplier_summary']) && count($reportData['supplier_summary']) > 0)
        <div class="table-responsive">
            <h5>@lang('Supplier Summary')</h5>
            <table class="table-listing table table-bordered table-striped table-sm">
                <thead class="thead-light">
                    <tr>
                        <th>@lang('#')</th>
                        <th>@lang('Supplier Name')</th>
                        <th>@lang('Phone')</th>
                        <th>@lang('Purchase Count')</th>
                        <th>@lang('Total Amount')</th>
                        <th>@lang('Paid Amount')</th>
                        <th>@lang('Due Amount')</th>
                        <th>@lang('Discount')</th>
                        <th>@lang('Tax')</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($reportData['supplier_summary'] as $index => $supplier)
                        <tr>
                            <td>{{ $index + 1 }}</td>
                            <td>{{ $supplier['supplier_name'] ?? '' }}</td>
                            <td>{{ $supplier['supplier_phone'] ?? '-' }}</td>
                            <td>{{ $supplier['purchase_count'] ?? 0 }}</td>
                            <td>@currency($supplier['total_amount'] ?? 0)</td>
                            <td>@currency($supplier['paid_amount'] ?? 0)</td>
                            <td>@currency($supplier['due_amount'] ?? 0)</td>
                            <td>@currency($supplier['discount_amount'] ?? 0)</td>
                            <td>@currency($supplier['tax_amount'] ?? 0)</td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    @else
        <div class="alert alert-info">
            @lang('No suppliers found for the selected period.')
        </div>
    @endif

    @if(isset($reportData['monthly_summary']) && count($reportData['monthly_summary']) > 0)
        <div class="table-responsive mt-4">
            <h5>@lang('Monthly Summary')</h5>
            <table class="table-listing table table-bordered table-striped table-sm">
                <thead class="thead-light">
                    <tr>
                        <th>@lang('Month')</th>
                        <th>@lang('Purchase Count')</th>
                        <th>@lang('Total Amount')</th>
                        <th>@lang('Paid Amount')</th>
                        <th>@lang('Due Amount')</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($reportData['monthly_summary'] as $month)
                        <tr>
                            <td>{{ $month['month_name'] ?? '' }}</td>
                            <td>{{ $month['purchase_count'] ?? 0 }}</td>
                            <td>@currency($month['total_amount'] ?? 0)</td>
                            <td>@currency($month['paid_amount'] ?? 0)</td>
                            <td>@currency($month['due_amount'] ?? 0)</td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    @endif

    @if(isset($reportData['return_purchases']) && count($reportData['return_purchases']) > 0)
        <div class="table-responsive mt-4">
            <h5>@lang('Purchase Returns Summary')</h5>
            <table class="table-listing table table-bordered table-striped table-sm">
                <thead class="thead-light">
                    <tr>
                        <th>@lang('Purchase #')</th>
                        <th>@lang('Supplier')</th>
                        <th>@lang('Purchase Date')</th>
                        <th>@lang('Original Amount')</th>
                        <th>@lang('Return Amount')</th>
                        <th>@lang('Return Count')</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($reportData['return_purchases'] as $returnData)
                        <tr>
                            <td>{{ $returnData['purchase']['purchase_no'] ?? '' }}</td>
                            <td>{{ $returnData['purchase']['supplier']['name'] ?? '-' }}</td>
                            <td>{{ isset($returnData['purchase']['purchase_date']) ? date('d-M-Y', strtotime($returnData['purchase']['purchase_date'])) : '-' }}</td>
                            <td>@currency($returnData['purchase']['sub_total'] ?? 0)</td>
                            <td>@currency($returnData['return_amount'] ?? 0)</td>
                            <td>{{ count($returnData['returns'] ?? []) }}</td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    @endif
@endsection
