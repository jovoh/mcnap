/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1b76bc',
        dark: '#252525',
        light: '#f8f8f8',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in',
        'slide-in': 'slideIn 0.6s ease-out',
      },
    },
  },
  plugins: [],
}