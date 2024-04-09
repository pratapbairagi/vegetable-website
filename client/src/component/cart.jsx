// import { defer } from "react-router-dom"
import { useSelector } from "react-redux"
import CardCart from "./cardCart"



const Cart = ({toggleCart, setToggleCart}) => {
    const {cart} = useSelector(state=> state.cart)
    return (
        <div className={`w-full fixed h-screen bg-white z-30 top-0 px-3 transition-all duration-200`} style={{left:`${toggleCart ? "0" : "-100%"} `}}>
            <h5 className="border-b text-2xl md:text-3xl text-gray-600 font-bold text-center py-4 lg:py-5 lg:py-10 font-nunito relative">
                <button onClick={()=> setToggleCart(false)} className="absolute right-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 stroke-gray-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>

                Your Cart</h5>

            <div className="grid grid-cols-12 lg:gap-x-10 overflow-y-auto scroll-overflow-hidden max-h-90vh" >
                <div className="col-span-12 lg:col-span-8 flex flex-col max-h-80vh min-h-50vh lg:min-h-auto scroll-overflow-hidden overflow-y-auto  gap-y-1 py-3">
                {cart.map((v,i)=>{
                   return <CardCart 
                   key={i} 
                   item={v}  />
                })}
                </div>

                <div className="col-span-12 lg:col-span-4 flex flex-col mt-4 lg:mt-6 lg:mx-4">
                    <h6 className=" text-start text-base lg:text-xl font-bold py-2 text-gray-500">Price Details</h6>
                    <div className="grid grid-cols-12 mt-2 lg:mt-4">
                        <span className="col-span-7 flex justify-start text-sm lg:text-base text-gray-400 font-semibold font-nunito">Total Items</span>
                        <span className="col-span-5 flex justify-end text-sm lg:text-base text-gray-600 font-bold font-nunito">{ cart.reduce((accum, cv)=> accum + cv.qty, 0)}/KG</span>
                    </div>

                    <div className="grid grid-cols-12 mt-1 ">
                        <span className="col-span-7 flex justify-start text-sm lg:text-base text-gray-400 font-semibold font-nunito">Total Price</span>
                        <span className="col-span-5 flex justify-end text-sm lg:text-base text-gray-600 font-bold font-nunito">{cart.reduce((accum, cv)=> accum + cv.price * cv.qty, 0)}</span>
                    </div>

                    <div className="grid grid-cols-12 mt-1 ">
                        <span className="col-span-7 flex justify-start text-sm lg:text-base text-gray-400 font-semibold font-nunito">Discount</span>
                        <span className="col-span-5 flex justify-end text-sm lg:text-base text-theme-green-600 font-bold font-nunito">{cart.reduce((accum, cv)=> accum + cv.price * cv.qty, 0) >= 300 ? "50" : "0"}</span>
                    </div>

                    <div className="grid grid-cols-12 mt-1 border-b border-dashed pb-3">
                        <span className="col-span-5 flex justify-start text-sm lg:text-base text-gray-400 font-semibold font-nunito">Dilevery Changes</span>
                        <span className="col-span-7 gap-x-4 flex flex-wrap justify-end text-gray-600 font-bold font-nunito">
                            <span className={`text-theme-green-600 text-sm lg:text-base ${cart.reduce((accum, cv)=> accum + cv.price * cv.qty, 0 ) >= 300 ? "" : "line-through"}`}>Free Delivery</span>
                            <span className={`text-red-700 ${cart.reduce((accum, cv)=> accum + cv.price * cv.qty, 0) >= 300 ? "line-through" : ""}  text-sm lg:text-base`}>{cart.reduce((accum, cv)=> accum + cv.price * cv.qty, 0 ) >= 300 ? "0" : "50" }</span>
                        </span>
                    </div>

                    <div className="grid grid-cols-12 mt-1 border-b pb-2 pt-1">
                        <span className="col-span-7 flex justify-start text-base lg:text-xl text-gray-500 font-bold font-nunito">Total Amount</span>
                        <span className="col-span-5 flex justify-end text-base lg:text-xl text-gray-600 font-bold font-nunito">{cart.reduce((accum, cv)=> accum + cv.price * cv.qty, 0) >= 300 ? cart.reduce((accum, cv)=> accum + cv.price * cv.qty, 0) : cart.reduce((accum, cv)=> accum + cv.price * cv.qty, 0) + 50}</span>
                    </div>

                    <div className="grid grid-cols-12 mt-1 ">
                        <span className="col-span-12 flex justify-start text-xs lg:text-sm text-gray-600 font-normal font-nunito text-theme-green-600 py-1.5">{ cart.reduce((accum, cv)=> accum + cv.price * cv.qty, 0) >= 300 ? "You will save 50 on this order" : "You can save 50 rupees above 300 rupess order"}</span>
                        {/* <span className="col-span-5 flex justify-end text-base text-gray-600 font-bold font-nunito">50</span> */}
                    </div>

                    <div className="flex mt-2 ">
                        <button className="w-full flex justify-center  text-base lg:text-xl bg-theme-green-600 py-2.5 text-gray-100 font-bold font-nunito">Checkout</button>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Cart