import Feedback_card from "./feedback_card"



const Service_feedbacks = () => {
    return (
        <div className="w-full h-max py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16" >
            <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold font-nunito text-center text-theme-blue-600 ">Service Feedbacks</h2>
            <div className="flex flex-row max-w-screen md:max-w-90% mx-auto lg:max-w-90% overflow-x-auto scroll-overflow-hidden gap-x-2 mt-6 lg:mt-10">
                
                <Feedback_card/>
                <Feedback_card/>
                <Feedback_card/>
                <Feedback_card/>

            </div>
        </div>
    )
}

export default Service_feedbacks