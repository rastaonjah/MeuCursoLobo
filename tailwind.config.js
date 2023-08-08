/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: { 
    screens: {
      'sm': '320px',
      // => @media (min-width: 320px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      'fulhd': '1920px'
    },

    
    extend: {
      maxWidth: {
        '120': '120px',
        '320': '320px',
        '1/2': '80%'
      },

      colors: {
        'bg-blue': '#00071A',
        'laranja': '#CD4D04'
      },

      backgroundImage: {
        'img-1-bg': "url('./Imgs/Inicio/fundo 1.png')",
      },

      fontFamily: {
        'inter': 'Inter',
        'arial': 'Arial'
      },

      fontSize: { 
        'pd': '0.6rem',
        'pp': '0.5rem'
      },

      height: {
        '97': '28rem',
        '98': '30rem',
        '99': '34rem',
        '100': '38rem',
        '101': '48rem'
      },

      spacing: {
        '37': '10rem',
        '97': '28rem',
        '98': '30rem',
        '99': '34rem'
      }

    },
  },
  plugins: [],
}

