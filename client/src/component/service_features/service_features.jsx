import ServiceFestureCard from "./featuresCard";

const Service_features = () => {

    const data = [
        { title: "Fresh product", description: "Cheese on toast airedale the big cheese. Danish fontina cheesy grin airedale danish", link: "" },
        { title: "Delivery", description: "Cheese on toast airedale the big cheese. Danish fontina cheesy grin airedale danish", link: "" },
        { title: "Custome Order", description: "Cheese on toast airedale the big cheese. Danish fontina cheesy grin airedale danish", link: "" }
    ]
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto" style={{lineHeight:"130%"}}>
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

                {data.map((v, i) => {
                    return <ServiceFestureCard key={i} values={v} />
                })}


            </div>
        </div>
    );
};

export default Service_features