import './bootstrap';
import { bindPosFx, isEnabled, setEnabled, play } from './pos-fx';

bindPosFx();

document.addEventListener('alpine:init', () => {
    Alpine.store('toast', {
        items: [],
        titles: {
            success: 'Success',
            error: 'Error',
            warning: 'Warning',
            info: 'Information',
        },
        validationMessage: 'Please fill in all required fields.',
        setLocale(config = {}) {
            if (config.titles) {
                this.titles = { ...this.titles, ...config.titles };
            }
            if (config.validationMessage) {
                this.validationMessage = config.validationMessage;
            }
        },
        normalizeType(type = 'success') {
            const value = String(type || 'success').toLowerCase();
            if (['danger', 'error', 'failed', 'fail'].includes(value)) return 'error';
            if (['warn', 'warning'].includes(value)) return 'warning';
            if (['info', 'information', 'notice'].includes(value)) return 'info';
            return 'success';
        },
        show(message, type = 'success', title = null, duration = 4500) {
            this.push({ message, type, title, duration });
        },
        push(payload = {}) {
            const type = this.normalizeType(payload.type || 'success');
            const id = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
            const item = {
                id,
                type,
                title: payload.title || this.titles[type] || 'Success',
                message: payload.message || '',
                duration: Number(payload.duration || 4500),
                visible: true,
            };

            this.items.push(item);
            window.setTimeout(() => this.dismiss(id), item.duration);
        },
        dismiss(id) {
            const target = this.items.find((t) => t.id === id);
            if (target) {
                target.visible = false;
            }
            window.setTimeout(() => {
                this.items = this.items.filter((t) => t.id !== id);
            }, 220);
        },
    });

    Alpine.store('sidebar', {
        open: false,
        toggle() {
            this.open = !this.open;
        },
        close() {
            this.open = false;
        },
    });

    Alpine.store('posFx', {
        soundOn: isEnabled(),
        toggleSound() {
            this.soundOn = ! this.soundOn;
            setEnabled(this.soundOn);
            if (this.soundOn) {
                play('click');
            }
        },
    });

    window.addEventListener('pos-sound-changed', (e) => {
        Alpine.store('posFx').soundOn = !! e.detail?.enabled;
    });
});

document.addEventListener('livewire:init', () => {
    Livewire.hook('request', ({ fail }) => {
        fail(({ status, content }) => {
            if (status !== 422 || ! window.Alpine?.store('toast')) {
                return;
            }

            const store = Alpine.store('toast');
            let message = store.validationMessage || 'Please fill in all required fields.';

            try {
                const payload = typeof content === 'string' ? JSON.parse(content) : content;
                const errors = payload?.errors || payload?.response?.errors;
                if (errors && typeof errors === 'object') {
                    const firstKey = Object.keys(errors)[0];
                    const first = firstKey ? errors[firstKey] : null;
                    if (Array.isArray(first) && first[0]) {
                        message = first[0];
                    } else if (typeof first === 'string') {
                        message = first;
                    }
                } else if (payload?.message) {
                    message = payload.message;
                }
            } catch (e) {
                // Keep default validation message.
            }

            store.push({
                type: 'warning',
                title: store.titles.warning,
                message,
                duration: 5000,
            });
        });
    });
});
