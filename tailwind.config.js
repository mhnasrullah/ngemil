/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    container:{
      padding: {
        DEFAULT: '.5rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      }
    },
    extend: {
      colors:{
        bluec : "#293453",
        redc : "#F95C4F",
        whitec : "#FFFEFF",
        blackc : "#16222C"
      },
      dropShadow:{
        'head' : [
          '4px 4px 15px rgba(0, 0, 0, 0.25)',
          '-4px -4px 15px rgba(0, 0, 0, 0.25)',
        ]
      }
    },
  },
  plugins: [],
}
