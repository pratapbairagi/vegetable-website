import Pagination from "./pagination"



const DashboardOrders = () => {
    return (
        <div className="w-max max-w-max h-max min-h-screen max-w-screen flex flex-col md:mb-0">
            <h6 className=" w-max text-base md:text-xl lg:text-lg xl:text-xl font-bold text-gray-600 mt-2 md:mt-2 lg:mt-3 xl:mt-3">Orders Overview</h6>
            <div className="w-screen min-w-screen max-w-screen overflow-x-auto max-w-screen flex mt-3 gap-x-2 sm:gap-x-3 md:gap-x-5 lg:gap-x-6 xl:gap-x-7 px-1 scroll-overflow-hidden">
                <div className="flex flex-col justify-center items-center px-8 md:px-9 lg:px-10 xl:px-12 py-4 md:py-5 lg:py-6 xl:py-7 gap-y-0.5 lg:gap-y-1 xl:gap-y-1 bg-white">
                    <span className="text-xl md:text-2xl text-gray-600 font-extrabold">3576</span>
                    <span className="text-xs md:text-sm text-gray-400 font-bold whitespace-nowrap font-nunito">Total Orders</span>
                </div>

                <div className="flex flex-col justify-center items-center px-8 md:px-9 lg:px-10 xl:px-12 py-4 md:py-5 lg:py-6 xl:py-7 gap-y-0.5 lg:gap-y-1 xl:gap-y-1 bg-white">
                    <span className="text-xl md:text-2xl text-gray-600 font-extrabold">76</span>
                    <span className="text-xs md:text-sm text-gray-400 font-bold whitespace-nowrap font-nunito">Pending Orders</span>
                </div>

                <div className="flex flex-col justify-center items-center px-8 md:px-9 lg:px-10 xl:px-12 py-4 md:py-5 lg:py-6 xl:py-7 gap-y-0.5 lg:gap-y-1 xl:gap-y-1 bg-white">
                    <span className="text-xl md:text-2xl text-gray-600 font-extrabold">176</span>
                    <span className="text-xs md:text-sm text-gray-400 font-bold whitespace-nowrap font-nunito">Request Orders</span>
                </div>

                <div className="flex flex-col justify-center items-center px-8 md:px-9 lg:px-10 xl:px-12 py-4 md:py-5 lg:py-6 xl:py-7 gap-y-0.5 lg:gap-y-1 xl:gap-y-1 bg-white">
                    <span className="text-xl md:text-2xl text-gray-600 font-extrabold">3376</span>
                    <span className="text-xs md:text-sm text-gray-400 font-bold whitespace-nowrap font-nunito">Complete Orders</span>
                </div>
            </div>

            <h6 className=" w-max text-base md:text-xl lg:text-lg xl:text-xl font-bold text-gray-600 mt-3 md:mt-4 lg:mt-5 xl:mt-6">Orders List</h6>
            <div className=" w-full text-base md:text-xl lg:text-lg xl:text-xl font-bold text-gray-600 flex bg-white py-2 px-2 md:px-4 md:py-3">
                <fieldset className=" h-8 sm:h-8 md:h-10 lg:h-10 xl:h-12 w-2/4 sm:w-2/4 md:w-3/4 lg:w-1/4  sm-left-125 md:left-0 z-10 rounded left-0 relative" >
                    <input className="block w-full h-full px-6 rounded text-sm bg-gray-100" type="text" placeholder="Search for..." name="" id="" />
                    <button className="absolute top-0 right-0 h-full text-white grid place-items-center w-12 sm:w-12 md:w-12 lg:w-16 xl:w-16">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="size-7 sm:size-7 md:size-7 lg:size-8 xl:size-8 stroke-theme-blue-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>
                </fieldset>


            </div>

            <div className="w-screen max-w-screen overflow-x-auto mt-2 sm:mt-3 md:mt-3 lg:mt-4 xl:mt-4 scroll-overflow-hidden max-h-40vh">
                <table className="w-max lg:w-dvw overflow-x-auto min-w-screen  max-h-50vh divide-y divide-gray-200 ">
                    <thead className="sticky top-0  bg-white w-max">
                        <tr className="flex gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-10 xl:gap-x-14">
                            <th className="px-2 w-28 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ORDER ID</th>
                            <th className="px-2 w-28 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                            <th className="px-2 py-3 w-40 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
                            <th className="px-2 py-3 flex gap-x-2 w-24 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Date
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                            </th>
                            <th className="px-2 py-3 flex gap-x-2 w-24 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Price
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                            </th>
                            <th className="px-2 py-3 flex gap-x-2 w-24 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </th>
                            <th className="px-2 py-3 w-24 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                            {/* Add more header columns as needed */}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 h-36 max-h-36 w-max">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((v, i) => {
                            return <tr key={i} className="flex gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-10 xl:gap-x-14">
                                <td className="px-2 w-28 py-4 whitespace-nowrap text-2xs sm:text-xs md:text-sm text-gray-600">1jfujcydycghcuu</td>
                                <td className="px-2 w-28 py-4 whitespace-nowrap text-2xs sm:text-xs md:text-sm text-gray-600">John Doe</td>
                                <td className="px-2 w-40 py-4 whitespace-wrap text-2xs sm:text-xs md:text-sm text-gray-600">H No. 233/A, South Delhi, Delhi - 110019</td>
                                <td className="px-2 w-24 py-4 whitespace-wrap text-2xs sm:text-xs md:text-sm text-gray-600">19/04/2024</td>
                                <td className="px-2 w-24 py-4 whitespace-wrap text-2xs sm:text-xs md:text-sm text-gray-600">5436.65</td>
                                <td className="px-2 w-24 py-4 whitespace-wrap text-2xs sm:text-xs md:text-sm text-gray-600">Pending</td>
                                <td className="px-2 w-24 py-4 whitespace-nowrap flex items-center gap-x-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
            <Pagination />
        </div>
    )
}

export default DashboardOrders