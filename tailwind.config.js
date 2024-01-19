/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      "xs":"370px",
      "sm":"576px",
      "lsm":"660px",
      "md":"960px",
      "lg":"1340px",
      "mdl":"1450px",
      "xl":"1600px",
      "2xl":"1980px"
    }
  },
  plugins: [],
}

