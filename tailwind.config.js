module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '2rem',
      },
      colors: {
        customPurple: '#271555',
        skyBlue: '#E8FBFF',
        darkNavyBlue: '#123557',
      },
      textDecorationColor: {
        orange: '#E7760D',
      },
    },
  },
  plugins: [],
}
