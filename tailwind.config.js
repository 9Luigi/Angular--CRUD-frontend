/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        '10': 'repeat(10,minmax(0,1fr))'
      },
    },
    colors: {
      air_force_blue:'#628395',
      beaver:'#96897B',
      earth_yellow:'#DBAD6A',
      buff:'#CF995F',
      citron:'#D0CE7C',
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');

    }
  ],
}