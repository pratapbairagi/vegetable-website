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
import Service_features from './component/service_features'
import Service_feedbacks from './component/service_feedbacks'
import Contact from './component/contact'
import Footer from './component/footer'
import Cart from './component/cart'
import Login from './component/login'

function App() {
  
  const [toggleCart, setToggleCart] = useState(false)
  const [loginToggle, setLoginToggle] = useState(false)

  return (
    <div className='relative'>
      <Navbar setToggleCart={setToggleCart} setLoginToggle={setLoginToggle}/>
      <Hero/>
      <Login loginToggle={loginToggle} setLoginToggle={setLoginToggle }/>
      <Features/>
      <About/>
      <Most_selling_section/>
      <Shop_by_category/>
      <Todays_special/>
      <Service_features/>
      <Service_feedbacks/>
      <Contact/>
      <Footer/>
      <Cart toggleCart={toggleCart} setToggleCart={setToggleCart}/>
    </div>
  )
}

export default App
