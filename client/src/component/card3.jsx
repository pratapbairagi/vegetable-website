import { memo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { add_to_cart } from "../redux/cart/action"
import SellerProductTag from "./sellerProductTag"


const Card3 = ({product}) => {
    const {cart} = useSelector(state=> state.cart)
    const dispatch = useDispatch()
    return (
        <div className="card col-span-6 sm:col-span-5 md:col-span-5 lg:col-span-8 xl:col-span-10 h-full lg:h-max min-h-30vh max-w-44 min-w-44 md:min-w-48 lg:min-w-70% xl:min-w-40% w-max flex flex-col lg:flex-row py-2 pb-1">
            <div className="h-3/6 lg:h-60 w-full lg:w-3/6 relative">
                
                <SellerProductTag containerClass="top-0 md:top-2 right-1 md:right-2" seller={product.seller} productId={product._id}/>
               
                <img src={product.images[0].url} className="w-full h-full  object-contain" alt="" />
                <NavLink to={`/vegetable/${product._id}`} className="absolute top-1 md:top-2 left-2 text-xs sm:text-sm font-nunito text-theme-blue-600 md:text-base lg:text-lg xl:text-xl font-bold">{product.title}</NavLink>
               {product.features && product.features.feature == "discount" &&  <span className="absolute bottom-2 right-3 text-xs sm:text-xs font-nunito text-theme-blue-600 md:text-sm lg:text-sm xl:text-base font-bold">{product.features.feature == "discount" && `${product.features.value} Off`}</span> }
               {product.features && product.features.feature == "fresh" &&  <span className={`absolute bottom-2 pt-1 left-3 text-xs sm:text-xs font-nunito text-white md:text-sm lg:text-sm xl:text-base font-bold ${product.features.feature == "fresh" ? "bg-green-600 px-3 text-green-100 py-0.5" : "bg-transparent"}`}>{product.features.feature == "fresh" && `${product.features.feature} `}</span> }
            
            </div>
            <div className=" lg:w-3/6 lg:px-4 flex flex-col justify-between lg:py-2 lg:min-w-72">
            <h5 className="w-full flex items-center gap-x-4 px-2">
                <span className="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-extrabold text-theme-green-600 font-nunito ">₹ {product.price}/KG</span>
               {product.features && product.features.feature == "discount" &&  <span className="text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg font-bold line-through text-red-400">₹ 40/KG</span> } 
            </h5>

            <p className="px-2 text-2xs sm:text-2xs md:text-xs lg:text-sm xl:text-base min-h-12 line-clamp-3 lg:line-clamp-5 lg:min-h-32 text-gray-400 mt-2">{product.description}</p>
            {
                            cart.find(v=> v._id == product._id ) ?
                            <button className="text-3xs flex justify-center items-center gap-x-2 sm:text-3xs md:text-2xs lg:text-xs xl:text-sm font-semibold text-theme-blue-600  px-1.5 sm:px-1.5 md:px-2.5 lg:px-3.5 xl:px-4 py-2 sm:py-2 md:py-2.5 lg:py-3 rounded-sm hover:bg-white hover:border-transparent  mt-4 mx-auto border" style={{ width: "96%", justifySelf:"end" }}>
                               <span>ADDED</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="fill-theme-blue-600 w-3">
                                    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                                </svg>
                            </button>
                            : 
                            <button onClick={()=> dispatch(add_to_cart(product._id))} className="text-3xs sm:text-3xs md:text-2xs lg:text-xs xl:text-sm font-semibold text-theme-blue-600  px-1.5 sm:px-1.5 md:px-2.5 lg:px-3.5 xl:px-4 py-2 sm:py-2 md:py-2.5 lg:py-3 rounded-sm hover:bg-white hover:border-transparent  mt-4 mx-auto border" style={{ width: "96%", justifySelf:"end" }}>ADD TO CART</button>
                            // <button onClick={()=> dispatch(add_to_cart(id))} className={`w-max text-2xs sm:text-2xs md:text-xs lg:text-sm xl:text-base font-semibold text-gray-100 bg-theme-blue-600  px-2 sm:px-2 md:px-2.5 lg:px-3.5 xl:px-4 py-1 sm:py-1 md:py-1.5 lg:py-2 xl:py-2.5 rounded-sm hover:bg-blue-500`}>ADD TO CART</button>
                         } 
            {/* <button className="text-3xs sm:text-3xs md:text-2xs lg:text-xs xl:text-sm font-semibold text-theme-blue-600  px-1.5 sm:px-1.5 md:px-2.5 lg:px-3.5 xl:px-4 py-2 sm:py-2 md:py-2.5 lg:py-3 rounded-sm hover:bg-white hover:border-transparent  mt-4 mx-auto border" style={{ width: "96%", alignSelf:"end", placeSelf:"end", justifySelf:"end" }}>ADD TO CART</button> */}
            </div>
        </div>
    )
}

export default memo(Card3)