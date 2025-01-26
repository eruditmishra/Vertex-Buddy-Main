/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#5fb2ee",
        "primary-yellow": "#f0ac4d",
        "primary-violet": "#522ec1",
        "offset-black": "#535353",
        "input-field-bg": "#f8f8f88c",
      },
    },
  },
  plugins: [],
};
