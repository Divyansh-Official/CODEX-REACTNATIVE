/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {

      // Manually edited by Divyansh

      colors: {

        light : {

        primary: '#F0F3FA',
        primary01: '#D5DEEF',
        primary02: '#8AAE0',
        secondary01: '#B1C9EF',
        secondary02: '#395886',
        secondary03: '#638ECB'


      },
      dark : {

        primary: '#191919',
        primary01: '#262626',
        primary02: '#383838',
        secondary01: '#',
        secondary02: '#'

      }

      }

    },
  },
  plugins: [],
}