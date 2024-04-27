import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { get_orders } from "../redux/order/action"
import { useNavigate } from "react-router-dom"



const MyOrders = () => {
    const { orders } = useSelector(state => state.order)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    let x = 0;
    useEffect(() => {
        if (x == 0) {
            x++
            dispatch(get_orders())
        }
    }, [])

    console.log(orders)
    return (
        <div className="w-full h-max min-h-90vh flex flex-col my-1 lg:mt-36 px-2 lg:px-4">
            <h6 className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-400 w-full py-2" >My Orders</h6>
            <div className="grid grid-cols-12 w-full h-max py-2 gap-3">
                {orders.map((v, i) => {
                    return <div key={i} className="col-span-12 md:col-span-6 xl:col-span-4 h-max min-h-40vh flex flex-col px-2">
                        <ul className="w-full flex max-w-full overflow-y-auto scroll-overflow-hidden gap-x-2">
                            {v.products.map((pro, proIndex) => {
                                return <li onClick={()=> navigate(`/vegetable/${pro._id}`)} className="w-28 lg:w-36 xl:w-44 min-w-28 lg:min-w-32 xl:min-w-36 flex flex-col relative cursor-pointer" key={proIndex}>
                                    <span className="absolute top-1 right-1 text-xs lg:text-sm text-gray-100 bg-theme-blue-600 p-1 px-1.5">100 X {pro.qty/100}</span>
                                    <img src={pro.images[0].url} className="h-20 lg:h-24 xl:h-28 object-contain border-b border-dashed" alt={pro.images[0].url} />
                                    <span className="text-gray-400 text-xs lg:text-sm xl:text-lg pb-0.5 px-1 flex justify-between" >
                                        <span className="font-semibold capitalize">{pro.title}</span>
                                        <span>Rs. {pro.price}</span>
                                    </span>
                                </li>
                            })
                            }
                        </ul>

                        <ul className="w-full flex items-center gap-x-2 lg:gap-x-4 py-2 mt-2 border-b px-1">
                            <li className="text-gray-400 text-sm lg:text-lg">Total Amount : </li>
                            <li className="font-bold text-green-600 text-lg lg:text-xl">{v.totalAmount}</li>
                            <li className="ml-auto px-2 cursor-pointer" onClick={()=> document.getElementById(`orderInfo${v._id}`).classList.toggle("hidden")}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-gray-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </li>
                        </ul>

                        <ul id={`orderInfo${v._id}`} className="w-full hidden flex-col px-1 mt-2 py-2">
                            <li className="flex gap-x-2 ">
                                <span className="text-gray-500 min-w-28 text-sm">Unit : </span>
                                <span className="text-gray-400">100 grams / 1 quantity</span>
                            </li>
                            <li className="flex gap-x-2 ">
                                <span className="text-gray-500 min-w-28 text-sm">Weight : </span>
                                <span className="text-gray-400"> {v.totalQuantity}grams / {v.totalQuantity/1000}KG</span>
                            </li>
                            <li className="flex gap-x-2 ">
                                <span className="text-gray-500 min-w-28 text-sm">Delivery : </span>
                                <span className="text-gray-400 font-semibold"> {v.products.reduce((curr, accum)=> curr + accum.deliveryCharge , 0)}</span>
                            </li>
                            <li className="flex gap-x-2 ">
                                <span className="text-gray-500 min-w-28 text-sm">Total : </span>
                                <span className="text-gray-400 font-semibold"> {v.paymentAmount}</span>
                            </li>
                            
                        </ul>
                        <li className="grid grid-cols-12 gap-x-2 px-3 py-1 bg-theme-blue-600">
                                {/* <span className="text-gray-100 min-w-28 text-md col-span-4">Status : </span> */}
                                <span className="text-gray-100 font-semibold text-lg col-span-12 text-center capitalize"> {v.status}</span>
                        </li>
                        {console.log(v)}
                    </div>
                })}
            </div>
        </div>
    )
}

export default MyOrders