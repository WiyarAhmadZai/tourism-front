/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'Merriweather', 'serif'],
        'sans': ['Inter', 'Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#0E4C92',
        secondary: '#1A1A1A',
        accent: '#F4B400',
        light: '#EDEDED',
        danger: '#FF6B6B',
        background: '#FFFFFF',
      },
    },
  },
  plugins: [],
}