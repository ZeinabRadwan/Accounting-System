@php
    $flashToast = session('toast');
    $toastLocale = [
        'titles' => [
            'success' => __('Success'),
            'error' => __('Error'),
            'warning' => __('Warning'),
            'info' => __('Information'),
        ],
        'validationMessage' => __('Please fill in all required fields.'),
    ];
@endphp

<div
    x-data
    x-init="
        $nextTick(() => {
            if (Alpine.store('toast')) {
                Alpine.store('toast').setLocale(@js($toastLocale));
                @if (is_array($flashToast))
                    Alpine.store('toast').push(@js($flashToast));
                @endif
            }
        })
    "
    @toast.window="Alpine.store('toast').push($event.detail)"
    class="fixed top-4 inset-x-4 sm:inset-x-auto sm:end-4 z-[70] space-y-2.5 w-full sm:w-[24rem] max-w-[calc(100vw-2rem)] pointer-events-none"
    dir="{{ app()->getLocale() === 'ar' ? 'rtl' : 'ltr' }}"
>
    <template x-for="item in $store.toast.items" :key="item.id">
        <div
            x-show="item.visible"
            x-transition:enter="transition ease-out duration-300"
            x-transition:enter-start="opacity-0 translate-y-2 sm:translate-y-0 sm:translate-x-4 rtl:sm:-translate-x-4"
            x-transition:enter-end="opacity-100 translate-y-0 translate-x-0"
            x-transition:leave="transition ease-in duration-200"
            x-transition:leave-start="opacity-100"
            x-transition:leave-end="opacity-0 translate-y-1"
            class="pointer-events-auto rounded-2xl border shadow-soft px-4 py-3.5 flex items-start gap-3 backdrop-blur-sm"
            :class="{
                'bg-success-50 border-success-100 text-success-700': item.type === 'success',
                'bg-danger-50 border-danger-100 text-danger-700': item.type === 'error',
                'bg-warning-50 border-warning-100 text-warning-700': item.type === 'warning',
                'bg-primary-50 border-primary-200 text-primary-800': item.type === 'info'
            }"
            role="alert"
        >
            <div
                class="shrink-0 mt-0.5 w-9 h-9 rounded-xl flex items-center justify-center"
                :class="{
                    'bg-success-100 text-success-700': item.type === 'success',
                    'bg-danger-100 text-danger-700': item.type === 'error',
                    'bg-warning-100 text-warning-700': item.type === 'warning',
                    'bg-primary-100 text-primary-700': item.type === 'info'
                }"
            >
                <template x-if="item.type === 'success'">
                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                </template>
                <template x-if="item.type === 'error'">
                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                </template>
                <template x-if="item.type === 'warning'">
                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>
                </template>
                <template x-if="item.type === 'info'">
                    <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" /></svg>
                </template>
            </div>

            <div class="min-w-0 flex-1">
                <p class="text-sm font-semibold leading-tight" x-text="item.title"></p>
                <p class="mt-1 text-sm leading-snug opacity-90" x-text="item.message"></p>
            </div>

            <button
                type="button"
                class="shrink-0 rounded-lg p-1 opacity-60 hover:opacity-100 ui-transition"
                @click="$store.toast.dismiss(item.id)"
                aria-label="{{ __('Close') }}"
            >
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
        </div>
    </template>
</div>
