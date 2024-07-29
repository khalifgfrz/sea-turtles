/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ["./src/**/*.tsx"],
  theme: {
    screens: {
      xxsm: "321px",
      xsm: "376px",
      tbt: "426px",
      sm: "641px",
      md: "769px",
      lg: "1025px",
      xl: "1281px",
      "2xl": "1441px",
      "4xl": "1537px",
      uw: "2041px",
    },
    extend: {
      minHeight: {
        "50vh": "50vh",
      },
      backgroundImage: {
        "bg-login": "url('/src/assets/images/background-login.webp')",
        "bg-home": "url('/src/assets/images/header-img.webp')",
        "bg-product": "url('/src/assets/images/background-product.webp')",
        "bg-menu": "url('/src/assets/images/menu/1.webp')",
      },
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        primary: "#ff8906",
        darkprimary: "#e77d04",
        darkprimary2: "#EF8001",
        lightprimary: "#FFE5C8",
        secondary: "#a0a3bd",
        homebg: "#202020",
        black: "#0b0909",
        lightblack: "#353030",
        lightblack2: "#0b132a",
        lightgray: "#4f5665",
        lightgray2: "#afb5c0",
        lightgray3: "#aaaaaa",
        darkgray: "#f8f8f8",
        darkgray2: "#e8e8e8",
        darkgray3: "#f1f1f1",
        darkwhite: "#dedede",
        darkwhite2: "#f3f3f3",
        green: "#00A700",
        greenbg: "#C9E6C9",
        bggreen: "#88b788",
        bgyellow: "#f5c361",
        bgpage: "#dde0e4",
        span: "#8e6447",
      },
      gridTemplateColumns: {
        custom: "100px minmax(100px, 1fr) 200px",
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
