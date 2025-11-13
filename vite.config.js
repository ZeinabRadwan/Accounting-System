import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue2';
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';
import { join } from 'path';
import { copyFileSync, mkdirSync, readdirSync } from 'fs';

export default defineConfig({
    base: '/build/',
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
        // Plugin to copy lang files to build directory
        {
            name: 'copy-lang-files',
            closeBundle() {
                const langDir = join(__dirname, 'resources/js/lang');
                const buildLangDir = join(__dirname, 'public/build/lang');
                
                try {
                    mkdirSync(buildLangDir, { recursive: true });
                    const files = readdirSync(langDir);
                    files.forEach(file => {
                        if (file.endsWith('.json')) {
                            copyFileSync(
                                join(langDir, file),
                                join(buildLangDir, file)
                            );
                        }
                    });
                } catch (error) {
                    console.error('Error copying lang files:', error);
                }
            },
        },
        // Plugin to clean up unwanted files from build directory
        {
            name: 'clean-build-files',
            closeBundle() {
                const { unlinkSync, existsSync } = require('fs');
                const buildDir = join(__dirname, 'public/build');
                
                // Remove Laravel entry point and config files that shouldn't be in build
                const filesToRemove = [
                    'index.php',
                    '.htaccess',
                    'web.config',
                    'robots.txt',
                ];
                
                filesToRemove.forEach(file => {
                    const filePath = join(buildDir, file);
                    if (existsSync(filePath)) {
                        try {
                            unlinkSync(filePath);
                            console.log(`Removed ${file} from build directory`);
                        } catch (error) {
                            console.warn(`Could not remove ${file}:`, error.message);
                        }
                    }
                });
            },
        },
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
            plugins: [
                dynamicImportVars({
                    include: ['**/*.vue', '**/*.json'],
                }),
            ],
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

