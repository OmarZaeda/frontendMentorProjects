/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      Orange: "hsl(25, 97%, 53%)",
      lessOrange: "hsla(25, 97%, 60%, 1)",
      White: "hsl(0, 0%, 100%)",
      LightGrey: "hsl(217, 12%, 63%)",
      MediumGrey: "hsl(216, 12%, 54%)",
      DarkBlue: "hsl(213, 19%, 18%)",
      starDarkBlue: "hsla(213, 19%, 22%, 1)",
      VeryDarkBlue: "hsl(216, 12%, 8%)",
    },
    fontFamily: {
      overpass: "'Overpass', sans-serif",
      hankenGrotesk: "'Hanken Grotesk', sans-serif",
      fraunces: "'Fraunces', serif",
      montserrat: "'Montserrat', sans-serif",
      outfit: "'Outfit', sans-serif",
      poppins: "'Poppins', sans-serif",
      karla: "'Karla', sans-serif",
    },
    extend: {},
  },
  plugins: [],
};
