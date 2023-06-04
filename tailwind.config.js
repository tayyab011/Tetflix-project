/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      padding: {
        "570px": "570px",
        "500px": "500px",
        "400px": "400px",
        "650px": "650px",
      },
    
    },
  },
  plugins: [require("daisyui")],
};

