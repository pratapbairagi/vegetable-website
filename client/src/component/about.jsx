

const About = () => {
    return (
        <>
            <div className="w-full h-max grid grid-cols-12 relative bg-white">
               
                <div className=" order-1 sm:order-1 md:order-2 col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6 h-max md:h-full py-10 relative z-10 flex flex-col">
                    <img src="./images/DeWatermark.ai_1726333170834.png" className="absolute z-0 w-full h-full bottom-0 opacity-20 object-cover" style={{objectPosition:"left 20% bottom 30%"}} alt="" />
                    <h3 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold font-nunito text-theme-blue-600 w-full text-center">Our Services</h3>
                    <ul className="flex flex-col px-4 mt-4 sm:mt-4 md:mt-6 lg:mt-8 xl:mt-10 gap-y-3 sm:gap-y-3.5 md:gap-y-4 lg:gap-y-5 xl:gap-y-6">
                         
                        <li className=" text-start text-sm text-gray-400 sm:text-sm md:text:base lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quidem pariatur tempore laboriosam veniam animi!</li>
                        <li className=" text-end text-sm text-gray-400 sm:text-sm md:text:base lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quidem pariatur tempore laboriosam veniam animi!</li>
                        <li className=" text-start text-sm text-gray-400 sm:text-sm md:text:base lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quidem pariatur tempore laboriosam veniam animi!</li>
                    
                    </ul>
                </div>

                <div className="col-span-12 order-2 sm:order-2 md:order-1 sm:col-span-12 md:col-span-6 h-max">
                    <img src="./images/Frame 425.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default About;