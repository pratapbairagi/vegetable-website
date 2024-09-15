import { useDispatch, useSelector } from "react-redux"
import Card2 from "./card2"
import Pagination from "./pagination"
import { filteredProducts } from "../redux/product/action"
import { memo, useEffect, useMemo } from "react"
import { NavLink } from "react-router-dom"


const Shop_by_category = ({ products }) => {


    const dispatch = useDispatch()
    // const products = useSelector(state => state.product)

    console.log("products")

    const memoizedFilterProducts_tabs = useMemo(() => {
           return products.filteredProducts?.map((v, i) => {
                return (<li onClick={(e) => {
                    dispatch(filteredProducts({ active_category: v.category, filteredProducts: products.filteredProducts.map((f) => { return { ...f, active: f.category == v.category ? true : false } }) }))
                }} key={i} className={`cursor-pointer h-max w-max sm:w-max ${v.active ? "bg-blue-500 text-orange-100" : "text-blue-500 bg-transparent"}  rounded-full px-3`}>
                    <button className="text-sm md:text-base px-3 pt-[4px] pb-[3px] font-bold font-nunito w-max sm:w-max text-start uppercase">{v.category}</button>
                </li>)
            })

    }, [products.filteredProducts]);

    const memoizedFilterProducts = useMemo(()=>{
       return products.filteredProducts.map((v, i) => {
            return (<div key={i} className={`col-span-12 ${v.active ? "flex" : "hidden"} col-span-12 grid grid-cols-12 min-h-96 h-max gap-y-1 relative`}>

                {v.products.map((v, i) => {
                    return <Card2 key={i} title={v.title} id={v._id} price={v.price} image={v.images[0].url} description={v.description} ratings={v.ratings} seller={v.seller} />
                })}

                <div className="w-full col-span-12 flex justify-end mt-2 px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6">
                    <NavLink to={`/products`} state={{ productsType: "category", other: products.filteredProducts.filter(f => f.active ? f : "")[0]?.category }} className="text-sm md:text-base lg:text-lg text-theme-blue-600 font-semibold h-6 ">See More</NavLink>
                </div>

            </div>)
        })
    },[products.filteredProducts]);

    return (
        <>
            <div id="shop_by_category" className="w-full h-max py-4 sm:py-6 md:py-8 lg:py-12 lg:pb-4 bg-white mt-2">
                {/* <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold font-nunito text-center text-theme-blue-600 ">Shop By Category</h2> */}
                <ul className="flex w-full max-w-[1400px] overflow-x-auto justify-start lg:justify-center mt-4 px-2">
                {memoizedFilterProducts_tabs}
                </ul>
                <div className="w-full h-max grid grid-cols-12 gap-y-3 mt-6 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12">
                    {/* <div className="col-span-12 sm:col-span-12 md:col-span-3 lg:col-span-2 xl:col-span-2 h-full min-h-20 md:border-r">
                        <ul className="flex flex-row sm:flex-row md:flex-col lg:flex-col xl:flex-col h-full items-center sm:items-center md:items-start lg:items-start xl:items-start gap-x-1 max-w-screen overflow-auto px-2 scroll-overflow-hidden">
                            <h5 className="hidden sm:hidden md:block w-full text-center text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-theme-blue-600 font-nunito font-extrabold md:mt-5 lg:mt-6 xl:mt-8 md:mb-5 lg:mb-6 xl:mb-8">Category</h5>
                            
                            {memoizedFilterProducts_tabs}

                            <img src="./images/veg_category.png" className="w-full hidden md:block mt-6 " alt="" />
                        </ul>
                    </div> */}

                    {memoizedFilterProducts}

                </div>

            </div>
        </>
    )
}

export default memo(Shop_by_category)