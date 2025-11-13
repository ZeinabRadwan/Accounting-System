import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue2';
import { join } from 'path';

export default defineConfig({
    publicDir: 'public',
    plugins: [
        laravel({
            input: [
                'resources/js/central.js',
                'resources/js/tenant.js',
                'resources/js/rtl-manager.js',
                'resources/sass/app.scss',
                'resources/sass/custom_ltr.scss',
                'resources/sass/custom_rtl.scss',
            ],
            refresh: true,
        }),
        vue(),
    ],
    resolve: {
        alias: {
            '~': join(__dirname, './resources/js'),
            '@': join(__dirname, './resources/js'),
        },
        extensions: ['.js', '.json', '.vue'],
    },
    build: {
        rollupOptions: {
            output: {
                chunkFileNames: 'js/[name].js',
            },
        },
    },
    assetsInclude: ['**/*.wav'],
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern',
            },
        },
    },
});

