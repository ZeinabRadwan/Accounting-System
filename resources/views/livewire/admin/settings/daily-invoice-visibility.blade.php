<div>
    <x-ui.page-header title="{{ __('Settings') }}" subtitle="{{ __('Configure invoice, daily ops, and permissions.') }}" />

    <div class="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <x-ui.settings-nav />

        <div class="lg:col-span-3 space-y-4">
            <x-ui.card>
                <h2 class="text-base font-semibold text-slate-900 mb-4">{{ __('Per-branch Configuration') }}</h2>
                @if (empty($branches))
                    <x-ui.empty-state title="{{ __('No branches') }}" description="{{ __('Create a branch first to configure daily visibility.') }}" />
                @else
                    <x-ui.table>
                        <x-ui.table-head>
                            <x-ui.th>{{ __('Branch') }}</x-ui.th>
                            <x-ui.th>{{ __('Enabled') }}</x-ui.th>
                            <x-ui.th>{{ __('Daily Limit') }}</x-ui.th>
                        </x-ui.table-head>
                        <x-ui.table-body>
                            @foreach ($branches as $b)
                                <tr class="hover:bg-slate-50/80" wire:key="vis-{{ $b['id'] }}">
                                    <x-ui.td class="font-medium">{{ $b['name'] }}</x-ui.td>
                                    <x-ui.td><x-ui.checkbox wire:model="enabled.{{ $b['id'] }}" /></x-ui.td>
                                    <x-ui.td>
                                        <x-ui.input type="number" step="0.01" wire:model="limits.{{ $b['id'] }}" />
                                    </x-ui.td>
                                </tr>
                            @endforeach
                        </x-ui.table-body>
                    </x-ui.table>
                    <div class="mt-4 flex justify-end">
                        <x-ui.button wire:click="saveLimits" wire:loading.attr="disabled">{{ __('Save Settings') }}</x-ui.button>
                    </div>
                @endif
            </x-ui.card>

            <x-ui.card>
                <h2 class="text-base font-semibold text-slate-900 mb-4">{{ __('Today\'s Set') }}</h2>
                <div class="flex flex-col sm:flex-row sm:items-end gap-3 mb-4">
                    <div class="flex-1">
                        <x-ui.select label="{{ __('Branch') }}" wire:model.live="selected_branch_id">
                            @foreach ($branches as $b)
                                <option value="{{ $b['id'] }}">{{ $b['name'] }}</option>
                            @endforeach
                        </x-ui.select>
                    </div>
                    <x-ui.button wire:click="generate" wire:loading.attr="disabled">{{ __('Generate') }}</x-ui.button>
                    <x-ui.button variant="danger" wire:click="prepareRegenerate">{{ __('Regenerate') }}</x-ui.button>
                </div>

                @if ($today_set)
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                        <x-ui.stat-card :label="__('Target Limit')" :value="'EGP '.number_format($today_set['target_limit'], 2)" icon="cash" tone="primary" />
                        <x-ui.stat-card :label="__('Actual Total')" :value="'EGP '.number_format($today_set['actual_total'], 2)" icon="clipboard" tone="slate" />
                        <x-ui.stat-card :label="__('Status')" :value="(string) $today_set['status']" icon="check" tone="success" />
                    </div>
                    <x-ui.table>
                        <x-ui.table-head>
                            <x-ui.th>{{ __('Invoice') }}</x-ui.th>
                            <x-ui.th>{{ __('Total') }}</x-ui.th>
                        </x-ui.table-head>
                        <x-ui.table-body>
                            @forelse ($today_items as $row)
                                <tr class="hover:bg-slate-50/80">
                                    <x-ui.td class="font-medium">{{ $row['invoice_number'] }}</x-ui.td>
                                    <x-ui.td>EGP {{ number_format($row['total'], 2) }}</x-ui.td>
                                </tr>
                            @empty
                                <tr>
                                    <x-ui.td colspan="2" class="text-center text-slate-500 py-6">{{ __('No invoices in today\'s set.') }}</x-ui.td>
                                </tr>
                            @endforelse
                        </x-ui.table-body>
                    </x-ui.table>
                @else
                    <x-ui.empty-state title="{{ __('No set for today') }}" description="{{ __('Generate a visibility set for the selected branch.') }}" icon="clipboard" />
                @endif
            </x-ui.card>
        </div>
    </div>

    <x-ui.modal name="regenerate-visibility" :title="__('Regenerate Today\'s Set')" maxWidth="sm" show-property="showRegenerateConfirm">
        <p class="text-sm text-slate-600">{{ __('This will rebuild today\'s visible invoices for the selected branch. Continue?') }}</p>
        <x-slot:footer>
            <x-ui.button variant="secondary" wire:click="cancelRegenerate">{{ __('Cancel') }}</x-ui.button>
            <x-ui.button variant="danger" wire:click="confirmRegenerate" wire:loading.attr="disabled">{{ __('Regenerate') }}</x-ui.button>
        </x-slot:footer>
    </x-ui.modal>
</div>
