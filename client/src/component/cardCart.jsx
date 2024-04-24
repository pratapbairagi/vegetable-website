import { useDispatch, useSelector } from "react-redux"
import { cart_qty, remove_from_cart } from "../redux/cart/action"
import { getDitanceFun } from "./getDitanceFun"
import { useEffect, useMemo } from "react"
import { useNavigate } from "react-router-dom"


const CardCart = ({ checkStock, product, setIsDistanceAbove5km}) => {
    const dispatch = useDispatch()
    const {current_position, destination_position, distance} = useSelector(state => state.mapCoords);
    const navigate = useNavigate()



    let distnc = useMemo(()=>{
        if(current_position && product){
           return getDitanceFun(current_position, product.coordinates)
        }
        
    },[current_position, product])

    useEffect(()=>{
        if(distnc > 5000){
            setIsDistanceAbove5km(prevValues => [...prevValues, product._id])
        }
    },[distnc])

    return (
        <>
        <div className={`grid grid-cols-12 border-b ${checkStock?.map(v=> v.qty > product.stock ? "border-red-500 border px-1 py-1 lg:py-2" : "")} relative`}>

        {distnc > 5000 && <span className="min-w-70% max-w-70% absolute z-10 h-full bg-red-600 text-sm md:text-base lg:text-lg xl:text-xl text-gray-100 flex justify-center items-center px-1 text-center" style={{left:"20%"}}>Not deliverable above 5 km distance</span> }

        <div onClick={()=>{ 
            navigate(`/vegetable/${product._id}`)
            }} className="col-span-2 flex justify-center cursor-pointer">
            <img src={product.images[0].url} className="w-36 bg-gray-100 object-contain" alt="" />
        </div>

        <div className="col-span-3 lg:col-span-3 flex items-center">
            <p className="text-sm lg:text-2xl font-bold font-nunito w-full text-center text-gray-500">{product.title}</p>
        </div>

        <div className="col-span-4 flex flex-row products-center justify-center items-center gap-0">
            <button onClick={()=> product.qty  >= 100 && dispatch( cart_qty( {product : product, operator : "-100"} ))} className="size-6 lg:size-10 border flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                </svg>

            </button>
            <span className="h-10 px-1 lg:px-3 xl:px-4 lg:px-6 flex items-center text-sm lg:text-base text-gray-500 font-bold">{product.qty > 999 ? product.qty/1000+"KG" : product.qty+"G"}</span>
            <button onClick={()=> dispatch( cart_qty( {product : product, operator : "100"} ))} className="text-xl size-6 lg:size-10 border flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>
        </div>

        <div className="col-span-2 flex items-center justify-center text-base lg:text-2xl font-bold text-gray-500"> {product.price}/KG </div>

        <div className="col-span-1 flex justify-center">
            <button onClick={()=>{
                setIsDistanceAbove5km(prevValues=> [...prevValues].filter(v=> v != product._id))
                 dispatch(remove_from_cart(product._id))}} className="">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-6 lg:w-8 stroke-red-700">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>

            </button>
        </div>

    </div>
    </>
    )
}

export default CardCart