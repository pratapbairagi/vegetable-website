import { NavLink } from "react-router-dom"
import Card1 from "./card1"
import { memo, useMemo } from "react"


const Most_selling_section = ({products}) => {
    const card1 = [
        {
            title : "Potato",
            price: 40,
            image: "./images/potato.png",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, esse?",
            ratings : 4,
            id: 1
        },
        {
            title : "Tomato",
            price: 30,
            image: "./images/tomato.png",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, esse?",
            ratings : 4,
            id:2
        },
        {
            title : "Onion",
            price: 50,
            image: "./images/onion.png",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, esse?",
            ratings : 4,
            id:3
        },
        {
            title : "Chillis",
            price: 60,
            image: "./images/chillis.png",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, esse?",
            ratings : 4,
            id:4
        }
    ].slice(0,4)

    const memoizedCard1 = useMemo(()=> products?.map((v,i)=> <Card1 key={i} title={v.title} id={v._id} price={v.price} images={v.images} description={v.description} ratings={v.ratings} seller={v.seller}/> ) ,[products])
    
    return (
        <>
            <div className="w-full h-max py-3 sm:py-5 md:py-6 lg:py-10 lg:pb-4 bg-white mt-2" >
                <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold font-nunito text-center text-theme-blue-600 ">Most Selling</h2>
                <div className="w-full max-w-full lg:overflow-x-auto scroll-overflow-hidden h-max grid lg:flex grid-cols-12 gap-y-3 mt-6 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12">
                   
                   {memoizedCard1}
                    
                </div>
                <div className="w-full col-span-12 flex justify-end mt-4 sm:mt-5 md:mt-5 lg:mt-6 xl:mt-7 px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6">
                     <NavLink to={`/products`} state={{productsType : "sold", other : -1}} className="text-sm md:text-base lg:text-lg text-theme-blue-600 font-semibold h-7 ">See More</NavLink>
                </div>
            </div>
        </>
    )
}

export default memo(Most_selling_section);