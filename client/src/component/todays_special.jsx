import { useDispatch, useSelector } from "react-redux"
import Card3 from "./card3"


const Todays_special = () => {
    const card3 = [
        {
            title: "Brinjal",
            price: 40,
            image: "./images/brinjal.png",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, esse?",
            ratings: 4,
            id: 1,
            feature: "off"
        },
        {
            title: "Chillis",
            price: 30,
            image: "./images/chillis.png",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, esse?",
            ratings: 4,
            id: 2,
            feature: "off"
        },
        {
            title: "Tomato",
            price: 50,
            image: "./images/tomato.png",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, esse?",
            ratings: 4,
            id: 3,
            feature: "fresh"
        },
        {
            title: "Coriandar",
            price: 60,
            image: "./images/coriandar.png",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, esse?",
            ratings: 4,
            id: 4,
            feature: "off"
        },
        {
            title: "Lemon",
            price: 60,
            image: "./images/lomon.png",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, esse?",
            ratings: 5,
            id: 4,
            feature: "fresh"
        }
    ]

    const dispatch = useDispatch()
    const products = useSelector(state => state.product)
    return (
        <>
            <div className="w-full h-max py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 lg:pb-6 xl:pb-8 mt-2 bg-white">
                <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold font-nunito text-center text-theme-blue-600 mb-6 sm:mb-6 md:mb-8 lg:mb-8 xl:mb-10">Today's Special</h2>

                <div className="w-full flex flex-col min-h-40vh gap-y-10">
                    {products.features.map((v, i) => {
                        // console.log(v)
                        return v.feature != "" && <> <div key={i} className="w-full grid grid-cols-12 lg:min-h-40vh px-2">

                            {
                                v.feature == "fresh" && <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 flex max-w-full overflow-x-auto scroll-overflow-hidden items-center relative rounded min-h-40 lg:min-h-80 gap-x-2 lg:gap-x-6">

                                    <div className="w-full min-w-full lg:min-w-40% lg:w-5/12 xl:w-4/12 h-full bg-gray-100 flex relative">
                                        <img src="./images/fresh_veg_bg_img.png" className="w-auto h-full max-h-64 sm:max-h-80 lg:max-h-80" alt="" />
                                        <h4 className="absolute right-2 top-12 text-xl sm:text-3xl md:text-5xl lg:text-2xl xl:text-2xl whitespace-wrap font-extrabold font-nunito text-theme-green-600 " style={{ minWidth: "44%", lineHeight: "170%" }}>Today's Fresh <br /><span className="text-3xl sm:text-5xl md:text-7xl lg:text-3xl xl:text-4xl">Vegetables</span> </h4>

                                    </div>
                                    <div className="w-full flex justify-end min-w-full lg:min-w-60% lg:w-7/12 xl:w-8/12 h-full bg-red-200">
                                        <img src="./images/fresh_veg_group_bg.png" className="object-cover h-full" alt="" />
                                    </div>
                                </div>
                            }

                            {
                                v.feature == "discount" && <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 max-w-full overflow-x-auto scroll-overflow-hidden flex items-center relative rounded min-h-40 lg:min-h-80 gap-x-2 lg:gap-x-6">

                                    <div className="w-full min-w-full lg:min-w-60% h-full bg-red-200 flex relative">
                                        <img src="./images/half_circle_bg.png" className=" " alt="" />
                                        <div></div>
                                    </div>
                                    <div className="w-full flex min-w-full lg:min-w-40% h-full bg-gray-100 relative">
                                        <h4 className="absolute left-8 md:left-14 bottom-8 md:bottom-20 xl:bottom-20 text-xl sm:text-5xl md:text-5xl lg:text-2xl xl:text-2xl whitespace-wrap font-extrabold font-nunito text-theme-green-600 " style={{ minWidth: "44%", lineHeight: "170%" }}>Today's Off On <br /><span className="text-3xl sm:text-6xl md:text-7xl lg:text-3xl xl:text-4xl">Vegetables</span> </h4>
                                        <img src="./images/todays_deal_bg_img.png" className="w-auto h-full max-h-64 sm:max-h-80 lg:max-h-80 ml-auto" alt="" />

                                    </div>
                                </div>
                            }



                            <div className=" col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-12 gap-x-2 flex max-w-screen overflow-auto gap-y-4 py-6 pb-2 scroll-overflow-hidden mt-4">
                                {v.products.map((vv, ii) => {
                                    return <Card3 key={ii} product={vv} style={{ backgroundColor: "#F0FFF6" }} />
                                })}
                                {/* <Card3 style={{ backgroundColor: "#F6F0FF" }} />
                                <Card3 style={{ backgroundColor: "#FFF9F0" }} />
                                <Card3 style={{ backgroundColor: "#F0FFF6" }} />
                                <Card3 style={{ backgroundColor: "#F6F0FF" }} />
                                <Card3 style={{ backgroundColor: "#FFF9F0" }} />
                                <Card3 style={{ backgroundColor: "#F0FFF6" }} /> */}
                            </div>
                            <div className="w-full order-3 col-span-12 flex justify-end mt-1 md:mt-2 lg:mt-3 px-1.5 sm:px-2 md:px-2.5 lg:px-3 xl:px-4">
                                <button className="text-sm md:text-base lg:text-lg text-theme-blue-600 font-semibold h-7">See More</button>
                            </div>
                        </div>
                            <div className="h-2 w-full col-span-12" style={{background:"rgb(248, 248, 248)"}}></div>
                            </>
                    })}


                    {/* <div className="w-full grid grid-cols-12 min-h-40vh px-2 rounded">

                        <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 max-w-full overflow-x-auto scroll-overflow-hidden flex items-center relative rounded min-h-40 lg:min-h-80 gap-x-2 lg:gap-x-6">

                            <div className="w-full min-w-full lg:min-w-60% h-full bg-red-200 flex relative">
                                <img src="./images/half_circle_bg.png" className="w-3/6 " alt="" />
                                <div></div>
                            </div>
                            <div className="w-full flex min-w-full lg:min-w-40% h-full bg-gray-100 relative">
                                <h4 className="absolute left-8 md:left-14 bottom-8 md:bottom-20 xl:bottom-20 text-xl sm:text-5xl md:text-5xl lg:text-2xl xl:text-2xl whitespace-wrap font-extrabold font-nunito text-theme-green-600 " style={{ minWidth: "44%", lineHeight: "170%" }}>Today's Off On <br /><span className="text-3xl sm:text-6xl md:text-7xl lg:text-3xl xl:text-4xl">Vegetables</span> </h4>
                                <img src="./images/todays_deal_bg_img.png" className="w-auto h-full max-h-64 sm:max-h-80 lg:max-h-80 ml-auto" alt="" />

                            </div>
                        </div>

                        <div className="w-full flex lg:w-7/12 xl:w-8/12 h-full bg-red-200"></div>

                        <div className=" order-2 sm:order-2 md:order-2 lg:order-1 xl:order-1 col-span-12 sm:col-span-12 md:col-span-12 gap-x-2 flex max-w-screen overflow-auto gap-y-4 py-6 pb-2 scroll-overflow-hidden">
                            <Card3 style={{ backgroundColor: "#F0FFF6" }} />
                            <Card3 style={{ backgroundColor: "#F6F0FF" }} />
                            <Card3 style={{ backgroundColor: "#FFF9F0" }} />
                            <Card3 style={{ backgroundColor: "#F0FFF6" }} />
                            <Card3 style={{ backgroundColor: "#F6F0FF" }} />
                            <Card3 style={{ backgroundColor: "#FFF9F0" }} />
                            <Card3 style={{ backgroundColor: "#F0FFF6" }} />
                        </div>
                        <div className="w-full order-3 col-span-12 flex justify-end mt-1 md:mt-2 lg:mt-3 px-1.5 sm:px-2 md:px-2.5 lg:px-3 xl:px-4">
                            <button className="text-sm md:text-base lg:text-lg text-theme-blue-600 font-semibold h-7">See More</button>
                        </div>

                    </div> */}

                </div>

            </div>
        </>
    )
}

export default Todays_special