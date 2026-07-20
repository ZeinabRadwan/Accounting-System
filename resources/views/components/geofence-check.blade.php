@if (auth()->check() && auth()->user()->isSales() && auth()->user()->branch?->hasGeofence())
<div
    x-data="{
        intervalId: null,
        warningVisible: false,
        warningMessage: '',
        async checkLocation() {
            if (!navigator.geolocation) return;
            navigator.geolocation.getCurrentPosition(
                async (pos) => {
                    try {
                        const resp = await fetch('{{ route('geofence.check') }}', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'X-CSRF-TOKEN': document.querySelector('meta[name=csrf-token]').content,
                                'Accept': 'application/json',
                            },
                            body: JSON.stringify({
                                latitude: pos.coords.latitude,
                                longitude: pos.coords.longitude,
                            }),
                        });
                        const data = await resp.json();
                        if (!data.allowed) {
                            this.warningMessage = data.message || '{{ __('You are outside your assigned branch\'s allowed location.') }}';
                            this.warningVisible = true;
                            clearInterval(this.intervalId);
                            setTimeout(() => {
                                const form = document.createElement('form');
                                form.method = 'POST';
                                form.action = '{{ route('logout') }}';
                                const csrf = document.createElement('input');
                                csrf.type = 'hidden';
                                csrf.name = '_token';
                                csrf.value = document.querySelector('meta[name=csrf-token]').content;
                                form.appendChild(csrf);
                                document.body.appendChild(form);
                                form.submit();
                            }, 5000);
                        } else {
                            this.warningVisible = false;
                        }
                    } catch (e) {}
                },
                () => {},
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 60000 }
            );
        }
    }"
    x-init="checkLocation(); intervalId = setInterval(() => checkLocation(), 300000)"
    x-on:beforeunload.window="clearInterval(intervalId)"
>
    <template x-if="warningVisible">
        <div class="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm">
            <div class="bg-white rounded-2xl shadow-xl p-8 max-w-md mx-4 text-center">
                <div class="mx-auto w-14 h-14 rounded-full bg-danger-100 flex items-center justify-center mb-4">
                    <svg class="w-7 h-7 text-danger-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                    </svg>
                </div>
                <h3 class="text-lg font-semibold text-slate-900 mb-2">{{ __('Location Warning') }}</h3>
                <p class="text-sm text-slate-600 mb-4" x-text="warningMessage"></p>
                <p class="text-xs text-slate-500">{{ __('You will be logged out in 5 seconds...') }}</p>
            </div>
        </div>
    </template>
</div>
@endif
