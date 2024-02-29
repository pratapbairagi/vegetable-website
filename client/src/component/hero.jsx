


const Hero = () => {
    return (
        <>
            <div className="pb-4 h-90vh sm:h-90vh md:h-50vh lg:min-h-60vh xl:min-h-80vh  w-full relative z-0 grid grid-cols-12 relative" >
                <img src="./images/WhatsApp_Image_2024-02-23_at_20.26 1.png" className="aspect-video h-3/6 sm:h-4/6 md:h-full lg:h-full xl:h-full left-0 absolute z-0 opacity-20" alt="" />
                <div className="py-10 sm:py-10 md:py-8 lg:py-6 xl-py-0 pr-4 sm:pr-6 md:pr-3 pl-6 sm:pl-8 md:pl-8 lg:pl-12 xl:pl-16 col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-7 xl:col-span-7 h-full flex flex-col justify-center ">
                    <h6 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-extrabold font-nunito text-theme-green-600">Baazar for</h6>
                    <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mt-1.5 sm:mt-1.5 md:mt-2 lg:mt-3 xl:mt-4 font-nunito">Fresh Vegetables</h1>

                    <p className="text-base sm:text-base md:text-xl lg:text-2xl xl:text-3xl mt-5 sm:mt-5 md:mt-6 lg:mt-7 xl:mt-8 leading-normal text-gray-600 font--nunito">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sequi temporibus aliquid maiores eius, ipsam, ducimus, itaque alias voluptas excepturi et cum eveniet quibusdam architecto.</p>

                    <button className="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold px-3 sm-px-3.5 md:px-4.5 lg:px-5 xl:px-6 py-1.5 sm:py-1.5 md:py-2 lg:py-3 xl:py-3.5 bg-theme-blue-600 w-max mt-10 sm:mt-10 md:mt-10 lg:mt-10 xl:mt-12 rounded text-gray-100 font-nunito cursor-pointer z-10">Find More</button>
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-5 xl:col-span-5 h-full flex justify-center items-center relative">
                    <img src="./images/WhatsApp_Image_2024-02-23_at_20.18 1.png" className="" alt="" />
                <img src="./images/WhatsApp_Image_2024-02-23_at_20.25 1.png" className="absolute w-2/6 aspect-square top-2/4 right-10" alt="" />
                </div>
            </div>
        </>
    )
}

export default Hero;