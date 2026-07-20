@props(['label' => null, 'checked' => false])

<label class="inline-flex items-center gap-3 cursor-pointer" x-data="{ on: @js((bool) $checked) }">
    <button
        type="button"
        role="switch"
        :aria-checked="on.toString()"
        @click="on = !on"
        :class="on ? 'bg-primary-600' : 'bg-slate-200'"
        class="relative inline-flex h-6 w-11 shrink-0 rounded-full ui-transition"
    >
        <span
            :class="on ? 'translate-x-5' : 'translate-x-1'"
            class="pointer-events-none inline-block h-4 w-4 mt-1 rounded-full bg-white shadow ui-transition"
        ></span>
    </button>
    <input type="checkbox" class="sr-only" x-model="on" {{ $attributes }} />
    @if ($label)
        <span class="text-sm text-slate-700">{{ $label }}</span>
    @endif
</label>
