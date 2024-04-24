import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


const ProgressOrder = () => {
    const location = useLocation()
    const [progress, setProgress] = useState(0)

    useEffect(()=>{
        location.pathname == "/shipping-info" && setProgress(20)
        location.pathname == "/payment-info" && setProgress(60)
        location.pathname == "/order-placed" && setProgress(100)
    },[location.pathname])

    console.log(location.pathname)
    return (
        <div className="w-full h-max min-h-16 flex px-4 items-center justify-center mt-4">
                <ul className="w-full h-12 grid grid-cols-12 relative" style={{maxWidth:"600px"}}>
                    <li className="text-gray-400 text-sm md:text-md lg:text-lg col-span-4 text-center">Address</li>
                    <li className="text-gray-400 text-sm md:text-md lg:text-lg col-span-4 text-center">Payment</li>
                    <li className="text-gray-400 text-sm md:text-md lg:text-lg col-span-4 text-center">Order</li>
                    <span className="absolute bottom-0 z-10 w-10/12 px-5 md:px-10 h-1 flex justify-between bg-gray-400" style={{left:"50%", right:"50%", translate:"-50% -50%"}}>
                        <span className={`w-5 h-5 rounded-full z-10 ${progress == 0 ? "bg-gray-400" : "bg-green-600"}`} style={{transform:"translateY(-40%)"}}></span>
                        <span className={`w-5 h-5 rounded-full z-10 ${progress > 46 ? "bg-green-600" : "bg-gray-400"}`} style={{transform:"translateY(-40%)"}}></span>
                        <span className={`w-5 h-5 rounded-full z-10 ${progress >= 100 ? "bg-green-600" : "bg-gray-400"}`} style={{transform:"translateY(-40%)"}}></span>
                        <span className="h-full bg-green-600 left-0 absolute z-0" style={{width:progress+"%"}}></span>
                    </span>
                </ul>
            </div>
    )
};

export default ProgressOrder