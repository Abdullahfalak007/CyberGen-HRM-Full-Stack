// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customblue: "#0771ef",
        customlightblue: "#83baff",
        selectedbg: "#FFFFFF",
        selectedtext: "#000000",
        hoverbg: "rgba(0, 0, 0, 0.1)",
        tilecolor: "#595959",
      },
      fontFamily: {
        display: ["Poppins", "ui-sans-serif"],
      },
      fontSize: {
        customsize: "0.945rem",
      },
      borderWidth: {
        4: "4px",
      },
      spacing: {
        arrowlength: "8.75rem",
      },
      boxShadow: {
        bottom: "0 2px 0px 0px rgba(0, 0, 0, 0.9)",
      },
    },
  },
  plugins: [],
};
