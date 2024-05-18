import  { blackA, grass, green } from '@radix-ui/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./**/*.vue'],
  theme: {
    extend: {
      colors: {
        ...blackA,
        ...grass,
        ...green,
      },
    },
  },
  plugins: [],
}