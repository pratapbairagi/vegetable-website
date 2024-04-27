import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const SellerProductTag = ({seller, containerClass, productId}) => {
    const { _id } = useSelector(state => state.user?.user)
    const navigate = useNavigate()

    
    return (
        <>
        {seller === _id && <span onClick={()=> navigate(`/vegetable/edit/${productId}`)} className={`w-max px-2 py-1 text-xs md:text-sm text-theme-blue-600 absolute bg-green-100 font-semibold flex items-center gap-x-1 md:gap-x-2 cursor-pointer ${containerClass}`}>Your product
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 md:w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                    </span>}
        </>
    )
};

export default SellerProductTag;