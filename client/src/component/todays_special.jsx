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
            feature : "off"
        },
        {
            title: "Chillis",
            price: 30,
            image: "./images/chillis.png",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, esse?",
            ratings: 4,
            id: 2,
            feature : "off"
        },
        {
            title: "Tomato",
            price: 50,
            image: "./images/tomato.png",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, esse?",
            ratings: 4,
            id: 3,
            feature : "fresh"
        },
        {
            title : "Coriandar",
            price: 60,
            image: "./images/coriandar.png",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, esse?",
            ratings : 4,
            id:4,
            feature : "off"
        },
        {
            title: "Lemon",
            price: 60,
            image: "./images/lomon.png",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, esse?",
            ratings: 5,
            id: 4,
            feature : "fresh"
        }
    ]
    return (
        <>
            <div className="w-full h-max py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16">
                <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold font-nunito text-center text-theme-blue-600 mb-6 sm:mb-6 md:mb-8 lg:mb-8 xl:mb-10">Today's Special</h2>

                <div className="w-full flex flex-col min-h-40vh gap-y-10">
                    
                    <div className="w-full grid grid-cols-12 min-h-40vh px-2">

                        <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-5 xl:col-span-4 flex items-center relative rounded">
                            <h4 className="absolute right-2 top-12 text-xl sm:text-3xl md:text-5xl lg:text-2xl xl:text-2xl whitespace-wrap font-extrabold font-nunito text-theme-green-600 " style={{ minWidth: "44%", lineHeight: "170%" }}>Today's Fresh <br /><span className="text-3xl sm:text-5xl md:text-7xl lg:text-3xl xl:text-4xl">Vegetables</span> </h4>
                            {/* <img src="./images/fresh_veg_bg_img.png" className="w-10/12 h-5/6" alt="" /> */}
                            <img src="./images/fresh_veg_bg_img.png" className="w-auto h-full max-h-64 sm:max-h-80 lg:max-h-80" alt="" />
                        
                        </div>

                        <div className=" col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-7 xl:col-span-8 gap-x-2 flex max-w-screen overflow-auto gap-y-4 py-6 pb-2 scroll-overflow-hidden">
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
                    </div>

                    
                    <div className="w-full grid grid-cols-12 min-h-40vh px-2 rounded">

                        <div className="order-1 sm:order-1 md:order-1 lg:order-2 xl:order-2 col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-5 xl:col-span-4 flex items-center relative">
                        <h4 className="absolute left-8 md:left-14 bottom-8 md:bottom-20 xl:bottom-20 text-xl sm:text-5xl md:text-5xl lg:text-2xl xl:text-2xl whitespace-wrap font-extrabold font-nunito text-theme-green-600 " style={{minWidth:"44%", lineHeight:"170%"}}>Today's Off On <br /><span className="text-3xl sm:text-6xl md:text-7xl lg:text-3xl xl:text-4xl">Vegetables</span> </h4>
                            <img src="./images/todays_deal_bg_img.png" className="w-auto h-full max-h-64 sm:max-h-80 lg:max-h-80 ml-auto" alt="" />
                        </div>

                        <div className=" order-2 sm:order-2 md:order-2 lg:order-1 xl:order-1 col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-7 xl:col-span-8 gap-x-2 flex max-w-screen overflow-auto gap-y-4 py-6 pb-2 scroll-overflow-hidden">
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

                    </div>

                </div>

            </div>
        </>
    )
}

export default Todays_special