/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        DMSans: ["Dm Sans", "Sans-Serif"],
        Inter: ["Inter", "Sans-Serif"],
        Poppins: ["Poppins", "Sans-Serif"],
        PlayFair: ["PlayFair Display", "Sans-Serif"],
      },
    },
  },
  plugins: [],
};

