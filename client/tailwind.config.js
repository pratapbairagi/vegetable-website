/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-blue-600": "#4267B2",
        "theme-green-600" : "#008938"
      },
      fontSize:{
        "2xs":"10px",
        "3xs":"9px",
        "4xs":"8px",
        "5xs":"7px",
        "6xs":"6px",
      },
      backgroundColor:{
        "theme-green-600" : "#008938"
      },
      minHeight: {
        "10vh": "10vh",
        "20vh": "20vh",
        "30vh": "30vh",
        "40vh": "40vh",
        "50vh": "50vh",
        "60vh": "60vh",
        "70vh": "70vh",
        "80vh": "80vh",
        "90vh": "90vh"
      },
      maxHeight: {
        "10vh": "10vh",
        "20vh": "20vh",
        "30vh": "30vh",
        "40vh": "40vh",
        "50vh": "50vh",
        "60vh": "60vh",
        "70vh": "70vh",
        "80vh": "80vh",
        "90vh": "90vh"
      },
      fontFamily:{
        "nunito" : ["nunito" , "sans-serif"]
      },
      minWidth:{
        "90%" : "90%",
        "80%" : "80%",
        "70%" : "70%",
        "60%" : "60%",
        "50%" : "50%",
        "40%" : "40%",
        "30%" : "30%",
        "20%" : "20%"
      },
      maxWidth:{
        "90%" : "90%",
        "80%" : "80%",
        "70%" : "70%",
        "60%" : "60%",
        "50%" : "50%",
        "40%" : "40%",
        "30%" : "30%",
        "20%" : "20%"
      }
    },
  },
  plugins: [],
}