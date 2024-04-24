import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"


const BackButton = ({setToggleCart, backRoute}) => {
    const navigate = useNavigate()
    const location = useLocation() 
    const [toggle, setToggle] = useState(false);

    useEffect(()=>{
        if(location.pathname == "/shipping-info"){
            setToggle(true)
        }
        else{
            setToggle(false)
        }
    },[location.pathname])


    return(
        <button onClick={()=>{
            navigate(backRoute)
            setToggleCart(toggle)
            }} className="text-gray-400 px-3 py-1 shadow">Back To Cart</button>
    )
}

export default BackButton;