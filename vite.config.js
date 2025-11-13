import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue2';
import { join } from 'path';
import { copyFileSync, mkdirSync, existsSync, readdirSync } from 'fs';
import { resolve } from 'path';

// Plugin to copy language files to build directory
function copyLangFiles() {
    return {
        name: 'copy-lang-files',
        writeBundle() {
            const langDir = resolve(__dirname, 'resources/js/lang');
            const buildLangDir = resolve(__dirname, 'public/build/lang');
            
            if (existsSync(langDir)) {
                // Create build/lang directory if it doesn't exist
                if (!existsSync(buildLangDir)) {
                    mkdirSync(buildLangDir, { recursive: true });
                }
                
                // Copy all JSON files from resources/js/lang to public/build/lang
                const files = readdirSync(langDir);
                files.forEach((file) => {
                    if (file.endsWith('.json')) {
                        const src = resolve(langDir, file);
                        const dest = resolve(buildLangDir, file);
                        copyFileSync(src, dest);
                    }
                });
            }
        },
    };
}

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
        copyLangFiles(),
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

