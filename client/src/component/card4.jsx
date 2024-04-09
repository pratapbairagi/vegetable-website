import { memo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { add_to_cart } from "../redux/cart/action"


const Card4 = ({product}) => {
    const {cart} = useSelector(state=> state.cart)
    const dispatch = useDispatch()
    return (
        <li className="card_related flex flex-col min-w-32 lg:max-w-72 lg:min-w-72 p-1.5 bg-white">
                    <img src={product.images[0].url} className="h-20 md:h-28 lg:h-36 xl:h-44 border-b object-contain" alt="" />
                    <h6 className="text-sm md:text-base lg:text-xl font-semibold font-nunito text-gray-500 mt-1 flex items-center justify-between">
                       <NavLink to={`/vegetable/${product._id}`} className="font-bold text-theme-blue-600 mt-0 md:mt-1 lg:mt-2">{product.title}</NavLink> 
                    </h6>
                    <p className="text-2xs md:text-xs lg:text-sm line-clamp-2 md:line-clamp-3 mt-1 md:mt-2 lg:mt-3 text-gray-400 min-h-7 lg:min-h-14">{product.description}</p>
                    <div className="w-full flex justify-between items-center mt-2.5 md:mt-3.5 lg:mt-5">
                    {
                            cart.find(v=> v._id == product._id ) ?
                            <button className={`w-max text-2xs sm:text-2xs md:text-xs lg:text-sm xl:text-base font-semibold text-gray-100 bg-green-600  px-2 sm:px-2 md:px-2.5 lg:px-3.5 xl:px-4 py-1 sm:py-1 md:py-1.5 lg:py-2 xl:py-2.5 rounded-sm hover:bg-blue-500`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-3 md:w-4 lg:w-5 fill-gray-100">
                        <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
                    </svg>
                    </button>
                            : 
                            <button onClick={()=> dispatch(add_to_cart(product._id))} className={`w-max text-2xs sm:text-2xs md:text-xs lg:text-sm xl:text-base font-semibold text-gray-100 bg-theme-blue-600  px-2 sm:px-2 md:px-2.5 lg:px-3.5 xl:px-4 py-1 sm:py-1 md:py-1.5 lg:py-2 xl:py-2.5 rounded-sm hover:bg-blue-500`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-3 md:w-4 lg:w-5 fill-gray-100">
                        <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
                    </svg>
                    </button>
                         } 
                    <span className="font-bold text-base md:text-xl lg:text-2xl text-theme-green-600">{product.price}/KG</span>
                    </div>
                </li>
    )
}

export default memo(Card4)