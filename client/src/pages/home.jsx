import { useDispatch, useSelector } from "react-redux"
import About from "../component/about"
import Cart from "../component/cart"
import Contact from "../component/contact"
import Features from "../component/features"
import Footer from "../component/footer"
import Hero from "../component/hero"
import Login from "../component/login"
import Most_selling_section from "../component/most_selling_section"
import Navbar from "../component/navbar"
// import Service_features from "../component/service_features"
import Service_feedbacks from "../component/service_feedbacks"
import Shop_by_category from "../component/shop_by_category"
import Todays_special from "../component/todays_special"
import React, { memo, useEffect, useState } from "react"
import { get_products } from "../redux/product/action"
import Spinner from "../component/spinner"
import StoresMap from "../component/map"
import { useLocation } from "react-router-dom"
import useSearchQueries from "../component/customHook/useSearchQueries"
import Googlemap from "../component/googleMap"
import Service_features from "../component/service_features/service_features"
// import { getDistanceOfShop } from "../component/getDitanceFun"


const Home = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.product);
    const location = useLocation()
    const {current_position, destination_position} = useSelector(state=> state.mapCoords)
    const [searchQueries, setSearchQueries] = useSearchQueries()

    // const [searchQueries, setSearchQueries] = useState({
    //     category: "",
    //     title: "",
    //     price: {
    //         lte: 0,
    //         gte: 1000
    //     },
    //     tags: [],
    //     features: [],
    //     nameSort : 0, 
    //     dateSort : 0, 
    //     sold : 0, 
    //     ratingSort : 0,
    //     productsPerPage : 10,
    //     pageNo : 1
    // })

    let x = 0
    useEffect(() => {
        if ((state.products.length == 0 && state.success == false) || (state.features2.length > 0 && state.success == false)) {
            if (x == 0) {
                x++
                dispatch(get_products({
                    title: searchQueries.title,
                    category: searchQueries.category,
                    price: searchQueries.price,
                    tags: searchQueries.tags,
                    features: searchQueries.features,
                    nameSort : searchQueries.nameSort, 
                    dateSort : searchQueries.dateSort, 
                    sold : searchQueries.sold, 
                    ratingSort : searchQueries.ratingSort,
                    productsPerPage : searchQueries.productsPerPage,
                    pageNo : searchQueries.pageNo
                }))
            }
        }

    }, [])
    console.log(current_position)

    return (
        <div className='relative xl:max-w-[1400px] mx-auto' style={{ background: "rgb(248, 248, 248)" }}>
             {/* <Spinner /> */}
                
                <>
                    <Hero />
                    <Features />
                    {/* <Googlemap/> */}
                    <About />
                    {state.loading ? 
                    <Spinner/> 
                     : state.products?.length > 0 &&
                     <>
                      <Most_selling_section products={state.most_sold} />
                     <Shop_by_category products={state} />
                     <Todays_special products={state} />
                     </>
                     }
                     <Service_features />
                     <Service_feedbacks />
                     <Contact />

                 </>
            
        </div>
    )
}

export default memo(Home);