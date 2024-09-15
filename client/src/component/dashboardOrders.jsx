import { useDispatch, useSelector } from "react-redux"
import Pagination from "./pagination"
import { memo, useEffect, useMemo, useCallback } from "react";
import { admin_orders, change_order_status } from "../redux/order/action";
import moment from "moment-timezone"

const DashboardOrders = () => {

    const dispatch = useDispatch();
    const { sellerOrders, order, error, totalNumberOfOrders, totalNumberOfCompletedOrders, totalNumberOfPendingOrders, totalNumberOfProcessingOrders, message } = useSelector(state => state.order)

    // const fetchOrders = useCallback(() => {
    //     alert("ttt")
    //     dispatch(admin_orders())
    // }, [])

    // let x = 0
    // useEffect(() => {
    //     if (!sellerOrders.length && x === 0) {
    //         x++
    //         fetchOrders()
    //     }
    // }, [fetchOrders, sellerOrders]);

    useEffect(()=>{
        dispatch(admin_orders())
    },[])

    console.log("sellerOrders ", message)

    const orderStatusChange_handler = ({orderId, status}) => {
        dispatch(change_order_status(orderId,status))
    }

    return (
        <div className="w-max max-w-max h-max min-h-screen max-w-full flex flex-col md:mb-0 ">
            <h6 className=" w-max text-base md:text-xl lg:text-lg xl:text-xl font-bold text-gray-600 mt-2 md:mt-2 lg:mt-3 xl:mt-3">Orders Overview</h6>
            <div className="w-screen min-w-screen max-w-screen overflow-x-auto max-w-screen flex mt-3 gap-x-2 sm:gap-x-3 md:gap-x-5 lg:gap-x-6 xl:gap-x-7 px-1 scroll-overflow-hidden">
                <div className="flex flex-col justify-center items-center px-8 md:px-9 lg:px-10 xl:px-12 py-4 md:py-5 lg:py-6 xl:py-7 gap-y-0.5 lg:gap-y-1 xl:gap-y-1 bg-theme-blue-600">
                    <span className="text-xl md:text-2xl text-gray-100 font-extrabold">{totalNumberOfOrders}</span>
                    <span className="text-xs md:text-sm text-gray-100 font-bold whitespace-nowrap font-nunito">Total Orders</span>
                </div>

                <div className="flex flex-col justify-center items-center px-8 md:px-9 lg:px-10 xl:px-12 py-4 md:py-5 lg:py-6 xl:py-7 gap-y-0.5 lg:gap-y-1 xl:gap-y-1 bg-orange-500">
                    <span className="text-xl md:text-2xl text-gray-100 font-extrabold ">{totalNumberOfPendingOrders}</span>
                    <span className="text-xs md:text-sm text-gray-100 font-bold whitespace-nowrap font-nunito">Pending Orders</span>
                </div>

                <div className="flex flex-col justify-center items-center px-8 md:px-9 lg:px-10 xl:px-12 py-4 md:py-5 lg:py-6 xl:py-7 gap-y-0.5 lg:gap-y-1 xl:gap-y-1 bg-yellow-500">
                    <span className="text-xl md:text-2xl text-gray-100 font-extrabold">{totalNumberOfProcessingOrders}</span>
                    <span className="text-xs md:text-sm text-gray-100 font-bold whitespace-nowrap font-nunito">Processing Orders</span>
                </div>

                <div className="flex flex-col justify-center items-center px-8 md:px-9 lg:px-10 xl:px-12 py-4 md:py-5 lg:py-6 xl:py-7 gap-y-0.5 lg:gap-y-1 xl:gap-y-1 bg-green-500">
                    <span className="text-xl md:text-2xl text-gray-100 font-extrabold">{totalNumberOfCompletedOrders}</span>
                    <span className="text-xs md:text-sm text-gray-100 font-bold whitespace-nowrap font-nunito">Complete Orders</span>
                </div>
            </div>

            <h6 className=" w-max text-base md:text-xl lg:text-lg xl:text-xl font-bold text-gray-600 mt-3 md:mt-4 lg:mt-5 xl:mt-6">Orders List</h6>
            <div className=" w-full text-base md:text-xl lg:text-lg xl:text-xl font-bold text-gray-600 flex bg-white py-2 px-2 md:px-4 md:py-3 mt-2 sm:mt-3 md:mt-3 lg:mt-4 xl:mt-4">
                <fieldset className=" h-8 sm:h-8 md:h-10 lg:h-10 xl:h-12 w-2/4 sm:w-2/4 md:w-3/4 lg:w-1/4  sm-left-125 md:left-0 z-10 rounded left-0 relative" >
                    <input className="block w-full h-full px-6 rounded text-sm bg-gray-100" type="text" placeholder="Search for..." name="" id="" />
                    <button className="absolute top-0 right-0 h-full text-white grid place-items-center w-10 sm:w-10 md:w-12 lg:w-16 xl:w-16">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} className="size-6 sm:size-6 md:size-6 lg:size-7 xl:size-7 stroke-theme-blue-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>
                </fieldset>


            </div>

            <div className="w-screen max-w-screen overflow-x-auto  scroll-overflow-hidden max-h-40vh">
                <table className="w-max lg:w-dvw overflow-x-auto min-w-screen  max-h-50vh divide-y divide-gray-200 ">
                    <thead className="sticky top-0  bg-white w-max">
                        <tr className="flex gap-x-2 sm:gap-x-3 md:gap-x-4 lg:gap-x-5">
                            <th className="px-2 w-28 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">ORDER ID</th>
                            <th className="px-2 w-28 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                            <th className="px-2 py-3 w-40 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
                            <th className="px-2 py-3 flex gap-x-2 w-24 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Date
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </th>
                            <th className="px-2 py-3 flex gap-x-2 w-24 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Amount
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </th>
                            <th className="px-2 py-3 flex gap-x-2 w-24 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </th>
                            <th className="px-2 py-3 w-24 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                            {/* Add more header columns as needed */}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 h-36 max-h-36 w-max overflow-x-auto">
                        {sellerOrders.map((v, i) => {
                            return <tr key={i} className="flex gap-x-2 sm:gap-x-3 md:gap-x-4 lg:gap-x-5">
                                <td className="px-2 text-center w-28 max-w-28 break-words text-pretty py-4 text-2xs sm:text-xs md:text-sm text-gray-600">{v._id}</td>
                                <td className="px-2 text-center w-28 py-4 break-words text-2xs sm:text-xs md:text-sm text-gray-600">{v.user}</td>
                                {console.log("address ", v)}
                                <td className="px-2 text-center w-40 py-4 whitespace-wrap text-2xs sm:text-xs md:text-sm text-gray-600">{v.shippingAddress.house} {v.shippingAddress.street}, {v.shippingAddress.city}, {v.shippingAddress.state} - {v.shippingAddress.pincode}, {v.shippingAddress.country} </td>
                                <td className="px-2 w-24 py-4 whitespace-wrap flex items-center justify-center text-2xs sm:text-xs md:text-sm text-gray-600">{moment(v.statusDates.orderDate).tz("Asia/Kolkata").format("HH:MM:SS DD/MM/YYYY") }</td>
                                <td className="px-2 w-24 py-4 whitespace-wrap flex items-center justify-center text-2xs sm:text-xs md:text-sm text-gray-600">{v.products.reduce((curr, accum) => curr + accum.totalPrice, 0)}</td>
                                <td className="px-2 w-24 py-4 whitespace-wrap flex items-center flex items-center justify-center text-2xs sm:text-xs md:text-sm text-gray-600">{v.status}</td>
                                <td className="px-2 w-24 py-4 whitespace-nowrap flex items-center justify-center gap-x-1 relative">
                                    

                                    <select onChange={(e)=> orderStatusChange_handler({orderId : v._id, status : e.target.value})} className="cursor-pointer text-center w-max max-w-16 text-2xs sm:text-xs md:text-sm text-gray-600" defaultValue={v.status} name="" id="">
                                        <option value="pending">Pending</option>
                                        <option value="processing">Processing</option>
                                        <option value="shipped">Shipped</option>
                                        <option value="out for delivery">Out For Delivery</option>
                                        <option value="delivered">Delivered</option>
                                    </select>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
            <Pagination />
        </div>
    )
}

export default memo(DashboardOrders);