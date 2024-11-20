/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rem: ["rem", "sans-serif"], // Use the real font name here
      },
    },
  },
  plugins: [],
};
