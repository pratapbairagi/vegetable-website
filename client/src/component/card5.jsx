import { useDispatch, useSelector } from "react-redux"
import Star from "./star"
import { add_to_cart } from "../redux/cart/action"
import { NavLink } from "react-router-dom"
import { useEffect, useMemo } from "react"
import { cPosition, dPosition, distanceAction } from "../redux/map/action"
import { getDitanceFun } from "./getDitanceFun"
// import { cPosition, dPosition, distanceAction } from "../redux/map/action";



const Card5 = ({ product, cPostion }) => {
    const { cart } = useSelector(state => state.cart)
    const {current_position, destination_position, distance} = useSelector(state => state.mapCoords)
    const dispatch = useDispatch()

    

   let distnc = useMemo(()=>{
        if(current_position && product){
           return getDitanceFun(current_position, product.coordinates)
        }
    },[current_position, product])

    return (
        <div className="card5 flex flex-col col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2 bg-white rounded-lg">
            <div className="img_sec h-40 md:h-44 w-full relative flex justify-center items-center">
                <div className="absolute flex justify-center items-center right-4 top-4 md:right-6 md:top-6 gap-x-1">
                    <Star starClass="w-6 md:w-7 fill-gray-400" />
                </div>
                <img src={product.images[0].url} className="h-full object-contain border-b border-dashed" alt="" />
                
                <span className="w-max absolute bottom-2 left-2  flex flex-col items-start justify-center gap-y-1">
                    
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="fill-gray-400 w-6"><path fill="none" d="M0 0h24v24H0z"></path><path d="M9.97487 8.97487C11.3417 7.60804 11.3417 5.39196 9.97487 4.02513C8.60804 2.65829 6.39196 2.65829 5.02513 4.02513C3.65829 5.39196 3.65829 7.60804 5.02513 8.97487L7.5 11.4497L9.97487 8.97487ZM7.5 14.2782L3.61091 10.3891C1.46303 8.2412 1.46303 4.7588 3.61091 2.61091C5.7588 0.463029 9.2412 0.463029 11.3891 2.61091C13.537 4.7588 13.537 8.2412 11.3891 10.3891L7.5 14.2782ZM7.5 8C6.67157 8 6 7.32843 6 6.5C6 5.67157 6.67157 5 7.5 5C8.32843 5 9 5.67157 9 6.5C9 7.32843 8.32843 8 7.5 8ZM16.5 20.4497L18.9749 17.9749C20.3417 16.608 20.3417 14.392 18.9749 13.0251C17.608 11.6583 15.392 11.6583 14.0251 13.0251C12.6583 14.392 12.6583 16.608 14.0251 17.9749L16.5 20.4497ZM20.3891 19.3891L16.5 23.2782L12.6109 19.3891C10.463 17.2412 10.463 13.7588 12.6109 11.6109C14.7588 9.46303 18.2412 9.46303 20.3891 11.6109C22.537 13.7588 22.537 17.2412 20.3891 19.3891ZM16.5 17C15.6716 17 15 16.3284 15 15.5C15 14.6716 15.6716 14 16.5 14C17.3284 14 18 14.6716 18 15.5C18 16.3284 17.3284 17 16.5 17Z"></path></svg>
                <span className="text-xs font-semibold text-gray-400">{(Math.ceil(distnc).toString()).length >= 4 ? ((Math.ceil(distnc)) / 1000).toFixed(2) + " km" : Math.ceil(distnc) + " mtr/s"}</span>
                </span>
            </div>
            <div className="detail_sec h-16 md:h-20 flex justify-center items-center gap-x-2 relative px-3 md:px-5 py-2 pt-0 md:pt-1 gap-y-0.5">
                <div className="w-8/12">
                    <NavLink to={`/vegetable/${product._id}`} className="text-base md:text-lg font-bold text-gray-500 line-clamp-1">{product.title}</NavLink>
                    <h6 className="text-xs md:text-sm font-bold text-gray-400 px-1">{product.price}/KG </h6>
                </div>
                {
                    cart.find(v => v._id == product._id) ?
                        <button className=" border w-10 md:w-14 bg-white rounded px-2 py-2 flex justify-center" style={{ bottom: "34%", left: "0" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-full fill-green-600">
                                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                            </svg>
                        </button>
                        :
                        <button onClick={() => dispatch(add_to_cart(product._id))} className=" border w-10 md:w-14 bg-white rounded px-2 py-2 flex justify-center" style={{ bottom: "34%", left: "0" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-full fill-gray-600">
                                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z" />
                            </svg>
                        </button>
                }

                {/* <button className=" border w-10 md:w-14 bg-white rounded px-2 py-2 flex justify-center" style={{ bottom:"34%", left:"0"}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-full fill-gray-600">
                    <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z"/>
                    </svg>
                </button> */}
            </div>
        </div>
    )
}

export default Card5