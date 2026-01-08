@extends('layouts.pdf')

@section('title', 'Journal Entries Report')

@section('content')
<div class="container-fluid">
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <div class="row">
                        <div class="col-6">
                            <h3 class="card-title">Journal Entries Report</h3>
                        </div>
                        <div class="col-6 text-right">
                            <p class="mb-0"><strong>Generated:</strong> {{ date('Y-m-d H:i:s') }}</p>
                            @if(isset($filters['from_date']) || isset($filters['to_date']) || isset($filters['status']))
                                <p class="mb-0"><strong>Filters Applied:</strong></p>
                                @if(isset($filters['from_date']))
                                    <small>From: {{ $filters['from_date'] }}</small>
                                @endif
                                @if(isset($filters['to_date']))
                                    <small>To: {{ $filters['to_date'] }}</small>
                                @endif
                                @if(isset($filters['status']))
                                    <small>Status: {{ ucfirst($filters['status']) }}</small>
                                @endif
                            @endif
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    @if($journalEntries->count() > 0)
                        <div class="table-responsive">
                            <table class="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>Entry #</th>
                                        <th>Date</th>
                                        <th>Reference</th>
                                        <th>Description</th>
                                        <th>Status</th>
                                        <th>Total Debit</th>
                                        <th>Total Credit</th>
                                        <th>Created By</th>
                                        <th>Posted By</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach($journalEntries as $entry)
                                        <tr>
                                            <td>{{ $entry->formatted_entry_number }}</td>
                                            <td>{{ $entry->entry_date->format('Y-m-d') }}</td>
                                            <td>{{ $entry->reference ?? '-' }}</td>
                                            <td>{{ $entry->description ?? '-' }}</td>
                                            <td>
                                                <span class="badge badge-{{ $entry->status === 'posted' ? 'success' : ($entry->status === 'draft' ? 'warning' : 'danger') }}">
                                                    {{ ucfirst($entry->status) }}
                                                </span>
                                            </td>
                                            <td class="text-right">{{ number_format($entry->total_debit, 2) }}</td>
                                            <td class="text-right">{{ number_format($entry->total_credit, 2) }}</td>
                                            <td>{{ $entry->creator ? $entry->creator->name : '-' }}</td>
                                            <td>{{ $entry->poster ? $entry->poster->name : '-' }}</td>
                                        </tr>
                                        @if($entry->lines->count() > 0)
                                            <tr class="bg-light">
                                                <td colspan="10">
                                                    <strong>Journal Entry Lines:</strong>
                                                    <table class="table table-sm mb-0 mt-2">
                                                        <thead>
                                                            <tr>
                                                                <th>Account</th>
                                                                <th>Analytical Account</th>
                                                                <th>Description</th>
                                                                <th>Debit</th>
                                                                <th>Credit</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            @foreach($entry->lines as $line)
                                                                <tr>
                                                                    <td>
                                                                        {{ $line->chartOfAccount ? $line->chartOfAccount->code . ' - ' . $line->chartOfAccount->name : 'Unknown Account' }}
                                                                    </td>
                                                                    <td>
                                                                        @if($line->analyticalAccount)
                                                                            <small class="text-muted">
                                                                                {{ $line->analyticalAccount->code ? $line->analyticalAccount->code . ' - ' : '' }}{{ $line->analyticalAccount->name }}
                                                                            </small>
                                                                        @else
                                                                            <span class="text-muted">-</span>
                                                                        @endif
                                                                    </td>
                                                                    <td>{{ $line->description ?? '-' }}</td>
                                                                    <td class="text-right">
                                                                        @if($line->debit_amount > 0)
                                                                            {{ number_format($line->debit_amount, 2) }}
                                                                        @else
                                                                            -
                                                                        @endif
                                                                    </td>
                                                                    <td class="text-right">
                                                                        @if($line->credit_amount > 0)
                                                                            {{ number_format($line->credit_amount, 2) }}
                                                                        @else
                                                                            -
                                                                        @endif
                                                                    </td>
                                                                </tr>
                                                            @endforeach
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        @endif
                                    @endforeach
                                </tbody>
                                <tfoot>
                                    <tr class="bg-primary text-white">
                                        <th colspan="5">TOTAL</th>
                                        <th class="text-right">{{ number_format($journalEntries->sum('total_debit'), 2) }}</th>
                                        <th class="text-right">{{ number_format($journalEntries->sum('total_credit'), 2) }}</th>
                                        <th colspan="2"></th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    @else
                        <div class="alert alert-info">
                            <h4>No Journal Entries Found</h4>
                            <p>No journal entries match the specified criteria.</p>
                        </div>
                    @endif
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@push('styles')
<style>
    .table th {
        background-color: #f8f9fa;
        font-weight: bold;
        border: 1px solid #dee2e6;
    }
    
    .table td {
        border: 1px solid #dee2e6;
        vertical-align: middle;
    }
    
    .badge {
        padding: 0.25em 0.5em;
        font-size: 0.75em;
        border-radius: 0.25rem;
    }
    
    .badge-success {
        background-color: #28a745;
        color: white;
    }
    
    .badge-warning {
        background-color: #ffc107;
        color: #212529;
    }
    
    .badge-danger {
        background-color: #dc3545;
        color: white;
    }
    
    .bg-light {
        background-color: #f8f9fa !important;
    }
    
    .text-right {
        text-align: right;
    }
    
    .table-sm th,
    .table-sm td {
        padding: 0.25rem;
        font-size: 0.875rem;
    }
</style>
@endpush
