import { memo } from "react"
import { NavLink } from "react-router-dom"


const Card2 = ({title, price, image, ratings, description, id}) => {
    return (
        <div className="flex flex-col col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-4 xl:col-span-4 min-h-30 h-max p-2 sm:p-2 md:p-3 lg:p-4 xl:p-5 border-r">
            <div className="w-full h-36 sm:h-36 md:h-48 lg:h-60 xl:h-72 flex items-center justify-center relative ">
                
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 sm:w-6 md:w-8 lg:w-10 xl:w-10 h-6 sm:h-6 md:h-8 lg:h-10 xl:h-10 absolute top-3 sm:top-3 md:top-4 lg:top-5 xl:top-6 right-3 sm:right-3 md:right-4 lg:right-5 xl:right-6 fill-gray-100 bg-green-600 p-0.5 sm:p-0.5 md:p-1 lg:p-1 xl:p-1.5 rounded-sm hover:fill-green-400">
                    <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                </svg>

                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 sm:w-6 md:w-8 lg:w-10 xl:w-10 h-6 sm:h-6 md:h-8 lg:h-10 xl:h-10 absolute top-12 sm:top-12 md:top-16 lg:top-20 xl:top-24 right-3 sm:right-3 md:right-4 lg:right-5 xl:right-6 fill-theme-green-600 hover:fill-green-400">
                    <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                </svg> */}
                <img src={image} className=" h-full w-full object-contain" alt="" />
            </div>
            <div className="w-full h-8 sm:h-9 md:h-10 lg:h-12 xl:h-14 flex items-center justify-between px-2 bg-gray-100">
                <NavLink to={`/vegetable/${id}`} className=" text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-extrabold font-nunito text-theme-blue-600">{title}</NavLink>
                <h6 className="text-base sm:text-base md:text-xl lg:text-2xl xl:text-2xl font-bold text-theme-green-600 h-max">₹ {price}/KG</h6>
            </div>
        </div>
    )
}

export default memo(Card2)