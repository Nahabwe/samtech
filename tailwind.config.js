// /** @type {import('tailwindcss').Config} */
// export default {
//   darkMode: "class",
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
//   variants: {
//     extends: {
//       scrollBehavior: ["responsive"],
//     },
//   },
// };


/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class'
  ,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  variants:{
    extends:{
      scrollBehavior:['responsive'],
    }
  }
}


