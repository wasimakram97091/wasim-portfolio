/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textColor: {
        cyanLight: "#2c98f0",
        nextIcon: "#2c98f0",
        drivenIcon: "#ec5453",
        apiIcon: "#a84cb8",
        performanceIcon: "#2fa499",
        gitIcon: "#4054b2",
      },
      backgroundColor: {
        deepYellow: "#f9bf3f",
        nextBg: "2c98f0",
        jsBg: "#ec5453",
        htmlBg: "#a84cb8",
        cssBg: "#2fa499",
        reduxBg: "#4054b2",
      },
      colors: {
        nextIconB: "#2c98f0",
        drivenIconB: "#ec5453",
        apiIconB: "#a84cb8",
        performanceIconB: "#2fa499",
        gitIconB: "#4054b2",
      },
    },
  },
  plugins: [],
};
