/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index/html", "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dc-gray-1': '#1E2124',
        'dc-gray-2': '#282B30',
        'dc-gray-3': '#36393E',
        'dc-blue': '#7289DA',
        'dc-green': '#48CA9F',
        'dc-text': '#959089',
        'dc-text-blue': '#3E86CD'
      }
    },
  },
  plugins: [],
}