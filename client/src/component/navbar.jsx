import React, { useRef, useState } from "react";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Search from "./search";
import { logout } from "../redux/user/action";


const Navbar = () => {
    const location = useLocation();
    const {cart} = useSelector(state => state.cart)
    const {user, auth} = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [isOpenMainMenu, setIsOpenMainMenu] = useState(false);

    const navLinksActivate = (e) => {
        let links = document.querySelectorAll(".nav-link")
        links.forEach((v,i)=>{
            if(e === i){
                v.children[0].classList.replace("md:border-white", "md:border-blue-600")
                if(v.children[0].classList.contains("bg-white")){
                    v.children[0].classList.replace("bg-white", "bg-blue-600")
                    v.children[0].classList.replace("text-blue-600", "text-white")
                }
                else{
                    v.children[0].classList.add("bg-white")
                    v.children[0].classList.add("text-blue-600")
                }
                // md:border-white md:text-blue-600
                // v.children[0].classList.add("text-white")
            }
            else{
                v.children[0].classList.replace("md:border-blue-600", "md:border-white")
                v.children[0].classList.replace("bg-blue-600", "bg-white")
                v.children[0].classList.replace("text-white", "text-blue-600")
                // v.children[0].classList.add("text-theme-blue-600")
            }
        })
        setIsOpenMainMenu(false)
    }

    console.log("user ", user)
    

    return (
        <>
            <header className={`text-white py-3 sm:py-3 md:py-2 lg:py-1.5 xl:py-1 ${location.pathname === "/dashboard" || location.pathname === "/products" || location.pathname === "/shipping-info" || location.pathname === "/payment-info" || location.pathname === "/order-placed" ? "hidden" : "sticky lg:fixed lg:w-full lg:bg-white lg:shadow"} z-20 top-0 shadow`}>
                <div className=" mx-auto grid grid-cols-12 gap-y-2 justify-between items-center px-4 lg:max-h-12">
                    <div className=" flex justify-start col-span-3 font-bold md:mb-0 relative z-0">
                        <NavLink to="/" className="text-theme-blue-600 py-0.5 sm:py-0.5 md:py-1 lg:py-1.5 xl:py-2 text-base sm:text-base md:text-xl lg:text-2xl rounded">Website</NavLink>
                    </div>

                    <nav onClick={() => setIsOpenMainMenu(false)} className={`w-full sm:w-full md:w-auto md:col-span-9 ${isOpenMainMenu ? "flex sm:flex" : "hidden sm:hidden"} md:flex justify-end fixed sm:fixed md:relative h-full z-30 bottom-0 right-0  bg-gray-100 md:bg-white sm:bg-gray-100`} style={{ background: `${isOpenMainMenu ? "rgba(192, 191, 191, 0.347)" : "transparent"}` }}>


                        <ul onClick={(e) => e.stopPropagation()} className="flex justify-start sm:justify-start md:justify-end flex-col md:items-center sm:flex-col md:flex-row gap-y-2  w-5/6 sm:w-5/6 md:w-auto bg-white sm:bg-white md:bg-white h-full sm:h-full md:h-auto py-8 sm:py-8 px-3 sm:px-3 md:px-0 md:py-0 relative">

                            <button onClick={() => setIsOpenMainMenu(false)} className="block sm:block md:hidden absolute left-3 top-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 stroke-theme-blue-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <hr className="mt-5 mt-6 md:hiddenn" />

                            <li onClick={()=> navLinksActivate(0)} className=" mt-5 sm-mt-6 md:mt-0 p-0 flex items-center justify-center nav-link w-full md:w-max ">
                                <NavLink to="/" className="w-full text-start sm:text-start md:text-center sm:w-full md:w-auto text-base sm:text-base md:text-lg lg:text-xl border-0 md:border-b-2 md:border-blue-600 md:text-blue-600 text-white bg-blue-600 md:bg-white  hover:border-b-2 hover:border-b-2 hover:border-blue-600 font-semibold px-3 py-0.5">Home</NavLink>
                            </li>
                            <li onClick={()=> navLinksActivate(1)} className="relative flex items-center justify-center nav-link w-full md:w-max px-0.5">
                                <NavLink to="/products" state={{productsType : "all", other : "all"}} className="w-full text-start sm:text-start md:text-center sm:w-full md:w-auto text-base sm:text-base md:text-lg lg:text-x border-0 md:border-b-2 md:border-white md:text-blue-600 md:bg-white hover:border-blue-600 font-semibold text-theme-blue-600 px-3 py-0.5" style={{transition:"all ease 0.1s"}}>Vegetables</NavLink>
                                
                            </li>
                            {/* <li onClick={()=> navLinksActivate(2)} className="relative flex items-center justify-center nav-link w-full md:w-max px-0.5">
                                <NavLink className="w-full text-start sm:text-start md:text-center sm:w-full md:w-auto text-base sm:text-base md:text-lg lg:text-x border-0 md:border-b-2 md:border-white md:text-blue-600 md:bg-white hover:border-blue-600 font-semibold text-theme-blue-600 px-3 py-0.5" >Menu</NavLink>
                            </li> */}
                            <li onClick={()=> navLinksActivate(2)} className="nav-link flex items-center justify-center w-full md:w-max px-0.5">
                                <button className="w-full text-start sm:text-start md:text-center sm:w-full md:w-auto text-base sm:text-base md:text-lg lg:text-x border-0 md:border-b-2 md:border-white md:text-blue-600 md:bg-white hover:border-blue-600 font-semibold text-theme-blue-600 px-3 py-0.5">About</button>
                            </li>
                            <li onClick={()=> navLinksActivate(3)} className="nav-link flex items-center justify-center w-full md:w-max">
                                <button className="w-full text-start sm:text-start md:text-center sm:w-full md:w-auto text-base sm:text-base md:text-lg lg:text-x border-0 md:border-b-2 md:border-white md:text-blue-600 md:bg-white hover:border-blue-600 font-semibold text-theme-blue-600 px-3 py-0.5">Contact</button>
                            </li>

                            <button onClick={() =>{ 
                            navigate("/cart")
                            setIsOpenMainMenu(false)
                            }
                            } className=" relative md:w-16 lg:w-20 xl:w-20 hidden md:block mx-2">
                          <span className="block md:hidden"> 
                            <span className={`absolute flex justify-center items-center rounded-full w-5 md:w-6 lg:w-7 top-0 right-0 md:right-1.5 lg:right-0 lg:left-4 aspect-square text-white text-2xs md:text-xs lg:text-xs font-semibold ${cart.length > 0 ? "bg-green-600" : "bg-red-600"}`} style={{ paddingBottom:"0.7px"}}>{ cart.reduce((accum, cv)=> accum + cv.qty, 0)/100}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 sm:size-7 md:size-8 lg:size-9 xl:size-10 text-theme-blue-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                            </span>
                            <span className="flex items-center rounded w-full text-start sm:text-start md:text-center sm:w-full md:w-auto text-base sm:text-base md:text-lg lg:text-x font-semibold text-white bg-theme-blue-600 px-3 py-0.5 pb-1">
                                Cart
                            <span className={`flex justify-center items-center px-1 md:w-7 lg:w-8 min-h-90% max-h-90% ml-2 aspect-square md:text-sm lg:text-base font-semibold ${cart.length > 0 ? "text-white" : " text-white"}`}>{ cart.reduce((accum, cv)=> accum + cv.qty, 0)/100}</span>

                            </span>
                        </button>

                            <div className="w-11/12 h-16 grid grid-cols-12 md:hidden absolute bottom-5 bg-gray-100 md:bg-white rounded">
                                <div className="col-span-3 flex items-center justify-center border-r">
                                   <NavLink onClick={()=>{
                                    setIsOpenMainMenu(false)
                                   }} to="/profile"> 
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} className="w-14 stroke-gray-300">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg> 
                                    </NavLink>

                                </div>
                                <div className="col-span-8 flex items-center text-gray-500">
                                  { !auth ?  <><NavLink to="/login" onClick={()=> {
                                        setIsOpenMainMenu(false)
                                    }} 
                                    className="text-theme-blue-600 font-semibold mx-1 ml-2">Login</NavLink>
                                     / <NavLink to="/signup" className="text-theme-blue-600 font-semibold mx-1">Sign Up</NavLink> </>
                                     :

                                     <><NavLink onClick={()=> setIsOpenMainMenu(false)} to="/profile" 
                                    className="text-theme-blue-600 font-semibold mx-1 ml-2 capitalize">{auth && user?.first_name} { auth && user?.last_name}</NavLink>
                                    /<button

                                    onClick={()=>{
                                        dispatch(logout())
                                        setIsOpenMainMenu(false)}}
                                    className="text-theme-blue-600 font-semibold mx-1 ml-2">Logout</button> </>
                                }
                                </div>
                            </div>
                        </ul>
                    </nav>

                    <div className=" md:order-2 col-span-12 sm:col-span-12 md:col-span-8 flex flex-row justify-end sm:justify-end md:justify-start fixed sm:fixed md:relative bottom-6 sm:bottom-6 md:bottom-0 w-3/4">
                        <Search 
                        fieldCss="shadow-md h-10 sm:h-10 md:h-10 lg:h-12 xl:h-12 w-full sm:w-full md:w-3/4 lg:w-2/4  sm-left-125 md:left-0 z-10 relative rounded-full"
                        inputCss="block w-full h-full px-6 rounded-full text-gray-400"
                        buttonCss="absolute top-0 right-0 h-full text-white grid place-items-center w-12 sm:w-12 md:w-12 lg:w-16 xl:w-16"
                        svgCss="size-7 sm:size-7 md:size-7 lg:size-8 xl:size-8 stroke-theme-blue-600" />
                    </div>

                    <div className="order-2 ms:order-2 md:order-3 col-span-9 sm:col-span-19 md:col-span-4 flex justify-end gap-x-1 sm:gap-x-2.5 md:gap-x-3.5 lg:gap-x-4 xl:gap-x-5">



                        <button onClick={() =>{ 
                            navigate("/cart")
                            setIsOpenMainMenu(false)
                            }
                            } className="w-8 relative sm:w-10 block md:hidden">
                           <span className={`absolute flex justify-center items-center rounded-full w-5 md:w-6 lg:w-7 top-0 right-0 md:right-1.5 lg:right-0.5 aspect-square text-white text-2xs md:text-xs lg:text-sm font-semibold ${cart.length > 0 ? "bg-green-600" : "bg-red-600"}`} style={{ paddingBottom:"0.5px"}}>{ cart.reduce((accum, cv)=> accum + cv.qty, 0)/100}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 sm:size-7 md:size-8 lg:size-9 xl:size-10 text-theme-blue-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                        </button>

                        <NavLink to={`${auth ? "/profile" : "/login"}`} onClick={() => {
                            setIsOpenMainMenu(false)}
                            } className="w-8 sm:w-10 md:w-10 lg:w-10 xl:w-10 aspect-square md:bg-white md:shadow flex justify-center items-center md:p-2 rounded-full mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 sm:w-7 md:w-7 lg:w-8 xl:w-9 text-theme-blue-600 md:text-gray-300 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                        </NavLink>

                        <button onClick={() =>{
                            setIsOpenMainMenu(false)
                             setIsOpenMainMenu(true)}
                             } className="w-8 sm:w-10 md:w-12 lg:w-12 xl:w-12 block sm:flex md:hidden bg-gray-100 aspect-square flex items-center justify-center bg-theme-blue-600 text-gray-100 rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 sm:size-7 md:size-8 lg:size-9 xl:size-10">
                             <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                            </svg>
                        </button>

                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar;