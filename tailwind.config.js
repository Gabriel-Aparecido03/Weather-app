module.exports = {
  content: [
    "./src/**/*.{js,jsx.ts,tsx}",
  ],
  theme: {
    fontFamily:{
      roboto:['Roboto','sans-serif']
    },
    colors:{
      'black':'#000',
      'white':'#fff',
      'super-light-gray':'#f1f1f1',
      'light-gray':'#f4f4f4',
      'medium-gray':'#b3b3b3',
      'dark-gray':'#c1c1c1'
    },
    extend: {
      spacing:{
        'medium':'.5rem',
        'xl':'1rem',
        '2xl':'2rem',
        '4xl':'1rem'
      },
      borderRadius:{
        'medium':'.5rem',
        'xl':'1rem'
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
