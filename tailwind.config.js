/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { fontFamily: { roboto: "Roboto", "changa-one": "'Changa One'" } },
    colors: {
      white: "#fff",
      gray: {
        "100": "#f9f9f9",
        "200": "#939eb4",
        "300": "#576074",
        "400": "#495367",
        "500": "#434343",
      },
      indigo: { "100": "#8a53ff", "200": "#5922ce" },
      blue: "#5b21d7",
    },
    fontSize: {
      xs: "14px",
      sm: "16px",
      base: "18px",
      lg: "24px",
      xl: "36px",
      "2xl": "39px",
    },
    screens: {
      lg: { max: "1200px" },
      md: { max: "768px" },
      sm: { max: "428px" },
      mq350small: { raw: "screen and (max-width: 350px)" },
    },
  },
  corePlugins: { preflight: false },
};
