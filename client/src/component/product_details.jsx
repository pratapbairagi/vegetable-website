import { useNavigate, useParams } from "react-router-dom"
import Card4 from "./card4";
import Review_card from "./review_card";
import { memo, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProduct, get_product } from "../redux/product/action";
import { cart_qty } from "../redux/cart/action";
import Spinner from "./spinner";
import StoresMap from "./map";
import { distanceAction, dPosition } from "../redux/map/action";
import ReactStars from "react-rating-stars-component";
import { get_order } from "../redux/order/action";
import { add_review, get_reviews } from "../redux/review/action";
import StarRatingComponent from "react-star-rating-component";

const Product_details = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { product, loading } = useSelector(state => state.product)
    const { cart } = useSelector(state => state.cart)
    const { order } = useSelector(state => state.order)
    const { review, reviews } = useSelector(state => state.review)
    const { current_position, destination_position, distance } = useSelector(state => state.mapCoords)

    const [reviewData, setReviewData] = useState({
        rating: 0,
        comment: ""
    })

    let x = 0
    useEffect(() => {
        if (x == 0 && id) {
            x++
            dispatch(get_product(id))
        }

    }, [id])

    let y = 0
    useEffect(() => {
        if (product) {
            if (product.product && y == 0) {
                y++
                console.log("dispatch reviews")

                dispatch(get_reviews(product.product?._id))
                dispatch(dPosition(product.product?.coordinates))
                dispatch(distanceAction(product.product.coordinates, current_position))
            }
        }

        if (order && product) {
            if (Array.isArray(order.products)) {
                if (product.product && (product.product._id == order.products[0]._id )) {
                    document.getElementById("add_review_container").classList.contains("hidden") &&
                        document.getElementById("add_review_container").classList.replace("hidden", "block")
                    
                }
            }
        }

    }, [product, order])


    console.log(order)

    const rating_handler = (e) => {
        setReviewData({
            ...reviewData,
            rating: e
        })
    }
    const comment_handler = (e) => {
        setReviewData({
            ...reviewData,
            comment: e.target.value
        })
    }

    const review_submit = (e) => {
        if (reviewData.rating > 0 && product?.product != null) {
            dispatch(add_review({ productId: product?.product._id, reviewData: reviewData }))
            document.getElementById("add_review_container").classList.contains("block") &&
                        document.getElementById("add_review_container").classList.replace("block", "hidden")
            // dispatch(editProduct({id : product.product._id, createProduct : review}))
        }
        else {
            alert("please give rating to submit review !")
        }
    }

    // review
    const add_review_handler = async () => {
        if (product.product) {
            dispatch(get_order(product.product._id))
        }

    }

    // <NavLink to={`/products`} state={{ productsType: "category", other: products.filteredProducts.filter(f => f.active ? f : "")[0]?.category }} className="text-sm md:text-base lg:text-lg text-theme-blue-600 font-semibold h-7 ">See More</NavLink>
    

    // memoized elements or components
    const memoizedReviews = useMemo(() => reviews?.map((rev, revIndex) => <Review_card key={revIndex} review={rev} />), [reviews])

    const memoizedRelatedProducts = useMemo(() => product != null ? product.relatedProducts?.map((v, i) => <Card4 key={i} product={v} />) : "", [product])

    const memoizedTags = useMemo(() => product != null ? product.product.tags.map((v, i) => <li onClick={()=> navigate("/products", { state : { productsType: "tags", other: v } })}  key={i}><button className=" px-2 py-1 text-sm md:text-base xl:text-xl text-green-600 font-bold font-nunito bg-green-100">#{v}</button></li>) : "")

    const memoizedproductFeatures = useMemo(() => product != null ? product.product.features.map((v, i) => <span key={i}>{v.feature}</span>) : "")

    const memoizedFiveStarsToShow = useMemo(() => Array.from({ length: 5 }, (_, index) => <svg key={index} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 stroke-gray-400">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    </svg>)
    );

    return (
        <>
            {loading ? <Spinner /> : product?.product != null &&
                <div className="w-full min-h-full grid grid-cols-12 pb-3 lg:max-w-80% mx-auto pt-3 lg:pt-32">
                    <div className="col-span-12 lg:mr-3 md:col-span-8 grid-cols-12 grid grid-cols-12 gap-y-2 order-1 lg:max-h-70vh">
                        <div id="imageScroll" className="flex min-w-full scroll-overflow-hidden col-span-12 w-full max-w-full overflow-x-auto h-full">
                            {product != null && product.product.images.map((v, i) => {
                                return <img key={i} src={v.url} className="col-span-12 w-full min-w-full object-contain lg:max-h-80vh bg-gray-100" alt="" />
                            })}
                        </div>


                        <ul className="col-span-12  flex md:hidden max-h-full overflow-x-auto scroll-overflow-hidden px-2 gap-x-2">
                            {product != null ? product.product.images.map((v, i) => {
                                return <li key={i} onClick={() => document.getElementById("imageScroll").scrollLeft = (document.getElementById("imageScroll").clientWidth) * i} className="bg-gray-100 border-gray-300 cursor-pointer h-14 w-20 aspect-ratio-square">
                                    <img src={v.url} className="w-full h-full object-contain" alt="" />
                                </li>
                            })
                                : ""
                            }
                        </ul>

                    </div>


                    <div className="col-span-12 md:col-span-4 px-2 mt-7 lg:mt-0 flex items-center md:items-start justify-start content-start  order-2 flex-wrap md:order-2">

                        <div className="w-full flex flex-wrap items-center justify-start">
                            <h5 className="text-base md:text-xl lg:text-2xl font-bold font-nunito text-gray-400 mt-1">{product != null ? product.product.title : ""}</h5>
                            <div className="flex mt-1">

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} className="w-4 md:5 lg:w-6 fill-yellow-600 ml-4 mr-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                </svg>
                                <span className="text-gray-400 text-xs md:text-sm lg:text-base">(4.4)</span>
                            </div>

                            <div className="flex md:hidden ml-auto ">
                                <button onClick={() => cart.find(v => v._id == id)?.qty >= 100 && dispatch(cart_qty({ product: product.product, operator: "-100" }))} className="bg-theme-blue-600 p-1 rounded-full ml-auto">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} className="w-6 stroke-gray-100">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                    </svg>
                                </button>
                                <span className="px-3 text-xl text-gray-600">{product != null ? cart.find(v => v._id == product.product._id) ? cart.find(v => v._id == product.product._id).qty : 0 : 0}</span>
                                <button disabled={product != null && product.product.stock > 0 ? false : true} onClick={() => dispatch(cart_qty({ product: product.product, operator: "100" }))} className="bg-theme-blue-600 p-1 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} className="w-6 stroke-gray-100">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </button>
                            </div>

                        </div>
                        <h5 className="text-2xl md:text-3xl lg:text-4xl md:mt-0.5 lg:mt-1 font-bold font-nunito text-gray-600 flex hidden md:block">{product != null ? product.product.features.map((v, i) => { return <span key={i}>{v.feature}</span> }) : ""} <span className="">{product != null ? product.product.title : ""}</span></h5>
                        <h4 className="text-3xl md:text-4xl lg:text-5xl md:mt-3.5 lg:mt-5 font-extrabold text-theme-blue-600 font-nunito hidden md:block w-full md:mb-10">{product != null ? product.product.price : ""}/KG</h4>

                        <div className="w-full hidden md:flex justify-start flex">
                            <button disabled={cart.find(v => v._id == id)?.qty == 0 ? true : false} onClick={() => dispatch(cart_qty({ product: product.product, operator: "-100" }))} className="bg-theme-blue-600 p-1 md:py-1.5 md:px-4 lg:px-4 rounded-full md:rounded-none ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} className="w-6 md:w-7 stroke-gray-100">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                </svg>
                            </button>
                            <span className="px-3 md:px-4 text-xl md:text-2xl lg:text-3xl text-gray-600 flex items-center">{product != null ? cart.find(v => v._id == product.product._id)?.qty : 0}</span>
                            <button disabled={product != null && product.product.stock > 0 ? false : true} onClick={() => dispatch(cart_qty({ product: product.product, operator: "100" }))} className="bg-theme-blue-600 p-1 md:px-4 lg:px-4 rounded-full md:rounded-none">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} className="w-6 md:w-7 stroke-gray-100">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </button>
                        </div>

                        <div className="col-span-12 hidden md:flex gap-x-2 items-center px-1.5 mt-3 md:mt-5 w-full ">
                            <span className="text-theme-green-600 font-bold text-sm bg-green-200 px-4 py-1 rounded">{product != null ? product.product.stock > 0 ? "Available" : "Unavailable" : ""}</span>
                            <span className="text-sm font-bold text-gray-400">{product != null ? (product.product.stock / 1000).toFixed(2) : ""}kg</span>
                        </div>




                        <div className="col-span-11 w-full ml-3 md:ml-0 hidden md:flex justify-center border-b border-t border-theme-blue-600 mt-5 py-2">
                            <fieldset className=" w-11/12 flex border rounded-full p-1">
                                <button className="h-9 w-14 bg-theme-blue-600 px-2 flex items-center justify-center rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} className="w-6 h-6 stroke-gray-100">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>
                                </button>
                                <input className="rouded-full h-9 w-10/12 w-full px-2 text-sm font-nunito text-gray-500 outline-none text-center" placeholder="Availity by picode" type="text" />
                            </fieldset>
                        </div>

                        <div className="w-full hidden md:flex items-center px-0 mt-5 justify-between">
                            <span className="text-base md:text-xl font-bold text-theme-green-600 font-nunito">Free Delivery by tomorrow</span>
                            <span className="text-xs md:text-sm font-bold text-gray-400 font-nunito underline">Want fast delivery ?</span>
                        </div>

                        <ul className="col-span-12  hidden md:flex md:flex max-h-full overflow-x-auto scroll-overflow-hidden px-2 gap-x-2 md:mt-6 cursor-pointer">
                            {product != null ? product.product.images.map((v, i) => {
                                return <li onClick={() => document.getElementById("imageScroll").scrollLeft = (document.getElementById("imageScroll").clientWidth) * i} key={i} className="bg-gray-100 border-2 border-gray-300">
                                    <img src={v.url} className="w-14" alt="" />
                                </li>
                            })
                                : ""
                            }
                        </ul>

                    </div>
                    <div className="col-span-12 px-2 mt-1 sm:mt-1.5 flex items-center gap-x-3 order-4">
                        <h5 className="text-2xl font-bold font-nunito text-gray-600 flex md:hidden">
                            {memoizedproductFeatures}
                            <span className="">{product != null ? product.product.title : ""}</span>
                        </h5>
                    </div>

                    <div className="col-span-12 flex justify-start px-2 mt-5 sm:mt-6 order-5">
                        <h4 className="text-3xl font-extrabold text-theme-blue-600 font-nunito block md:hidden">{product != null ? product.product.price : ""}/KG</h4>
                    </div>
                    <div className="col-span-12 flex md:hidden gap-x-2 items-center px-2 mt-3 order-6">
                        <span className="text-theme-green-600 font-bold text-sm bg-green-200 px-4 py-1 rounded">{product != null ? product.product.stock > 0 ? "Available" : "Unavailable" : ""}</span>
                        <span className="text-sm font-bold text-gray-400">{product != null ? (product.product.stock / 1000).toFixed(2) : ""}kg</span>
                    </div>
                    <div className="col-span-11 w-full ml-3 flex md:hidden justify-center border-b border-t border-theme-blue-600 mt-5 py-2 order-7 ">
                        <fieldset className=" w-11/12 flex border rounded-full p-1">
                            <button className="h-9 w-14 bg-theme-blue-600 px-2 flex items-center justify-center rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} className="w-6 h-6 stroke-gray-100">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </button>
                            <input className="rouded-full h-9 w-10/12 w-full px-2 text-sm font-nunito text-gray-500 outline-none text-center" placeholder="Availity by picode" type="text" />
                        </fieldset>
                    </div>
                    <div className="col-span-12 flex items-center px-3 mt-5 justify-between order-8 flex md:hidden">
                        <span className="text-base font-bold text-theme-green-600 font-nunito">Free Delivery by tomorrow</span>
                        <span className="text-xs font-bold text-gray-400 font-nunito underline">Want fast delivery ?</span>
                    </div>

                    <div className="col-span-12 flex flex-col items-start gap-y-3 px-3 mt-8 justify-between order-9">
                        <h6 className="text-xl md:text-2xl lg:text-3xl font-nunito text-gray-600 font-bold">Description</h6>
                        <p className="text-sm md:text-base lg:text-2xl text-gray-400 md:mt-2 lg:mt-3" style={{ lineHeight: "160%" }}>{product != null ? product.product.description : ""}</p>
                    </div>

                    <div className="col-span-12 px-3 flex gap-x-2 order-10 mt-5 md:mt-7 lg:mt-9">
                        <ul className="flex flex-wrap gap-x-2 gap-y-2">
                            {/* {product != null ? product.product.tags.map((v, i) => {
                                return <li key={i}><button className=" px-2 py-1 text-sm md:text-base xl:text-xl text-green-600 font-bold font-nunito bg-green-100">#{v}</button></li>
                            }) : ""} */}
                            {memoizedTags}
                        </ul>
                    </div>
                    <div className="col-span-12 flex gap-x-2 order-10 mt-5 md:mt-7 lg:mt-9">
                        <StoresMap />
                    </div>

                    <div className="col-span-12 order-11 flex flex-col px-3 md:px-4 lg:px-5 xl:px-6 mt-5 md:mt-6 lg:mt-7 py-6" style={{ background: "#FFF4E7" }}>
                        <h6 className="text-base md:text-xl lg:text-2xl font-bold font-nunito text-gray-600">Related Vegetables</h6>
                        <ul className="flex max-w-full overflow-x-auto pt-6 md:pt-8 lg:pt-10 gap-x-3 md:gap-x-4 lg:gap-x-5 scroll-overflow-hidden">
                            {/* {product != null ? product.relatedProducts?.map((v, i) => {
                                return <Card4 key={i} product={v} />
                            }) : ""} */}
                            {memoizedRelatedProducts}

                        </ul>
                        <div className="w-full flex justify-end mt-3">
                            <button className="text-sm text-theme-blue-600 font-semibold h-7">See More</button>
                        </div>
                    </div>
                    <div className="col-span-12 relative order-11 flex flex-col md:flex-row md:justify-between px-3 md:px-4 lg:px-5 xl:px-6 mt-3 md:mt-5 lg:mt-7 py-6" style={{ background: "#F8F7FF" }}>
                        <button onClick={() => add_review_handler()} className="text-base md:text-xl lg:text-2xl font-bold font-nunito text-gray-400 bg-white rounded px-2 md:px-4 py-3 border-b">Add Review</button>
                        <div className="w-full md:w-9/12 lg:10/12 min-h-12 bg-white flex gap-x-1 justify-center items-center">
                            {/* {Array.from({ length: 5 }, (_, index) => {
                                return <svg key={index} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 stroke-gray-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                </svg>
                            })} */}
                            {memoizedFiveStarsToShow}

                        </div>
                        <div id="add_review_container" className="w-screen h-screen flex flex-col border  fixed z-40 top-0 bg-white left-0 py-10 hidden flex items-center justify-center">
                            { review && <h6 className="font-semibold px-8 py-10 text-gray-400 text-lg md:text-xl ">Your Previous Review</h6>}
                            <div style={{ maxWidth: "600px", margin: "0 auto" }} className="grid gap-y-1 grid-cols-12 w-full px-6 py-4 bg-white rounded">
                                <div className="col-span-6 md:col-span-5 lg:col-span-4 min-h-12 bg-white flex gap-x-1 justify-between px-2 items-center">
                                    
                                        <ReactStars onChange={rating_handler} size={36} isHalf={false} value={review ? Number(review.rating) : 0 } classNames="w-max" color="#eeeeee" />
                                    
                                </div>
                                <div className="col-span-6 md:col-span-7 lg:col-span-8 flex justify-end itms-center px-2">
                                    <button onClick={() => {
                                        document.getElementById("add_review_container").classList.contains("block") ?
                                            document.getElementById("add_review_container").classList.replace("block", "hidden") :
                                            document.getElementById("add_review_container").classList.replace("hidden", "block")
                                    }
                                    } className="p-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                        </svg>
                                    </button>

                                </div>
                                <div className="col-span-12">
                                    <textarea onChange={comment_handler} defaultValue={review ? review.comment : ""} style={{ minWidth: "100%" }} className="outline-0 border rounded w-full px-3 py-2 text-gray-400" name="" id="" cols="30" rows="10"></textarea>
                                </div>
                                <button onClick={() => review_submit()} className="font-semibold text-base md:text-lg px-3 md:px-4 py-1 rounnded bg-blue-400 hover:bg-blue-500 w-max text-gray-100 rounded">Submit</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 order-11 flex flex-col px-3 md:px-4 lg:px-5 xl:px-6 mt-3 md:mt-5 lg:mt-7 py-6" style={{ background: "#F8F7FF" }}>
                        <h6 className="flex  justify-between text-base md:text-xl lg:text-2xl font-bold font-nunito text-gray-600">
                            <span className="flex items-center gap-x-2">Reviews
                                <span className="text-2xs md:text-sm lg:text-base font-semibold">( {product != null ? product.product.numberOfReviews : 0 } Buyer/s )</span>
                                </span>
                            <div className="flex items-center gap-x-2 md:gap-x-3">
                                <span className="text-sm md:text-base lg:text-xl text-gray-400">( {product != null ? product.product.averageRating : 0} )</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} className="w-6 lg:w-7 stroke-gray-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                </svg>
                            </div>
                        </h6>

                        <div className="flex w-full mt-8" >
                            <div className="w-full flex justify-between">
                                <div className="flex flex-col bg-white rounded">
                                    <img src={product != null ? product.product.images[0].url : ""} className="w-20 md:w-24 h-28 md:h-32 lg:w-32 lg:h-44 object-contain border-b" alt="" />
                                    <h6 className="text-2xs md:text-xs lg:text-sm mt-1 font-bold text-gray-500 px-0.5 text-center pb-1.5 capitalize">{product != null ? product.product.title : ""}</h6>
                                </div>

                                <ul className="flex flex-col min-w-70% gap-y-3">
                                    <li className="flex w-full justify-end gap-x-2">
                                        <span className="text-2xs font-semibold text-gray-400">(4 and above) 2024</span>
                                        <span className="h-4  w-32 bg-green-600 rounded-l-full"></span>
                                    </li>
                                    <li className="flex w-full justify-end gap-x-2">
                                        <span className="text-2xs font-semibold text-gray-400">(3 and above) 1024</span>
                                        <span className="h-4  w-24 bg-yellow-400 rounded-l-full"></span>
                                    </li>
                                    <li className="flex w-full justify-end gap-x-2">
                                        <span className="text-2xs font-semibold text-gray-400">(2 and above) 424</span>
                                        <span className="h-4  w-16 bg-orange-400 rounded-l-full"></span>
                                    </li>
                                    <li className="flex w-full justify-end gap-x-2">
                                        <span className="text-2xs font-semibold text-gray-400">(1 and above) 104</span>
                                        <span className="h-4  w-8 bg-red-400 rounded-l-full"></span>
                                    </li>
                                </ul>

                            </div>

                            <div className="flex flex-col">
                                    
                                {/* <div className="flex items-center gap-x-2">
                            <span className="text-sm text-gray-400">(4.4)</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} className="w-6 stroke-gray-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>
                        </div> */}

                            </div>
                        </div>
                        <ul className="flex max-w-full overflow-x-auto pt-6 md:pt-8 lg:pt-10 gap-x-3 md:gap-x-4 lg:gap-x-5 scroll-overflow-hidden mt-8">
                            {/* { reviews.map((rev, revIndex)=>{
                           return <Review_card key={revIndex} review={rev} />
                           }) } */}
                            {memoizedReviews}
                            {/* <Review_card />
                            <Review_card /> */}
                        </ul>
                    </div>
                </div>}
        </>
    )
}

export default memo(Product_details);