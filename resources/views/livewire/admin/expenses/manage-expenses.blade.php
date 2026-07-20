<div>
    <x-ui.page-header title="{{ __('Expenses') }}" subtitle="{{ __('Record operating expenses and deduct from treasuries.') }}">
        <x-ui.button wire:click="startCreate">
            <x-ui.icon name="plus" class="w-4 h-4" /> {{ __('Add Expense') }}
        </x-ui.button>
    </x-ui.page-header>

    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        <x-ui.stat-card label="{{ __('Filtered Total') }}" :value="'EGP '.number_format($totalAmount, 2)" icon="cash" tone="danger" />
        <x-ui.stat-card label="{{ __('Filtered Count') }}" :value="(string) $totalCount" icon="clipboard" tone="slate" />
        <x-ui.stat-card label="{{ __('This Month') }}" :value="'EGP '.number_format($monthAmount, 2)" icon="chart-bar" tone="warning" />
        <x-ui.stat-card label="{{ __('Month Entries') }}" :value="(string) $monthCount" icon="check" tone="primary" />
    </div>

    <x-ui.filter-bar class="mb-4">
        <div class="flex-1 min-w-[180px]">
            <x-ui.search placeholder="{{ __('Search number or title...') }}" wire:model.live.debounce.300ms="search" />
        </div>
        <div class="w-full sm:w-40">
            <x-ui.select wire:model.live="filter_branch_id">
                <option value="">{{ __('All Branches') }}</option>
                @foreach ($branches as $branch)
                    <option value="{{ $branch->id }}">{{ $branch->name }}</option>
                @endforeach
            </x-ui.select>
        </div>
        <div class="w-full sm:w-40">
            <x-ui.select wire:model.live="filter_category">
                <option value="">{{ __('All Categories') }}</option>
                @foreach ($categories as $cat)
                    <option value="{{ $cat->value }}">{{ $cat->label() }}</option>
                @endforeach
            </x-ui.select>
        </div>
        <div class="w-full sm:w-40">
            <x-ui.select wire:model.live="filter_payment_method">
                <option value="">{{ __('All Treasuries') }}</option>
                @foreach ($paymentMethods as $method)
                    <option value="{{ $method->value }}">{{ $method->label() }}</option>
                @endforeach
            </x-ui.select>
        </div>
        <div class="w-full sm:w-36">
            <x-ui.input type="date" wire:model.live="date_from" />
        </div>
        <div class="w-full sm:w-36">
            <x-ui.input type="date" wire:model.live="date_to" />
        </div>
    </x-ui.filter-bar>

    <x-ui.table>
        <x-ui.table-head>
            <x-ui.th>{{ __('Number') }}</x-ui.th>
            <x-ui.th>{{ __('Date') }}</x-ui.th>
            <x-ui.th>{{ __('Title') }}</x-ui.th>
            <x-ui.th>{{ __('Category') }}</x-ui.th>
            <x-ui.th>{{ __('Treasury') }}</x-ui.th>
            <x-ui.th>{{ __('Amount') }}</x-ui.th>
            <x-ui.th>{{ __('Actions') }}</x-ui.th>
        </x-ui.table-head>
        <x-ui.table-body>
            @forelse ($expenses as $expense)
                <tr class="hover:bg-slate-50/80" wire:key="expense-{{ $expense->id }}">
                    <x-ui.td class="font-medium text-slate-900">{{ $expense->expense_number }}</x-ui.td>
                    <x-ui.td class="text-slate-500 whitespace-nowrap">{{ $expense->expense_date?->format('Y-m-d') }}</x-ui.td>
                    <x-ui.td>
                        <p class="font-medium text-slate-900">{{ $expense->title }}</p>
                        @if ($expense->branch)
                            <p class="text-xs text-slate-500">{{ $expense->branch->name }}</p>
                        @endif
                    </x-ui.td>
                    <x-ui.td>
                        {{ $expense->category instanceof \BackedEnum ? $expense->category->label() : $expense->category }}
                    </x-ui.td>
                    <x-ui.td>{{ $expense->treasury?->name ?? str_replace('_', ' ', (string) $expense->payment_method) }}</x-ui.td>
                    <x-ui.td class="font-semibold text-danger-700">EGP {{ number_format((float) $expense->amount, 2) }}</x-ui.td>
                    <x-ui.td>
                        <x-ui.row-actions :on-view="'$wire.startView('.$expense->id.')'" />
                    </x-ui.td>
                </tr>
            @empty
                <tr>
                    <x-ui.td colspan="7" class="text-center text-slate-500 py-8">{{ __('No expenses yet.') }}</x-ui.td>
                </tr>
            @endforelse
        </x-ui.table-body>
    </x-ui.table>

    <x-ui.pagination
        :from="$expenses->firstItem() ?? 0"
        :to="$expenses->lastItem() ?? 0"
        :total="$expenses->total()"
        livewire
        :has-pages="$expenses->hasPages()"
        :on-first-page="$expenses->onFirstPage()"
        :has-more-pages="$expenses->hasMorePages()"
    />

    <x-ui.modal name="expense-form" title="{{ __('Add Expense') }}" maxWidth="xl" show-property="showExpenseForm">
        <div class="space-y-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <x-ui.input label="{{ __('Title') }}" wire:model="title" :error="$errors->first('title')" placeholder="{{ __('Office rent') }}" />
                <x-ui.select label="{{ __('Category') }}" wire:model="category" :error="$errors->first('category')">
                    @foreach ($categories as $cat)
                        <option value="{{ $cat->value }}">{{ $cat->label() }}</option>
                    @endforeach
                </x-ui.select>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <x-ui.input label="{{ __('Amount (EGP)') }}" type="number" step="0.01" min="0" wire:model="amount" :error="$errors->first('amount')" />
                <x-ui.input label="{{ __('Date') }}" type="date" wire:model="expense_date" :error="$errors->first('expense_date')" />
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <x-ui.select label="{{ __('Pay From Treasury') }}" wire:model="payment_method" :error="$errors->first('payment_method')">
                    @foreach ($paymentMethods as $method)
                        <option value="{{ $method->value }}">{{ $method->label() }}</option>
                    @endforeach
                </x-ui.select>
                <x-ui.select label="{{ __('Branch (optional)') }}" wire:model="branch_id" :error="$errors->first('branch_id')">
                    <option value="">{{ __('No branch') }}</option>
                    @foreach ($branches as $branch)
                        <option value="{{ $branch->id }}">{{ $branch->name }}</option>
                    @endforeach
                </x-ui.select>
            </div>
            <x-ui.textarea label="{{ __('Notes') }}" wire:model="notes" :error="$errors->first('notes')" placeholder="{{ __('Optional details...') }}" />
        </div>
        <x-slot:footer>
            <x-ui.button variant="secondary" wire:click="closeExpenseForm">{{ __('Cancel') }}</x-ui.button>
            <x-ui.button wire:click="save" wire:loading.attr="disabled">{{ __('Save Expense') }}</x-ui.button>
        </x-slot:footer>
    </x-ui.modal>

    <x-ui.drawer name="expense-view" title="{{ __('Expense Details') }}" show-property="showExpenseDrawer">
        @if ($viewingExpense)
            <dl class="space-y-4 text-sm">
                <div>
                    <dt class="text-slate-500">{{ __('Number') }}</dt>
                    <dd class="font-medium text-slate-900 mt-0.5">{{ $viewingExpense->expense_number }}</dd>
                </div>
                <div>
                    <dt class="text-slate-500">{{ __('Title') }}</dt>
                    <dd class="mt-0.5">{{ $viewingExpense->title }}</dd>
                </div>
                <div>
                    <dt class="text-slate-500">{{ __('Category') }}</dt>
                    <dd class="mt-0.5">
                        {{ $viewingExpense->category instanceof \BackedEnum ? $viewingExpense->category->label() : $viewingExpense->category }}
                    </dd>
                </div>
                <div>
                    <dt class="text-slate-500">{{ __('Amount') }}</dt>
                    <dd class="mt-0.5 font-semibold text-danger-700">EGP {{ number_format((float) $viewingExpense->amount, 2) }}</dd>
                </div>
                <div>
                    <dt class="text-slate-500">{{ __('Treasury') }}</dt>
                    <dd class="mt-0.5">{{ $viewingExpense->treasury?->name }}</dd>
                </div>
                <div>
                    <dt class="text-slate-500">{{ __('Branch') }}</dt>
                    <dd class="mt-0.5">{{ $viewingExpense->branch?->name ?: '—' }}</dd>
                </div>
                <div>
                    <dt class="text-slate-500">{{ __('Date') }}</dt>
                    <dd class="mt-0.5">{{ $viewingExpense->expense_date?->format('Y-m-d') }}</dd>
                </div>
                <div>
                    <dt class="text-slate-500">{{ __('Created By') }}</dt>
                    <dd class="mt-0.5">{{ $viewingExpense->creator?->name ?: '—' }}</dd>
                </div>
                @if ($viewingExpense->notes)
                    <div>
                        <dt class="text-slate-500">{{ __('Notes') }}</dt>
                        <dd class="mt-0.5">{{ $viewingExpense->notes }}</dd>
                    </div>
                @endif
            </dl>
        @else
            <p class="text-sm text-slate-500">{{ __('Expense not found.') }}</p>
        @endif
    </x-ui.drawer>
</div>
