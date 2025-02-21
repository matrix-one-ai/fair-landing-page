/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#D9D9D9",
        black: "#38383D",
        orange_brand: "#FF5F00",
        mint_brand: "#ACE1AF",
        gray_roll_over_fields: "#CDCDCD",
        gray_secondary: "#AFAFAF",
        gray_secondary_text: "#777",
        gray_secondary_roll_over: "#E8E8E8",
      },
      fontSize: {
        h1: ["2.25rem", { lineHeight: "2.5rem" }], // 36px
        h2: ["1.875rem", { lineHeight: "2.25rem" }], // 30px
        h3: ["1.5rem", { lineHeight: "2rem" }], // 24px
        h4: ["1.25rem", { lineHeight: "1.75rem" }], // 20px
        h5: ["1.125rem", { lineHeight: "1.5rem" }], // 18px
        h6: ["1rem", { lineHeight: "1.5rem" }], // 16px
        p: ["1rem", { lineHeight: "1rem" }], // 14px
        xxs: ["0.625rem", { lineHeight: "0.75rem" }], // 10px
      },
      fontFamily: {
        verdana: ["Verdana", "sans-serif"],
      },
      backgroundColor: {
        main: "#d9d9d9",
      },
      dropShadow: {
        button: "0px 6px 2px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
