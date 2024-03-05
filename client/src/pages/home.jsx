import About from "../component/about"
import Cart from "../component/cart"
import Contact from "../component/contact"
import Features from "../component/features"
import Footer from "../component/footer"
import Hero from "../component/hero"
import Login from "../component/login"
import Most_selling_section from "../component/most_selling_section"
import Navbar from "../component/navbar"
import Service_features from "../component/service_features"
import Service_feedbacks from "../component/service_feedbacks"
import Shop_by_category from "../component/shop_by_category"
import Todays_special from "../component/todays_special"
import React, { useState } from "react"


const Home = () => {
    const [toggleCart, setToggleCart] = useState(false)
    const [loginToggle, setLoginToggle] = useState(false)
    return (
        <div className='relative'>
            <Hero />
            <Features />
            <About />
            <Most_selling_section />
            <Shop_by_category />
            <Todays_special />
            <Service_features />
            <Service_feedbacks />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home