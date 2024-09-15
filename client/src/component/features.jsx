

const Features = () => {
    const featursContainerCss = "min-w-32 sm:min-w-40 md:min-w-48 lg:min-w-52 xl:min-w-56 gap-x-2 sm:gap-x-2 md:gap-x-3 lg:gap-x-4 xl:gap-x-5 grid grid-cols-12";
    const col_8 = "col-span-8 flex flex-col justify-center";
    const col_4 ="col-span-4 sm:col-span-4 md:col-span-3 flex items-center px-1";
    const title = "text-2xs sm:text-xs md:text-sm lg:text-base xl:text-xl font-bold text-red-300";
    const para = "text-3xs sm:text-3xs md:text-2xs lg:text-xs xl:text-sm mt-1 font-semibold text-red-200 break-words"
    return (
        <>
            {/* <div className="w-full xl:justify-between flex max-w-screen overflow-scroll scroll-overflow-hidden px-2 gap-x-6 sm:px-6 md:px-8 lg:px-8 xl:px-9 py-4 sm:py-6 md:py-7 lg:py-8 xl:py-10" style={{ background: "#F0FFF6" }}> */}
            <div className="w-full xl:justify-between flex max-w-screen overflow-scroll scroll-overflow-hidden px-2 gap-x-6 sm:px-6 md:px-8 lg:px-8 py-4 sm:py-6 bg-white">

                <div className={featursContainerCss}>
                    <div className={col_4}>
                        {/* <img src="./images/fresh_logo.svg" className="w-10 sm:w-12 md:w-14 lg:-w-16 xl:w-16 h-10 sm:h-12 md:h-14 lg:-h-16 xl:h-16 rounded" alt="" /> */}
                    </div>
                    <div className={col_8}>
                        <h6 className={title}>Fresh</h6>
                        <p className={para} style={{ lineHeight: "110%" }}>Order daily fresh vegetables</p>
                    </div>
                </div>

                <div className={featursContainerCss}>
                    <div className={col_4}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 rounded fill-red-300">
                            <path d="M112 0C85.5 0 64 21.5 64 48V96H16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 272c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 48c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 240c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 208c8.8 0 16 7.2 16 16s-7.2 16-16 16H64V416c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H112zM544 237.3V256H416V160h50.7L544 237.3zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" />
                        </svg>

                    </div>
                    <div className={col_8}>
                        <h6 className={title}>Cash On delivery</h6>
                        <p className={para} style={{ lineHeight: "110%" }}>Order daily fresh vegetables</p>
                    </div>
                </div>

                <div className={featursContainerCss}>
                    <div className={col_4}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 rounded fill-red-300">
                            <path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V299.6l-94.7 94.7c-8.2 8.2-14 18.5-16.8 29.7l-15 60.1c-2.3 9.4-1.8 19 1.4 27.8H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128zM549.8 235.7l14.4 14.4c15.6 15.6 15.6 40.9 0 56.6l-29.4 29.4-71-71 29.4-29.4c15.6-15.6 40.9-15.6 56.6 0zM311.9 417L441.1 287.8l71 71L382.9 487.9c-4.1 4.1-9.2 7-14.9 8.4l-60.1 15c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l15-60.1c1.4-5.6 4.3-10.8 8.4-14.9z" />
                        </svg>
                    </div>
                    <div className={col_8}>
                        <h6 className={title}>Order New</h6>
                        <p className={para} style={{ lineHeight: "110%" }}>Order daily fresh vegetables</p>
                    </div>
                </div>

                <div className={featursContainerCss}>
                    <div className={col_4}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 rounded fill-red-300 stroke-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9 14.25 6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185ZM9.75 9h.008v.008H9.75V9Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008V13.5Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                    </div>
                    <div className={col_8}>
                        <h6 className={title}>Special Discount</h6>
                        <p className={para} style={{ lineHeight: "110%" }}>Order daily fresh vegetables</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Features;