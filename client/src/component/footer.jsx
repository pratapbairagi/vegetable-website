

const Footer = () => {
    return (
        <div className="w-full flex flex-col py-2 bg-gray-100">
            <div className="grid grid-cols-12 px-6 gap-y-7 gap-x-2 py-4">
                <ul className="col-span-12 lg:col-span-3">
                    <li className="text-base md:text-xl xl:text-2xl font-semibold text-theme-blue-600 ">About Us</li>
                    <li className="text-xs md:text-sm xl:text-base font-normal text-gray-400 max-w-90% mt-4 max-w-70%" style={{ lineHeight: "150%" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, asperiores! Consequatur, recusandae.</li>
                    <li className="text-xs md:text-sm xl:text-base font-bold text-gray-500 max-w-90% mt-4 max-w-70%" style={{ lineHeight: "150%" }}>reserved copyright &copy; by Protap</li>
                </ul>

                <ul className="col-span-5 lg:col-span-2 flex flex-col gap-y-1">
                    <li className="text-base md:text-xl xl:text-2xl font-semibold text-theme-blue-600">Links</li>
                    <li className="text-xs md:text-sm xl:text-base font-semibold text-gray-400 mt-4">Home</li>
                    <li className="text-xs md:text-sm xl:text-base font-semibold text-gray-400">About</li>
                    <li className="text-xs md:text-sm xl:text-base font-semibold text-gray-400">Vegetables</li>
                    <li className="text-xs md:text-sm xl:text-base font-semibold text-gray-400">Contact</li>
                    <li className="text-xs md:text-sm xl:text-base font-semibold text-gray-400">Features</li>
                </ul>
                <ul className="col-span-5 lg:col-span-3 flex flex-col gap-y-1">
                    <li className="text-base md:text-xl xl:text-2xl font-semibold text-theme-blue-600">Services</li>
                    <li className="text-xs md:text-sm xl:text-base font-semibold text-gray-400 mt-4">Fresh Vegetables</li>
                    <li className="text-xs md:text-sm xl:text-base font-semibold text-gray-400">Delivery</li>
                    <li className="text-xs md:text-sm xl:text-base font-semibold text-gray-400">Deals & Offers</li>
                </ul>
                <ul className="col-span-12 lg:col-span-4 flex flex-col">
                    <li className="text-base md:text-xl xl:text-2xl font-semibold text-theme-blue-600">Updates</li>
                    <li className="text-xs font-semibold text-gray-400 mt-4 flex gap-y-2 flex-wrap">
                        <input type="text" className="border py-1.5 lg:py-2.5 px-2 text-sm font-normal w-8/12 lg:w-7/12 outline-0" placeholder="Enter your email..." />
                        <button className="text-xs bg-theme-blue-600 text-gray-100 py-1 px-3.5">Subscribe</button>
                    </li>
                    <li className="flex flex-wrap mt-6 gap-x-6">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-8 fill-theme-blue-600">
                            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-8 fill-theme-blue-600">
                            <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="w-8 fill-theme-blue-600">
                            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                        </svg>
                    </li>
                </ul>
            </div>
            <hr className="mt-4" />
            <div className="grid grid-cols-12 py-3 px-4 gap-x-2 gap-y-4">
                <div className="col-span-5 lg:col-span-4 text-sm md:text-base xl:text-xl text-gray-800 flex justify-center lg:justify-start">copyright &copy; by Protap</div>
                
                <div className="col-span-7 lg:col-span-3 flex justify-center items-start gap-x-3 text-xs md:text-sm xl:text-base text-gray-700 ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="w-4 fill-gray-600">
                        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                    </svg>
                    RZ-170/1A, Tughlakabad Extn. Delhi - 110019, India
                </div>
                <div className="col-span-6 lg:col-span-2 flex justify-center text-gray-700 gap-x-2 text-xs md:text-sm xl:text-base">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-4 stroke-gray-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
                    </svg> */}
                    +91 8287889123
                </div>
                <div className="col-span-6 lg:col-span-3 flex justify-center text-gray-700 gap-x-2 text-xs md:text-sm xl:text-base">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-4 stroke-gray-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                    </svg> */}

                    pratapbairagi4cgshop@gmail.com
                </div>
            </div>

        </div>
    )
}

export default Footer