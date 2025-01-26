/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#5fb2ee",
        "primary-yellow": "#f0ac4d",
        "primary-violet": "#522ec1",
        "offset-black": "#535353",
        "input-field-bg": "#f8f8f88c",
        "dark-violet": "#0d071f",
      },
    },
  },
  plugins: [],
};
