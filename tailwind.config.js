/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D60000',
          50: '#FFE5E5',
          100: '#FFCCCC',
          200: '#FF9999',
          300: '#FF6666',
          400: '#FF3333',
          500: '#D60000',
          600: '#B30000',
          700: '#900000',
          800: '#6D0000',
          900: '#4A0000',
        },
        dark: {
          DEFAULT: '#0F0F0F',
          50: '#393939',
          100: '#2E2E2E',
          200: '#252525',
          300: '#1C1C1C',
          400: '#151515',
          500: '#0F0F0F',
          600: '#090909',
          700: '#060606',
          800: '#030303',
          900: '#000000',
        },
        light: {
          DEFAULT: '#F5F5F5',
          50: '#FFFFFF',
          100: '#FCFCFC',
          200: '#F9F9F9',
          300: '#F7F7F7',
          400: '#F6F6F6',
          500: '#F5F5F5',
          600: '#D9D9D9',
          700: '#BDBDBD',
          800: '#A1A1A1',
          900: '#858585',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};