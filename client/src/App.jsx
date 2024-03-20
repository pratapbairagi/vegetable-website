import { useEffect, useState } from 'react'
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
import Profile from './component/profile'
import Signup from './component/signup'
import Dashboard from './component/dashboard'
import AddProductForm from './component/addProductForm'
import ErrorBoundary from './component/errorBoundary.jsx'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import { get_products } from './redux/product/action.js'


function App() {
  const [toggleCart, setToggleCart] = useState(false)
    const [loginToggle, setLoginToggle] = useState(false)

    // const dispatch = useDispatch()
    // const state = useSelector(state=> state.product)

    // console.log(state)

 

 

  return (
    <ErrorBoundary>
    <div className='relative'>
      <BrowserRouter>
            <Navbar setToggleCart={setToggleCart} setLoginToggle={setLoginToggle} />
            <Cart toggleCart={toggleCart} setToggleCart={setToggleCart} />
      
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/add/vegetable' element={<AddProductForm/>}/>

      <Route path='/vegetable/:id' element={<Product_details/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      </div>
      </ErrorBoundary>
  
  )
}

export default App
