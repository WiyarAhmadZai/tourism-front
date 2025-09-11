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
        primary: '#2E7D32',
        secondary: '#1565C0',
        accent: '#D4AF37',
        background: '#F9FAFB',
      },
    },
  },
  plugins: [],
}