import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './app/Livewire/**/*.php',
        './app/View/**/*.php',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                arabic: ['Cairo', 'Inter', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                // Burgundy as primary brand color
                primary: {
                    DEFAULT: '#800020',
                    50:  '#FFF5F7',
                    100: '#FDECEF',
                    200: '#F9D1D9',
                    300: '#F2A8B4',
                    400: '#D86A80',
                    500: '#A81F3B',
                    600: '#800020',
                    700: '#6A001B',
                    800: '#520015',
                    900: '#3A0010',
                },
                // Override Tailwind's indigo palette to burgundy so existing indigo-* classes render burgundy
                indigo: {
                    50:  '#FFF5F7',
                    100: '#FDECEF',
                    200: '#F9D1D9',
                    300: '#F2A8B4',
                    400: '#D86A80',
                    500: '#A81F3B',
                    600: '#800020',
                    700: '#6A001B',
                    800: '#520015',
                    900: '#3A0010',
                },
                success: {
                    DEFAULT: '#16A34A',
                    50: '#F0FDF4',
                    100: '#DCFCE7',
                    500: '#22C55E',
                    600: '#16A34A',
                    700: '#15803D',
                },
                warning: {
                    DEFAULT: '#D97706',
                    50: '#FFFBEB',
                    100: '#FEF3C7',
                    500: '#F59E0B',
                    600: '#D97706',
                    700: '#B45309',
                },
                danger: {
                    DEFAULT: '#DC2626',
                    50: '#FEF2F2',
                    100: '#FEE2E2',
                    500: '#EF4444',
                    600: '#DC2626',
                    700: '#B91C1C',
                },
            },
            borderRadius: {
                xl: '12px',
            },
            boxShadow: {
                card: '0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.06)',
                soft: '0 4px 12px -2px rgb(0 0 0 / 0.06)',
            },
            spacing: {
                4.5: '1.125rem',
            },
            transitionDuration: {
                150: '150ms',
            },
        },
    },

    plugins: [forms],
};
