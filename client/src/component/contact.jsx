

const Contact = () => {
    const fieldset = "flex flex-col lg:max-w-80%";
    const label = " text-sm md:text-base lg:text-xl xl:text-2xl font-semibold font-nunito text-gray-400 px-1";
    const input = "border-b outline-0 py-1.5 text-xs md:text-sm lg:text-base xl:text-xl px-1 py-0.5 text-xs text-gray-400 font-nunito rounded"
    return (
        <div className="w-full h-max py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 bg-white mt-2" >
            <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold font-nunito text-center text-theme-blue-600 ">Contact Us</h2>

            <div className="grid grid-cols-12 w-full mt-10 lg:mt-16 gap-y-10 lg:gap-y-16 xl:max-w-80% mx-auto" >
                
                <div className="grid grid-cols-12 gap-y-8 px-5 gap-x-0 lg:gap-x-8 xl:gap-x-10 col-span-12 lg:col-span-6">
                    <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-7 xl:col-span-7 lg:hidden">
                        <img src="./images/contact_msg.png" className="h-full w-full opacity-80" alt="" />
                    </div>
                    <form className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 grid gird-cols-12 gap-y-2.5 ">
                        <fieldset className={fieldset}>
                            <label htmlFor="name" className={label}>Full Name</label>
                            <input type="text" id="name" className="border-b outline-0 py-1.5 text-xs md:text-sm lg:text-base xl:text-xl md:text-base px-1  text-gray-400 font-nunito rounded" />
                        </fieldset>

                        <fieldset className={fieldset}>
                            <label htmlFor="email" className={label}>Email</label>
                            <input type="text" id="email" className={input} />
                        </fieldset>

                        <fieldset className={fieldset}>
                            <label htmlFor="contact" className={label}>Contact No.</label>
                            <input type="tel" id="contact" className={input} />
                        </fieldset>

                        <fieldset className={fieldset}>
                            <label htmlFor="subject" className="text-sm md:text-base lg:text-xl xl:text-2xl font-semibold font-nunito text-gray-400 px-1">Subject</label>
                            <input type="text" id="contact" className={input} />
                        </fieldset>

                        <fieldset className={fieldset}>
                            <label htmlFor="msg" className={label}>Message</label>
                            <textarea  type="text" readOnly value="" rows="6" id="contact" className="border outline-0 px-1 py-2.5 text-xs md:text-sm lg:text-base xl:text-xl text-gray-400 font-nunito rounded" > </textarea>
                        </fieldset>

                        <input type="submit" className="text-gray-100 bg-theme-blue-600 text-base mt-1.5 h-9 font-extrabold font-nunito w-32 pt-0.5 tracking-wide hover:bg-blue-500 cursor-pointer" value="SEND" />
                    </form>
                </div>

                <div className="flex flex-col w-full mt-10 lg:mt-0 col-span-12 lg:col-span-6">
                    <div className="grid grid-cols-12 gap-y-8 px-5 gap-x-0 lg:gap-x-8 xl:gap-x-10">
                        <div className="order-1 lg:order-2 col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-7 xl:col-span-7 lg:hidden">
                            <img src="./images/contact_details.png" className="h-full w-full opacity-60" alt="" />
                        </div>
                        <div className="order-2 lg:order-1 col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 flex flex-col gap-y-4 md:gap-y-6 xl:h-full">
                           
                            <div className="w-full flex flex-col gap-y-0.5">
                                <span className="text-sm md:text-base font-bold font-nunito text-gray-300 lg:text-end">Contact No.</span>
                                <div className="text-base md:text-xl font-bold font-nunito text-gray-400 lg:text-end">+91 8287889123</div>
                            </div>

                            <div className="w-full flex flex-col gap-y-0.5">
                                <span className="text-sm md:text-base font-bold font-nunito text-gray-300 lg:text-end">Email</span>
                                <div className="text-base md:text-xl font-bold font-nunito text-gray-400 lg:text-end">pratapbairagi@gmail.com</div>
                            </div>

                            <div className="w-full flex flex-col gap-y-0.5">
                                <span className="text-sm md:text-base font-bold font-nunito text-gray-300 lg:text-end">Address</span>
                                <div className="text-base md:text-xl font-semibold font-nunito text-gray-400 lg:text-end">RZ-170/1A, Tughlakabad Extn</div>
                                <div className="text-base md:text-xl font-semibold font-nunito text-gray-400 lg:text-end">South Delhi, Delhi - 110019.</div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Contact