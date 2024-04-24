import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"


const BackButton = ({ backRoute}) => {
    const navigate = useNavigate()
    const location = useLocation() 

    return(
        <button onClick={()=>{
            navigate(backRoute)
            }} className="text-gray-400 px-3 py-1 shadow">Back To Cart</button>
    )
}

export default BackButton;