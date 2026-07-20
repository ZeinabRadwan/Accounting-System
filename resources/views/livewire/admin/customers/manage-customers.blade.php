<div>
    <x-ui.page-header title="{{ __('Customers') }}" subtitle="{{ __('Doctors, students, and account balances.') }}">
        <x-ui.button wire:click="startCreate">
            <x-ui.icon name="plus" class="w-4 h-4" /> {{ __('Add Customer') }}
        </x-ui.button>
    </x-ui.page-header>

    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        <x-ui.stat-card label="{{ __('Total Customers') }}" :value="number_format($totalCustomers)" icon="user-group" tone="primary" />
        <x-ui.stat-card label="{{ __('Doctors') }}" :value="number_format($doctorCount)" icon="users" tone="success" />
        <x-ui.stat-card label="{{ __('Students') }}" :value="number_format($studentCount)" icon="users" tone="warning" />
        <x-ui.stat-card label="{{ __('With Balance') }}" :value="number_format($withBalance)" icon="cash" tone="slate" />
    </div>

    <x-ui.filter-bar class="mb-4">
        <div class="flex-1 min-w-[200px]">
            <x-ui.search placeholder="{{ __('Search name or phone...') }}" wire:model.live.debounce.300ms="search" />
        </div>
        <div class="w-full sm:w-44">
            <x-ui.select wire:model.live="filter_type">
                <option value="">{{ __('All Types') }}</option>
                @foreach ($customerTypes as $customerType)
                    <option value="{{ $customerType->value }}">{{ $customerType->label() }}</option>
                @endforeach
            </x-ui.select>
        </div>
        @if ($filter_type === 'student')
            <div class="w-full sm:w-44">
                <x-ui.select wire:model.live="filter_student_class">
                    <option value="">{{ __('All Classes') }}</option>
                    @foreach ($studentClasses as $studentClass)
                        <option value="{{ $studentClass->value }}">{{ $studentClass->label() }}</option>
                    @endforeach
                </x-ui.select>
            </div>
        @endif
        <div class="w-full sm:w-56">
            <x-ui.select wire:model.live="filter_outstanding">
                <option value="">{{ __('All Balances') }}</option>
                <option value="1">{{ __('Has Outstanding Balance') }}</option>
            </x-ui.select>
        </div>
    </x-ui.filter-bar>

    <x-ui.table>
        <x-ui.table-head>
            <x-ui.th>{{ __('Customer') }}</x-ui.th>
            <x-ui.th>{{ __('Type') }}</x-ui.th>
            <x-ui.th>{{ __('Phone') }}</x-ui.th>
            <x-ui.th>{{ __('Outstanding Balance') }}</x-ui.th>
            <x-ui.th>{{ __('Actions') }}</x-ui.th>
        </x-ui.table-head>
        <x-ui.table-body>
            @forelse ($customers as $customer)
                <tr class="hover:bg-slate-50/80" wire:key="customer-{{ $customer->id }}">
                    <x-ui.td class="font-medium text-slate-900">{{ $customer->name }}</x-ui.td>
                    <x-ui.td>
                        @php
                            $typeValue = $customer->type instanceof \BackedEnum ? $customer->type->value : (string) $customer->type;
                            $typeLabel = $customer->type instanceof \App\Domain\Customer\Enums\CustomerType
                                ? $customer->type->label()
                                : ucfirst($typeValue ?: '—');
                            $classLabel = $customer->student_class instanceof \App\Domain\Customer\Enums\StudentClass
                                ? $customer->student_class->label()
                                : null;
                        @endphp
                        <div class="flex flex-wrap items-center gap-1.5">
                            <x-ui.badge :variant="$typeValue === 'student' ? 'warning' : 'primary'">
                                {{ $typeLabel }}
                            </x-ui.badge>
                            @if ($classLabel)
                                <x-ui.badge variant="slate">{{ $classLabel }}</x-ui.badge>
                            @endif
                        </div>
                    </x-ui.td>
                    <x-ui.td>{{ $customer->phone }}</x-ui.td>
                    <x-ui.td>
                        @php $bal = (float) ($customer->outstanding_balance ?? 0); @endphp
                        <span class="font-medium {{ $bal > 0 ? 'text-danger-600' : 'text-slate-500' }}">
                            EGP {{ number_format($bal, 2) }}
                        </span>
                    </x-ui.td>
                    <x-ui.td>
                        <div class="flex items-center gap-1">
                            <x-ui.button size="sm" variant="ghost" href="{{ route('admin.customers.statement', $customer) }}" title="{{ __('Statement') }}">
                                <x-ui.icon name="clipboard" class="w-4 h-4" />
                            </x-ui.button>
                            <x-ui.row-actions
                                :on-view="'$wire.startView('.$customer->id.')'"
                                :on-edit="'$wire.startEdit('.$customer->id.')'"
                                :on-delete="'$wire.prepareDelete('.$customer->id.')'"
                            />
                        </div>
                    </x-ui.td>
                </tr>
            @empty
                <tr>
                    <x-ui.td colspan="5" class="text-center text-slate-500 py-8">{{ __('No customers found.') }}</x-ui.td>
                </tr>
            @endforelse
        </x-ui.table-body>
    </x-ui.table>

    <x-ui.pagination
        :from="$customers->firstItem() ?? 0"
        :to="$customers->lastItem() ?? 0"
        :total="$customers->total()"
        livewire
        :has-pages="$customers->hasPages()"
        :on-first-page="$customers->onFirstPage()"
        :has-more-pages="$customers->hasMorePages()"
    />

    <x-ui.modal name="customer-form" :title="$editingId ? __('Edit Customer') : __('Add Customer')" show-property="showCustomerForm">
        <div class="space-y-4">
            <x-ui.input label="{{ __('Name') }}" placeholder="{{ __('Clinic or customer name') }}" wire:model="name" :error="$errors->first('name')" />
            <x-ui.input label="{{ __('Phone') }}" placeholder="01xxxxxxxxx" wire:model="phone" :error="$errors->first('phone')" />
            <x-ui.select label="{{ __('Classify As') }}" wire:model.live="type" :error="$errors->first('type')">
                @foreach ($customerTypes as $customerType)
                    <option value="{{ $customerType->value }}">{{ $customerType->label() }}</option>
                @endforeach
            </x-ui.select>
            @if ($type === 'student')
                <x-ui.select label="{{ __('Student Class (optional)') }}" wire:model="student_class" :error="$errors->first('student_class')">
                    <option value="">— {{ __('None') }} —</option>
                    @foreach ($studentClasses as $studentClass)
                        <option value="{{ $studentClass->value }}">{{ $studentClass->label() }}</option>
                    @endforeach
                </x-ui.select>
            @endif
        </div>
        <x-slot:footer>
            <x-ui.button variant="secondary" wire:click="closeCustomerForm">{{ __('Cancel') }}</x-ui.button>
            <x-ui.button wire:click="save" wire:loading.attr="disabled">{{ __('Save') }}</x-ui.button>
        </x-slot:footer>
    </x-ui.modal>

    <x-ui.drawer name="customer-view" title="{{ __('Customer Details') }}" show-property="showCustomerDrawer">
        @if ($viewingCustomer)
            <dl class="space-y-4 text-sm">
                <div>
                    <dt class="text-slate-500">{{ __('Name') }}</dt>
                    <dd class="font-medium text-slate-900 mt-0.5">{{ $viewingCustomer->name }}</dd>
                </div>
                <div>
                    <dt class="text-slate-500">{{ __('Type') }}</dt>
                    <dd class="mt-0.5">
                        {{ $viewingCustomer->type instanceof \App\Domain\Customer\Enums\CustomerType
                            ? $viewingCustomer->type->label()
                            : ucfirst((string) $viewingCustomer->type) }}
                    </dd>
                </div>
                @if ($viewingCustomer->student_class)
                    <div>
                        <dt class="text-slate-500">{{ __('Student Class') }}</dt>
                        <dd class="mt-0.5">
                            {{ $viewingCustomer->student_class instanceof \App\Domain\Customer\Enums\StudentClass
                                ? $viewingCustomer->student_class->label()
                                : ucfirst((string) $viewingCustomer->student_class) }}
                        </dd>
                    </div>
                @endif
                <div>
                    <dt class="text-slate-500">{{ __('Phone') }}</dt>
                    <dd class="mt-0.5">{{ $viewingCustomer->phone }}</dd>
                </div>
                <div>
                    <dt class="text-slate-500">{{ __('Created') }}</dt>
                    <dd class="mt-0.5">{{ $viewingCustomer->created_at?->format('Y-m-d H:i') }}</dd>
                </div>
                <div>
                    <dt class="text-slate-500">{{ __('Updated') }}</dt>
                    <dd class="mt-0.5">{{ $viewingCustomer->updated_at?->format('Y-m-d H:i') }}</dd>
                </div>
                <div>
                    <dt class="text-slate-500">{{ __('Current Due') }}</dt>
                    <dd class="mt-0.5 font-semibold text-slate-900">EGP {{ number_format($viewingBalance, 2) }}</dd>
                </div>
            </dl>
            <div class="mt-6 flex flex-wrap gap-2">
                <x-ui.button href="{{ route('admin.customers.statement', $viewingCustomer) }}">
                    {{ __('View Statement') }}
                </x-ui.button>
                <x-ui.button variant="secondary" href="{{ route('admin.reports.customer-statement', ['customer_id' => $viewingCustomer->id]) }}">
                    {{ __('Report Statement') }}
                </x-ui.button>
            </div>
        @else
            <p class="text-sm text-slate-500">{{ __('Customer not found.') }}</p>
        @endif
    </x-ui.drawer>

    <x-ui.modal name="delete-customer" title="{{ __('Delete Customer') }}" maxWidth="sm" show-property="showDeleteConfirm">
        <p class="text-sm text-slate-600">{{ __('Are you sure you want to delete this customer?') }}</p>
        <x-slot:footer>
            <x-ui.button variant="secondary" wire:click="cancelDelete">{{ __('Cancel') }}</x-ui.button>
            <x-ui.button variant="danger" wire:click="confirmDelete" wire:loading.attr="disabled">{{ __('Delete') }}</x-ui.button>
        </x-slot:footer>
    </x-ui.modal>
</div>
