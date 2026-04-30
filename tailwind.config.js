/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#f7f3ea",
        sage: {
          500: "#9caf88",
        },
      },
    },
  },
  plugins: [],
}