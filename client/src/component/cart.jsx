// import { defer } from "react-router-dom"
import { useSelector } from "react-redux"
import CardCart from "./cardCart"
import { useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import ShippingInfo from "./shippingInfo"
// import { getDitanceFun } from "./getDitanceFun";




const Cart = ({}) => {
    const {cart} = useSelector(state=> state.cart)
    const {products} = useSelector(state=> state.product)
    const [checkStock, setCheckStock] = useState([])
    const navigate = useNavigate();
    const [isDistanceAbove5km, setIsDistanceAbove5km] = useState([])
  const { auth } = useSelector(state => state.user)



    const proceedOrder_handler = async (x="") => {
        
        try {
            // const rootUrl = "http://localhost:5005"
            const rootUrl = "https://veg-etable.vercel.app";

            const orderCart = await  cart.map((v)=> v._id)
            
            const config = {
                headers: { "Content-Type": "application/json" },
                "access-control-allow-origin" : rootUrl,
                withCredentials : true
            }

            const {data} = await axios.post(`${rootUrl}/api/stock_check`, orderCart, config)

            if(data.success){
                let notEnoughStock = []
                cart.forEach((c,ci)=>{
                    data.vegetables.forEach((v, vi)=>{
                         c.qty <= v.stock ? notEnoughStock : notEnoughStock.push(c)
                    })
                })
                if(notEnoughStock.length > 0 ){
                    setCheckStock(notEnoughStock)
                }
                else if(x === "updateCheckCartStock"){
                    setCheckStock([])
                }
                else if(isDistanceAbove5km.length === 0){

                    setCheckStock([])
                    navigate("/shipping-info", {state : { cart: cart, orderCart : orderCart}})
            
            }
        }
        } catch (error) {
            console.log("error =>", error)
        } 
    }

    useEffect(()=>{
        proceedOrder_handler("updateCheckCartStock")
    },[cart])

    return (
        <div className={`w-full fixed h-screen bg-white z-30 top-0 px-0 transition-all duration-200`}>
            <h5 className="border-b text-2xl md:text-3xl text-gray-600 font-bold text-center py-4 lg:py-5 lg:py-10 font-nunito relative">
                <button onClick={()=> navigate("/")} className="absolute right-2 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 stroke-gray-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>Your Cart</h5>

            <div className="grid grid-cols-12 lg:gap-x-10 overflow-y-auto scroll-overflow-hidden h-max max-h-90vh pb-12 lg:pb-0" >
                <div className="col-span-12 lg:col-span-8 flex flex-col max-h-80vh min-h-50vh lg:min-h-auto scroll-overflow-hidden overflow-y-auto  gap-y-1 py-3 px-2">
                {cart.map((v,i)=>{
                   return <CardCart 
                   key={i} 
                //    item={v}
                   checkStock={checkStock}
                   product={v}
                   setIsDistanceAbove5km={setIsDistanceAbove5km}
                   />
                })}
                </div>

                <div className="col-span-12 lg:col-span-4 flex flex-col mt-4 lg:mt-6 lg:mx-4">
                    <h6 className=" text-start text-base lg:text-xl font-bold py-2 text-gray-500 px-2">Price Details</h6>
                    <div className="grid grid-cols-12 mt-2 lg:mt-4 px-2">
                        <span className="col-span-7 flex justify-start text-sm lg:text-base text-gray-400 font-semibold font-nunito">Total Items</span>
                        <span className="col-span-5 flex justify-end text-sm lg:text-base text-gray-600 font-bold font-nunito">{ 
                        cart.reduce((accum, cv)=> accum + cv.qty, 0) <= 999 ? cart.reduce((accum, cv)=> accum + cv.qty, 0) + "/Grams" 
                        : cart.reduce((accum, cv)=> accum + cv.qty, 0)/1000 + "/KG"
                    }</span>
                    </div>
                    
                    <div className="grid grid-cols-12 mt-1 px-2">
                        <span className="col-span-7 flex justify-start text-sm lg:text-base text-gray-400 font-semibold font-nunito">Total Price</span>
                        <span className="col-span-5 flex justify-end text-sm lg:text-base text-gray-600 font-bold font-nunito">{cart.reduce((accum, cv)=> (accum + cv.price * cv.qty/1000), 0)}</span>
                    </div>

                    <div className="grid grid-cols-12 mt-1 px-2">
                        <span className="col-span-7 flex justify-start text-sm lg:text-base text-gray-400 font-semibold font-nunito">Discount</span>
                        <span className="col-span-5 flex justify-end text-sm lg:text-base text-theme-green-600 font-bold font-nunito">{cart.reduce((accum, cv)=> (accum + cv.price * cv.qty)/1000, 0) >= 300 ? "50" : "0"}</span>
                    </div>

                    <div className="grid grid-cols-12 mt-1 border-b border-dashed pb-3 px-2">
                        <span className="col-span-5 flex justify-start text-sm lg:text-base text-gray-400 font-semibold font-nunito">Delivery Charges</span>
                        <span className="col-span-7 gap-x-4 flex flex-wrap justify-end text-gray-600 font-bold font-nunito">
                            <span className={`text-theme-green-600 text-sm lg:text-base ${cart.reduce((accum, cv)=> accum + cv.price * cv.qty/1000, 0 ) >= 300 ? "" : "line-through"}`}>Free Delivery</span>
                            <span className={`text-red-700 ${cart.reduce((accum, cv)=> accum + cv.price * cv.qty/1000, 0) >= 300 ? "line-through" : ""}  text-sm lg:text-base`}> 50</span>
                        </span>
                    </div>

                    <div className="grid grid-cols-12 mt-1 border-b pb-2 pt-1 px-2">
                        <span className="col-span-7 flex justify-start text-base lg:text-xl text-gray-500 font-bold font-nunito">Total Amount</span>
                        <span className="col-span-5 flex justify-end text-base lg:text-xl text-gray-600 font-bold font-nunito">{cart.reduce((accum, cv)=> accum + cv.price * cv.qty, 0)/1000 >= 300 ? cart.reduce((accum, cv)=> accum + cv.price * cv.qty, 0)/1000 : cart.reduce((accum, cv)=> accum + cv.price * cv.qty, 0)/1000 + 50}</span>
                    </div>

                    <div className="grid grid-cols-12 mt-1 px-2">
                        <span className="col-span-12 flex justify-start text-xs lg:text-sm text-gray-600 font-normal font-nunito text-theme-green-600 py-1.5">{ cart.reduce((accum, cv)=> accum + cv.price * cv.qty/1000, 0) >= 300 ? "You will save 50 on this order" : "You can save 50 rupees above 300 rupess order"}</span>
                        {/* <span className="col-span-5 flex justify-end text-base text-gray-600 font-bold font-nunito">50</span> */}
                    </div>

                    <div className="flex mt-2 ">
                        <button onClick={proceedOrder_handler} className="w-full flex justify-center  text-base lg:text-xl bg-theme-green-600 py-2.5 text-gray-100 font-bold font-nunito">Checkout</button>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Cart