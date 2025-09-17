@extends('pdf')

@section('content-area')
    <h3>@lang('Collection By User Report')</h3>

    @php($filters = $collectionByUserData['filters'] ?? [])
    <p>
        <strong>@lang('From'):</strong> {{ $filters['start_date'] ?? '' }}
        &nbsp; <strong>@lang('To'):</strong> {{ $filters['end_date'] ?? '' }}
        @if(isset($filters['term']))
            &nbsp; <strong>@lang('User ID'):</strong> {{ $filters['term'] }}
        @endif
    </p>

    <div class="table-responsive">
        <table class="table-listing table table-bordered table-striped table-sm">
            <thead class="thead-light">
                <tr>
                    <th>@lang('#')</th>
                    <th>@lang('Collection By')</th>
                    <th>@lang('Invoice No')</th>
                    <th>@lang('Client')</th>
                    <th>@lang('Invoice Amount')</th>
                    <th>@lang('Collected Amount')</th>
                    <th>@lang('Transaction Date')</th>
                </tr>
            </thead>
            <tbody>
                @forelse(($collectionByUserData['items'] ?? []) as $idx => $row)
                    <tr>
                        <td>{{ $idx + 1 }}</td>
                        <td>{{ $row['collectionBy'] ?? '' }}</td>
                        <td>{{ $row['invoiceLabel'] ?? '' }}</td>
                        <td>{{ $row['clientName'] ?? '' }}</td>
                        <td>@currency($row['invoiceAmount'] ?? 0)</td>
                        <td>@currency($row['amount'] ?? 0)</td>
                        <td>
                            @if(!empty($row['transactionDate']))
                                {{ \Carbon\Carbon::parse($row['transactionDate'])->format('d-M-Y') }}
                            @endif
                        </td>
                    </tr>
                @empty
                    <tr>
                        <td colspan="7">@lang('No data found.')</td>
                    </tr>
                @endforelse
            </tbody>
        </table>
    </div>
@endsection
 