/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/*.{vue,js,ts,jsx,tsx}",
    "./src/**/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "600px": "600px",
        "700px": "700px",
        "800px": "800px",
      },
      colors: {
        primary: "#00668A",
        secondary: "#004E71",
        secondwhite: "#fff",
        lightGreen: "#03cfb4",
        rgba: "rgba(0,0,0,0.5)",
        newrgba: "rgb(178 232 231 / 35%)",
        grayddd: "#ddd",
        grayf4: "#f4f4f4",
        gray4: "#444",
        Cyans: "hsl(180, 29%, 50%)",
        GrayishCyan: "hsl(180, 52%, 96%)",
        LightGrayishCyan: "hsl(180, 31%, 90%)",
        DarkGrayishCyan: "hsl(180, 8%, 52%)",
        VeryDarkGrayishCyan: "hsl(180, 14%, 20%)",
      },
      size: {
        height: "50px",
        twopadding: "10px 20px",
        halfmargin: "20px auto",
        "5rem": "5rem",
        "600px": "600px",
        "700px": "700px",
        "800px": "800px",
      },
      width: {
        "500px": "500px",
        "600px": "600px",
        "700px": "700px",
        "800px": "800px",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        20: "repeat(20, minmax(0, 0.11fr))",
        25: "repeat(25, minmax(0, 0.8fr))",
        30: "repeat(30, minmax(0, 0.1fr))",

        // Complex site-specific column configuration
      },
      backgroundImage: {
        "bg-header": "url('./images/bg-header-desktop.svg')",
        "bg-mogile": "url('./images/bg-header-mobile.svg')",
      },
    },
    fontFamily: {
      Roboto: ["Roboto, sans-serif"],
      Spartan: ["League Spartan, sans-serif"],
    },
    container: {
      padding: "2rem",
      center: "true",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      3: "3px",
      6: "6px",
      7: "7px",
    },
  },
  plugins: [],
};
