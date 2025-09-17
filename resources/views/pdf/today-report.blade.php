@extends('pdf')

@section('content-area')
    <h3>@lang('Today\'s Report') - {{ $reportData['reportDate'] }}</h3>
    
    <div class="row">
        <div class="col-md-6">
            <h4>@lang('Opening & Purchase Details')</h4>
            <div class="table-responsive">
                <table class="table-listing table table-bordered table-striped table-sm">
                    <tbody>
                        <tr>
                            <th>@lang('Opening Stock') <br><small class="text-muted">@lang('By purchase price')</small>:</th>
                            <td>@currency($reportData['openingStockByPurchasePrice'])</td>
                        </tr>
                        <tr>
                            <th>@lang('Opening Stock') <br><small class="text-muted">@lang('By sale price')</small>:</th>
                            <td>@currency($reportData['openingStockBySalePrice'])</td>
                        </tr>
                        <tr>
                            <th>@lang('Total Purchase'):</th>
                            <td>@currency($reportData['totalPurchase'])</td>
                        </tr>
                        <tr>
                            <th>@lang('Total Expense'):</th>
                            <td>@currency($reportData['expenses'])</td>
                        </tr>
                        <tr>
                            <th>@lang('Total Payroll'):</th>
                            <td>@currency($reportData['payrolls'])</td>
                        </tr>
                        <tr>
                            <th>@lang('Total Loan Interest'):</th>
                            <td>@currency($reportData['loanInterest'])</td>
                        </tr>
                        <tr>
                            <th>@lang('Asset Depreciation'):</th>
                            <td>@currency($reportData['assetDepriciation'])</td>
                        </tr>
                        <tr>
                            <th>@lang('Total Sell Discount'):</th>
                            <td>@currency($reportData['invoiceDiscount'])</td>
                        </tr>
                        <tr>
                            <th>@lang('Total Sell Return'):</th>
                            <td>@currency($reportData['invoiceReturn'])</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="col-md-6">
            <h4>@lang('Closing & Sales Details')</h4>
            <div class="table-responsive">
                <table class="table-listing table table-bordered table-striped table-sm">
                    <tbody>
                        <tr>
                            <th>@lang('Closing Stock') <br><small class="text-muted">@lang('By purchase price')</small>:</th>
                            <td>@currency($reportData['closingStockByPurchasePrice'])</td>
                        </tr>
                        <tr>
                            <th>@lang('Closing Stock') <br><small class="text-muted">@lang('By sale price')</small>:</th>
                            <td>@currency($reportData['closingStockBySalePrice'])</td>
                        </tr>
                        <tr>
                            <th>@lang('Total Sales'):</th>
                            <td>@currency($reportData['invoiceSales'])</td>
                        </tr>
                        <tr>
                            <th>@lang('Total Purchase Return'):</th>
                            <td>@currency($reportData['purchaseReturn'])</td>
                        </tr>
                        <tr>
                            <th>@lang('Total Purchase Discount'):</th>
                            <td>@currency($reportData['todayPurchaseDiscount'])</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <div class="row mt-4">
        <div class="col-md-12">
            <h4>@lang('Profit & Loss Summary')</h4>
            <div class="table-responsive">
                <table class="table-listing table table-bordered table-striped table-sm">
                    <tbody>
                        <tr>
                            <th>@lang('Gross Profit/Loss'):</th>
                            <td class="{{ $reportData['grossProfit'] >= 0 ? 'text-success' : 'text-danger' }}">
                                @currency(abs($reportData['grossProfit']))
                                @if($reportData['grossProfit'] >= 0)
                                    (@lang('Profit'))
                                @else
                                    (@lang('Loss'))
                                @endif
                            </td>
                        </tr>
                        <tr>
                            <th>@lang('Net Profit/Loss'):</th>
                            <td class="{{ $reportData['netProfit'] >= 0 ? 'text-success' : 'text-danger' }}">
                                @currency(abs($reportData['netProfit']))
                                @if($reportData['netProfit'] >= 0)
                                    (@lang('Profit'))
                                @else
                                    (@lang('Loss'))
                                @endif
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <div class="row mt-3">
        <div class="col-md-12">
            <p class="text-muted">
                <small>@lang('Report generated on') {{ now()->format('d-M-Y H:i:s') }}</small>
            </p>
        </div>
    </div>
@endsection

@section('page-style')
    <style>
        .text-success {
            color: #28a745 !important;
        }
        .text-danger {
            color: #dc3545 !important;
        }
        .text-muted {
            color: #6c757d !important;
        }
        .mt-3 {
            margin-top: 1rem !important;
        }
        .mt-4 {
            margin-top: 1.5rem !important;
        }
        .col-md-6 {
            width: 50%;
            float: left;
            padding: 0 15px;
        }
        .col-md-12 {
            width: 100%;
            clear: both;
            padding: 0 15px;
        }
        .row {
            clear: both;
            margin-bottom: 1rem;
        }
        .row::after {
            content: "";
            display: table;
            clear: both;
        }
        h4 {
            margin-bottom: 0.5rem;
            font-size: 1.1em;
            font-weight: 600;
        }
        .table-responsive {
            overflow-x: auto;
        }
    </style>
@endsection
