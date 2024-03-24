import { NavLink } from "react-router-dom"


const Card3 = ({product}) => {
    return (
        <div className="card col-span-6 sm:col-span-5 md:col-span-5 lg:col-span-8 xl:col-span-10 h-full lg:h-max min-h-30vh max-w-44 min-w-44 md:min-w-48 lg:min-w-70% xl:min-w-40% w-max flex flex-col lg:flex-row py-2 pb-1">
            <div className="h-3/6 lg:h-60 w-full lg:w-3/6 relative">
                <img src={product.images[0].url} className="w-full h-full  object-contain" alt="" />
                <NavLink to={`/vegetable/${product._id}`} className="absolute top-0 left-2 text-xs sm:text-xs font-nunito text-theme-blue-600 md:text-sm lg:text-sm xl:text-base font-bold">{product.title}</NavLink>
                <span className="absolute bottom-2 right-2 text-xs sm:text-xs font-nunito text-theme-blue-600 md:text-sm lg:text-sm xl:text-base font-bold">20% Off</span>
            </div>
            <div className=" lg:w-3/6 lg:px-4 flex flex-col justify-between lg:py-2 lg:min-w-72">
            <h5 className="w-full flex items-center gap-x-4 px-2">
                <span className="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-extrabold text-theme-green-600 font-nunito ">₹ {product.price}/KG</span>
                <span className="text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg font-bold line-through text-red-400">₹ 40/KG</span>
            </h5>

            <p className="px-2 text-2xs sm:text-2xs md:text-xs lg:text-sm xl:text-base line-clamp-3 lg:line-clamp-5 lg:min-h-32 text-gray-400 mt-2">{product.description}</p>

            <button className="text-3xs sm:text-3xs md:text-2xs lg:text-xs xl:text-sm font-semibold text-theme-blue-600  px-1.5 sm:px-1.5 md:px-2.5 lg:px-3.5 xl:px-4 py-2 sm:py-2 md:py-2.5 lg:py-3 rounded-sm hover:bg-white hover:border-transparent  mt-4 mx-auto border" style={{ width: "96%", alignSelf:"end", placeSelf:"end", justifySelf:"end" }}>ADD TO CART</button>
            </div>
        </div>
    )
}

export default Card3