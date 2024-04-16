import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { clear_error, clear_success } from "../redux/product/action";


const Toaster = () => {
    const userState = useSelector(state => state.user)
    const productState = useSelector(state => state.product)
    const dispatch = useDispatch();

    useEffect(()=>{
        if(userState.message || productState.message){
            let clear_time = setTimeout(()=>{
                dispatch(clear_error())
                return clearTimeout(clear_time)
            },5000)
        }
        if(userState.success || productState.success){
            let clear_time = setTimeout(()=>{
                dispatch(clear_success())
                return clearTimeout(clear_time)
            },3000)
        }
    }, [userState, productState])


    return (
        <>
            {(userState.message || productState.message) && 
            <div className={`fixed z-50 top-0 left-0 right-1 h-max min-h-12 w-screen max-w-full text-center flex items-center justify-center text-wrap text-break flex-break rounded lg:max-w-96  text-gray-100 bg-green-600 ${(userState.error || productState.error) ? "bg-red-600 px-2 py-2" : "bg-green-600 px-2 py-2"} `}>
                <p className="text-sm md:text-md text-white">{userState.message ? userState.message : productState.message ? productState.message : ""}</p>
            </div>
            }
        </>
    )
}

export default Toaster