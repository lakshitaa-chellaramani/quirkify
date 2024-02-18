/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        bg : '#F8F7FF',
        lightblue : '#B8B8FF',
        babypink : '#FFEEDD',
        pink : '#FFD8BE',
        lavender : '#9381FF',
      },
    },
  },
  plugins: [ require('daisyui'), require('flowbite/plugin'),],
}