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
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Product_details from './component/product_details'
import Home from './pages/home'
import Profile from './component/profile'
import Signup from './component/signup'
import Dashboard from './component/dashboard'
import AddProductForm from './component/addProductForm'
import ErrorBoundary from './component/errorBoundary.jsx'
import { EditVegetable } from './component/editVegetable.jsx'
import SearchResults_page from './component/searchResultsPage.jsx'
import Products from './component/products.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { user_logged } from './redux/user/action.js'
import ProtectedRoute from './protectedRoute/protectedRoute.jsx'
import NonProtctedRoute from './protectedRoute/nonProtectedRoute.jsx'
import Toaster from './component/toaster.jsx'
import { clear_success } from './redux/product/action.js'
import ShippingInfo from './component/shippingInfo.jsx'
import PaymentInfo from './component/paymentInfo.jsx'
import OrderPlaced from './component/orderPlaced.jsx'
import MyOrders from './component/myOrders.jsx'
// import Products from './component/products.jsx'
// import EditVegetable from "./component/editVegetable.jsx"


function App() {
  const [toggleCart, setToggleCart] = useState(false)
  const [loginToggle, setLoginToggle] = useState(false)
  const dispatch = useDispatch()
  const { auth } = useSelector(state => state.user)

  useEffect(() => {
    if (!auth) {
      dispatch(user_logged())
    }
  }, [auth])

  return (
    <ErrorBoundary>
      <div className='relative'>
        <BrowserRouter>
          <Navbar setToggleCart={setToggleCart} setLoginToggle={setLoginToggle} />
          <Cart toggleCart={toggleCart} setToggleCart={setToggleCart} />
          <Toaster/>

          <Routes>
            <Route path='/' element={<Home />} />


            <Route path='/search' element={<SearchResults_page />} />
            <Route path='/products' element={<Products setToggleCart={setToggleCart} setLoginToggle={setLoginToggle} />} />

            <Route path='/vegetable/:id' element={<Product_details />} />

            <Route element={<ProtectedRoute auth={auth} />}>
              <Route path='/profile' element={<Profile />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/add/vegetable' element={<AddProductForm />} />
              <Route path='/vegetable/edit/:id' element={<EditVegetable />} />
              <Route path='/shipping-info' element={<ShippingInfo toggleCart={toggleCart} setToggleCart={setToggleCart}/>} />
              <Route path='/payment-info' element={<PaymentInfo toggleCart={toggleCart} setToggleCart={setToggleCart}/>} />
              <Route path='/order-placed' element={<OrderPlaced toggleCart={toggleCart} setToggleCart={setToggleCart}/>} />
              <Route path='/my/orders' element={<MyOrders/>} />
            </Route>

            <Route element={<NonProtctedRoute auth={auth} />}>
              <Route path='/signup' element={<Signup />} />
              <Route path='/login' element={<Login />} />
            </Route>

          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </ErrorBoundary>

  )
}

export default App
