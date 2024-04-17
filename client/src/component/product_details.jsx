import { useParams } from "react-router-dom"
import Card4 from "./card4";
import Review_card from "./review_card";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_product } from "../redux/product/action";
import { cart_qty } from "../redux/cart/action";
import Spinner from "./spinner";
import StoresMap from "./map";
import { distanceAction, dPosition } from "../redux/map/action";


const Product_details = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const state = useSelector(state => state.product)
    const {cart} = useSelector(state => state.cart)
    const {current_position, destination_position, distance} = useSelector(state => state.mapCoords)


    let x = 0
    useEffect(() => {
        if (x == 0 && id) {
            x++
            dispatch(get_product(id))
        }

    }, [id])

    useEffect(()=>{
        if(state.product){
            if(state.product.product){
            dispatch(dPosition(state.product.product?.coordinates))
            dispatch(distanceAction(state.product.product.coordinates, current_position))
    }
    }

    },[state.product])


    return (
        <>
        {state.loading ? <Spinner/> : state.product?.product != null &&
        <div className="w-full min-h-full grid grid-cols-12 pb-3 lg:max-w-80% mx-auto pt-3 lg:pt-32">
            <div className="col-span-12 lg:mr-3 md:col-span-8 grid-cols-12 grid grid-cols-12 gap-y-2 order-1 lg:max-h-70vh">
                <div id="imageScroll" className="flex min-w-full scroll-overflow-hidden col-span-12 w-full max-w-full overflow-x-auto h-full">
                {state.product != null && state.product.product.images.map((v, i)=>{
                    return <img key={i} src={v.url} className="col-span-12 w-full min-w-full object-contain lg:max-h-80vh bg-gray-100" alt="" />
                })}
                </div>
                

                <ul className="col-span-12  flex md:hidden max-h-full overflow-x-auto scroll-overflow-hidden px-2 gap-x-2">
                    {state.product != null ? state.product.product.images.map((v, i) => {
                        return <li key={i} onClick={()=> document.getElementById("imageScroll").scrollLeft = (document.getElementById("imageScroll").clientWidth) * i } className="bg-gray-100 border-gray-300 cursor-pointer h-14 w-20 aspect-ratio-square">
                            <img src={v.url} className="w-full h-full object-contain" alt="" />
                        </li>
                    })
                        : ""
                    }
                    {/* <li className="bg-gray-100">
                        <img src="/images/potato.png" className="w-20 min-w-20" alt="" />
                    </li >
                    <li className="bg-gray-100">
                        <img src="/images/potato.png" className="w-20 min-w-20" alt="" />
                    </li >
                    <li className="bg-gray-100">
                        <img src="/images/potato.png" className="w-20 min-w-20" alt="" />
                    </li >
                    <li className="bg-gray-100">
                        <img src="/images/potato.png" className="w-20 min-w-20" alt="" />
                    </li >
                    <li className="bg-gray-100">
                        <img src="/images/potato.png" className="w-20 min-w-20" alt="" />
                    </li > */}
                </ul>

            </div>


            <div className="col-span-12 md:col-span-4 px-2 mt-7 lg:mt-0 flex items-center md:items-start justify-start content-start  order-2 flex-wrap md:order-2">

                <div className="w-full flex flex-wrap items-center justify-start">
                    <h5 className="text-base md:text-xl lg:text-2xl font-bold font-nunito text-gray-400 mt-1">{state.product != null ? state.product.product.title : ""}</h5>
                    <div className="flex mt-1">

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} className="w-4 md:5 lg:w-6 fill-yellow-600 ml-4 mr-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                        <span className="text-gray-400 text-xs md:text-sm lg:text-base">(4.4)</span>
                    </div>

                    <div className="flex md:hidden ml-auto ">
                        <button  onClick={()=> cart.find(v=> v._id == id )?.qty  >= 1 && dispatch( cart_qty( {product : state.product.product, operator : "-1"} ))} className="bg-theme-blue-600 p-1 rounded-full ml-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} className="w-6 stroke-gray-100">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                            </svg>
                        </button>
                        <span className="px-3 text-xl text-gray-600">{state.product != null ? cart.find(v=> v._id == state.product.product._id ) ? cart.find(v=> v._id == state.product.product._id ).qty : 0  : 0}</span>
                        <button disabled={state.product != null && state.product.product.stock > 0 ? false : true} onClick={()=> dispatch( cart_qty({product : state.product.product, operator : "1"}))} className="bg-theme-blue-600 p-1 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} className="w-6 stroke-gray-100">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </button>
                    </div>

                </div>
                <h5 className="text-2xl md:text-3xl lg:text-4xl md:mt-0.5 lg:mt-1 font-bold font-nunito text-gray-600 flex hidden md:block">{state.product != null ? state.product.product.features.map((v, i) => { return <span key={i}>{v.feature}</span> }) : ""} <span className="">{state.product != null ? state.product.product.title : ""}</span></h5>
                <h4 className="text-3xl md:text-4xl lg:text-5xl md:mt-3.5 lg:mt-5 font-extrabold text-theme-blue-600 font-nunito hidden md:block w-full md:mb-10">{state.product != null ? state.product.product.price : ""}/KG</h4>

                <div className="w-full hidden md:flex justify-start flex">
                    <button disabled={cart.find(v=> v._id == id )?.qty == 0 ? true : false} onClick={()=> dispatch( cart_qty( {product : state.product.product, operator : "-1"} ))} className="bg-theme-blue-600 p-1 md:py-1.5 md:px-4 lg:px-4 rounded-full md:rounded-none ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} className="w-6 md:w-7 stroke-gray-100">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                        </svg>
                    </button>
                    <span className="px-3 md:px-4 text-xl md:text-2xl lg:text-3xl text-gray-600 flex items-center">{state.product != null ? cart.find(v=> v._id == state.product.product._id )?.qty  : 0}</span>
                    <button disabled={state.product != null && state.product.product.stock > 0 ? false : true} onClick={()=> dispatch( cart_qty({product : state.product.product, operator : "1"}))} className="bg-theme-blue-600 p-1 md:px-4 lg:px-4 rounded-full md:rounded-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} className="w-6 md:w-7 stroke-gray-100">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </button>
                </div>

                <div className="col-span-12 hidden md:flex gap-x-2 items-center px-1.5 mt-3 md:mt-5 w-full ">
                    <span className="text-theme-green-600 font-bold text-sm bg-green-200 px-4 py-1 rounded">{state.product != null ? state.product.product.stock > 0 ? "Available" : "Unavailable" : ""}</span>
                    <span className="text-sm font-bold text-gray-400">{state.product != null ? (state.product.product.stock / 1000).toFixed(2) : ""}kg</span>
                </div>




                <div className="col-span-11 w-full ml-3 md:ml-0 hidden md:flex justify-center border-b border-t border-theme-blue-600 mt-5 py-2">
                    <fieldset className=" w-11/12 flex border rounded-full p-1">
                        <button className="h-9 w-14 bg-theme-blue-600 px-2 flex items-center justify-center rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} className="w-6 h-6 stroke-gray-100">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </button>
                        <input className="rouded-full h-9 w-10/12 w-full px-2 text-sm font-nunito text-gray-500 outline-none text-center" placeholder="Availity by picode" type="text" />
                    </fieldset>
                </div>

                <div className="w-full hidden md:flex items-center px-0 mt-5 justify-between">
                    <span className="text-base md:text-xl font-bold text-theme-green-600 font-nunito">Free Delivery by tomorrow</span>
                    <span className="text-xs md:text-sm font-bold text-gray-400 font-nunito underline">Want fast delivery ?</span>
                </div>

                <ul className="col-span-12  hidden md:flex md:flex max-h-full overflow-x-auto scroll-overflow-hidden px-2 gap-x-2 md:mt-6 cursor-pointer">
                    {state.product != null ? state.product.product.images.map((v, i) => {
                        return <li onClick={()=> document.getElementById("imageScroll").scrollLeft = (document.getElementById("imageScroll").clientWidth) * i } key={i} className="bg-gray-100 border-2 border-gray-300">
                            <img src={v.url} className="w-14" alt="" />
                        </li>
                    })
                        : ""
                    }
                </ul>

            </div>
            <div className="col-span-12 px-2 mt-1 sm:mt-1.5 flex items-center gap-x-3 order-4">
                <h5 className="text-2xl font-bold font-nunito text-gray-600 flex md:hidden">{state.product != null ? state.product.product.features.map((v, i) => { return <span key={i}>{v.feature}</span> }): ""} <span className="">{state.product != null ? state.product.product.title : ""}</span></h5>
            </div>

            <div className="col-span-12 flex justify-start px-2 mt-5 sm:mt-6 order-5">
                <h4 className="text-3xl font-extrabold text-theme-blue-600 font-nunito block md:hidden">{state.product != null ? state.product.product.price : ""}/KG</h4>
            </div>
            <div className="col-span-12 flex md:hidden gap-x-2 items-center px-2 mt-3 order-6">
                <span className="text-theme-green-600 font-bold text-sm bg-green-200 px-4 py-1 rounded">{state.product != null ? state.product.product.stock > 0 ? "Available" : "Unavailable" : ""}</span>
                <span className="text-sm font-bold text-gray-400">{state.product != null ? (state.product.product.stock / 1000).toFixed(2) : ""}kg</span>
            </div>
            <div className="col-span-11 w-full ml-3 flex md:hidden justify-center border-b border-t border-theme-blue-600 mt-5 py-2 order-7 ">
                <fieldset className=" w-11/12 flex border rounded-full p-1">
                    <button className="h-9 w-14 bg-theme-blue-600 px-2 flex items-center justify-center rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} className="w-6 h-6 stroke-gray-100">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>
                    <input className="rouded-full h-9 w-10/12 w-full px-2 text-sm font-nunito text-gray-500 outline-none text-center" placeholder="Availity by picode" type="text" />
                </fieldset>
            </div>
            <div className="col-span-12 flex items-center px-3 mt-5 justify-between order-8 flex md:hidden">
                <span className="text-base font-bold text-theme-green-600 font-nunito">Free Delivery by tomorrow</span>
                <span className="text-xs font-bold text-gray-400 font-nunito underline">Want fast delivery ?</span>
            </div>

            <div className="col-span-12 flex flex-col items-start gap-y-3 px-3 mt-8 justify-between order-9">
                <h6 className="text-xl md:text-2xl lg:text-3xl font-nunito text-gray-600 font-bold">Description</h6>
                <p className="text-sm md:text-base lg:text-2xl text-gray-400 md:mt-2 lg:mt-3" style={{ lineHeight: "160%" }}>{state.product != null ? state.product.product.description : ""}</p>
            </div>

            <div className="col-span-12 px-3 flex gap-x-2 order-10 mt-5 md:mt-7 lg:mt-9">
                <ul className="flex flex-wrap gap-x-2 gap-y-2">
                    {state.product != null ? state.product.product.tags.map((v, i) => {
                        return <li key={i}><button className=" px-2 py-1 text-sm md:text-base xl:text-xl text-green-600 font-bold font-nunito bg-green-100">#{v}</button></li>
                    }) : ""}
                </ul>
            </div>
            <div className="col-span-12 flex gap-x-2 order-10 mt-5 md:mt-7 lg:mt-9">
                <StoresMap destCords="" currentCords="" />
            </div>

            <div className="col-span-12 order-11 flex flex-col px-3 md:px-4 lg:px-5 xl:px-6 mt-5 md:mt-6 lg:mt-7 py-6" style={{ background: "#FFF4E7" }}>
                <h6 className="text-base md:text-xl lg:text-2xl font-bold font-nunito text-gray-600">Related Vegetables</h6>
                <ul className="flex max-w-full overflow-x-auto pt-6 md:pt-8 lg:pt-10 gap-x-3 md:gap-x-4 lg:gap-x-5 scroll-overflow-hidden">
                    {state.product != null ? state.product.relatedProducts.map((v, i) => {
                        return <Card4 key={i} product={v} />
                    }) : ""}

                </ul>
                <div className="w-full flex justify-end mt-3">
                    <button className="text-sm text-theme-blue-600 font-semibold h-7">See More</button>
                </div>
            </div>

            <div className="col-span-12 order-11 flex flex-col px-3 md:px-4 lg:px-5 xl:px-6 mt-3 md:mt-5 lg:mt-7 py-6" style={{ background: "#F8F7FF" }}>
                <h6 className="flex  justify-between text-base md:text-xl lg:text-2xl font-bold font-nunito text-gray-600">
                    <span>Reviews</span>
                    <div className="flex items-center gap-x-2 md:gap-x-3">
                        <span className="text-sm md:text-base lg:text-xl text-gray-400">(4.4)</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} className="w-6 lg:w-7 stroke-gray-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                    </div>
                </h6>

                <div className="flex w-full mt-8" >
                    <div className="w-full flex justify-between">
                        <div className="flex flex-col bg-white rounded">
                            <img src="/images/tomato.png" className="w-20 md:w-24 h-28 md:h-32 lg:w-32 lg:h-44 object-contain border-b" alt="" />
                            <h6 className="text-2xs md:text-xs lg:text-sm mt-1 font-bold text-gray-500 px-0.5 text-center pb-1.5">Tomato</h6>
                        </div>

                        <ul className="flex flex-col min-w-70% gap-y-3">
                            <li className="flex w-full justify-end gap-x-2">
                                <span className="text-2xs font-semibold text-gray-400">(4 and above) 2024</span>
                                <span className="h-4  w-32 bg-green-600 rounded-l-full"></span>
                            </li>
                            <li className="flex w-full justify-end gap-x-2">
                                <span className="text-2xs font-semibold text-gray-400">(3 and above) 1024</span>
                                <span className="h-4  w-24 bg-yellow-400 rounded-l-full"></span>
                            </li>
                            <li className="flex w-full justify-end gap-x-2">
                                <span className="text-2xs font-semibold text-gray-400">(2 and above) 424</span>
                                <span className="h-4  w-16 bg-orange-400 rounded-l-full"></span>
                            </li>
                            <li className="flex w-full justify-end gap-x-2">
                                <span className="text-2xs font-semibold text-gray-400">(1 and above) 104</span>
                                <span className="h-4  w-8 bg-red-400 rounded-l-full"></span>
                            </li>
                        </ul>

                    </div>

                    <div className="flex flex-col">
                        {/* <div className="flex items-center gap-x-2">
                            <span className="text-sm text-gray-400">(4.4)</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} className="w-6 stroke-gray-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>
                        </div> */}

                    </div>
                </div>
                <ul className="flex max-w-full overflow-x-auto pt-6 md:pt-8 lg:pt-10 gap-x-3 md:gap-x-4 lg:gap-x-5 scroll-overflow-hidden mt-8">
                    <Review_card />
                    <Review_card />
                    <Review_card />
                </ul>
            </div>
        </div> }
        </>
    )
}

export default Product_details