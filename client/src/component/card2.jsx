import { memo } from "react"
import { NavLink } from "react-router-dom"
import { add_to_cart } from "../redux/cart/action"
import { useDispatch, useSelector } from "react-redux"
import SellerProductTag from "./sellerProductTag"


const Card2 = ({ title, price, image, ratings, description, id, seller }) => {
    const dispatch = useDispatch();
    const {cart} = useSelector(state => state.cart)
    return (
        <div className="flex flex-col col-span-6 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-3 min-h-30 h-max p-2 sm:p-2 md:p-3 lg:p-4 xl:p-5 border-r">
            <div className="w-full h-36 sm:h-36 md:h-40 lg:h-44 flex items-center justify-center relative ">
            <SellerProductTag seller={seller} containerClass="top-2.5 md:top-8 left-1 md:left-2" productId={id}/>
                
                {
                    cart.find(v => v._id == id) ?
                            
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-6 sm:w-6 md:w-7 lg:w-8 xl:w-8 h-6 sm:h-6 md:h-7 lg:h-8 xl:h-8 absolute top-3 sm:top-3 md:top-4 lg:top-5 xl:top-6 right-3 sm:right-3 md:right-3.5 lg:right-3 xl:right-3 fill-gray-100 bg-green-600 p-0.5 sm:p-0.5 md:p-1 lg:p-1 xl:p-1.5 rounded-sm hover:fill-green-400`}>
                            <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                        </svg>
                        :

                        <svg onClick={()=> dispatch(add_to_cart(id))}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 sm:w-6 md:w-7 lg:w-8 xl:w-8 h-6 sm:h-6 md:h-7 lg:h-8 xl:h-8 absolute top-3 sm:top-3 md:top-4 lg:top-5 xl:top-6 right-3 sm:right-3 md:right-3.5 lg:right-3 xl:right-3 fill-gray-100 bg-blue-600 p-0.5 sm:p-0.5 md:p-1 lg:p-1 xl:p-1.5 rounded-sm hover:fill-green-400">
                            <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                        </svg>
                }

                <img src={image} className=" h-full w-full object-contain" alt="" />
                <h6 className="text-base sm:text-base md:text-lg lg:text-lg font-bold text-theme-green-600 h-max
                 absolute bottom-1 right-1">₹ {price}/KG</h6>

            </div>
            <div className="w-full h-8 sm:h-9 md:h-10 lg:h-10 xl:h-11 flex items-center justify-between px-2 bg-gray-100">
                <NavLink to={`/vegetable/${id}`} className=" text-sm sm:text-base md:text-lg lg:text-lg font-extrabold font-nunito text-theme-blue-600 capitalize">{title}</NavLink>
            </div>
        </div>
    )
}

export default memo(Card2)