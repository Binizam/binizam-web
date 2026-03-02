/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
      },
      colors: {
        main: '#FFFCF5',
        surface: '#F5F0E6',
        primary: '#292524',
        muted: '#57534E',
        accent: '#D97706',
        stone: {
          800: '#292524',
          900: '#1c1917',
          950: '#0c0a09',
        }
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
      },
      fontSize: {
        xxs: '0.65rem',
      }
    }
  },
  plugins: [],
}