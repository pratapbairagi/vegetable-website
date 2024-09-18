import { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { get_products } from "../redux/product/action";
import Pagination from "./pagination";
import { paginationFun } from "./paginationFun";
import useSearchQueries from "./customHook/useSearchQueries";



const SearchResults_page = () => {
    const location = useLocation()
    const state = useSelector(state=> state.product)
    const dispatch = useDispatch();

    // const [searchQueries, setSearchQueries] = useState({
    //     title: "",
    //     category: [],
    //     features: [],
    //     tags: [],
    //     price: [{
    //         gte: 0,
    //         lte: 1000
    //     }],
    //     sold: 0,
    //     nameSort: "",
    //     priceSort: "",
    //     ratingSort: "",
    //     dateSort: "",
    //     productsPerPage: 10,
    //     pageNo: 1
    // });

    const [searchQueries, setSearchQueries] = useSearchQueries()

let x = 0
    useEffect(()=>{
        if(location.state != null){
            if(location.state.value && x == 0){
                x++
                dispatch(get_products({
                    title : location.state.value
                }))
            }
        }
    },[location.state])

    return (
        <div className="w-full lg:max-w-[1400px] mx-auto flex flex-col px-1 py-2 lg:pt-28" style={{background:"rgb(248, 248, 248)"}}>
            <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold font-nunito text-center text-theme-blue-600 ">Results</h2>
            {state.products && <h6 className="text-center text-gray-200 font-bold text-base mb-2">Found : {state.products.length}</h6>}
            <ul className="w-full flex lg:grid lg:grid-cols-12 flex-col lg:flex-row flex-wrap justify-start lg:justify-center lg:items-center gap-y-1 gap-x-1 min-h-80vh" style={{justifyItems:"center", placeItems:"start", alignItems:"center", justifyContent:"center", placeContent:"start"}}>
               {state.products && state.products.map((v,i)=>{ 
              return <li key={i} className="flex w-full lg:col-span-6 bg-white h-full lg:min-h-40 p-1">
                        <img src={v.images[0].url} className="w-2/6 md:h-44 lg:h-52" alt={v.images[0].public_id} />
                        
                        <span className="flex flex-col w-3/6 justify-center gap-y-1  lg:gap-y-2">
                            <NavLink to={`/vegetable/${v._id}`} className="text-base md:text-lg lg:text-xl text-center font-bold text-blue-400 capitalize">{v.title}</NavLink>
                            <span className={`flex text-sm md:text-base lg:text-lg mt-1 text-sm justify-center text-gray-400 capitalize`}>
                               {v.stock > 0 ? `${v.stock/1000}KG Available` : "Not available"}
                            </span>
                        </span>

                        <span className="w-2/6 flex items-center font-bold text-blue-500 text-lg md:text-xl lg:text-2xl justify-center">{v.price}/KG</span>
                 </li>
                })
                
                }
            </ul>
            <Pagination fun={(e)=> paginationFun({e, searchQueries, setSearchQueries, dispatch})} activePage={searchQueries.pageNo} numbersOfButton={(state.productsLength / searchQueries.productsPerPage)} />

        </div>
    )
};

export default memo(SearchResults_page);