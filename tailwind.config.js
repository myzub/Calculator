/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-color-dark": "#466486",
        "func-button-color": "#7B97B9",
        "digits-button-color": "#F2F4F8",
        "digits-button-color-dark": "#4D6E93",
      },
    },
  },
  plugins: [],
};
