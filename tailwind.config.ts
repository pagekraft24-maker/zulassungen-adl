/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: { '18': '4.5rem' },
      colors: {
        navy: {
          50: '#e8ecf4',
          100: '#c5cfe2',
          200: '#9eafce',
          300: '#778fba',
          400: '#5a77ab',
          500: '#3d5f9c',
          600: '#2e4f8a',
          700: '#1c3870',
          800: '#0f2558',
          900: '#0A1F44',
          950: '#061530',
        },
        whatsapp: '#25D366',
        offwhite: '#F8F9FA',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
