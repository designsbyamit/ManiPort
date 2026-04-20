/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        accent: '#C9A96E',
        'accent-light': '#DFC08E',
        dark: {
          bg: '#0F0F0F',
          surface: '#1A1A1A',
          border: '#2A2A2A',
          text: '#F5F5F0',
          muted: '#888888',
        },
        light: {
          bg: '#FAFAF8',
          surface: '#F0EFEB',
          border: '#E0DDD6',
          text: '#1A1A1A',
          muted: '#666666',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
