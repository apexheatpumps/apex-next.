import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        apex: {
          primary: '#0ea5e9',
          dark: '#0c4a6e',
          accent: '#22c55e'
        }
      }
    }
  },
  plugins: []
} satisfies Config;
