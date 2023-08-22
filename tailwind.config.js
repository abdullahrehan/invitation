/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        whitesmoke: "#f5f5f5",
        crimson: "#fa575e",
        mediumaquamarine: "#01d5ad",
      },
      fontFamily: {
        kavoon: "Kavoon",
        katibeh: "Katibeh",
      },
    },
    fontSize: {
      "9xl": "28px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
