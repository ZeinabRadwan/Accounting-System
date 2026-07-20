<div {{ $attributes->merge(['class' => 'flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-end bg-white rounded-xl border border-slate-200/80 shadow-card p-4']) }}>
    {{ $slot }}
</div>
