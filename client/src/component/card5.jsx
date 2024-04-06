import Star from "./star"


const Card5 = ({product}) => {
    return(
        <div className="card5 flex flex-col col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2 bg-white rounded-lg">
        <div className="img_sec h-40 md:h-44 w-full relative flex justify-center items-center">
            <div className="absolute flex justify-center items-center right-4 top-4 md:right-6 md:top-6 gap-x-1">
                <Star starClass="w-6 md:w-7 fill-gray-400"/>
            </div>
            <img src={product.images[0].url} className="h-full object-contain border-b border-dashed" alt="" />
        </div>
        <div className="detail_sec h-16 md:h-20 flex justify-center items-center gap-x-2 relative px-3 md:px-5 py-2 pt-0 md:pt-1 gap-y-0.5">
            <div className="w-8/12">
            <h6 className="text-base md:text-lg font-bold text-gray-500">{product.title}</h6>
            <h6 className="text-xs md:text-sm font-bold text-gray-400 px-1">{product.price}/KG </h6>
            </div>
                <button className=" border w-10 md:w-14 bg-white rounded px-2 py-2 flex justify-center" style={{ bottom:"34%", left:"0"}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-full fill-gray-600">
                    <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z"/>
                    </svg>
                </button>
        </div>
    </div>
    )
}

export default Card5