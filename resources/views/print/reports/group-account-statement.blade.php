@extends('print.layout')

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
        
        /* Print styles */
        .action-buttons {
            margin: 20px 0;
            text-align: center;
        }
        
        .print-button, .pdf-button {
            background: #007bff;
            color: white;
            border: none;
            padding: 10px 20px;
            margin: 0 10px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 14px;
            text-decoration: none;
            display: inline-block;
        }
        
        .pdf-button {
            background: #28a745;
        }
        
        .print-button:hover {
            background: #0056b3;
            color: white;
            text-decoration: none;
        }
        
        .pdf-button:hover {
            background: #1e7e34;
            color: white;
            text-decoration: none;
        }
        
        @media print {
            .no-print, .action-buttons {
                display: none !important;
            }
        }
    </style>
@endsection

@section('content')
    @php
        $currentLocale = app()->getLocale();
        $isRTL = $currentLocale === 'ar';
        
        // Custom currency formatter for PDF - no currency symbols as requested
        function formatPdfCurrency($amount) {
            $formattedAmount = number_format($amount, 2, '.', ',');
            return $formattedAmount; // Return only the amount without currency symbol
        }
        
        // Get colors from template configuration
        $colors = $template->colors ?? [
            'primary' => '#2563eb',
            'secondary' => '#6b7280',
            'background' => '#ffffff'
        ];
    @endphp
    
    <div class="container" style="direction: {{ $isRTL ? 'rtl' : 'ltr' }};">
        <!-- Action Buttons -->
        <div class="action-buttons no-print">
            <button class="print-button" onclick="window.print()">
                <i class="fas fa-print"></i> @lang('print.Print')
            </button>
            <button class="pdf-button" onclick="downloadPDF()">
                <i class="fas fa-download"></i> @lang('print.Download PDF')
            </button>
        </div>

        <!-- Header Section -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; {{ $isRTL ? 'flex-direction: row-reverse;' : '' }}">
            @if($template && $template->logo_url)
                <div style="flex: 1;">
                    <img src="{{ $template->logo_url }}" alt="@lang('print.Company Logo')" style="max-height: 80px; width: auto;">
                </div>
            @endif
            <div style="flex: 2; text-align: {{ $isRTL ? 'left' : 'right' }};">
                <h1 style="color: {{ $colors['primary'] ?? '#2563eb' }}; margin: 0; font-size: 28px;" class="arabic-text">
                    @lang('print.Group Account Statement')
                </h1>
                <p style="color: {{ $colors['secondary'] ?? '#6b7280' }}; margin: 5px 0;" class="arabic-text">
                    @lang('print.This report was generated on') {{ date('d-M-Y H:i:s') }}
                </p>
            </div>
        </div>

        <!-- Account Information -->
        @if(isset($groupStatementData['chart_of_accounts']) && count($groupStatementData['chart_of_accounts']) > 0)
            <div style="margin-bottom: 30px;">
                <h3 style="color: {{ $colors['primary'] ?? '#2563eb' }}; border-bottom: 2px solid {{ $colors['primary'] ?? '#2563eb' }}; padding-bottom: 10px;" class="arabic-text">
                    @lang('print.Selected Accounts')
                </h3>
                <div style="display: flex; {{ $isRTL ? 'flex-direction: row-reverse;' : '' }} flex-wrap: wrap; gap: 20px;">
                    @foreach($groupStatementData['chart_of_accounts'] as $account)
                        <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; border-left: 4px solid {{ $colors['primary'] ?? '#2563eb' }}; flex: 1; min-width: 200px;">
                            <strong style="color: {{ $colors['primary'] ?? '#2563eb' }};" class="arabic-text">@lang('print.Account'):</strong> 
                            <span class="arabic-text">{{ $account['code'] ?? '' }} - {{ $account['name'] ?? '' }}</span><br>
                            <strong style="color: {{ $colors['secondary'] ?? '#6b7280' }};" class="arabic-text">@lang('Account Type'):</strong> 
                            <span class="arabic-text">{{ $account['type'] ?? '' }}</span>
                        </div>
                    @endforeach
                </div>
            </div>
        @endif

        <!-- Filters Information -->
        @if(isset($groupStatementData['filters']))
            <div style="margin-bottom: 30px;">
                <h3 style="color: {{ $colors['primary'] ?? '#2563eb' }}; border-bottom: 2px solid {{ $colors['primary'] ?? '#2563eb' }}; padding-bottom: 10px;" class="arabic-text">
                    @lang('print.Report Filters')
                </h3>
                <div style="display: flex; {{ $isRTL ? 'flex-direction: row-reverse;' : '' }} flex-wrap: wrap; gap: 20px;">
                    @if(isset($groupStatementData['filters']['from_date']) && isset($groupStatementData['filters']['to_date']))
                        <div style="background: #f8f9fa; padding: 15px; border-radius: 8px;">
                            <strong style="color: {{ $colors['primary'] ?? '#2563eb' }};" class="arabic-text">@lang('print.Period'):</strong> 
                            <span class="arabic-text">{{ $groupStatementData['filters']['from_date'] }} - {{ $groupStatementData['filters']['to_date'] }}</span>
                        </div>
                    @endif
                </div>
            </div>
        @endif

        <!-- Summary Section -->
        @if(isset($groupStatementData['summary']))
            <div style="margin-bottom: 30px;">
                <h3 style="color: {{ $colors['primary'] ?? '#2563eb' }}; border-bottom: 2px solid {{ $colors['primary'] ?? '#2563eb' }}; padding-bottom: 10px;" class="arabic-text">
                    @lang('print.Summary')
                </h3>
                <div style="display: flex; {{ $isRTL ? 'flex-direction: row-reverse;' : '' }} flex-wrap: wrap; gap: 20px;">
                    <div style="background: #dcfce7; padding: 20px; border-radius: 8px; text-align: center; flex: 1; min-width: 150px;">
                        <h4 style="margin: 0; color: #166534;" class="arabic-text">@lang('print.Opening Balance')</h4>
                        <p style="font-size: 18px; font-weight: bold; margin: 5px 0; color: #166534;">
                            {!! formatPdfCurrency($groupStatementData['summary']['opening_balance'] ?? 0) !!}
                        </p>
                        <small style="color: #166534;" class="arabic-text">
                            @if(($groupStatementData['summary']['opening_balance_type'] ?? '') === 'Debit')
                                @lang('print.Debit')
                            @elseif(($groupStatementData['summary']['opening_balance_type'] ?? '') === 'Credit')
                                @lang('print.Credit')
                            @else
                                {{ $groupStatementData['summary']['opening_balance_type'] ?? '' }}
                            @endif
                        </small>
                    </div>
                    <div style="background: #dbeafe; padding: 20px; border-radius: 8px; text-align: center; flex: 1; min-width: 150px;">
                        <h4 style="margin: 0; color: #1e40af;" class="arabic-text">@lang('print.Period Debits')</h4>
                        <p style="font-size: 18px; font-weight: bold; margin: 5px 0; color: #1e40af;">
                            {!! formatPdfCurrency($groupStatementData['summary']['period_debits'] ?? 0) !!}
                        </p>
                    </div>
                    <div style="background: #fef3c7; padding: 20px; border-radius: 8px; text-align: center; flex: 1; min-width: 150px;">
                        <h4 style="margin: 0; color: #92400e;" class="arabic-text">@lang('print.Period Credits')</h4>
                        <p style="font-size: 18px; font-weight: bold; margin: 5px 0; color: #92400e;">
                            {!! formatPdfCurrency($groupStatementData['summary']['period_credits'] ?? 0) !!}
                        </p>
                    </div>
                    <div style="background: #fee2e2; padding: 20px; border-radius: 8px; text-align: center; flex: 1; min-width: 150px;">
                        <h4 style="margin: 0; color: #991b1b;" class="arabic-text">@lang('print.Closing Balance')</h4>
                        <p style="font-size: 18px; font-weight: bold; margin: 5px 0; color: #991b1b;">
                            {!! formatPdfCurrency($groupStatementData['summary']['closing_balance'] ?? 0) !!}
                        </p>
                        <small style="color: #991b1b;" class="arabic-text">
                            @if(($groupStatementData['summary']['closing_balance_type'] ?? '') === 'Debit')
                                @lang('print.Debit')
                            @elseif(($groupStatementData['summary']['closing_balance_type'] ?? '') === 'Credit')
                                @lang('print.Credit')
                            @else
                                {{ $groupStatementData['summary']['closing_balance_type'] ?? '' }}
                            @endif
                        </small>
                    </div>
                </div>
            </div>
        @endif

        <!-- Entries Table -->
        @if(isset($groupStatementData['entries']) && count($groupStatementData['entries']) > 0)
            <div style="margin-bottom: 30px;">
                <h3 style="color: {{ $colors['primary'] ?? '#2563eb' }}; border-bottom: 2px solid {{ $colors['primary'] ?? '#2563eb' }}; padding-bottom: 10px;" class="arabic-text">
                    @lang('print.Transaction Details')
                </h3>
                <div style="overflow-x: auto;">
                    <table style="width: 100%; border-collapse: collapse; font-size: 12px;">
                        <thead>
                            <tr style="background: {{ $colors['primary'] ?? '#2563eb' }}; color: white;">
                                <th style="padding: 12px; text-align: center; border: 1px solid #e5e7eb;" class="arabic-text">
                                    @lang('print.Row Number')
                                </th>
                                <th style="padding: 12px; text-align: center; border: 1px solid #e5e7eb;" class="arabic-text">
                                    @lang('print.Date')
                                </th>
                                <th style="padding: 12px; text-align: center; border: 1px solid #e5e7eb;" class="arabic-text">
                                    @lang('print.Entry #')
                                </th>
                                <th style="padding: 12px; text-align: center; border: 1px solid #e5e7eb;" class="arabic-text">
                                    @lang('print.Reference')
                                </th>
                                <th style="padding: 12px; text-align: center; border: 1px solid #e5e7eb;" class="arabic-text">
                                    @lang('print.Description')
                                </th>
                                <th style="padding: 12px; text-align: center; border: 1px solid #e5e7eb;" class="arabic-text">
                                    @lang('print.Debit')
                                </th>
                                <th style="padding: 12px; text-align: center; border: 1px solid #e5e7eb;" class="arabic-text">
                                    @lang('print.Credit')
                                </th>
                                <th style="padding: 12px; text-align: center; border: 1px solid #e5e7eb;" class="arabic-text">
                                    @lang('print.Running Balance')
                                </th>
                                <th style="padding: 12px; text-align: center; border: 1px solid #e5e7eb;" class="arabic-text">
                                    @lang('print.Balance Type')
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($groupStatementData['entries'] as $index => $entry)
                                <tr style="{{ $index % 2 === 0 ? 'background: #f9fafb;' : 'background: white;' }}">
                                    <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: center;">
                                        {{ $index + 1 }}
                                    </td>
                                    <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: center;">
                                        {{ \Carbon\Carbon::parse($entry['entry_date'])->format('d-M-Y') }}
                                    </td>
                                    <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: center;">
                                        {{ $entry['entry_number'] ?? '-' }}
                                    </td>
                                    <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: center;">
                                        {{ $entry['reference'] ?? '-' }}
                                    </td>
                                    <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: center;" class="arabic-text">
                                        {{ $entry['description'] ?? '-' }}
                                    </td>
                                    <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: center;">
                                        {!! formatPdfCurrency($entry['debit_amount'] ?? 0) !!}
                                    </td>
                                    <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: center;">
                                        {!! formatPdfCurrency($entry['credit_amount'] ?? 0) !!}
                                    </td>
                                    <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: center;">
                                        {!! formatPdfCurrency($entry['running_balance'] ?? 0) !!}
                                    </td>
                                    <td style="padding: 8px 12px; border: 1px solid #e5e7eb; text-align: center;">
                                        <span style="padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: bold; 
                                              background: {{ ($entry['balance_type'] ?? '') === 'Debit' ? '#dcfce7' : '#fee2e2' }}; 
                                              color: {{ ($entry['balance_type'] ?? '') === 'Debit' ? '#166534' : '#991b1b' }};" class="arabic-text">
                                            @if(($entry['balance_type'] ?? '') === 'Debit')
                                                @lang('print.Debit')
                                            @elseif(($entry['balance_type'] ?? '') === 'Credit')
                                                @lang('print.Credit')
                                            @else
                                                {{ $entry['balance_type'] ?? '-' }}
                                            @endif
                                        </span>
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
                
                <!-- Total entries info -->
                <div style="margin-top: 15px; text-align: center; color: {{ $colors['secondary'] ?? '#6b7280' }};" class="arabic-text">
                    @lang('print.Total entries'): {{ count($groupStatementData['entries']) }}
                </div>
            </div>
        @else
            <div style="text-align: center; padding: 40px; background: #f9fafb; border-radius: 8px; color: {{ $colors['secondary'] ?? '#6b7280' }};" class="arabic-text">
                <h4>@lang('print.No entries found for the selected period.')</h4>
            </div>
        @endif
    </div>

    <script>
        function downloadPDF() {
            // Get current URL parameters to maintain filters
            const urlParams = new URLSearchParams(window.location.search);
            
            // Build PDF URL with same parameters
            let pdfUrl = '/group-account-statement/pdf';
            if (urlParams.toString()) {
                pdfUrl += '?' + urlParams.toString();
            }
            
            // Create a temporary link to download the PDF
            const link = document.createElement('a');
            link.href = pdfUrl;
            link.download = '';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    </script>
@endsection
