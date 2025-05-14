/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light Theme
        'light-bg': '#f8f9fa',
        'light-primary': '#0066CC',
        'light-secondary': '#6B7280',
        'light-accent': '#F59E0B',
        'light-text': '#1F2937',
        'light-muted': '#6B7280',

        // Dark Theme
        'dark-bg': '#121212',
        'dark-primary': '#60A5FA',
        'dark-secondary': '#9CA3AF',
        'dark-accent': '#F97316',
        'dark-text': '#F3F4F6',
        'dark-muted': '#9CA3AF',

        // Neon Theme (instead of Alien)
        'neon-bg': '#0A1E1A',
        'neon-primary': '#00F5D4',
        'neon-secondary': '#00B295',
        'neon-accent': '#F0F600',
        'neon-text': '#E2E8F0',
        'neon-muted': '#94A3B8',

        // Status Colors
        'success': '#10B981',
        'warning': '#F59E0B',
        'error': '#EF4444',
        'info': '#3B82F6',
      },
      fontFamily: {
        sans: ['Lato', 'Inter var', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'card': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-500px 0' },
          '100%': { backgroundPosition: '500px 0' },
        },
      },
      animation: {
        shimmer: 'shimmer 2s linear infinite',
      },
    },
  },
  plugins: [],
};