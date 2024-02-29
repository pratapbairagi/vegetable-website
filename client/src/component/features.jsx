

const Features = () => {
    return (
        <>
            <div className="w-full flex max-w-screen overflow-scroll scroll-overflow-hidden px-2 gap-x-6 sm:px-6 md:px-8 lg:px-8 xl:px-9 py-4 sm:py-6 md:py-7 lg:py-8 xl:py-10" style={{ background: "#F0FFF6" }}>
                
                <div className="min-w-32 sm:min-w-40 md:min-w-48 lg:min-w-52 xl:min-w-56 gap-x-2 sm:gap-x-2 md:gap-x-3 lg:gap-x-4 xl:gap-x-5 grid grid-cols-12">
                    <div className="col-span-4 sm:col-span-4 md:col-span-3 flex items-center">
                        <span className="block w-10 sm:w-12 md:w-14 lg:-w-16 xl:w-16 h-10 sm:h-12 md:h-14 lg:-h-16 xl:h-16  bg-theme-green-600 rounded"></span>
                    </div>
                    <div className="col-span-8 flex flex-col justify-center">
                        <h6 className="text-2xs sm:text-xs md:text-sm lg:text-base xl:text-xl font-bold text-theme-green-600">Fresh</h6>
                        <p className="text-3xs sm:text-3xs md:text-2xs lg:text-xs xl:text-sm mt-1 font-semibold text-gray-400 break-words" style={{lineHeight:"110%"}}>Order daily fresh vegetables</p>
                    </div>
                </div>

                <div className="min-w-32 sm:min-w-40 md:min-w-48 lg:min-w-52 xl:min-w-56 gap-x-2 sm:gap-x-2 md:gap-x-3 lg:gap-x-4 xl:gap-x-5 grid grid-cols-12">
                    <div className="col-span-4 sm:col-span-4 md:col-span-3 flex items-center">
                        <span className="block w-10 sm:w-12 md:w-14 lg:-w-16 xl:w-16 h-10 sm:h-12 md:h-14 lg:-h-16 xl:h-16  bg-theme-green-600 rounded"></span>
                    </div>
                    <div className="col-span-8 flex flex-col justify-center ">
                        <h6 className="text-2xs sm:text-xs md:text-sm lg:text-base xl:text-xl font-bold text-theme-green-600">Cash On delivery</h6>
                        <p className="text-3xs sm:text-3xs md:text-2xs lg:text-xs xl:text-sm mt-1 font-semibold text-gray-400 break-words" style={{lineHeight:"110%"}}>Order daily fresh vegetables</p>
                    </div>
                </div>

                <div className="min-w-32 sm:min-w-40 md:min-w-48 lg:min-w-52 xl:min-w-56 gap-x-2 sm:gap-x-2 md:gap-x-3 lg:gap-x-4 xl:gap-x-5 grid grid-cols-12">
                    <div className="col-span-4 sm:col-span-4 md:col-span-3 flex items-center">
                        <span className="block w-10 sm:w-12 md:w-14 lg:-w-16 xl:w-16 h-10 sm:h-12 md:h-14 lg:-h-16 xl:h-16  bg-theme-green-600 rounded"></span>
                    </div>
                    <div className="col-span-8 flex flex-col justify-center ">
                        <h6 className="text-2xs sm:text-xs md:text-sm lg:text-base xl:text-xl font-bold text-theme-green-600">Order New</h6>
                        <p className="text-3xs sm:text-3xs md:text-2xs lg:text-xs xl:text-sm mt-1 font-semibold text-gray-400 break-words" style={{lineHeight:"110%"}}>Order daily fresh vegetables</p>
                    </div>
                </div>

                <div className="min-w-32 sm:min-w-40 md:min-w-48 lg:min-w-52 xl:min-w-56 gap-x-2 sm:gap-x-2 md:gap-x-3 lg:gap-x-4 xl:gap-x-5 grid grid-cols-12">
                    <div className="col-span-4 sm:col-span-4 md:col-span-3 flex items-center">
                        <span className="block w-10 sm:w-12 md:w-14 lg:-w-16 xl:w-16 h-10 sm:h-12 md:h-14 lg:-h-16 xl:h-16  bg-theme-green-600 rounded"></span>
                    </div>
                    <div className="col-span-8 flex flex-col justify-center ">
                        <h6 className="text-2xs sm:text-xs md:text-sm lg:text-base xl:text-xl font-bold text-theme-green-600">Special Discount</h6>
                        <p className="text-3xs sm:text-3xs md:text-2xs lg:text-xs xl:text-sm mt-1 font-semibold text-gray-400 break-words" style={{lineHeight:"110%"}}>Order daily fresh vegetables</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Features;