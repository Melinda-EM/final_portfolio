/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      color: {
        blue: "#24CBFF",
        red: "#DA6BFF",
        yellow: "#FD8D81",
        gray: "#ededed",
        "deep-blue": "#160836",
        "dark-gray": "#757575",
        "light-blue": "#5537D1",
        "opaque-black": "rgba(0, 0, 0, 0.35)",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FF0055 78.07%)",
          "gradient-rainblue":
          "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
      }),
      fontFamily: {

      },
      content: {
        linkedin: "url('./assets/linkedin.png')",
        github: "url('./assets/github.png')",
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px"
    },
  },
  plugins: [],
};
