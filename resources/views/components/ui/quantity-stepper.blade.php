@props(['value' => 1, 'min' => 1, 'max' => 9999])

<div
    x-data="{ qty: {{ (int) $value }}, min: {{ (int) $min }}, max: {{ (int) $max }} }"
    class="inline-flex items-center rounded-xl border border-slate-200 bg-white shadow-sm"
>
    <button type="button" class="px-2.5 py-1.5 text-slate-600 hover:bg-slate-50 rounded-l-xl" @click="qty = Math.max(min, qty - 1)">−</button>
    <input type="number" x-model.number="qty" :min="min" :max="max" class="w-14 border-0 text-center text-sm focus:ring-0 py-1.5" {{ $attributes }} />
    <button type="button" class="px-2.5 py-1.5 text-slate-600 hover:bg-slate-50 rounded-r-xl" @click="qty = Math.min(max, qty + 1)">+</button>
</div>
