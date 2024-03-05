import { useParams } from "react-router-dom"


const Product_details = () => {
    const { id } = useParams();
    console.log(id)
    return (
        <div className="w-full min-h-full grid grid-cols-12 pb-10">
            <div className="col-span-12 grid-cols-12 grid grid-cols-12 gap-y-2">

                <img src="/images/potato.png" className="col-span-12 w-full" alt="" />

                <ul className="col-span-12 flex max-h-full overflow-x-auto scroll-overflow-hidden px-2 gap-x-2">
                    <li className="bg-gray-100 border-2 border-gray-300">
                        <img src="/images/potato.png" className="w-20 min-w-20" alt="" />
                    </li>
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
                    </li >
                    <li className="bg-gray-100">
                        <img src="/images/potato.png" className="w-20 min-w-20" alt="" />
                    </li >
                </ul>

            </div>
            {/* <div className="col-span-12 px-2 mt-5 ">
                <h5 className="text-sm font-bold font-nunito text-gray-400">Fresh, Hebrid</h5>
            </div> */}

            {/* <div className="col-span-12 flex justify-end items-center px-2 gap-x-1.5 mt-2">
                <span className="w-full h-px bg-white border-t border-gray-500 border-dashed"></span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} className="w-6 fill-theme-blue-600 stroke-theme-blue-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} className="w-6 fill-theme-blue-600 stroke-theme-blue-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} className="w-6 fill-theme-blue-600 stroke-theme-blue-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} className="w-6 fill-theme-blue-600 stroke-theme-blue-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} className="w-6 fill-white stroke-theme-blue-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
            </div> */}

            <div className="col-span-12 px-2 mt-7 flex items-center">
                <h5 className="text-sm font-bold font-nunito text-gray-400">Potato</h5>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} className="w-4 fill-yellow-600 ml-4 mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>
                <span className="text-gray-400 text-xs">(4.4)</span>

                <button className="bg-theme-blue-600 p-1 rounded-full ml-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} className="w-6 stroke-gray-100">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                    </svg>
                </button>
                <span className="px-3 text-xl text-gray-600">1</span>
                <button className="bg-theme-blue-600 p-1 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} className="w-6 stroke-gray-100">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </button>

                {/* <h5 className="text-sm font-bold font-nunito text-gray-400">Fresh, Hebrid</h5> */}
            </div>
            <div className="col-span-12 px-2 mt-2 flex items-center gap-x-3">
                {/* <h5 className="text-2xl font-bold font-nunito text-gray-500">Potato</h5> */}
                <h5 className="text-2xl font-bold font-nunito text-gray-600">Fresh, Hebrid Tomato</h5>
            </div>


            {/* <div className="col-span-5 flex items-center justify-start pl-2  mt-6">
                <button className="bg-theme-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} className="w-6 stroke-gray-100">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                    </svg>
                </button>
                <span className="px-4 text-2xl text-gray-600">1</span>
                <button className="bg-theme-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} className="w-6 stroke-gray-100">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </button>
            </div> */}


            {/* <div className="col-span-12 flex px-2 items-center gap-x-2 mt-7">
                <span className="w-8/12 h-px bg-white border-t border-theme-blue-600"></span>

                <button className="bg-theme-blue-600 p-1 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} className="w-6 stroke-gray-100">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                    </svg>
                </button>
                <span className="px-3 text-xl text-gray-600">1</span>
                <button className="bg-theme-blue-600 p-1 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} className="w-6 stroke-gray-100">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </button>
            </div> */}
            <div className="col-span-7 flex justify-start px-2 mt-4">
                <h4 className="text-3xl font-extrabold text-theme-blue-600 font-nunito">50/KG</h4>
            </div>
            <div className="col-span-12 flex gap-x-2 items-center px-2 mt-3">
                <span className="text-theme-green-600 font-bold text-sm bg-green-200 px-4 py-1 rounded">Available</span>
                <span className="text-sm font-bold text-gray-400">14kg</span>
            </div>
            <div className="col-span-11 w-full ml-3 flex justify-center border-b border-t border-theme-blue-600 mt-5 py-2">
                <fieldset className=" w-11/12 flex border rounded-full p-1">
                    <button className="h-9 w-14 bg-theme-blue-600 px-2 flex items-center justify-center rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} className="w-6 h-6 stroke-gray-100">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>
                    <input className="rouded-full h-9 w-10/12 w-full px-2 text-sm font-nunito text-gray-500 outline-none text-center" placeholder="Availity by picode" type="text" />
                </fieldset>
            </div>
            <div className="col-span-12 flex items-center px-3 mt-5 justify-between">
                <span className="text-base font-bold text-theme-green-600 font-nunito">Free Delivery by tomorrow</span>
                <span className="text-xs font-bold text-gray-400 font-nunito underline">Want fast delivery ?</span>
            </div>

            <div className="col-span-12 flex flex-col items-start gap-y-3 px-3 mt-8 justify-between">
                <h6 className="text-xl font-nunito text-gray-600 font-bold">Description</h6>
                <p className="text-sm text-gray-400" style={{lineHeight:"160%"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda similique incidunt illum quam officia hic ut ad, optio, voluptatem quas repellat repellendus qui laboriosam exercitationem dignissimos nihil.</p>
            </div>
        </div>
    )
}

export default Product_details