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
        inter : ['Inter', 'sans-serif'],
      },
      keyframes : {
        shine : {
          "0%" : {
            top : "-80%",
            left : "-30%",
          },
          "100%" : {
            top : "100%",
            left : "100%",
          }
        }
      },
      animation : {
        "glass-shine" : "shine 3s forwards ease"
      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('tailwind-scrollbar'),
  ],
}

