

// const About = () => {
//     return (
//         <>
//             <div className="w-full h-max grid grid-cols-12 relative bg-white">

import AboutCard from "./aboutCard";

               
//                 <div className=" order-1 sm:order-1 md:order-2 col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-6 h-max md:h-full py-10 relative z-10 flex flex-col">
//                     <img src="./images/DeWatermark.ai_1726333170834.png" className="absolute z-0 w-full h-full bottom-0 opacity-20 object-cover" style={{objectPosition:"left 20% bottom 30%"}} alt="" />
//                     <h3 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold font-nunito text-theme-blue-600 w-full text-center">Our Services</h3>
//                     <ul className="flex flex-col px-4 mt-4 sm:mt-4 md:mt-6 lg:mt-8 xl:mt-10 gap-y-3 sm:gap-y-3.5 md:gap-y-4 lg:gap-y-5 xl:gap-y-6">
                         
//                         <li className=" text-start text-sm text-gray-400 sm:text-sm md:text:base lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quidem pariatur tempore laboriosam veniam animi!</li>
//                         <li className=" text-end text-sm text-gray-400 sm:text-sm md:text:base lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quidem pariatur tempore laboriosam veniam animi!</li>
//                         <li className=" text-start text-sm text-gray-400 sm:text-sm md:text:base lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, quidem pariatur tempore laboriosam veniam animi!</li>
                    
//                     </ul>
//                 </div>

//                 <div className="col-span-12 order-2 sm:order-2 md:order-1 sm:col-span-12 md:col-span-6 h-max" style={{background:"linear-gradient(to right, whitesmoke, white)"}}>
//                     <img src="./images/about-bg6.png" style={{filter: "blur(0.8px)"}} alt="" />
//                 </div>
//             </div>
//         </>
//     )
// }

// export default About;



const About = () => {
  const data = [
    {
      title : "Delivery door to door", 
      description : "Skate ipsum dolor sit amet, alley oop vert mute-air Colby Carter flail 180 berm. Half-cab camel back ollie transition ledge Wes Humpston 1080.", 
      icon : <svg className="w-8 h-8 text-deep-purple-accent-400" stroke="green" viewBox="0 0 52 52" >
                <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23" />
            </svg>,
     link : "/"
    },
    {
      title : "Fresh and quality fish", 
      description : "The first mate and his Skipper too will do their very best to make the others comfortable in their tropic island nest. Michael Knight a young loner.", 
      icon : <svg className="w-8 h-8 text-deep-purple-accent-400" stroke="green" viewBox="0 0 52 52" >
                <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23" />
            </svg>, 
      link : "/"
    },
    {
      title : "Fesh and quality Chicken", 
      description : "The first mate and his Skipper too will do their very best to make the others comfortable in their tropic island nest. Michael Knight a young loner.", 
      icon : <svg className="w-8 h-8 text-deep-purple-accent-400" stroke="green" viewBox="0 0 52 52" >
                <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23" />
            </svg>, 
      link : "/"
    },
  ]
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="block text-center px-3 py-px mb-4 text-xs font-semibold tracking-wider text-red-600 uppercase rounded-full bg-teal-accent-400">
              Product And Service
            </p>
          </div>
          <h2 className="w-full mb-6 font-nunito text-2xl font-bold leading-md tracking-md text-theme-green-600 sm:text-3xl md:mx-auto text-center">
            <span className="relative inline-block">
              <svg viewBox="0 0 52 24" fill="currentColor" className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block" >
                <defs>
                  <pattern id="3071a3ad-db4a-4cbe-ac9a-47850b69e4b7" x="0" y="0" width=".135" height=".30" >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect fill="url(#3071a3ad-db4a-4cbe-ac9a-47850b69e4b7)" width="52" height="24" />
              </svg>
              <span className="relative">Read</span>
            </span>{' '}
            about our products and services
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p>
        </div>

        <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
          
          <div className="flex flex-col justify-center">

          {data.map((v,i)=> {
              return <AboutCard key={i} icon={v.icon}
              title={v.title}
              description={v.description}
              link={v.link}
              />
          })   }
            

          </div>
          <div className="grid grid-cols-2 gap-5">
            <img
              className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
            //   src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              src="./images/about-delivery.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="delivery image"
            />
            <img
              className="object-cover w-full h-48 rounded shadow-lg"
              src="./images/about-fish-cutting.png?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="cutting fish image"
            />
            <img
              className="object-cover w-full h-48 rounded shadow-lg"
              src="./images/about-chicken-cutting.jpg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="cutting chicken image"
            />
          </div>
        </div>
      </div>
    );
  };

  export default About