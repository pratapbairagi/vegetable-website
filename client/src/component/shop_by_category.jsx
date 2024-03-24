import { useDispatch, useSelector } from "react-redux"
import Card2 from "./card2"
import Pagination from "./pagination"
import { filteredProducts } from "../redux/product/action"
import { memo, useEffect } from "react"


const Shop_by_category = () => {


    const dispatch = useDispatch()
    const products = useSelector(state => state.product)
    // let x = 0
    // useEffect(()=>{
    //     if(products.filteredProducts.length == 0 && x == 0 ){
    //         x++
    // console.log("useEffect")

    //         dispatch(filteredProducts("all"))
    //     }
    // },[products.filteredProducts])

    console.log(products)
    return (
        <>
            <div id="shop_by_category" className="w-full h-max py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 lg:pb-6 xl:pb-8 bg-white mt-2">
                <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold font-nunito text-center text-theme-blue-600 ">Shop By Category</h2>

                <div className="w-full h-max grid grid-cols-12 gap-y-3 mt-6 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12">
                    <div className="col-span-12 sm:col-span-12 md:col-span-3 lg:col-span-3 xl:col-span-3 h-full min-h-20 md:border-r">
                        <ul className="flex flex-row sm:flex-row md:flex-col lg:flex-col xl:flex-col h-full items-center sm:items-center md:items-start lg:items-start xl:items-start gap-x-1 max-w-screen overflow-auto px-2 scroll-overflow-hidden">
                            <h5 className="hidden sm:hidden md:block w-full text-center text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-theme-blue-600 font-nunito font-extrabold md:mt-5 lg:mt-6 xl:mt-8 md:mb-5 lg:mb-6 xl:mb-8">Category</h5>
                            {/* {products.categories?.map((v,i)=>{

                                return <li onClick={(e)=> {
                                    dispatch(filteredProducts( {active_category : v.category, categories : products.categories } ))
                                }} key={i} className={`cursor-pointer h-max w-max sm:w-max md:w-full ${ v.active ? "border-b" : "border-b-0" }  border-green-800 md:border-b md:border-gray-300 md:bg-gray-100`}>
                                <button className="text-base sm:text-base md:text-xl lg:text-2xl xl:text-2xl px-3 py-1.5 sm:py-1.5 md:py-2 lg:py-2.5 xl:py-3 text-gray-400 font-bold font-nunito w-max sm:w-max md:w-full text-start">{v.category }</button>
                            </li>
                           })} */}

                            {products.filteredProducts?.map((v, i) => {

                                return <li onClick={(e) => {
                                    dispatch(filteredProducts({ active_category: v.category, filteredProducts: products.filteredProducts.map((f)=>{ return { ...f, active : f.category == v.category ? true : false  }}) }))
                                }} key={i} className={`cursor-pointer h-max w-max sm:w-max md:w-full ${v.active ? "border-b md:bg-gray-100" : "border-b-0 md:bg-transparent"}  border-green-800 md:border-b md:border-gray-300 `}>
                                    <button className="text-base sm:text-base md:text-xl lg:text-2xl xl:text-2xl px-3 py-1.5 sm:py-1.5 md:py-2 lg:py-2.5 xl:py-3 text-gray-400 font-bold font-nunito w-max sm:w-max md:w-full text-start">{v.category}</button>
                                </li>
                            })}

                            {/* <li className=" h-max w-max sm:w-max md:w-full md:border-b border-gray-300 hover:border-b md:hover:bg-gray-100">
                                <button className="text-base sm:text-base md:text-xl lg:text-2xl xl:text-2xl px-3 py-1.5 sm:py-1.5 md:py-2 lg:py-2.5 xl:py-3 text-gray-400 font-bold font-nunito w-max sm:w-max md:w-full text-start">flowers</button>
                            </li>
                            <li className=" h-max w-max sm:w-max md:w-full md:border-b border-gray-300 hover:border-b md:hover:bg-gray-100">
                                <button className="text-base sm:text-base md:text-xl lg:text-2xl xl:text-2xl px-3 py-1.5 sm:py-1.5 md:py-2 lg:py-2.5 xl:py-3 text-gray-400 font-bold font-nunito w-max sm:w-max md:w-full text-start">Chillis</button>
                            </li>
                            <li className=" h-max w-max sm:w-max md:w-full md:border-b border-gray-300 hover:border-b md:hover:bg-gray-100">
                                <button className="text-base sm:text-base md:text-xl lg:text-2xl xl:text-2xl px-3 py-1.5 sm:py-1.5 md:py-2 lg:py-2.5 xl:py-3 text-gray-400 font-bold font-nunito whitespace-nowrap w-max sm:w-max md:w-full text-start">Salad's Veg</button>
                            </li>
                            <li className=" h-max w-max sm:w-max md:w-full md:border-b border-gray-300 hover:border-b md:hover:bg-gray-100">
                                <button className="text-base sm:text-base md:text-xl lg:text-2xl xl:text-2xl px-3 py-1.5 sm:py-1.5 md:py-2 lg:py-2.5 xl:py-3 text-gray-400 font-bold font-nunito w-max sm:w-max md:w-full text-start">Other</button>
                            </li> */}
                            <img src="./images/veg_category.png" className="w-full hidden md:block mt-6 " alt="" />
                        </ul>
                    </div>
                    {products.filteredProducts.map((v, i) => {
                  return  <div key={i} className={`col-span-12 ${v.active ? "flex" : "hidden"} sm:col-span-12 md:col-span-9 lg:col-span-9 xl:col-span-9 grid grid-cols-12 min-h-96 h-max gap-y-2 relative`}>
                        {/* <img src="./images/shop_by_cat_background.png" className="absolute h-full object-contain bottom-0 right-0 opacity-10 z-0" alt="" /> */}
                        {/* {products.filteredProducts.map((v, i) => {
                            console.log("filter cat => ", v)
                            return <Card2 key={i} title={v.title} price={v.price} image={v.images[0].url} description={v.description} ratings={v.ratings} />
                        })} */}


                        {v.products.map((v, i) => {
                            // console.log("filter cat => ", v)
                            return <Card2 key={i} title={v.title} id={v._id} price={v.price} image={v.images[0].url} description={v.description} ratings={v.ratings} />
                        })}

                        {/* <Pagination/> */}
                        <div className="w-full col-span-12 flex justify-end mt-0 px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6">
                            <button className="text-sm md:text-base lg:text-lg text-theme-blue-600 font-semibold h-7 ">See More</button>
                        </div>

                    </div>
                    })}
                </div>

            </div>
        </>
    )
}

export default memo(Shop_by_category)