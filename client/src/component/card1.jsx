import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { add_to_cart } from "../redux/cart/action";
import SellerProductTag from "./sellerProductTag";
import StarRatingComponent from "react-star-rating-component";



const Card1 = ({ title, price, images, ratings, description, id, seller }) => {
    const dispatch = useDispatch()
    const { cart } = useSelector(state => state.cart)

    return (
        <>
            <div className="card col-span-6 sm:col-span-6 md:col-span-4 lg:min-w-650px lg:col-span-4 xl:col-span-3  flex flex-col lg:flex-row p-1 border-r">
                <div className="w-full h-36 sm:h-36 md:h-48 lg:h-60 xl:h-72 flex items-center justify-center relative border-b lg:border-b-0 lg:border-r border-dashed">

                    <SellerProductTag seller={seller} containerClass="top-2.5 md:top-8 right-1 md:right-2" productId={id}/>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 sm:w-6 md:w-8 lg:w-10 xl:w-12 h-6 sm:h-6 md:h-8 lg:h-10 xl:h-12 absolute top-3 sm:top-3 md:top-4 lg:top-5 xl:top-6 left-3 sm:left-3 md:left-4 lg:left-5 xl:left-6 fill-theme-green-600 hover:fill-green-400">
                        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                    </svg>

                    <img src={images[0].url} className=" w-full h-full object-contain" alt="" />
                </div>
                <div className="w-full h-max grid grid-cols-12 px-2 sm:px-2 md:px-3 lg:px-4 xl:px-5">
                    <ul className="col-span-12 flex gap-x-0.5 mt-1">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 sm:size-6 md:size-7 lg:size-8 xl:size-9 stroke-theme-green-600 fill-theme-green-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 sm:size-6 md:size-7 lg:size-8 xl:size-9 stroke-theme-green-600 fill-theme-green-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 sm:size-6 md:size-7 lg:size-8 xl:size-9 stroke-theme-green-600 fill-theme-green-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 sm:size-6 md:size-7 lg:size-8 xl:size-9 stroke-theme-green-600 fill-theme-green-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 sm:size-6 md:size-7 lg:size-8 xl:size-9 stroke-theme-green-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg> */}
                        <StarRatingComponent name="rate1" starCount={5} value={4}  editable={false} />
                    </ul>
                    <NavLink to={`/vegetable/${id}`} className="col-span-12 text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold font-nunito text-theme-blue-600 mt-2 sm:mt-2.5 md:mt-3 lg:mt-3.5 xl:mt-4 cursor-pointer">{title}</NavLink>
                    <p className="col-span-12 text-sm sm:text-sm md:text-base lg:text-xl xl:text-2xl text-gray-400 font-nunito mt-1 sm:mt-1 md:mt-2 lg:mt-3 xl:mt-4 line-clamp-3 min-h-16 lg:min-h-20">{description}</p>
                    <div className="col-span-6 mt-4 sm:mt-4 md:mt-5 lg:mt-6 xl:mt-7">
                        {
                            cart.find(v => v._id == id) ?
                                <button className={`w-max flex items-center gap-x-2 md:gap-x-2.5 text-2xs sm:text-2xs md:text-xs lg:text-sm xl:text-base font-semibold text-gray-100 bg-theme-green-600 px-2 sm:px-2 md:px-2.5 lg:px-3.5 xl:px-4 py-1 sm:py-1 md:py-1.5 lg:py-2 xl:py-2.5 rounded-sm hover:bg-green-500`}>
                                    <span>ADDED</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="fill-white w-3 lg:w-5">
                                        <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                                    </svg>
                                </button>
                                :
                                <button onClick={() => dispatch(add_to_cart(id))} className={`w-max text-2xs sm:text-2xs md:text-xs lg:text-sm xl:text-base font-semibold text-gray-100 bg-theme-blue-600  px-2 sm:px-2 md:px-2.5 lg:px-3.5 xl:px-4 py-1 sm:py-1 md:py-1.5 lg:py-2 xl:py-2.5 rounded-sm hover:bg-blue-500`}>ADD TO CART</button>
                        }

                    </div>
                    <div className="col-span-6 mt-4 sm:mt-4 md:mt-5 lg:mt-6 xl:mt-7 flex justify-end items-center">
                        <span className="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold text-theme-green-600 h-max w-max whitespace-nowrap">₹ {price}/KG</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(Card1)