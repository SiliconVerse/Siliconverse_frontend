/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      fontFamily: {
        roboto: ['Poppins', 'sans-serif'],
      },
      colors: {
        primaryColor: '#FF5F15',
        'silicon-green': '#2EB67D',
        'silcon-red': '#FF0000',
        white: '#FFFFFF',
        'text-color': '#222222',
        'silicon-gray': ' #2F2E2E',
        'background-color': '#FDEFE9',
        'off-white': '#D9D9D9',
      },
      borderRadius: {
        sl: '10px',
      },
    },
  },

  plugins: [],
};
