/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg : '#F8F7FF',
        lightblue : '#B8B8FF',
        babypink : '#FFEEDD',
        pink : '#FFD8BE',
        lavender : '#FFD8BE',
      },
    },
  },
  plugins: [ require('daisyui',"tw-elements-react/dist/plugin.cjs"),],
}