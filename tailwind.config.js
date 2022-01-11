module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.50)',
      },
      boxShadow: {
        '3xl': '0 40px 100px 5px rgba(0, 0, 0, 0.7)',
      },
    },
  },
  plugins: [],
}