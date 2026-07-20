@props(['onView' => null, 'onEdit' => null, 'onDelete' => null])

<div class="flex items-center justify-start gap-1">
    @if ($onView)
        <button
            type="button"
            class="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-primary-600"
            title="{{ __('View') }}"
            @click="{{ $onView }}"
        >
            <x-ui.icon name="eye" class="w-4 h-4" />
        </button>
    @endif
    @if ($onEdit)
        <button
            type="button"
            class="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-warning-600"
            title="{{ __('Edit') }}"
            @click="{{ $onEdit }}"
        >
            <x-ui.icon name="pencil" class="w-4 h-4" />
        </button>
    @endif
    @if ($onDelete)
        <button
            type="button"
            class="p-1.5 rounded-lg text-slate-500 hover:bg-danger-50 hover:text-danger-600"
            title="{{ __('Delete') }}"
            @click="{{ $onDelete }}"
        >
            <x-ui.icon name="trash" class="w-4 h-4" />
        </button>
    @endif
</div>
