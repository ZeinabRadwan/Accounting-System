import './bootstrap';
import { bindPosFx, isEnabled, setEnabled, play } from './pos-fx';

bindPosFx();

document.addEventListener('alpine:init', () => {
    Alpine.store('toast', {
        items: [],
        show(message, type = 'success') {
            const id = Date.now();
            this.items.push({ id, message, type });
            setTimeout(() => this.dismiss(id), 3200);
        },
        dismiss(id) {
            this.items = this.items.filter((t) => t.id !== id);
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
