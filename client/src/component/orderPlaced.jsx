import { useNavigate } from "react-router-dom"
import BackButton from "./backButton"
import ProgressOrder from "./progessOrder"


const OrderPlaced = ({ setToggleCart }) => {
    const navigate = useNavigate()
    return (
        <div className="w-full h-max min-h-screen flex flex-col  px-2 pb-6">
            {/* <div className="w-full py-2 px-2">
                <BackButton setToggleCart={setToggleCart} backRoute="/shipping-info" />
            </div> */}
            <ProgressOrder />

            <div className="w-full h-max min-h-20 flex flex-col items-center mt-24 lg:mt-32">
                {/* <h4 className="text-center text-gray-400 mt-8 text-xl font-semibold items-center" style={{ letterSpacing: "1px" }}>Order Placed</h4> */}
                <form action="" className="w-full h-max min-h-60vh flex flex-col lg:max-w-40%">
                    <div className="w-full min-h-30vh mt-4 flex flex-col items-center justify-center gap-y-2 border">
                        <span className="w-20 aspect-square bg-green-500 flex items-center justify-center rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-12 h-12 stroke-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>

                        </span>
                        <span className="text-gray-400 font-semibold">Order Placed Successfully</span>
                    </div>

                    <div className="w-full min-h-10vh mt-4 flex flex-col items-center justify-center gap-y-2 border">
                   
                        <span onClick={()=> navigate("/my/orders")} className="text-blue-400 font-semibold cursor-pointer cursor-poiter">View Orders</span>
                    </div>
                </form>
                {/* <button onClick={() => navigate("/order-placed")} className="w-full px-4 py-1 bg-blue-600 text-gray-100 hover:bg-blue-500 font-semibold text-lg" style={{ maxWidth: "400px" }}>View Order</button> */}
            </div>
        </div>
    )
}

export default OrderPlaced