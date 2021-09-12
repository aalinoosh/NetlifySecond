module.exports = {
  // mode: 'jit',
  purge: ["./**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1700px",
      bs: "2000px",
    },
    fontFamily: {
      primary: "Roboto-Medium",
      primaryLight: "Roboto-Light",
      primaryNormal: "Area-Regular",
      primaryBold: "Area-bold",
      primaryBlack: "Area-Black",
      
    },
    fontSize:{
      small: "0.75rem", // 12px
      small2: "0.875rem", // 14px
      base: ["1rem", "1.375"], // 16px
      bigger1: "1.125rem", // 18px
      bigger2: "1.25rem", // 20px
      bigger3: "1.5rem", // 24px
      big1: "1.625rem", // 26px
      big2: "1.875rem", // 30px
      big3: ["2.5rem", "1.1"], // 40px
      big4: "3.12rem", // 50px
      big5: "3.75rem", // 60px
      big6: "4.375rem", // 70px
      huge: "5rem", //80px
      huge1: "5.625rem", // 90px
      huge2: ["6.25rem", "1.1"], // 100px
      huge3: ["7.5rem", "1"], // 120px
      huge4: "9.375rem", // 150px
      huge5: "15rem", // 240px
      unit: "20rem", // absolute
      huge6: "23.75rem", // 380px
      "huge6-vw": "26.38888888888889vw", // 380px
      huge7: "11.25rem", // 180px
      "huge-vw": "15.3vw", // 220px @ 1440px
    },
    fontWeight: {
      extralight: 100,
      light: 300,
      extrabold: 800,
      bold: 900,
    },
    extend: {
      colors: {
        // basic project colors:
        primary: "#17224D",
        secondary: "#12CAA0",
        light: "#F1F2F3",
        indigo: "#D1DBFF",
      },
      lineHeight : {
        "3" : "3rem",
        "4" : "3.75rem",
        "11" : "4.75rem",
        "28" : "1.75rem",
        "40" : "2.5rem",
        "54" : "3.375rem",
        "90": "5rem",
        "150": "8.75rem",

      },
      height: {
        "0.6" : "0.15rem",
        "30" : "30rem",
        "40rem" : "40rem",
        "35" : "35rem",
        "screen/2": "50vh",
        "screen/3": "33vh",
        "screen/4": "70vh"
      },
      padding: {
        "header": "4.375rem",
        "72" : "18rem",
        "56" : "70.3%",
      },
      margin: {
        "-20vw": "-20vw",
        "-100vw": "-100vw",
        "-11vh": "-11vh",
        "-5vw": "-5vw",
      },
      spacing: {
        "108": "27rem",
        "88": "22rem",
        "18": "4.5rem", // 72px
        "22": "5.5rem",
      },
      width: {
        "screen/2": "50vw",
        "screen/3": "33vw",
        "35": "35rem",
        "48": "48rem",
        "40rem" : "40rem",
        "23":  "23rem",
        "24":  "23.5rem",
        "25" : "25rem",
        "110vw" : "110vw",
        "100" : "30rem",
        "27" : "27rem",
      },
      borderWidth: {
        "1": "1px",
      },
      minWidth: {
        "5": "5rem",
        "10": "10rem",
        "15": "15rem",
        "20": "20rem",
        "38": "38rem",
        "33vw": "33vw",
        "35vw" : "35vw",
        "40": "40rem",
        "45": "45rem",
        
      },
      minHeight: {
        "38": "38rem",
        "10": "10vw",
        "20": "20vw",
        " ": "40vw",


      },
      inset: {
        "43": "43%",
        "17/5": "85%",
        "4/10": "40%",
        "35/100" : "35%",
        "30/100" : "30%",
        "37/100" : "37%",
        "-5vw": "-5vw",
        "5vw": "5vw",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
      },
      maxHeight: {
        "40r": "40rem", 
        "3":"3rem"
      },
      maxWidth: {
        container: "120rem",
        "12": "3rem",
      },
      rotate: {
        "9": "9deg",
        "8": "8deg",
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ["hover", "focus"]
    },
  },
  plugins: [],
}

