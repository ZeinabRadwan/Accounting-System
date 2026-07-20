<div
    x-data
    class="fixed top-4 right-4 z-[60] space-y-2 w-80 max-w-[calc(100vw-2rem)]"
>
    <template x-for="item in $store.toast.items" :key="item.id">
        <div
            x-show="true"
            x-transition
            class="rounded-xl border bg-white shadow-soft px-4 py-3 text-sm flex items-start gap-3"
            :class="{
                'border-success-100': item.type === 'success',
                'border-danger-100': item.type === 'danger',
                'border-warning-100': item.type === 'warning',
                'border-primary-100': item.type === 'info'
            }"
        >
            <p class="flex-1 text-slate-700" x-text="item.message"></p>
            <button type="button" class="text-slate-400" @click="$store.toast.dismiss(item.id)">
                <x-ui.icon name="x" class="w-4 h-4" />
            </button>
        </div>
    </template>
</div>
