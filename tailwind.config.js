/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,tsx,ts}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Comfortaa', 'cursive'],
        hero : ['Architects Daughter', 'cursive'],
        body : ['Schoolbell', "cursive"],
        logo : ['Monomaniac One', 'sans-serif'],
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('tailwind-scrollbar'),
  ],
}

