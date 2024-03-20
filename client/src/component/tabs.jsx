

const Tabs = ({label, icon, active, fun, index}) => {
    return (
        <li onClick={()=> fun(index)} className={`flex min-w-20 sm:min-w-28 flex-col md:flex-row gap-x-5 lg:gap-x-7 xl:gap-x-8 items-center justify-center md:justify-start gap-y-1 ${active ? "text-theme-blue-600 fill-theme-blue-600 border-t-2 md:border-t-0 md:border-r-2 border-theme-blue-600" : "text-gray-400 fill-gray-400 border-t-0 md:border-r-0"}  font-semibold   py-2 sm:py-3 md:py-3 px-2 md:px-3 cursor-pointer font-nunito hover:text-theme-blue-600 hover:fill-theme-blue-600 hover:md:border-r-4 hover:md:border-theme-blue-600 hover:border-t-2 hover:border-theme-blue-600 hover:md:border-t-0`}>
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-4 sm:w-5 md:w-6 lg:w-7 xl:w-8">
                <path d="M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6H426.6c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z" />
            </svg> */}
            {icon}
            <span className=" text-xs sm:text-base md:text-base lg:text-lg xl:text-xl md:mt-1">{label}</span>
        </li>
    )
}

export default Tabs