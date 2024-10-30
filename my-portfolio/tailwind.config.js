/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#5B67ED",
        purple: "#8126E1",
        gray: "#C5CADE",
        "dark-blue": "#013479",
        "light-blue": "#CAE1FC",
        "light-purple": "#8353E3"
      },
      backgroundImage:{
        "gradient-rainbow":
          "linear-gradient(81.66deg, #8353E3 13.07%, #CAE1FC 47.21%, #8353E3 86.07%)",
          "gradient-rainblue":
          "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        consolas: ["Consolas", "sans-serif"],
        fsGravity: ["FS-gravity", "serif"],
        windows: ["Windows", "sans-serif"],
      },
      cursor: {
        'custom': 'url("/src/assets/img/pointer.png"), auto',
        'hand': 'url("/src/assets/img/main.png"), pointer',
      },
    },
  },
  plugins: [],
}

