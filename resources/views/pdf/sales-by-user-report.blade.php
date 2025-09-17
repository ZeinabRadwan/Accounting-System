@extends('pdf')

@section('content-area')
    <h3>@lang('Sales By User Report')</h3>

    @php($filters = $salesByUserData['filters'] ?? [])
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
                    <th>@lang('Sales By')</th>
                    <th>@lang('Invoice No')</th>
                    <th>@lang('Client')</th>
                    <th>@lang('Net Total')</th>
                    <th>@lang('Invoice Date')</th>
                </tr>
            </thead>
            <tbody>
                @forelse(($salesByUserData['items'] ?? []) as $idx => $row)
                    <tr>
                        <td>{{ $idx + 1 }}</td>
                        <td>{{ $row['salesBy'] ?? '' }}</td>
                        <td>{{ $row['invoiceLabel'] ?? '' }}</td>
                        <td>{{ $row['client'] ?? '' }}</td>
                        <td>@currency($row['invoiceTotal'] ?? 0)</td>
                        <td>
                            @if(!empty($row['invoiceDate']))
                                {{ \Carbon\Carbon::parse($row['invoiceDate'])->format('d-M-Y') }}
                            @endif
                        </td>
                    </tr>
                @empty
                    <tr>
                        <td colspan="6">@lang('No data found.')</td>
                    </tr>
                @endforelse
            </tbody>
        </table>
    </div>
@endsection
 