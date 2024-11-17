/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      width: {
        "custom-90" : "90%",
        "custom-60" : "60%",
        "custom-40" : "40%",
      },
      fontSize: {
        "custom-1" : "12px",
      },
    },
  },
  plugins: [],
}