/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['DM Sans', 'system-ui', 'sans-serif'],
          display: ['Playfair Display', 'Georgia', 'serif'],
        },
        colors: {
          navy: {
            50:  '#eef2f8',
            100: '#d5dff0',
            200: '#adc0e1',
            300: '#7d9bce',
            400: '#4e76bb',
            500: '#2d5aa0',
            600: '#1e4285',
            700: '#163268',
            800: '#0f2350',
            900: '#091838',
            950: '#060f24',
          },
        },
      },
    },
    plugins: [],
  }