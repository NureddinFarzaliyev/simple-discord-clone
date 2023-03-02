# Instal tailwindcss in react project (vite)

### npm install
`tailwindcss postcss@latest postcss-cli autoprefixer`

### postcss.config.cjs
module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
    }
}

### tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}