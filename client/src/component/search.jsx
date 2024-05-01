import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { get_filter_and_sort_products } from "../redux/product/action";
import { memo, useRef, useState } from "react";



const Search = ({fieldCss="", inputCss="", buttonCss="", svgCss="", searchQueries={}, setSearchQuaries=()=>""}) => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchString, setSearchString] = useState("")

    const searchFun = ( ) => {

        
        if (location.pathname != "/search" && location.pathname != "/products") {
        console.log("search product 1");

            navigate("/search", { state: { value: searchString } })
        }
        else{
        console.log("search product 2");


            setSearchQuaries({
                ...searchQueries,
                title : searchString
            })

            dispatch(get_filter_and_sort_products({
                ...searchQueries,
                title : searchString
            }))
        }
        
    }

    return (
        <fieldset className={fieldCss} >
            <input  defaultValue="" onChange={(e)=> setSearchString(e.target.value)} id="search_veg" placeholder="Seach here..." className={`${inputCss} outline-0`} />
            <button onClick={(e) => searchFun()} className={buttonCss}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="size-7 sm:size-7 md:size-7 lg:size-8 xl:size-8 stroke-theme-blue-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </button>
        </fieldset>
    )
}

export default memo(Search)