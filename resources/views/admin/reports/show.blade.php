<x-admin-layout title="{{ $reportTitle ?? 'Report' }}">
    <x-ui.page-header :title="$reportTitle ?? 'Report'" :subtitle="$reportSubtitle ?? null">
        <x-ui.button variant="secondary" href="{{ route('admin.reports.index') }}">Back</x-ui.button>
        <x-ui.button @click="$store.toast.show('Export is UI only')">Export</x-ui.button>
    </x-ui.page-header>

    <x-ui.filter-bar class="mb-4">
        <div class="w-full sm:w-40"><x-ui.date-picker /></div>
        <div class="w-full sm:w-40"><x-ui.date-picker /></div>
        <div class="w-full sm:w-44"><x-ui.select><option>All Branches</option><option>Main</option><option>Nasr City</option></x-ui.select></div>
        <x-ui.button size="sm">Apply</x-ui.button>
    </x-ui.filter-bar>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <x-ui.stat-card label="Total" value="{{ $statTotal ?? 'EGP 0' }}" icon="chart-bar" tone="primary" />
        <x-ui.stat-card label="Records" value="{{ $statCount ?? '0' }}" icon="clipboard" tone="slate" />
        <x-ui.stat-card label="Growth" value="{{ $statGrowth ?? '+0%' }}" icon="sparkles" tone="success" />
    </div>

    <x-ui.table>
        <x-ui.table-head>
            @foreach ($columns ?? ['Name', 'Value', 'Status'] as $col)
                <x-ui.th>{{ $col }}</x-ui.th>
            @endforeach
        </x-ui.table-head>
        <x-ui.table-body>
            @foreach ($rows ?? [] as $row)
                <tr class="hover:bg-slate-50/80">
                    @foreach ($row as $cell)
                        <x-ui.td>{{ $cell }}</x-ui.td>
                    @endforeach
                </tr>
            @endforeach
        </x-ui.table-body>
    </x-ui.table>
    <x-ui.pagination :from="1" :to="count($rows ?? [])" :total="count($rows ?? [])" />
</x-admin-layout>
