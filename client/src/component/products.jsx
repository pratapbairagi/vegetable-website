import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Star from "./star";
import Card5 from "./card5";
// import Pagination from "./pagination";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_filter_and_sort_products } from "../redux/product/action";
import Pagination from "./pagination";
import { paginationFun } from "./paginationFun";
import Search from "./search";
import Spinner from "./spinner";
import StoresMap from "./map";



const Products = ({toggleCart,setToggleCart}) => {
    const location = useLocation()
    const ref = useRef()
    const refFilterAndSearchBar = useRef()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const state = useSelector(state => state.product)
    const {cart} = useSelector(state => state.cart)
    const {current_position, destination_position} = useSelector(state=> state.mapCoords)

    // const cpostion = useSelector(state => state.mapCoords)
    // const [prodWithStoreLocation, seProdWithStoreLocation] = useState()

    const [searchQueries, setSearchQuaries] = useState({
        title: "",
        category: [],
        features: [],
        tags: [],
        price: [{
            gte: 0,
            lte: 1000
        }],
        sold: 0,
        nameSort: "",
        priceSort: "",
        ratingSort: "",
        dateSort: "",
        productsPerPage: 12,
        pageNo: 1
    })

    let x = 0
    useEffect(() => {
        if (location.state) {
            if (location.state.productsType && location.state.other) {
                if (searchQueries.category.length == 0 || searchQueries.features.length == 0 || searchQueries.sold != 0) {
                    if (x == 0) {
                        x++
                        if (location.state.productsType == "category" || location.state.productsType == "sold") {
                            setSearchQuaries({
                                ...searchQueries,
                                [location.state.productsType]: [location.state.other],
                                productsPerPage : 12
                            })
                            getInitialProductsFun({ type: location.state.productsType, value: [location.state.other] })
                        }
                        // if (location.state.productsType == "features") {

                        //     setSearchQuaries({
                        //         ...searchQueries,
                        //         features: [location.state.other]
                        //     })
                        // }
                        else if (location.state.productsType == "sold") {

                            setSearchQuaries({
                                ...searchQueries,
                                sold: location.state.other,
                                productsPerPage : 12
                            })
                            getInitialProductsFun({ type: location.state.productsType, value: location.state.other })
                        }
                        else if(location.state.productsType == "all" && location.state.other == "all"){
                            setSearchQuaries({
                                ...searchQueries,
                                category: [...searchQueries.category,location.state.other],
                                tags: [...searchQueries.tags,location.state.other],
                                features: [...searchQueries.features, location.state.other],
                                productsPerPage : 12
                            })
                            getInitialProductsFun({ type: location.state.productsType, value: location.state.other })

                        }
                    }
                        // getInitialProductsFun({ type: location.state.productsType, value: [location.state.other] })
                }
            }
            // if(searchQueries.title){
            //     dispatch(get_filter_and_sort_products({ title: searchQueries.title, category: searchQueries.category, price: searchQueries.price, tags: searchQueries.tags, features: searchQueries.features, nameSort: searchQueries.nameSort, dateSort: searchQueries.dateSort, priceSort: searchQueries.priceSort, sold: searchQueries.sold, ratingSort: searchQueries.ratingSort, productsPerPage: searchQueries.productsPerPage, pageNo: searchQueries.pageNo }))
            // }
        }
    }, [location.state]);

    const getInitialProductsFun = ({ type, value, sort, sortType }) => {
        if (type && value && type != "all" && value != "all") {

            dispatch(get_filter_and_sort_products({

                [type]: [value],
                productsPerPage : 12
            }))
        }
        else if(type == "all" && value == "all"){
            dispatch(get_filter_and_sort_products({

                category: [value],
                tags: [value],
                features: [value],
                productsPerPage : 12
            }))
        }
        else if (!type && !value && sort && sortType) {
            dispatch(get_filter_and_sort_products({
                title: searchQueries.title,
                category: searchQueries.category,
                price: searchQueries.price,
                tags: searchQueries.tags,
                features: searchQueries.features,
                sold: searchQueries.sold,
                productsPerPage: searchQueries.productsPerPage,
                pageNo: searchQueries.pageNo,
                [sortType]: searchQueries[sortType]
            }))
        }
        else {
            dispatch(get_filter_and_sort_products({ title: searchQueries.title, category: searchQueries.category, price: searchQueries.price, tags: searchQueries.tags, features: searchQueries.features, nameSort: searchQueries.nameSort, dateSort: searchQueries.dateSort, priceSort: searchQueries.priceSort, sold: searchQueries.sold, ratingSort: searchQueries.ratingSort, productsPerPage: searchQueries.productsPerPage, pageNo: searchQueries.pageNo }))
        }

    }

    console.log("queries => ", state)

    let arrayMinMax = []

    const filterProducts_handler = (e) => {
        let { name, value, checked } = e.target;

        if (name == "category" || name == "features" || name == "tags") {
            setSearchQuaries({
                ...searchQueries,
                [name]: checked ? [...searchQueries[name], value] : [...searchQueries[name]].filter(v => v != value)
            })
        }
        else if (name == "price") {
            arrayMinMax = searchQueries.price
            value = JSON.parse(e.target.value)


            if (checked) {
                if (value.gte != 0 || value.lte != 1000) {
                    arrayMinMax = [...arrayMinMax, { gte: value.gte, lte: value.lte }]
                    arrayMinMax = arrayMinMax.filter(v => v.lte != 1000)
                }
            }
            else {
                const maxToThousand = arrayMinMax.find(v => v.gte == 1000)

                if (!maxToThousand && arrayMinMax.length == 1) {
                    arrayMinMax = arrayMinMax.filter(v => v.gte != value.gte)
                    arrayMinMax.push({ gte: 0, lte: 1000 })
                }
                else if (arrayMinMax.length > 1) {
                    arrayMinMax = arrayMinMax.filter(v => v.gte != value.gte)
                }
            }

            setSearchQuaries({
                ...searchQueries,
                price: arrayMinMax
            })
        }
    }

    

    // useEffect(()=>{
    //             dispatch(get_filter_and_sort_products({ title: searchQueries.title, category: searchQueries.category, price: searchQueries.price, tags: searchQueries.tags, features: searchQueries.features, nameSort: searchQueries.nameSort, dateSort: searchQueries.dateSort, priceSort: searchQueries.priceSort, sold: searchQueries.sold, ratingSort: searchQueries.ratingSort, productsPerPage: searchQueries.productsPerPage, pageNo: searchQueries.pageNo }))
    // },[searchQueries.pageNo])

    const toggleFilterTabs =(e) => {
        let tabs = document.querySelectorAll(".filterBtns")
        let filterBtnGroups = document.querySelectorAll(".filterTab")
        filterBtnGroups.forEach((el, index)=>{
            if(e == index+1 ){
                if(el.classList.contains("hidden")){
                    tabs[index].classList.add("rotate-180")
                    el.classList.replace("hidden", "flex")
                }
                else{
                    tabs[index].classList.remove("rotate-180")
                    el.classList.replace("flex", "hidden")
                }
            }
            // else{
            //    if( !el.classList.contains("hidden")){ 
            //     el.classList.add("hidden")
            // }
            // }
        })
    }


    

    console.log(current_position)
    return (
        <div className="w-full relative z-10 flex flex-col">
            <div className="w-full shadow grid grid-cols-12 h-14 sticky top-0 bg-white z-30">
                <div className="col-span-3 flex justify-start items-center px-3 md:px-4 lg:px-5 xl:px-6">
                    <NavLink to="/" className="font-bold text-theme-blue-600">Website</NavLink>
                </div>
                <div className="col-span-4">
                
                </div>
                <div className="col-span-5 px-3 md:px-4 lg:px-5 xl:px-6 flex justify-end items-center gap-x-3 mg:gap-x-4 lg:gap-x-5">
                <button onClick={() => setToggleCart(true)} className="w-8 relative sm:w-10 md:w-12 lg:w-12 xl:w-12">
                           <span className={`absolute flex justify-center items-center rounded-full w-5 md:w-6 lg:w-7 top-0 right-0 md:right-1.5 lg:right-0.5 aspect-square text-white text-2xs md:text-xs lg:text-sm font-semibold ${cart.length > 0 ? "bg-green-600" : "bg-red-600"}`} style={{ paddingBottom:"0.5px"}}>{ cart.reduce((accum, cv)=> accum + cv.qty, 0)}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 sm:size-7 md:size-8 lg:size-9 xl:size-10 text-theme-blue-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                </button>
                    <img onClick={() => navigate("/profile")} src="./images/profile_image.png" className="w-10 rounded-full aspect-square cursor-pointer" alt="" />
                <div className="w-max flex flex-col items-start">

                </div>
                </div>
            </div>
            {/* <div className="w-full h-1 bg-gray-100"></div> */}
            <div className="grid grid-cols-12 relative ">

                <div ref={ref} className="pb-14 md:pb-0 col-span-12 hidden md:flex fixed md:relative bg-gray-100 z-20 w-full  min-h-90vh md:min-h-80vh max-h-screen scroll-overflow-hidden md:col-span-3 xl:col-span-2 flex flex-col overflow-y-auto">
                    <span className="flex sticky top-0 gap-y-4 w-full max-w-70% md:max-w-full bg-white h-max px-6 lg:px-8 py-4 pb-3 border-b text-base lg:text-lg text-gray-400 font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 fill-gray-400">
                            <path d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" />
                        </svg>
                        <span className="ml-4 lg:ml-6">Search Option</span>

                        <button onClick={() => {
                            refFilterAndSearchBar.current.classList.replace("hidden", "flex")
                            ref.current.classList.replace("flex", "hidden")
                        }} className="ml-auto flex md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>

                        </button>

                    </span>
                    <span className="flex justify-between gap-y-4 w-full max-w-70% md:max-w-full bg-white h-max px-8 py-3 border-b text-base lg:text-lg text-gray-400 font-semibold">
                        <span>Category</span>
                        <svg onClick={()=> toggleFilterTabs(1)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-8 fill-gray-400 px-2 filterBtns">
                            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                        </svg>
                    </span>
                    <ul className={`flex flex-col gap-y-4 w-full max-w-70% md:max-w-full bg-white h-max px-8 pt-6 pb-8 mb-1 hidden filterTab`}>

                        {state.categories2?.length > 0 ? state.categories2.map((cat, catIndex)=>{
                           return <li key={catIndex} className="text-gray-400 text-sm md:text-base flex justify-between">
                                <span className="flex gap-x-1">
                                    {cat}
                                </span>
                                <input type="checkbox" onChange={filterProducts_handler} defaultChecked={location.state.productsType == "category" || location.state.productsType == "all" ? location.state.other == cat ? true : false : false} value={cat} className="w-6" name="category" id="" />
                            </li>
                             })
                            :
                            <></>
                        }
                    </ul>

                    <span className="flex justify-between gap-y-4 w-full max-w-70% md:max-w-full bg-white h-max px-8 py-3 border-b text-base lg:text-lg text-gray-400 font-semibold">
                        <span>Feature</span>
                        <svg onClick={()=> toggleFilterTabs(2)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-8 fill-gray-400 px-2 filterBtns">
                            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                        </svg>
                    </span>
                    <ul className={`flex flex-col gap-y-4 w-full max-w-70% md:max-w-full bg-white h-max px-8 pt-6 pb-8 mb-1 hidden filterTab`}>
                    {state.features2?.length > 0 ? state.features2.map((feat, featIndex)=>{
                       return feat != "" && <li key={featIndex} className="text-gray-400 text-sm md:text-base flex justify-between">
                            <span className="flex gap-x-1">
                                {feat}
                            </span>
                            <input type="checkbox" onChange={filterProducts_handler} value={feat} defaultChecked={location.state.productsType == "features" || location.state.productsType == "all" ? location.state.other == feat ? true : false : false} className="w-6" name="features" id="" />
                        </li>
                    })
                :
                <></>
                }
                    </ul>

                    <span className="flex justify-between gap-y-4 w-full max-w-70% md:max-w-full bg-white h-max px-8 py-3 border-b text-base lg:text-lg text-gray-400 font-semibold">
                        <span>Tags</span>
                        <svg onClick={()=> toggleFilterTabs(3)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-8 fill-gray-400 px-2 filterBtns">
                            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                        </svg>
                    </span>
                    <ul className={`flex flex-col gap-y-4 w-full max-w-70% md:max-w-full bg-white h-max px-8 pt-6 pb-8 mb-1 hidden filterTab`}>
                    {state.tags?.length > 0 ? state.tags.map((tag, tagIndex)=>{
                       return <li key={tagIndex} className="text-gray-400 text-sm md:text-base flex justify-between">
                            <span className="flex gap-x-1">
                                {tag}
                            </span>
                            <input type="checkbox" onChange={filterProducts_handler} value={tag} defaultChecked={location.state.productsType == "tags" || location.state.productsType == "all" ? location.state.other == tag ? true : false : false} className="w-6" name="tags" id="" />
                        </li>
                    })
                    :
                    <></>
                }
                        
                    </ul>


                    <span className="flex justify-between gap-y-4 w-full max-w-70% md:max-w-full bg-white h-max px-8 py-3 border-b text-base lg:text-lg text-gray-400 font-semibold">
                        <span>Price</span>
                        <svg onClick={()=> toggleFilterTabs(4)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-8 fill-gray-400 px-2 filterBtns">
                            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                        </svg>
                    </span>
                    <ul className={`flex flex-col gap-y-4 w-full max-w-70% md:max-w-full bg-white h-max px-8 pt-6 pb-8 mb-1 hidden filterTab`}>
                        <li className="text-gray-400 text-sm md:text-base flex justify-between">
                            <span className="flex gap-x-1">
                                0 - 50
                            </span>
                            <input type="checkbox" onChange={filterProducts_handler} value={JSON.stringify({ gte: 0, lte: 50 })} className="w-6" name="price" id="" />
                        </li>
                        <li className="text-gray-400 text-sm md:text-base flex justify-between">
                            <span className="flex gap-x-1">
                                50 - 100
                            </span>
                            <input type="checkbox" onChange={filterProducts_handler} value={JSON.stringify({ gte: 51, lte: 100 })} className="w-6" name="price" id="" />
                        </li>
                        <li className="text-gray-400 text-sm md:text-base flex justify-between">
                            <span className="flex gap-x-1">
                                100 - 150

                            </span>
                            <input type="checkbox" onChange={filterProducts_handler} value={JSON.stringify({ gte: 101, lte: 150 })} className="w-6" name="price" id="" />
                        </li>
                        <li className="text-gray-400 text-sm md:text-base flex justify-between">
                            <span className="flex gap-x-1">
                                150 - 200
                            </span>
                            <input type="checkbox" onChange={filterProducts_handler} value={JSON.stringify({ gte: 151, lte: 200 })} className="w-6" name="price" id="" />
                        </li>
                        <li className="text-gray-400 text-sm md:text-base flex justify-between">
                            <span className="flex gap-x-1">
                                201 - 250
                            </span>
                            <input type="checkbox" onChange={filterProducts_handler} value={JSON.stringify({ gte: 201, lte: 250 })} className="w-6" name="price" id="" />
                        </li>
                    </ul>
                    <div className="min-h-50vh w-full max-w-70% md:max-w-full bg-white"></div>
                    <div className="flex justify-center items-center bg-white  min-h-20 sticky bottom-0 max-w-70% md:max-w-full bg-white" style={{ width: "100%", gap: "10%" }}>
                        <button className="w-5/12 text-sm md:text-base lg:text-lg font-bold text-gray-100 bg-red-700 py-3">CLEAR</button>

                        <button onClick={getInitialProductsFun} className="w-5/12 text-sm md:text-base lg:text-lg font-bold text-gray-100 bg-theme-blue-600 py-3">SUBMIT</button>

                    </div>
                </div>

                <div className="relative col-span-12 md:col-span-9 xl:col-span-10 min-w-full h-max min-h-full bg-gray-100 flex flex-col">
                    <div className="w-full flex sticky top-14 z-20 flex md:flex" ref={refFilterAndSearchBar}>
                        <div className="w-7/12 lg:w-9/12 h-14 bg-white flex flex-row items-center px-2">
                            <button onClick={() => {
                                refFilterAndSearchBar.current.classList.replace("flex", "hidden")
                                ref.current.classList.replace("hidden", "flex")
                            }} className="font-semibold flex md:hidden text-gray-400 text-sm md:text-base lg:text-lg px-2 lg:px-3 ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 fill-gray-400">
                                    <path d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" />
                                </svg>
                            </button>
                            <button onClick={() => document.querySelector(".sorting_sec").classList.toggle("hidden")} className="font-semibold text-gray-400 text-sm md:text-base lg:text-lg px-2 lg:px-3 ">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-6 fill-gray-400">
                                    <path d="M151.6 42.4C145.5 35.8 137 32 128 32s-17.5 3.8-23.6 10.4l-88 96c-11.9 13-11.1 33.3 2 45.2s33.3 11.1 45.2-2L96 146.3V448c0 17.7 14.3 32 32 32s32-14.3 32-32V146.3l32.4 35.4c11.9 13 32.2 13.9 45.2 2s13.9-32.2 2-45.2l-88-96zM320 480h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H320c-17.7 0-32 14.3-32 32s14.3 32 32 32zm0-128h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H320c-17.7 0-32 14.3-32 32s14.3 32 32 32zm0-128H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H320c-17.7 0-32 14.3-32 32s14.3 32 32 32zm0-128H544c17.7 0 32-14.3 32-32s-14.3-32-32-32H320c-17.7 0-32 14.3-32 32s14.3 32 32 32z" />
                                </svg>
                            </button>

                            <span className="sorting_sec hidden  md:flex w-8/12 w-max-w-8/12 overflow-x-auto px-2 py-2 md:w-full flex gap-x-4 absolute z-30 right-0 bg-white md:relative">
                                <button onClick={() => {
                                    !searchQueries.nameSort ? setSearchQuaries({ ...searchQueries, nameSort: "-1" }) : searchQueries.nameSort == "-1" ? setSearchQuaries({ ...searchQueries, nameSort: "1" }) : setSearchQuaries({ ...searchQueries, nameSort: "" })
                                    getInitialProductsFun({ sort: true, sortType: "nameSort" })
                                }} className="text-gray-400 text-sm flex items-center gap-x-1 shadow-sm py-1 px-3 rounded-full">
                                    <span>Name</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className={`h-3 fill-gray-400 ${searchQueries.nameSort == "-1" ? "rotate-180" : searchQueries.nameSort == "1" ? "rotate-0" : "rotate-90"}`}>
                                        <path d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3V480c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128z" />
                                    </svg>
                                </button>

                                <button onClick={() => {
                                    !searchQueries.ratingSort ? setSearchQuaries({ ...searchQueries, ratingSort: "-1" }) : searchQueries.ratingSort == "-1" ? setSearchQuaries({ ...searchQueries, ratingSort: "1" }) : setSearchQuaries({ ...searchQueries, ratingSort: "" })
                                    getInitialProductsFun({ sort: true, sortType: "ratingSort" })
                                }} className="text-gray-400 text-sm flex items-center gap-x-1 shadow-sm py-1 px-3 rounded-full">
                                    <span>Ratings</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className={`h-3 fill-gray-400 ${searchQueries.ratingSort == "-1" ? "rotate-180" : searchQueries.ratingSort == "1" ? "rotate-0" : "rotate-90"}`}>
                                        <path d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3V480c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128z" />
                                    </svg>
                                </button>

                                <button onClick={() => {
                                    !searchQueries.priceSort ? setSearchQuaries({ ...searchQueries, priceSort: "-1" }) : searchQueries.priceSort == "-1" ? setSearchQuaries({ ...searchQueries, priceSort: "1" }) : setSearchQuaries({ ...searchQueries, priceSort: "" })
                                    getInitialProductsFun({ sort: true, sortType: "priceSort" })
                                }} className="text-gray-400 text-sm flex items-center gap-x-1 shadow-sm py-1 px-3 rounded-full">
                                    <span>Price</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className={`h-3 fill-gray-400 ${searchQueries.priceSort == "-1" ? "rotate-180" : searchQueries.priceSort == "1" ? "rotate-0" : "rotate-90"}`}>
                                        <path d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3V480c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128z" />
                                    </svg>
                                </button>

                                <button onClick={() => {
                                    !searchQueries.dateSort ? setSearchQuaries({ ...searchQueries, dateSort: "-1" }) : searchQueries.dateSort == "-1" ? setSearchQuaries({ ...searchQueries, dateSort: "1" }) : setSearchQuaries({ ...searchQueries, dateSort: "" })
                                    getInitialProductsFun({ sort: true, sortType: "dateSort" })
                                }} className="text-gray-400 text-sm flex items-center gap-x-1 shadow-sm py-1 px-3 rounded-full">
                                    <span>Date</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className={`h-3 fill-gray-400 ${searchQueries.dateSort == "-1" ? "rotate-180" : searchQueries.dateSort == "1" ? "rotate-0" : "rotate-90"} `}>
                                        <path d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3V480c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128z" />
                                    </svg>
                                </button>

                            </span>



                        </div>
                        <div className="w-8/12 lg:w-3/12 h-14 bg-white border-gray-600 flex flex-row items-center px-2">
                            <Search 
                            searchQueries={searchQueries}
                            setSearchQuaries={setSearchQuaries}
                            fieldCss="shadow-md h-10 w-full  z-10 relative rounded-full"
                            inputCss="block w-full h-full px-6 rounded-full text-gray-400"
                            buttonCss="absolute top-0 right-0 h-full text-white grid place-items-center w-12 sm:w-12 md:w-12 lg:w-16 xl:w-16"
                            svgCss="size-7 sm:size-7 md:size-7 lg:size-8 xl:size-8 stroke-theme-blue-600"/>
                        </div>
                    </div>

                    <div style={{ alignContent:"start"}} className={`products md:min-h-80vh w-full grid ${state.loading ? "" : "p-3 md:p-4 lg:p-6 xl:p-6"} grid-cols-12 gap-2  sm:gap-3 md:gap-6  py-3 items-start justify-start md:py-4 lg:py-5 xl:py-6`}>
                        <div className="w-full col-span-12 pl-2">
                            <span className="fonnt-bold text-gray-400"> Result : {state.productsLength} products found</span>
                        </div>
                        {state.loading ?
                         <Spinner/>  
                        //  : state.products.length > 0 && cPostion != null &&
                         : state.products.length > 0 && 
                        state.products.map((v, i) => {
                            // return <Card5 key={i} cPostion={cPostion} product={v} />
                            return <Card5 key={i} product={v} />
                        })
                    }

                    </div>

                    <div className="pagination sticky">
                        <Pagination fun={(e)=> paginationFun({e, searchQueries, setSearchQuaries, dispatch})} activePage={searchQueries.pageNo} numbersOfButton={(state.productsLength / searchQueries.productsPerPage)} />
                    </div>

                </div>


            </div>
                {/* <StoresMap setCPosition={setCPosition} /> */}
        </div>
    )
}

export default memo(Products);