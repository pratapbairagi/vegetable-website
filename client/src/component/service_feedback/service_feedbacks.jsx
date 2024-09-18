// import Feedback_card from "./feedback_card"

import { useDispatch, useSelector } from "react-redux"
import Service_feedbackCard from "./service_feedbackCard"
import { useEffect } from "react";
import { get_all_reviews } from "../../redux/review/action";

// const Service_feedbacks = () => {
//     return (
//         <div className="w-full h-max py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 bg-white mt-2" >
//             <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold font-nunito text-center text-theme-blue-600 ">Service Feedbacks</h2>
//             <div className="flex flex-row max-w-screen md:max-w-90% mx-auto lg:max-w-90% overflow-x-auto scroll-overflow-hidden gap-x-2 mt-6 lg:mt-10">

//                 <Feedback_card/>
//                 <Feedback_card/>
//                 <Feedback_card/>
//                 <Feedback_card/>

//             </div>
//         </div>
//     )
// }

// export default Service_feedbacks

const Service_feedbacks = () => {
    const dispatch = useDispatch();
    const {loading, success, message, allReviews} = useSelector(state=> state.review)

    useEffect(()=>{
        fetchreviews_fun()
    },[]);

    const fetchreviews_fun = () => {
        dispatch(get_all_reviews())
    }

    return (
        < section className = "bg-white" >
            <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                
                <div className="md:flex md:items-end md:justify-between">
                    <div className="w-full">
                        <h2 className="text-2xl font-nunito font-extrabold text-theme-blue-600 sm:text-3xl">
                            Read trusted reviews from our customers
                        </h2>

                        <p className="mt-4 max-w-lg leading-relaxed text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur praesentium natus
                            sapiente commodi. Aliquid sunt tempore iste repellendus explicabo dignissimos placeat,
                            autem harum dolore reprehenderit quis! Quo totam dignissimos earum.
                        </p>
                    </div>

                   { allReviews.length > 0 ? <a href="#" className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-full border border-rose-600 px-5 py-3 text-rose-600 transition hover:bg-rose-600 hover:text-white md:mt-0" >
                        <span className="font-medium"> Read all reviews </span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-4 rtl:rotate-180"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                        </svg>
                    </a>
                    :
                    <div className="font-bold text-gray-400 whitespace-nowrap text-lg md:text-xl lg:text-2xl xl:text-3xl px-6 w-full h-full min-h-[20vh] flex items-center justify-center text-center py-4 md:py-0 mt-6 md:mt-0 bg-gray-50">No Review</div>
                    }
                </div>

                <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                    {allReviews.map((v,i)=>{
                        return <Service_feedbackCard key={i} values={v}/>
                    })}
                    
                    
                </div>
            </div>
</section >
    )
}

export default Service_feedbacks