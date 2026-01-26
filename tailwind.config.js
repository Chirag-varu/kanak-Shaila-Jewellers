/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '10px 10px 54px rgba(70, 62, 221, 0.1)',
      },
      fontFamily: {
        spartan: ["Spartan", "sans-serif"],
      },
    },
  },
  plugins: [],
}

