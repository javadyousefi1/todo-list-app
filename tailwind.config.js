/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:'class',
  theme: {
    container: {
      center: true,
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}