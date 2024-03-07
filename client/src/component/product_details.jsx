import { useParams } from "react-router-dom"
import Card4 from "./card4";
import Review_card from "./review_card";


const Product_details = () => {
    const { id } = useParams();
    console.log(id)
    return (
        <div className="w-full min-h-full grid grid-cols-12 pb-10 lg:max-w-80% mx-auto">
            <div className="col-span-12 md:col-span-8 grid-cols-12 grid grid-cols-12 gap-y-2 order-1 lg:max-h-70vh">

                <img src="/images/potato.png" className="col-span-12 w-full object-contain lg:max-h-80vh bg-gray-100" alt="" />

                <ul className="col-span-12  flex md:hidden max-h-full overflow-x-auto scroll-overflow-hidden px-2 gap-x-2">
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


            <div className="col-span-12 md:col-span-4 px-2 mt-7 flex items-center md:items-start justify-start content-start  order-2 flex-wrap md:order-2">

                <div className="w-full flex flex-wrap items-center justify-start">
                    <h5 className="text-base md:text-xl lg:text-2xl font-bold font-nunito text-gray-400">Potato</h5>
                    <div className="flex">

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} className="w-4 md:5 lg:w-6 fill-yellow-600 ml-4 mr-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                        <span className="text-gray-400 text-xs md:text-sm lg:text-base">(4.4)</span>
                    </div>

                    <div className="flex md:hidden ml-auto ">
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
                    </div>

                </div>
                <h5 className="text-2xl md:text-3xl lg:text-4xl md:mt-0.5 lg:mt-1 font-bold font-nunito text-gray-600 block hidden md:block">Fresh, Hebrid Tomato</h5>
                <h4 className="text-3xl md:text-4xl lg:text-5xl md:mt-3.5 lg:mt-5 font-extrabold text-theme-blue-600 font-nunito hidden md:block w-full md:mb-16">50/KG</h4>

                <div className="w-full hidden md:flex justify-start flex">
                    <button className="bg-theme-blue-600 p-1 md:py-1.5 md:px-4 lg:px-4 rounded-full md:rounded-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} className="w-6 md:w-7 stroke-gray-100">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                        </svg>
                    </button>
                    <span className="px-3 md:px-4 text-xl md:text-2xl lg:text-3xl text-gray-600 flex items-center">1</span>
                    <button className="bg-theme-blue-600 p-1 md:px-4 lg:px-4 rounded-full md:rounded-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} className="w-6 md:w-7 stroke-gray-100">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </button>
                </div>

                <div className="col-span-12 hidden md:flex gap-x-2 items-center px-1.5 mt-3 md:mt-5 w-full ">
                    <span className="text-theme-green-600 font-bold text-sm bg-green-200 px-4 py-1 rounded">Available</span>
                    <span className="text-sm font-bold text-gray-400">14kg</span>
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

                <ul className="col-span-12  hidden md:flex max-h-full overflow-x-auto scroll-overflow-hidden px-2 gap-x-2 md:mt-6">
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
            <div className="col-span-12 px-2 mt-1 sm:mt-1.5 flex items-center gap-x-3 order-4">
                <h5 className="text-2xl font-bold font-nunito text-gray-600 block block md:hidden">Fresh, Hebrid Tomato</h5>
            </div>



            <div className="col-span-12 flex justify-start px-2 mt-5 sm:mt-6 order-5">
                <h4 className="text-3xl font-extrabold text-theme-blue-600 font-nunito block md:hidden">50/KG</h4>
            </div>
            <div className="col-span-12 flex md:hidden gap-x-2 items-center px-2 mt-3 order-6">
                <span className="text-theme-green-600 font-bold text-sm bg-green-200 px-4 py-1 rounded">Available</span>
                <span className="text-sm font-bold text-gray-400">14kg</span>
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
                <p className="text-sm md:text-base lg:text-2xl text-gray-400 md:mt-2 lg:mt-3" style={{ lineHeight: "160%" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda similique incidunt illum quam officia hic ut ad, optio, voluptatem quas repellat repellendus qui laboriosam exercitationem dignissimos nihil.</p>
            </div>

            <div className="col-span-12 px-3 flex hap-x-2 order-10 mt-5 md:mt-7 lg:mt-9">
                <ul className="flex flex-wrap gap-x-2 gap-y-2">
                    <li><button className=" px-2 py-1 text-sm md:text-base xl:text-xl text-green-600 font-bold font-nunito bg-green-100"># potato</button></li>
                    <li><button className=" px-2 py-1 text-sm md:text-base xl:text-xl text-green-600 font-bold font-nunito bg-green-100"># hybrid</button></li>
                    <li><button className=" px-2 py-1 text-sm md:text-base xl:text-xl text-green-600 font-bold font-nunito bg-green-100"># fresh</button></li>
                    <li><button className=" px-2 py-1 text-sm md:text-base xl:text-xl text-green-600 font-bold font-nunito bg-green-100"># off</button></li>

                </ul>
            </div>

            <div className="col-span-12 order-11 flex flex-col px-3 md:px-4 lg:px-5 xl:px-6 mt-5 md:mt-6 lg:mt-7 py-6" style={{background:"#FFF4E7"}}>
                <h6 className="text-base md:text-xl lg:text-2xl font-bold font-nunito text-gray-600">Related Vegetables</h6>
                <ul className="flex max-w-full overflow-x-auto pt-6 md:pt-8 lg:pt-10 gap-x-3 md:gap-x-4 lg:gap-x-5 scroll-overflow-hidden">
                    <Card4 />
                    <Card4 />
                    <Card4 />
                    <Card4 />
                </ul>
                <div className="w-full flex justify-end mt-3">
                    <button className="text-sm text-theme-blue-600 font-semibold h-7">See More</button>
                </div>
            </div>

            <div className="col-span-12 order-11 flex flex-col px-3 md:px-4 lg:px-5 xl:px-6 mt-5 md:mt-6 lg:mt-7 py-6 " style={{ background: "#F8F7FF" }}>
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
                    <Review_card/>
                    <Review_card/>
                    <Review_card/>
                </ul>
            </div>
        </div>
    )
}

export default Product_details