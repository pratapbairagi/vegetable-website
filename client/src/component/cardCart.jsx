import { useDispatch } from "react-redux"
import { cart_qty, remove_from_cart } from "../redux/cart/action"


const CardCart = ({item}) => {
    const dispatch = useDispatch()

    return (
        <div className="grid grid-cols-12 border-b">

        <div className="col-span-2 flex justify-center">
            <img src={item.images[0].url} className="w-36 bg-gray-100 object-contain" alt="" />
        </div>

        <div className="col-span-3 lg:col-span-3 flex items-center">
            <p className="text-sm lg:text-2xl font-bold font-nunito w-full text-center text-gray-500">{item.title}</p>
        </div>

        <div className="col-span-3 flex flex-row items-center justify-center">
            <button onClick={()=> item.qty  >= 1 && dispatch( cart_qty( {product : item, operator : "-1"} ))} className="size-6 lg:size-10 border flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                </svg>

            </button>
            <span className="h-10 px-4 lg:px-6 flex items-center text-base lg:text-xl font-bold">{item.qty}</span>
            <button onClick={()=> dispatch( cart_qty( {product : item, operator : "1"} ))} className="text-xl size-6 lg:size-10 border flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>
        </div>

        <div className="col-span-3 flex items-center justify-center text-base lg:text-2xl font-bold text-gray-500"> {item.price}/KG </div>

        <div className="col-span-1 flex justify-center">
            <button onClick={()=> dispatch(remove_from_cart(item._id))} className="">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-6 lg:w-8 stroke-red-700">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>

            </button>
        </div>

    </div>
    )
}

export default CardCart