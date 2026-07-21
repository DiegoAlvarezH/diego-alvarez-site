/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Tokens definidos como CSS vars en global.css — cambian con [data-theme]
        bg: 'var(--c-bg)',
        surface: 'var(--c-surface)',
        'surface-2': 'var(--c-surface-2)',
        border: 'var(--c-border)',
        'border-hover': 'var(--c-border-hover)',
        accent: '#A8FF47',
        'accent-dark': '#7ACC1F',
        'text-1': 'var(--c-text-1)',
        'text-2': 'var(--c-text-2)',
        'text-3': 'var(--c-text-3)',
        // text-white se usa como "texto principal" en todo el sitio → adaptable
        white: 'var(--c-text-1)',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['Geist', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
