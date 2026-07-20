/**
 * POS sound + motion helpers (Web Audio — no external assets).
 */
const STORAGE_KEY = 'dentallink.pos.sound';

function createAudioContext() {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    return Ctx ? new Ctx() : null;
}

let sharedCtx = null;

function ctx() {
    if (! sharedCtx) {
        sharedCtx = createAudioContext();
    }
    if (sharedCtx?.state === 'suspended') {
        sharedCtx.resume().catch(() => {});
    }

    return sharedCtx;
}

function tone({ freq = 880, duration = 0.08, type = 'sine', gain = 0.08, slideTo = null }) {
    const audio = ctx();
    if (! audio || ! isEnabled()) {
        return;
    }

    const now = audio.currentTime;
    const osc = audio.createOscillator();
    const amp = audio.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);
    if (slideTo !== null) {
        osc.frequency.exponentialRampToValueAtTime(Math.max(40, slideTo), now + duration);
    }

    amp.gain.setValueAtTime(0.0001, now);
    amp.gain.exponentialRampToValueAtTime(gain, now + 0.01);
    amp.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(amp);
    amp.connect(audio.destination);
    osc.start(now);
    osc.stop(now + duration + 0.02);
}

export function isEnabled() {
    try {
        return localStorage.getItem(STORAGE_KEY) !== '0';
    } catch {
        return true;
    }
}

export function setEnabled(on) {
    try {
        localStorage.setItem(STORAGE_KEY, on ? '1' : '0');
    } catch {
        // ignore
    }
    window.dispatchEvent(new CustomEvent('pos-sound-changed', { detail: { enabled: on } }));
}

export function play(sound = 'click') {
    switch (sound) {
        case 'add':
            tone({ freq: 720, duration: 0.06, type: 'triangle', gain: 0.07 });
            setTimeout(() => tone({ freq: 980, duration: 0.07, type: 'triangle', gain: 0.06 }), 45);
            break;
        case 'remove':
            tone({ freq: 420, duration: 0.1, type: 'sine', gain: 0.06, slideTo: 180 });
            break;
        case 'clear':
            tone({ freq: 360, duration: 0.08, type: 'square', gain: 0.04 });
            setTimeout(() => tone({ freq: 240, duration: 0.1, type: 'square', gain: 0.035 }), 60);
            break;
        case 'success':
            tone({ freq: 523, duration: 0.09, type: 'sine', gain: 0.08 });
            setTimeout(() => tone({ freq: 659, duration: 0.09, type: 'sine', gain: 0.08 }), 80);
            setTimeout(() => tone({ freq: 784, duration: 0.14, type: 'sine', gain: 0.09 }), 160);
            break;
        case 'error':
            tone({ freq: 220, duration: 0.16, type: 'sawtooth', gain: 0.05, slideTo: 140 });
            break;
        case 'click':
        default:
            tone({ freq: 640, duration: 0.04, type: 'sine', gain: 0.045 });
            break;
    }
}

export function flashCart() {
    const cart = document.querySelector('[data-pos-cart]');
    if (! cart) {
        return;
    }
    cart.classList.remove('pos-cart-pulse');
    // force reflow
    void cart.offsetWidth;
    cart.classList.add('pos-cart-pulse');
}

export function bindPosFx() {
    document.addEventListener('click', () => ctx(), { once: true, passive: true });

    document.addEventListener('livewire:init', () => {
        Livewire.on('pos-fx', (payload) => {
            const data = Array.isArray(payload) ? payload[0] : payload;
            const sound = data?.sound ?? 'click';
            play(sound);
            if (sound === 'add') {
                flashCart();
            }
        });
    });
}
