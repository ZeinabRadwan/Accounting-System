<x-admin-layout title="Settings">
    <x-ui.page-header title="Settings" subtitle="Configure invoice, daily ops, and permissions." />

    <div class="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <x-ui.card class="lg:col-span-1 !p-3">
            <nav class="space-y-1">
                @foreach ([
                    ['Invoice Settings', 'admin.settings.invoice'],
                    ['Daily Settings', 'admin.settings.daily'],
                    ['Permissions', 'admin.settings.permissions'],
                    ['Daily Visibility', 'admin.settings.daily_visibility'],
                ] as $item)
                    <a href="{{ route($item[1]) }}" class="block rounded-xl px-3 py-2.5 text-sm font-medium {{ request()->routeIs($item[1]) ? 'bg-primary-50 text-primary-700' : 'text-slate-600 hover:bg-slate-50' }}">
                        {{ $item[0] }}
                    </a>
                @endforeach
            </nav>
        </x-ui.card>

        <div class="lg:col-span-3 space-y-4">
            <x-ui.card>
                <h2 class="text-base font-semibold text-slate-900 mb-4">{{ $settingsTitle ?? 'Invoice Settings' }}</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <x-ui.input label="Company Name" value="DentalLink" />
                    <x-ui.input label="Tax Number" value="123-456-789" />
                    <x-ui.input label="Invoice Prefix" value="INV-" />
                    <x-ui.select label="Default Payment">
                        <option>Cash</option>
                        <option>Visa</option>
                        <option>Instapay</option>
                        <option>Vodafone Cash</option>
                    </x-ui.select>
                    <div class="md:col-span-2">
                        <x-ui.textarea label="Footer Note" rows="3">Thank you for your business.</x-ui.textarea>
                    </div>
                    <div class="md:col-span-2 flex items-center gap-6">
                        <x-ui.switch label="Show logo on receipt" :checked="true" />
                        <x-ui.switch label="Print after save" :checked="false" />
                    </div>
                </div>
                <div class="mt-6 flex justify-end gap-2">
                    <x-ui.button variant="secondary">Reset</x-ui.button>
                    <x-ui.button @click="$store.toast.show('Settings saved (UI only)')">Save Changes</x-ui.button>
                </div>
            </x-ui.card>

            @if (($showPermissions ?? false))
                <x-ui.card>
                    <h2 class="text-base font-semibold text-slate-900 mb-4">Role Permissions</h2>
                    <div class="overflow-x-auto">
                        <table class="min-w-full text-sm">
                            <thead>
                                <tr class="text-start text-xs uppercase text-slate-500 border-b">
                                    <th class="pb-3">Module</th>
                                    <th class="pb-3">Admin</th>
                                    <th class="pb-3">Sales</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-100">
                                @foreach (['Products', 'Inventory', 'POS', 'Reports', 'Settings'] as $mod)
                                    <tr>
                                        <td class="py-3 font-medium">{{ $mod }}</td>
                                        <td class="py-3"><x-ui.permission-badge permission="admin" /></td>
                                        <td class="py-3">
                                            @if ($mod === 'POS')
                                                <x-ui.permission-badge permission="create" />
                                            @elseif ($mod === 'Settings')
                                                <x-ui.badge variant="slate">—</x-ui.badge>
                                            @else
                                                <x-ui.permission-badge permission="view" />
                                            @endif
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </x-ui.card>
            @endif
        </div>
    </div>
</x-admin-layout>
