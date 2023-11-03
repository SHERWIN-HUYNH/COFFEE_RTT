/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        primary:"#F7F2E8",
        secondary:"#F9C4C4",
        colorBut:"#421A1A",
        mainColor:"#3C0E0E"
      },
      fontFamily:{
        poppins:["Poppins","san-serif"]
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
  
}

