/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}','./components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        chocolate: "#A43014",
        "chocolate-white" : "#FF9765",
        "chocolate-red": "#E0471B",
        gray: "#737373",
        "gray-white" : '#FAFAFA',
        orange: "#FF531E",
        "black-gray": "#171717",
        "gray-5": "#737373",
        "gray-10": "#E8EDF3",
        "gray-50": "#F5F5F5",
        "gray-75": "#D4D4D4",
        "gray-100": "#D9D9D9",
        "gray-150": "#5E6A7B",
        "gray-200": "#858E9B",
        "gray-250": "#8E99AA",
        "gray-300": "#525252",
        "gray-350": "#717C8B",
        "gray-400": "#171717",
        "gray-450": "#525252",
        "rose-white": "#FFDCCB",
      }
    },
  },
  plugins: [],
}

