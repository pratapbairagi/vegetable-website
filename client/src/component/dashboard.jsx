import { memo, useEffect, useMemo, useState } from "react";
import Tabs from "./tabs"
import DashboardOrders from "./dashboardOrders";
import DashboardProducts from "./dashboardProducts";
import { useDispatch, useSelector } from "react-redux";
import { get_filter_and_sort_products } from "../redux/product/action";
import { NavLink, useLocation } from "react-router-dom";

const Dashboard = () => {
    const [tabList, setTabList] = useState([
        {
            label: "Dashboard",
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-5 sm:w-7 md:w-6 lg:w-7 xl:w-8">
                <path d="M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6H426.6c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z" />
            </svg>,
            fun : function(i){
                // tabList[i-1].icon.props.className = "text-theme-blue-600"
                // tabToggleFun({i, activeIcon : tabList[i-1]})
            
                tabToggleFun({i, activeTab : tabList[i-1]})

            },
            active : true,
            index : 1
        },
        {
            label: "Orders",
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 sm:w-6 md:w-5 lg:w-6 xl:w-7">
            <path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
        </svg>,
            fun : function(i){
                tabToggleFun({i, activeTab : tabList[i-1]})

            },
            active : false,
            index : 2
        },
        {
            label: "Users",
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-5 sm:w-7 md:w-6 lg:w-7 xl:w-8">
            <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" />
        </svg>,
            fun : function(i){
                tabToggleFun({i, activeTab : tabList[i-1]})

            },
            active : false,
            index : 3
        },
        {
            label: "Admins",
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 sm:w-7 md:w-6 lg:w-7 xl:w-8">
            <path d="M144 16c0-8.8-7.2-16-16-16s-16 7.2-16 16V32H96c-8.8 0-16 7.2-16 16s7.2 16 16 16h16V96H60.2C49.1 96 40 105.1 40 116.2c0 2.5 .5 4.9 1.3 7.3L73.8 208H72c-13.3 0-24 10.7-24 24s10.7 24 24 24h4L60 384H196L180 256h4c13.3 0 24-10.7 24-24s-10.7-24-24-24h-1.8l32.5-84.5c.9-2.3 1.3-4.8 1.3-7.3c0-11.2-9.1-20.2-20.2-20.2H144V64h16c8.8 0 16-7.2 16-16s-7.2-16-16-16H144V16zM48 416L4.8 473.6C1.7 477.8 0 482.8 0 488c0 13.3 10.7 24 24 24H232c13.3 0 24-10.7 24-24c0-5.2-1.7-10.2-4.8-14.4L208 416H48zm288 0l-43.2 57.6c-3.1 4.2-4.8 9.2-4.8 14.4c0 13.3 10.7 24 24 24H488c13.3 0 24-10.7 24-24c0-5.2-1.7-10.2-4.8-14.4L464 416H336zM304 208v51.9c0 7.8 2.8 15.3 8 21.1L339.2 312 337 384H462.5l-3.3-72 28.3-30.8c5.4-5.9 8.5-13.6 8.5-21.7V208c0-8.8-7.2-16-16-16H464c-8.8 0-16 7.2-16 16v16H424V208c0-8.8-7.2-16-16-16H392c-8.8 0-16 7.2-16 16v16H352V208c0-8.8-7.2-16-16-16H320c-8.8 0-16 7.2-16 16zm80 96c0-8.8 7.2-16 16-16s16 7.2 16 16v32H384V304z" />
        </svg>,
            fun : function(i){
                tabToggleFun({i, activeTab : tabList[i-1]})

            },
            active : false,
            index : 4
        },
        {
            label: "Vegetables",
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 sm:w-7 md:w-6 lg:w-7 xl:w-8">
            <path d="M428.3 3c11.6-6.4 26.2-2.3 32.6 9.3l4.8 8.7c19.3 34.7 19.8 75.7 3.4 110C495.8 159.6 512 197.9 512 240c0 18.5-3.1 36.3-8.9 52.8c-6.1 17.3-28.5 16.3-36.8-.1l-11.7-23.4c-4.1-8.1-12.4-13.3-21.5-13.3H360c-13.3 0-24-10.7-24-24V152c0-13.3-10.7-24-24-24l-17.1 0c-21.3 0-30-23.9-10.8-32.9C304.7 85.4 327.7 80 352 80c28.3 0 54.8 7.3 77.8 20.2c5.5-18.2 3.7-38.4-6-55.8L419 35.7c-6.4-11.6-2.3-26.2 9.3-32.6zM171.2 345.5L264 160l40 0v80c0 26.5 21.5 48 48 48h76.2l23.9 47.8C372.3 443.9 244.3 512 103.2 512H44.4C19.9 512 0 492.1 0 467.6c0-20.8 14.5-38.8 34.8-43.3l49.8-11.1c37.6-8.4 69.5-33.2 86.7-67.7z" />
        </svg>,
            fun : function(i){
                // tabList[i-1].active = true;
                tabToggleFun({i, activeTab : tabList[i-1]})

                
            },
            active : false,
            index : 5
        },
        {
            label: "Sales",
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 sm:w-7 md:w-6 lg:w-7 xl:w-8">
            <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
        </svg>,
            fun : function(i){
                tabToggleFun({i, activeTab : tabList[i-1]})
            },
            active : false,
            index : 6
        }
    ])
    // const {products} = useSelector(state => state.product)
  const { auth, user, error } = useSelector(state => state.user)
    // const dispatch = useDispatch()
    const location = useLocation()

   

    const tabToggleFun = (i) => {
        setTabList([...tabList.map(v=> v.index === i.i ? {...v, active : true} : {...v, active : false} )])
    }

  

    // const [searchProduct, setSearchProduct] = useState({
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
    //     productsPerPage: 6,
    //     pageNo: 1

    // })
    // let x = 0
    // const fetchProducts = useMemo(()=>{
    //     // if( !products.length && x == 1 && location.state == null){
    //         if( !products.length && x == 1 ){
    //         console.log("previous list 1")
    //         x++
    //         dispatch(get_filter_and_sort_products({title : searchProduct.title, category : searchProduct.category, price : searchProduct.price, tags : searchProduct.tags, features : searchProduct.features,
    //             sold : searchProduct.sold,
    //              nameSort : searchProduct.nameSort, 
    //              dateSort : searchProduct.dateSort,
    //             ratingSort : searchProduct.ratingSort, 
    //             priceSort : searchProduct.priceSort, 
    //             productsPerPage : searchProduct.productsPerPage, 
    //             pageNo : searchProduct.pageNo}))
    //     }

       
    // },[dispatch])

    // useEffect(()=>{
    //     if(!products.length){
    //         fetchProducts()
    //     }
    // },[products, location.state])

    useEffect(()=>{
        if( location.state != null){
            // dispatch(get_filter_and_sort_products({title : searchProduct.title, category : searchProduct.category, price : searchProduct.price, tags : searchProduct.tags, features : searchProduct.features,
            //     sold : searchProduct.sold,
            //     nameSort : searchProduct.nameSort, 
            //     dateSort : searchProduct.dateSort,
            //    ratingSort : searchProduct.ratingSort, 
            //    priceSort : searchProduct.priceSort, 
            //    productsPerPage : searchProduct.productsPerPage, 
            //    pageNo : searchProduct.pageNo}))

            setTabList([...tabList.map(v=> v.index === location.state.i ? {...v, active : true} : {...v, active : false} )]);
    }
    },[ location.state])

    // console.log(products)

    
    return (
        <div className=" bg-gray-100 w-full max-w-screen z-30 top-0 left-0 overflow-y-hidden max-h-screen min-h-screen h-max min-h-screen">
            <div className="w-full grid grid-cols-12 px-1 py-1 gap-x-2">
                <div className="w-full scroll-overflow-hidden overflow-x-auto md:overflow-x-hidden md:col-span-4 lg:col-span-4 xl:col-span-3 h-max md:h-full bg-white fixed  md:sticky bottom-0 left-0 md:bottom-initial md:top-0 order-2 md:order-1 ">
                    <h4 className="w-full hidden md:flex text-3xl font-extrabold font-nunito bg-theme-blue-600 text-gray-100 md:px-14 lg:px-14 xl:px-16 md:py-4 lg:py-5 xl:py-5"> <NavLink to="/"> Website </NavLink></h4>
                    <ul className="flex relative z-20 flex-row md:flex-col gap-y-4 justify-between md:mt-8 lg:mt-10 xl:mt-12  md:px-4">
                        
                        {tabList.map((v,i)=>{
                            return <Tabs key={v.index} icon={v.icon} label={v.label} active={v.active} fun={v.fun} index={v.index}/>
                        })}
                        {/* <li className="flex min-w-20 flex-col md:flex-row gap-x-5 lg:gap-x-7 xl:gap-x-8 items-center justify-center md:justify-start gap-y-1 text-gray-400 font-semibold fill-gray-400  py-2 md:py-3 px-2 md:px-3 cursor-pointer font-nunito hover:text-theme-blue-600 hover:fill-theme-blue-600 hover:md:border-r-4 hover:md:border-theme-blue-600 hover:border-t-2 hover:border-theme-blue-600 hover:md:border-t-0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-4 sm:w-5 md:w-6 lg:w-7 xl:w-8">
                                <path d="M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6H426.6c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z" />
                            </svg>
                            <span className=" text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl md:mt-1">Dashboard</span>
                        </li>
                        <li className="flex min-w-20 flex-col md:flex-row gap-x-5 lg:gap-x-7 xl:gap-x-8 items-center justify-center md:justify-start gap-y-1 text-gray-400 font-semibold fill-gray-400  py-2 md:py-3 px-2 md:px-3 cursor-pointer font-nunito hover:text-theme-blue-600 hover:fill-theme-blue-600 hover:md:border-r-4 hover:md:border-theme-blue-600 hover:border-t-2 hover:border-theme-blue-600 hover:md:border-t-0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-3 sm:w-4 md:w-5 lg:w-6 xl:w-7">
                                <path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
                            </svg>
                            <span className=" text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl md:mt-1">Orders</span>
                        </li>
                        <li className="flex min-w-20 flex-col md:flex-row gap-x-5 lg:gap-x-7 xl:gap-x-8 items-center justify-center md:justify-start gap-y-1 text-gray-400 font-semibold fill-gray-400  py-2 md:py-3 px-2 md:px-3 cursor-pointer font-nunito hover:text-theme-blue-600 hover:fill-theme-blue-600 hover:md:border-r-4 hover:md:border-theme-blue-600 hover:border-t-2 hover:border-theme-blue-600 hover:md:border-t-0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-4 sm:w-5 md:w-6 lg:w-7 xl:w-8">
                                <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" />
                            </svg>
                            <span className=" text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl md:mt-1">Users</span>
                        </li>
                        <li className="flex min-w-20 flex-col md:flex-row gap-x-5 lg:gap-x-7 xl:gap-x-8 items-center justify-center md:justify-start gap-y-1 text-gray-400 font-semibold fill-gray-400  py-2 md:py-3 px-2 md:px-3 cursor-pointer font-nunito hover:text-theme-blue-600 hover:fill-theme-blue-600 hover:md:border-r-4 hover:md:border-theme-blue-600 hover:border-t-2 hover:border-theme-blue-600 hover:md:border-t-0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 sm:w-5 md:w-6 lg:w-7 xl:w-8">
                                <path d="M144 16c0-8.8-7.2-16-16-16s-16 7.2-16 16V32H96c-8.8 0-16 7.2-16 16s7.2 16 16 16h16V96H60.2C49.1 96 40 105.1 40 116.2c0 2.5 .5 4.9 1.3 7.3L73.8 208H72c-13.3 0-24 10.7-24 24s10.7 24 24 24h4L60 384H196L180 256h4c13.3 0 24-10.7 24-24s-10.7-24-24-24h-1.8l32.5-84.5c.9-2.3 1.3-4.8 1.3-7.3c0-11.2-9.1-20.2-20.2-20.2H144V64h16c8.8 0 16-7.2 16-16s-7.2-16-16-16H144V16zM48 416L4.8 473.6C1.7 477.8 0 482.8 0 488c0 13.3 10.7 24 24 24H232c13.3 0 24-10.7 24-24c0-5.2-1.7-10.2-4.8-14.4L208 416H48zm288 0l-43.2 57.6c-3.1 4.2-4.8 9.2-4.8 14.4c0 13.3 10.7 24 24 24H488c13.3 0 24-10.7 24-24c0-5.2-1.7-10.2-4.8-14.4L464 416H336zM304 208v51.9c0 7.8 2.8 15.3 8 21.1L339.2 312 337 384H462.5l-3.3-72 28.3-30.8c5.4-5.9 8.5-13.6 8.5-21.7V208c0-8.8-7.2-16-16-16H464c-8.8 0-16 7.2-16 16v16H424V208c0-8.8-7.2-16-16-16H392c-8.8 0-16 7.2-16 16v16H352V208c0-8.8-7.2-16-16-16H320c-8.8 0-16 7.2-16 16zm80 96c0-8.8 7.2-16 16-16s16 7.2 16 16v32H384V304z" />
                            </svg>
                            <span className=" text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl md:mt-1">Admins</span>
                        </li>
                        <li className="flex min-w-20 flex-col md:flex-row gap-x-5 lg:gap-x-7 xl:gap-x-8 items-center justify-center md:justify-start gap-y-1 text-gray-400 font-semibold fill-gray-400  py-2 md:py-3 px-2 md:px-3 cursor-pointer font-nunito hover:text-theme-blue-600 hover:fill-theme-blue-600 hover:md:border-r-4 hover:md:border-theme-blue-600 hover:border-t-2 hover:border-theme-blue-600 hover:md:border-t-0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 sm:w-5 md:w-6 lg:w-7 xl:w-8">
                                <path d="M428.3 3c11.6-6.4 26.2-2.3 32.6 9.3l4.8 8.7c19.3 34.7 19.8 75.7 3.4 110C495.8 159.6 512 197.9 512 240c0 18.5-3.1 36.3-8.9 52.8c-6.1 17.3-28.5 16.3-36.8-.1l-11.7-23.4c-4.1-8.1-12.4-13.3-21.5-13.3H360c-13.3 0-24-10.7-24-24V152c0-13.3-10.7-24-24-24l-17.1 0c-21.3 0-30-23.9-10.8-32.9C304.7 85.4 327.7 80 352 80c28.3 0 54.8 7.3 77.8 20.2c5.5-18.2 3.7-38.4-6-55.8L419 35.7c-6.4-11.6-2.3-26.2 9.3-32.6zM171.2 345.5L264 160l40 0v80c0 26.5 21.5 48 48 48h76.2l23.9 47.8C372.3 443.9 244.3 512 103.2 512H44.4C19.9 512 0 492.1 0 467.6c0-20.8 14.5-38.8 34.8-43.3l49.8-11.1c37.6-8.4 69.5-33.2 86.7-67.7z" />
                            </svg>
                            <span className=" text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl md:mt-1">Vegetables</span>
                        </li>
                        <li className="flex min-w-20 flex-col md:flex-row gap-x-5 lg:gap-x-7 xl:gap-x-8 items-center justify-center md:justify-start gap-y-1 text-gray-400 font-semibold fill-gray-400  py-2 md:py-3 px-2 md:px-3 cursor-pointer font-nunito hover:text-theme-blue-600 hover:fill-theme-blue-600 hover:md:border-r-4 hover:md:border-theme-blue-600 hover:border-t-2 hover:border-theme-blue-600 hover:md:border-t-0">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 sm:w-5 md:w-6 lg:w-7 xl:w-8">
                                <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                            </svg>
                            <span className=" text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl md:mt-1">Sales</span>
                        </li> */}
                    </ul>
                </div>
                <div className="col-span-12 overflow-x-hidden overflow-y-auto h-screen max-h-screen md:col-span-8 lg:col-span-8 xl:col-span-9 order-1 md:order-2">
                    <div className="col-span-12 flex items-center py-1 bg-white px-2 md:px-2 lg:px-3 sticky z-20 top-0">
                    <NavLink to="/" className="text-theme-blue-600 flex md:hidden mr-3 md:mr-4 ml-1 md:ml-2 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-5 md:w-6 lg:w-7 fill-gray-300">
                                <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
                            </svg>
                            </NavLink>
                        <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold text-theme-blue-600 py-2 sm:py-3 md:py-4 lg:py-5">Hello, {auth &&<span className="font-semibold text-gray-500 capitalize">{user.first_name} {user.last_name}</span> } </div>
                        <div className="flex ml-auto  pr-2 md:pr-4 lg:pr-5 xl:pr-6 gap-x-4 sm:gap-x-5 md:gap-x-6 lg:gap-x-7 xl:gap-x-8">
                            <NavLink to="/profile" className="text-theme-blue-600 font-semibold p-1  border rounded-full ">
                                <img src="/images/profile_image.png" className="w-8 sm:w-9 md:w-10 lg:w-12 rounded-full" alt="" />
                            </NavLink>
                            

                        </div>
                    </div>
                    {tabList.map((v,i)=>{ return <div key={v.index} className={`h-max w-full min-h-96 ${ v.active ? "grid" : "hidden"}  grid-cols-12 gap-x-2 sm:gap-x-3 md:gap-x-4 lg:gap-x-5 p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6`}>
                       
                             {/* <div  className="col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2 aspect-video bg-white">
                                {v.label}
                             </div> */}

                             {v.label == "Orders" && <DashboardOrders/>}
                             {/* {v.label == "Vegetables" && <DashboardProducts searchProduct={searchProduct} setSearchProduct={setSearchProduct} dispatch={dispatch} products={products}/>} */}
                             {v.label == "Vegetables" && <DashboardProducts/>}
                        
                        {/* <div className="col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2 aspect-video bg-white"></div>
                        <div className="col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2 aspect-video bg-white"></div>
                        <div className="col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2 aspect-video bg-white"></div>
                        <div className="col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2 aspect-video bg-white"></div>
                        <div className="col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2 aspect-video bg-white"></div> */}

                    </div> })}
                </div>

            </div>

        </div>
    )
}

export default memo(Dashboard);