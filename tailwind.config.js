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

        primary: '#ffffff',
        primary01: '#f3dbce',
        primary02: '#ece5e3',
        secondary01: '#B1C9EF',
        secondary02: '#395886',
        secondary03: '#638ECB',
        secondary04: '#4c2b21'

      },
      dark : {

        primary: '#191919',
        primary01: '#262626',
        primary02: '#383838',
        secondary01: '#cecece',
        secondary02: '#'

      }

      }

    },
  },
  plugins: [],
}