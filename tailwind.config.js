/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],

    theme: {
      fontFamily: {
        roboto: ['Poppins', 'sans-serif']
      },
    },

  extend: {

    colors: {
      "primaryColor": "#FF5F15",
      "green": "#2EB67D",
      "red": "#FF0000",
      "white": "#FFFFFF",
      "text-color": "#222222",
      "gray": " #2F2E2E",
      "background-color": "#FDEFE9"
    },

  },

  plugins: [],
}