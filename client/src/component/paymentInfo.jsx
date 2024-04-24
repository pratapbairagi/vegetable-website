import { useLocation, useNavigate } from "react-router-dom";
import BackButton from "./backButton";
import ProgressOrder from "./progessOrder";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import InputField from "./inputField";
import { OnchangeFunction } from "./inputFunctions";
import { order_request } from "../redux/order/action";


const PaymentInfo = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()
    const [payment, setPayment] = useState(0)

    const {success, error, message} = useSelector(state=> state.order)
    
    const inputFieldClasses = "py-1 md:py-1.5 lg:py-2 px-1.5 md:px-2 lg:px-2.5 xl:px-3 outline-0 mt-2"

    console.log(location.state)
    const orderPlace_hanndler = () => {
            const order={...location.state, payment : payment}
            dispatch(order_request(order))
    }

    useEffect(()=>{
        if(success){
            navigate("/order-placed", { state : { ...location.state, payment : payment }})
        }
    },[success])

    return(
        <div className="w-full h-max min-h-90vh flex flex-col px-2 pb-10">
            <div className="w-full py-2 px-2">
                <BackButton backRoute="/shipping-info" />
            </div>
            <ProgressOrder/>

        <div className="w-full h-max min-h-20 flex flex-col items-center">
            <h4 className="text-center text-gray-400 mt-8 text-xl font-semibold" style={{letterSpacing:"1px"}}>Payment</h4>
                <form action="" className="w-full h-max min-h-60vh py-6" style={{maxWidth:"300px"}}>
                    <span className="col-span-12 text-center block text-5xl text-blue-600 font-bold pb-8" style={{letterSpacing:"1px"}}>{
                    location.state?.cart?.reduce((curr, accum)=> curr + accum.price * accum.qty/1000 ,0) >= 300 ? 
                    location.state?.cart?.reduce((curr, accum)=> curr + accum.price * accum.qty/1000 ,0) 
                    :
                     location.state?.cart?.reduce((curr, accum)=> curr + accum.price * accum.qty/1000 ,0) + 50
                    }</span>
                <fieldset className="col-span-12 md:col-span-6 flex flex-col bg-gray-100 px-4 py-4">
                        <label className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-400" htmlFor="#payment">Paymet Amount</label>
                        <InputField onChangeFun={(e) => OnchangeFunction({ e, createProduct: payment, setCreateProduct: setPayment })} placeholder="payment amount in Rupees..." type="number" id="payment" name="payment" classes={inputFieldClasses} />
                    </fieldset>
                </form>
                <button onClick={ orderPlace_hanndler } className="w-full px-4 py-1 bg-blue-600 text-gray-100 hover:bg-blue-500 font-semibold text-lg" style={{maxWidth:"400px"}}>Submit</button>
                </div>
            </div>
    )
}

export default PaymentInfo;