import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "tailwindcss/tailwind.css"
import Navbar from './component/navbar';
import "./custome.css";
import Hero from './component/hero'
import Features from './component/features'
import About from './component/about'
import Most_selling_section from './component/most_selling_section'
import Shop_by_category from './component/shop_by_category'
import Todays_special from './component/todays_special'

function App() {
  

  return (
    <>
      <Navbar/>
      <Hero/>
      <Features/>
      <About/>
      <Most_selling_section/>
      <Shop_by_category/>
      <Todays_special/>
    </>
  )
}

export default App
