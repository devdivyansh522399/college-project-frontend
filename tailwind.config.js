/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
           black : "#1F1F1F",
           Blue : "#5F81FA",
           light: "#6A6E83",
           soft : '#A8B1CE',
           lightBlue : "#CDDEFF",
           whiteHard : "#F1F5FF",
           whiteSemi : "#F8F9FD",
           whiteLight : "#FFFFFF"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["'Roboto'", "sans-serif"],
      },
      Shadow : {
        shadow : "shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
      }
    },
  },
  plugins: [],
}