/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
      },
      colors: {
        gray: {
          light: '#E5E5E5',
          DEFAULT: '#808080',
          dark: '#333333',
        },
        background: '#FFFFFF',
      },
    },
  },
  plugins: [],
} 