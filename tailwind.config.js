/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
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
      keyframes:{
        bouncing: {
          '0%,100%' : {
            transform: 'translateY(0)',
            AnimationEffect: 'cubic-bezier(0, 0, 0.2, 1)'},
          '50%' : {
            transform: 'translateY(-25%)',
            AnimationEffect: 'cubic-bezier(0.8, 0, 1, 1)'}
        },
        right:{
          '0%' : {
            transform: 'translateX(-10px)',
          },
          '100%' : {
            transform: 'translateX(10px)',
          }
        }
      },
      animation:{
        custom : "bouncing 2s infinite",
        slideright : "right 2s infinite"
      },
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
        ],
        'allc' : [
          '0px 4px 15px rgba(0, 0, 0, 0.10)',
        ]
      },
      spacing:{
        '500' : '567px'
      }
    },
  },
  plugins: [],
}
