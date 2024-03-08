

const Card3 = ({style}) => {
    return (
        <div className="card col-span-6 sm:col-span-5 md:col-span-5 lg:col-span-4 xl:col-span-3 h-full min-h-30vh min-w-44 sm:min-w-44 md:min-w-48 lg:min-w-56 xl:min-w-60 flex flex-col py-2 pb-1" style={style}>
            <div className="h-3/6 w-full relative">
                <img src="./images/brinjal.png" className="w-full h-full object-contain" alt="" />
                <span className="absolute top-0 left-2 text-xs sm:text-xs font-nunito text-theme-blue-600 md:text-sm lg:text-sm xl:text-base font-bold">Brinjal</span>
                <span className="absolute bottom-2 right-2 text-xs sm:text-xs font-nunito text-theme-blue-600 md:text-sm lg:text-sm xl:text-base font-bold">20% Off</span>
            </div>

            <h5 className="w-full flex items-center gap-x-4 px-2">
                <span className="text-base sm:text-base md:text-xl lg:text-xl xl:text-2xl font-extrabold text-theme-green-600 font-nunito ">₹ 32/KG</span>
                <span className="text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base font-bold line-through text-red-400">₹ 40/KG</span>
            </h5>

            <p className="px-2 text-2xs sm:text-2xs md:text-xs lg:text-xs xl:text-sm line-clamp-3 text-gray-400 mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et aut nulla, alias aliquam labore officia?</p>

            <button className="text-3xs sm:text-3xs md:text-2xs lg:text-xs xl:text-sm font-semibold text-theme-blue-600  px-1.5 sm:px-1.5 md:px-2.5 lg:px-3.5 xl:px-4 py-2 sm:py-2 md:py-2.5 lg:py-3 rounded-sm hover:bg-white hover:border-transparent  mt-4 mx-auto border" style={{ width: "94%", alignSelf:"end", placeSelf:"end", justifySelf:"end" }}>ADD TO CART</button>

        </div>
    )
}

export default Card3