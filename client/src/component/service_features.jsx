

// const Service_features = () => {
//     return (
//         <div className="w-full h-max py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 bg-white" >
//             <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold font-nunito text-center text-theme-blue-600 ">Features Of Our Service</h2>

//             <div className="grid grid-cols-12 w-full h-60vh mt-10 mx-auto gap-y-6" style={{maxWidth:"1700px"}}>

//                 <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 grid grid-cols-12 px-4 md:px-10 py-3">
//                     <div className="col-span-6 flex justify-start items-end">
//                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-5/6  fill-yellow-600">
//                             <path d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
//                         </svg>
//                     </div>
//                     <h5 className="col-span-6 text-2xl sm:text-3xl font-extrabold text-yellow-600 font-nunito flex justify-center items-end pb-3">Delivery</h5>
//                     <p className="col-span-12 text-base text-gray-400 font-nunito mt-10 w-full line-clamp-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, nisi! consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, nisi! consectetur adipisicing elit.</p>
//                     <div className="col-span-6 flex justify-start items-center mt-10 sm:mt-3">
//                         <button className="text-base font-bold font-nunito bg-yellow-600 px-6 py-2 text-gray-100">Get Benefit</button>
//                     </div>
//                     <div className="col-span-6 flex justify-end items-center mt-10 sm:mt-2">
//                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-10 fill-yellow-600">
//                             <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
//                         </svg>
//                     </div>

//                 </div>

//                 <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-8 grid grid-cols-12 grid-rows-12">
//                     <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 flex justify-start items-end row-span-5 sm:row-span-5 md:row-span-12 lg:row-span-12 grid grid-cols-12 px-4 sm:px-2 md:px-6 py-2">
//                         <div className="col-span-5 sm:col-span-4 md:col-span-5 flex justify-start items-end ">
                           
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-full sm:w-5/6" style={{ fill: "#7ACC9B" }}>
//                                 <path d="M272 96c-78.6 0-145.1 51.5-167.7 122.5c33.6-17 71.5-26.5 111.7-26.5h88c8.8 0 16 7.2 16 16s-7.2 16-16 16H288 216s0 0 0 0c-16.6 0-32.7 1.9-48.3 5.4c-25.9 5.9-49.9 16.4-71.4 30.7c0 0 0 0 0 0C38.3 298.8 0 364.9 0 440v16c0 13.3 10.7 24 24 24s24-10.7 24-24V440c0-48.7 20.7-92.5 53.8-123.2C121.6 392.3 190.3 448 272 448l1 0c132.1-.7 239-130.9 239-291.4c0-42.6-7.5-83.1-21.1-119.6c-2.6-6.9-12.7-6.6-16.2-.1C455.9 72.1 418.7 96 376 96L272 96z" />
//                             </svg>
//                         </div>
//                         <h5 className="col-span-6 text-xl md:text-3xl font-extrabold font-nunito flex justify-center items-end pb-1 md:pb-8 pl-4 md:pl-0" style={{ color: "#7ACC9B" }}>Fresh Vegetables</h5>
//                         <p className="col-span-12 text-base sm:text-xs md:text-base text-gray-400 font-nunito mt-6 sm:mt-3 w-full line-clamp-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, nisi! consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, nisi! consectetur adipisicing elit.</p>
//                         <div className="col-span-6 flex justify-start items-center mt-10 sm:mt-3">
//                             <button className="text-base sm:text-2xs md:text-base font-bold font-nunito px-6 sm:px-3 md:px-6 py-2 sm:py-1 md:py-2 text-gray-100" style={{ backgroundColor: "#7ACC9B" }}>Get Benefit</button>
//                         </div>
//                         <div className="col-span-6 md:col-span-6 flex justify-end items-center mt-3">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-10 sm:h-6 md:h-10" style={{ fill: "#7ACC9B" }}>
//                                 <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
//                             </svg>
//                         </div>
//                     </div>
//                     <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 flex justify-start sm:items-end row-span-7 sm:row-span-7 md:row-span-12 lg:row-span-12 grid grid-cols-12 px-4 sm:px-2 md:px-6 py-1 pb-2">
//                         <div className="col-span-5 flex justify-start items-end">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="h-5/6 sm:w-3/6" style={{fill:"#A78FCC"}}>
//                                 <path d="M374.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-320 320c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l320-320zM128 128A64 64 0 1 0 0 128a64 64 0 1 0 128 0zM384 384a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"/>
//                             </svg>
//                         </div>
//                         <h5 className="col-span-7 text-2xl md:text-3xl font-extrabold font-nunito flex justify-start items-end pb-2 pl-4 md:pl-0" style={{ color: "#A78FCC" }}>Deals & Offers</h5>
//                         <p className="col-span-12 text-base sm:text-sm md:text-base text-gray-400 font-nunito mt-8 sm:mt-3 w-full line-clamp-3 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, nisi! consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, nisi! consectetur adipisicing elit.</p>
//                         <div className="col-span-6 flex justify-start items-center mt-8 sm:mt-2">
//                             <button className="text-base sm:text-xs md:text-base font-bold font-nunito px-6 sm:px-4 md:px-6 py-2 sm:py-1.5 md:py-2 text-gray-100" style={{ backgroundColor: "#A78FCC" }}>Get Benefit</button>
//                         </div>
//                         <div className="col-span-6 flex justify-end items-center mt-6 sm:mt-2">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-10 sm:h-8 md:h-10" style={{ fill: "#A78FCC" }}>
//                                 <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
//                             </svg>
//                         </div>
//                     </div>
//                 </div>

//             </div>

//         </div>
//     )
// }

// export default Service_features



const Service_features = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="df31b9f6-a505-42f8-af91-d2b7c3218e5c"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#df31b9f6-a505-42f8-af91-d2b7c3218e5c)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">We</span>
            </span>{' '}
            deliver door to door fresh fish and chicken.
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Our main focus is to bring fish and chicken to your doorstep and serve at best price as compared to all nearest local shop.
          </p>
        </div>
        <div className="grid gap-8 row-gap-8 lg:grid-cols-3">
          <div className="sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
              <svg
                className="w-12 h-12 text-deep-purple-accent-400 sm:w-20 sm:h-20"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Fresh Product</h6>
            <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
              Cheese on toast airedale the big cheese. Danish fontina cheesy grin
              airedale danish
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
          <div className="sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
              <svg
                className="w-12 h-12 text-deep-purple-accent-400 sm:w-20 sm:h-20"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Delivery</h6>
            <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
              Satoshi Nakamoto launched lots of decentralisation when Litecoin
              required
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
          <div className="sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
              <svg
                className="w-12 h-12 text-deep-purple-accent-400 sm:w-20 sm:h-20"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5">Custom Order</h6>
            <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
              Bavaria ipsum dolor sit amet Radler Schneid vui huift vui ognudelt i
              mechad
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    );
  };

  export default Service_features