import { useState } from "react";



const Hero = () => {
    let [activeBanner, setActivebanner] = useState([
        { name : "chicken", index : 0, active : true, image : "./images/DeWatermark.ai_1726331472075.png", description : "", redirect : "" },
        { name : "fish", index : 1, active : false, image : "./images/carousel-2.jpg", description : "", redirect : "" }
    ])
    return (
        <div className="w-full max-w-[100%] overflow-x-auto relative">
       
             {/* <div className="pb-4 md:pt-[7vh] lg:pt-[9vh] h-90vh sm:h-90vh md:h-50vh lg:min-h-[70vh] xl:min-h-[90vh]  w-full relative z-0 grid grid-cols-12 relative bg-white" style={{backgroundImage:"url('./images/chicken_banner4.jpg')", backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundPosition:"center"}} > */}
            {activeBanner.map((v,i)=>{ 
            return <div key={i} className={`pb-4 md:pt-[7vh] lg:pt-[9vh] md:h-50vh min-h-[40vh] lg:min-h-[70vh] w-full grid grid-cols-12 relative min-w-[100%] ${v.active ? "block" : "hidden"}`} >
                 <img src={v.image} style={{objectPosition:"top 0 right 20%"}} className="w-full h-full left-0 absolute z-0 opacity-90 object-cover md:object-fill lg:object-cover " alt="" />
                 <div className=" py-10 sm:py-10 md:py-8 lg:py-6 xl-py-0 pr-4 sm:pr-6 md:pr-3 pl-6 sm:pl-8 md:pl-8 lg:pl-12 xl:pl-16 col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-7 xl:col-span-7 h-full flex flex-col justify-center relative z-10">
                     <div className="h-full w-full absolute z-10" style={{filter:"blur(8px)", background:"rgba(0,0,0, 0.2)"}}></div>
                     <h6 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-extrabold font-nunito text-gray-100 relative z-10">Baazar for</h6>
                     <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mt-0.5 md:mt-1 lg:mt-1.5 xl:mt-2 font-nunito text-gray-100 capitalize relative z-10">Fresh {v.name}</h1>

                     <p className="text-base sm:text-base md:text-base lg:text-xl xl:text-2xl mt-4 sm:mt-4.5 md:mt-5.5 lg:mt-6 xl:mt-6.5 leading-normal text-gray-100 font--nunito relative z-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sequi temporibus aliquid maiores eius, ipsam, ducimus, itaque alias voluptas excepturi et cum eveniet quibusdam architecto.</p>

                     <button className="text-sm sm:text-base md:text-lg font-bold px-2 sm-px-2 md:px-3 py-1 sm:py-1 md:py-1.5 bg-theme-blue-600 w-max mt-10 sm:mt-10 md:mt-10 lg:mt-10 xl:mt-12 rounded text-gray-100 font-nunito cursor-pointer z-10 relative z-10">Find More</button>
                 </div>
                 <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-5 xl:col-span-5 h-full flex justify-center items-center relative">
                     {/* <img src="./images/WhatsApp_Image_2024-02-23_at_20.18 1.png" className="" alt="" /> */}
                     {/* <img src="./images/chicken_banner4.jpg" className="" alt="" /> */}
                 {/* <img src="./images/WhatsApp_Image_2024-02-23_at_20.25 1.png" className="absolute w-2/6 aspect-square top-2/4 right-10" alt="" /> */}
                 </div>
             </div>
             })
            }

<ul className="absolute z-20 bottom-3 left-[50%] flex flex-row gap-x-[20px] w-max px-5 py-1.5 rounded-lg" style={{ transform: "translate(-50%, -50%)", backgroundColor:"rgba(0,0,0, 0.2)"}}>
  { activeBanner.map((btn, index)=>{
     return <li key={index} onClick={()=> setActivebanner([...activeBanner.map((v,i)=> i === index ? {...v, active : true} : {...v, active : false})]) } className="w-[10px] h-[10px] bg-white rounded-full cursor-pointer" style={{boxShadow:`${btn.active ? "0 0 0 5px  gray inset, 0 0 0 2px white" : "0 0 0 5px white inset"}`}}></li> 
  }) }
</ul>

</div>
    )
}

export default Hero;