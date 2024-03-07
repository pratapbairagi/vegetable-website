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
import Login from './component/login';
import {Route, Routes, BrowserRouter} from "react-router-dom"
import Product_details from './component/product_details'
import Home from './pages/home'


function App() {
  const [toggleCart, setToggleCart] = useState(false)
    const [loginToggle, setLoginToggle] = useState(false)
 

  return (
    <div className='relative'>
      <BrowserRouter>
            <Navbar setToggleCart={setToggleCart} setLoginToggle={setLoginToggle} />
            <Cart toggleCart={toggleCart} setToggleCart={setToggleCart} />
            <Login loginToggle={loginToggle} setLoginToggle={setLoginToggle} />


      
      <Routes>
      <Route path='/' element={<Home/>}/>


      <Route path='/vegetable/:id' element={<Product_details/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      </div>
  
  )
}

export default App
