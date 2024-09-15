import { NavLink, useLocation } from "react-router-dom"
import Pagination from "./pagination"
import { useDispatch, useSelector } from "react-redux"
import { paginationFun } from "./paginationFun"
import { delete_product } from "../redux/product/action"
import { memo, useCallback, useEffect, useRef, useState } from "react"
import useSearchQueries from "./customHook/useSearchQueries"
import {get_sellers, get_users} from "../redux/user/action"




// const DashboardProducts = ({products, searchQueries, setSearchQueries, dispatch}) =>{
    const DashboardSellers = ({type="Sellers"}) =>{
    const {user, sellers, loading, success, error, message, totalSellersLength} = useSelector(state => state.user)
    const dispatch = useDispatch()
    const location = useLocation()
    
    const [searchQueries, setSearchQueries] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: 0,
        search:"",
        role: "",
        nameSort: "",
        reviewSort: "",
        dateSort: "",
        usersPerPage: 6,
        pageNo: 1,
        limit: 5
    });

    // const [searchQueries, setSearchQueries] = useSearchQueries()
    let userSearchInputRef = useRef()
    let x = 0
    const fetchProducts = ()=> {
        // if( !products.length && x == 1 && location.state == null){
            // if( !users.length < 1 && x == 0 ){
            x++

            dispatch(get_sellers({pageNo : searchQueries.pageNo, limit : searchQueries.limit, search : searchQueries.search, type}))
            // }

       
    }
    
    const submitSearch_fun = (e) => {
        setSearchQueries(prev=> ({...prev, search : e, pageNo : 1}))
    }

    const submitSearchClear_fun = () => {
        dispatch(get_sellers({pageNo : searchQueries.pageNo, limit : searchQueries.limit, search : ""}))
    }
    
    useEffect(()=>{
        fetchProducts()
    },[searchQueries.pageNo, searchQueries.search, type])

    console.log("seller")

    return (
        <div className="w-full col-span-12 max-w-full h-max min-h-screen max-w-full flex flex-col md:mb-0 ">
            
            <h6 className=" w-max text-base md:text-xl lg:text-lg xl:text-xl font-bold text-gray-600 mt-3 md:mt-4 lg:mt-5 xl:mt-6">Users List</h6>
            <div className=" w-full text-base md:text-xl lg:text-lg xl:text-xl font-bold text-gray-600 flex justify-between bg-white py-2 px-2 md:px-4 md:py-3 mt-2 sm:mt-3 md:mt-3 lg:mt-4 xl:mt-4">
                <fieldset className=" h-8 sm:h-8 md:h-10 lg:h-10 xl:h-12 w-[60%] md:w-[35%]  sm-left-125 md:left-0 z-0 rounded left-0 relative" >
                    <input ref={userSearchInputRef} className="block w-full h-full px-6 rounded text-sm bg-gray-100" type="text" placeholder="Search for..." name="" id="" />
                    <div className="flex h-full items-center w-max absolute top-0 right-0">
                    <button onClick={()=> submitSearch_fun(userSearchInputRef.current.value)} className=" h-full text-white grid place-items-center w-10 sm:w-10 md:w-12">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} className="size-6 sm:size-6 md:size-6 lg:size-7 xl:size-7 stroke-theme-blue-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>
                    <button onClick={()=> submitSearchClear_fun()} className=" h-full text-white grid place-items-center text-[13px] lg:text-[15px] w-10 sm:w-10 md:w-12 lg:w-14">
                        ❌
                    </button>
                    </div>
                </fieldset>

                {/* <NavLink to="/add/vegetable" className="md:min-w-32 bg-theme-blue-600 px-4 text-gray-100 h-8 sm:h-8 md:h-10 lg:h-10 xl:h-12 flex flex-nowrap items-center justify-center">Add New</NavLink> */}


            </div>

            <div className="w-full max-w-screen overflow-x-auto  scroll-overflow-hidden max-h-60vh">
                <table className="w-max min-w-full overflow-x-auto min-w-full  max-h-50vh divide-y divide-gray-200 ">
                    <thead className="sticky top-0  bg-white w-max">
                        <tr className="flex gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-10 xl:gap-x-14">
                            <th className="px-2 w-28 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SELLER ID</th>
                            <th className="px-2 w-28 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">SELLER NAME</th>
                            <th className="px-2 py-3 flex items-center w-40 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">EMAIL</th>
                            <th className="px-2 py-3 flex items-center gap-x-2 w-24 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                ROLE
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                            </th>
                            <th className="px-2 py-3 flex items-center gap-x-2 w-24 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                PHONE
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                            </th>
                            <th className="px-2 py-3 flex items-center gap-x-2 w-24 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                REVIEWS
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </th>
                            <th className="px-2 py-3 flex items-center w-24 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                            {/* Add more header columns as needed */}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 h-36 max-h-36 w-max">
                        {sellers.map((v, i) => {
                            return <tr key={i} className="flex gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-10 xl:gap-x-14">
                                <td style={{textWrap:"wrap", wordBreak:"break-all"}} className="px-2 w-28 py-4 whitespace-wrap text-2xs sm:text-xs md:text-sm text-gray-600">{v._id}</td>
                                <td className="px-2 w-28 py-4 whitespace-nowrap text-2xs sm:text-xs md:text-sm text-gray-600 capitalize">{`${v.first_name} ${v.last_name}`}</td>
                                <td className={`px-2 w-40 py-4 whitespace-wrap text-2xs sm:text-xs md:text-sm `}>{v.email}</td>
                                <td className={`px-2 w-24 py-4 whitespace-wrap text-2xs sm:text-xs md:text-sm text-gray-600 ${v.role === "admin" ? "text-red-600" : "text-blue-600"}`}>{v.role}</td>
                                <td className="px-2 w-24 py-4 whitespace-wrap text-2xs sm:text-xs md:text-sm text-gray-600">{v.phone}</td>
                                <td className="px-2 w-24 py-4 whitespace-wrap text-2xs sm:text-xs md:text-sm text-gray-600">{v.reviews.length}</td>
                                <td className="px-2 w-24 py-4 whitespace-nowrap flex items-center gap-x-1 relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 lg:w-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>

                                    <svg onClick={()=>{ 
                                        document.getElementById(`${v._id+i}`).classList.contains("hidden") ?
                                        document.getElementById(`${v._id+i}`).classList.replace("hidden", "flex")
                                        :
                                        document.getElementById(`${v._id+i}`).classList.replace("flex", "hidden")
                                        
                                        }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 lg:w-4 cursor-pointer">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>

                                    <ul className="border absolute top-12 right-4 py-3 hidden flex-col z-10 bg-white" id={`${v._id+i}`}>
                                        <NavLink to={`/vegetable/edit/${v._id}`} onClick={()=> document.getElementById(`${v._id+i}`).classList.replace("flex", "hidden")} className="text-gray-500 font-semibold w-full border-b py-1 px-8 cursor-pointer">Edit</NavLink>
                                        <li onClick={()=>{ 
                                            dispatch(delete_product(v._id))
                                            document.getElementById(`${v._id+i}`).classList.replace("flex", "hidden")
                                            }} className="text-gray-500 font-semibold w-full py-1 px-8 cursor-pointer">Delete</li>
                                    </ul>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
            {/* <Pagination fun={(e)=> paginationFun({e, searchQueries : searchQueries, setSearchQuaries : setSearchQueries, dispatch})} activePage={searchQueries.pageNo} numbersOfButton={(totalUsersLength / searchQueries.limit)} /> */}
            <Pagination fun={(e)=> setSearchQueries(prev=> ({...prev, pageNo : e})) } activePage={searchQueries.pageNo} numbersOfButton={(totalSellersLength / searchQueries.limit)} />

        </div>
    )
}

export default memo(DashboardSellers);