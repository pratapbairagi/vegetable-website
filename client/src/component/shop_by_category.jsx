import Card2 from "./card2"
import Pagination from "./pagination"


const Shop_by_category = () => {
    const card2 = [
        {
            title: "Cucumber",
            price: 40,
            image: "./images/cucumber.png",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, esse?",
            ratings: 4,
            id: 1,
            category: "salad's veg"
        },
        {
            title: "Carrot",
            price: 30,
            image: "./images/carrot.png",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, esse?",
            ratings: 4,
            id: 2,
            category: "salad's veg"
        },
        {
            title: "Onion",
            price: 50,
            image: "./images/onion.png",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, esse?",
            ratings: 4,
            id: 3,
            category: "salad's veg"
        },
        // {
        //     title : "Tomato",
        //     price: 60,
        //     image: "./images/tomato.png",
        //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, esse?",
        //     ratings : 4,
        //     id:4,
        //     category : "salad's veg"
        // },
        {
            title: "Radish",
            price: 60,
            image: "./images/radish.png",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, esse?",
            ratings: 4,
            id: 4,
            category: "salad's veg"
        }
    ]
    return (
        <>
            <div className="w-full h-max py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16">
                <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold font-nunito text-center text-theme-blue-600 ">Shop By Category</h2>

                <div className="w-full h-max grid grid-cols-12 gap-y-3 mt-6 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12">
                    <div className="col-span-12 sm:col-span-12 md:col-span-3 lg:col-span-3 xl:col-span-3 h-full min-h-20 md:border-r">
                        <ul className="flex flex-row sm:flex-row md:flex-col lg:flex-col xl:flex-col h-full items-center sm:items-center md:items-start lg:items-start xl:items-start gap-x-1 max-w-screen overflow-auto px-2 scroll-overflow-hidden">
                            <h5 className="hidden sm:hidden md:block w-full text-center text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-theme-blue-600 font-nunito font-extrabold md:mt-5 lg:mt-6 xl:mt-8 md:mb-5 lg:mb-6 xl:mb-8">Category</h5>
                            <li className=" h-max w-max sm:w-max md:w-full border-b border-green-800 md:border-b md:border-gray-300 md:bg-gray-100">
                                <button className="text-base sm:text-base md:text-xl lg:text-2xl xl:text-2xl px-3 py-1.5 sm:py-1.5 md:py-2 lg:py-2.5 xl:py-3 text-gray-400 font-bold font-nunito w-max sm:w-max md:w-full text-start">Spinach</button>
                            </li>
                            <li className=" h-max w-max sm:w-max md:w-full md:border-b border-gray-300 hover:border-b md:hover:bg-gray-100">
                                <button className="text-base sm:text-base md:text-xl lg:text-2xl xl:text-2xl px-3 py-1.5 sm:py-1.5 md:py-2 lg:py-2.5 xl:py-3 text-gray-400 font-bold font-nunito w-max sm:w-max md:w-full text-start">flowers</button>
                            </li>
                            <li className=" h-max w-max sm:w-max md:w-full md:border-b border-gray-300 hover:border-b md:hover:bg-gray-100">
                                <button className="text-base sm:text-base md:text-xl lg:text-2xl xl:text-2xl px-3 py-1.5 sm:py-1.5 md:py-2 lg:py-2.5 xl:py-3 text-gray-400 font-bold font-nunito w-max sm:w-max md:w-full text-start">Chillis</button>
                            </li>
                            <li className=" h-max w-max sm:w-max md:w-full md:border-b border-gray-300 hover:border-b md:hover:bg-gray-100">
                                <button className="text-base sm:text-base md:text-xl lg:text-2xl xl:text-2xl px-3 py-1.5 sm:py-1.5 md:py-2 lg:py-2.5 xl:py-3 text-gray-400 font-bold font-nunito whitespace-nowrap w-max sm:w-max md:w-full text-start">Salad's Veg</button>
                            </li>
                            <li className=" h-max w-max sm:w-max md:w-full md:border-b border-gray-300 hover:border-b md:hover:bg-gray-100">
                                <button className="text-base sm:text-base md:text-xl lg:text-2xl xl:text-2xl px-3 py-1.5 sm:py-1.5 md:py-2 lg:py-2.5 xl:py-3 text-gray-400 font-bold font-nunito w-max sm:w-max md:w-full text-start">Other</button>
                            </li>
                            <img src="./images/veg_category.png" className="w-full hidden md:block mt-6" alt="" />
                        </ul>
                    </div>
                    <div className="col-span-12 sm:col-span-12 md:col-span-9 lg:col-span-9 xl:col-span-9 grid grid-cols-12 min-h-96 h-max gap-y-6 relative">
                        <img src="./images/shop_by_cat_background.png" className="absolute h-full object-contain bottom-0 right-0 opacity-10 z-0" alt="" />
                        {card2.map((v, i) => {
                            return <Card2 key={v.id} title={v.title} price={v.price} image={v.image} description={v.description} ratings={v.ratings} />
                        })}

                    <Pagination/>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Shop_by_category