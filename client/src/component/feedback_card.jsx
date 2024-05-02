
const Feedback_card = () => {
    return (
        <div className="min-w-full min-h-full sm:min-w-80% md:min-w-70% lg:min-w-50% flex flex-col px-3">
            <div className="grid grid-cols-12 w-full">
                <div className="col-span-4 h-28 flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5/6 fill-theme-green-600">
                        <path d="M272 96c-78.6 0-145.1 51.5-167.7 122.5c33.6-17 71.5-26.5 111.7-26.5h88c8.8 0 16 7.2 16 16s-7.2 16-16 16H288 216s0 0 0 0c-16.6 0-32.7 1.9-48.3 5.4c-25.9 5.9-49.9 16.4-71.4 30.7c0 0 0 0 0 0C38.3 298.8 0 364.9 0 440v16c0 13.3 10.7 24 24 24s24-10.7 24-24V440c0-48.7 20.7-92.5 53.8-123.2C121.6 392.3 190.3 448 272 448l1 0c132.1-.7 239-130.9 239-291.4c0-42.6-7.5-83.1-21.1-119.6c-2.6-6.9-12.7-6.6-16.2-.1C455.9 72.1 418.7 96 376 96L272 96z" />
                    </svg>
                </div>
                <p className="col-span-4 flex items-end pb-5 text-xl md:text-3xl lg:text-4xl font-bold font-nunito text-theme-green-600">Freshness</p>
                <div className="flex col-span-4 items-end justify-center pb-6 ">
                    {Array.from({ length: 5 }, (_, index) => {
                        return <svg key={index} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-5 md:w-7 stroke-theme-blue-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                    })}

                </div>
            </div>
            <p className="w-full text-sm md:text-xl lg:text-2xl px-3 mt-4 text-gray-400 text-nunito" style={{ lineHeight: "170%" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus temporibus voluptates magni ipsum quibusdam. Consequatur veniam fugit sapiente totam suscipit?</p>
            <div className="w-full flex items-center gap-x-2 mt-6 px-3">
                <span className="block w-full h-px bg-theme-blue-600"></span>
                <span className="text-sm md:text-xl font-bold font-nunito text-gray-500">Rohan</span>
            </div>
        </div>
    )
}

export default Feedback_card