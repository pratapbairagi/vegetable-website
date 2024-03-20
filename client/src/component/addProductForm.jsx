import axios from "axios";
import { useState } from "react";
import {useDispatch} from "react-redux"
import { add_product } from "../redux/product/action";


const AddProductForm = () => {
    const dispatch = useDispatch()

    const [createProduct, setCreateProduct] = useState({
        title: "",
        category: "",
        description: "",
        price: 0,
        features: [
            {
                feature: "",
                value: "",
                _id : 0
            }
            // {feature : "fresh", value : "0", active : false}, {feature : "discount", value : "0", active : false}, {feature : "Limited stock", value : "0", active : false}
        ],
        stock: 0,
        tags: [],
        images: []
    })

    const addProduct_inputsHandler = (e) => {
        let { name, value } = e.target;

        if (name !== "tags" && name !== "feature" && name !== "images") {
            setCreateProduct({ ...createProduct, [name]: value })
        }
        else if (name === "images") {
            let fileList = e.target.files
            let imgs = []


            for (let i = 0; fileList.length > i; i++) {

                let file = fileList[i];
                let reader = new FileReader()

                reader.onload = () => {
                    if (reader.DONE) {
                        imgs.push(reader.result)
                        // setCreateProduct({...createProduct, images : [...createProduct.images, createProduct.images.map(v=> reader.result != ""  && reader.result != undefined ? reader.result : v )[0] ] })
                    }

                    setCreateProduct({ ...createProduct, images: [...createProduct.images, imgs[0]] })
                }

                reader.readAsDataURL(file)
            }
        }
    }

    const addProducts_submit = async (e) => {
        e.preventDefault();

        dispatch( add_product(createProduct))

        // try {
        //     dispatch(createProduct)
        //     const config = {
        //         headers: { "Content-Type": "application/json" }
        //     }
        //     const { data } = await axios.post(url, createProduct, config)
            
        // } catch (error) {
        //     console.log("erroooorrrr =>", error)
        // }

    }

    // console.log(createProduct)
    return (
        <div className="w-full h-max  min-h-screen flex flex-col pb-10">
            <h6 className="text-base sm:text-lg md:text-xl xl:text-2xl font-extrabold font-nunito text-center mt-5 md:mt-6 lg:mt-7 text-theme-blue-600">Add Vegetable</h6>

            <div className="w-full h-max xl:max-w-60% mx-auto grid grid-cols-12 px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 md:gap-x-2 gap-y-3 md:gap-y-4 lg:gap-y-5 xl:gap-y-6 lg:gap-x-7 xl:gap-x-8 mt-5 md:mt-6 lg:mt-7 xl:mt-8">
                <fieldset className="col-span-12 md:col-span-5 flex flex-col bg-gray-100 px-4 py-4">
                    <label className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-400" htmlFor="#title">Title</label>
                    <input onChange={addProduct_inputsHandler} type="text" id="title" name="title" className=" py-1 md:py-1.5 lg:py-2 px-1.5 md:px-2 lg:px-2.5 xl:px-3" />
                </fieldset>
                <fieldset className="col-span-12 md:col-span-7 flex flex-col bg-gray-100 px-4 py-4">
                    <label className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-400" htmlFor="#category">Category</label>
                    <input onChange={addProduct_inputsHandler} type="text" id="category" name="category" className=" py-1 md:py-1.5 lg:py-2 px-1.5 md:px-2 lg:px-2.5 xl:px-3" />
                </fieldset>

                <fieldset className="col-span-12 md:col-span-7 flex flex-col bg-gray-100 px-4 py-4">
                    <label className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-400" htmlFor="#stock">Stock</label>
                    <input placeholder="stock in grams" onChange={addProduct_inputsHandler} type="number" name="stock" id="stock" className=" py-1 md:py-1.5 lg:py-2 px-1.5 md:px-2 lg:px-2.5 xl:px-3" />
                </fieldset>
                <fieldset className="col-span-12 md:col-span-5 flex flex-col bg-gray-100 px-4 py-4">
                    <label className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-400" htmlFor="#feature">Features</label>
                    {/* <select onChange={(e)=>{ 
                        setCreateProduct({...createProduct, features : [...createProduct.features.map(v=> v.feature == e.target[e.target.selectedIndex].innerHTML ? {...v, active : true } : { ...v })   ] }) 
                        }} className="py-2 bg-white px-2 text-gray-400 font-semibold outline-0" name="features" id="">
                    <option value={null}>Select</option>
                        {createProduct.features?.map((v,i)=>{
                            return <option key={i} className="py-2 px-1" value={v.value}>{v.feature}</option>
                        })}
                    </select> */}
                    {createProduct.features.map((v, i) => {
                        return (
                            <span key={v._id} className="w-full flex gap-x-2 h-max mt-1">
                                <span className="w-6/12">
                                    <input name="feature" onChange={(e) =>
                                        setCreateProduct({
                                            ...createProduct,
                                            features: [
                                                ...createProduct.features.map((featureV, featureI) =>
                                                    featureI == i ?
                                                        {
                                                            ...featureV,
                                                            feature: e.target.value
                                                        }
                                                        :
                                                        { ...featureV }
                                                )
                                            ]
                                        })
                                    } type="text" placeholder="feature name..." className="w-full py-1 h-10 px-2" />
                                </span>
                                <span className="w-5/12">
                                    <input name="value" onChange={(e) =>
                                        setCreateProduct({
                                            ...createProduct,
                                            features: [
                                                ...createProduct.features.map((featureV, featureI) =>
                                                    featureI == i ?
                                                        {
                                                            ...featureV,
                                                            value: e.target.value
                                                        }
                                                        :
                                                        { ...featureV }
                                                )
                                            ]
                                        })
                                    } type="text" placeholder="Feature value..." className="w-full py-1 h-10 px-2" />
                                </span>
                                <button onClick={()=> setCreateProduct({...createProduct, features : createProduct.features.length > 1 ? [...createProduct.features.filter((delItem, delIndex)=>  delItem._id != v._id  )] : createProduct.features })} className="h-full w-1/12 flex justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="h-8 stroke-red-700 mt-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>

                                </button>
                            </span>
                        )
                    })}

                    <button onClick={(e) => setCreateProduct({ ...createProduct, features: [...createProduct.features, { feature: "", value: "", _id: createProduct.features.length }] })} className="w-full border h-10 mt-2 font-bold text-gray-500">Add More</button>


                    {/* <span className="w-full flex items-center gap-x-2">
                    {createProduct.features.filter((v,i)=> v.active !== false).map((v,i)=>{
                        return <input key={i} type="text" onChange={(e)=> setCreateProduct({...createProduct, features : [...createProduct.features.map((fea, feaInd)=> feaInd === i ? {...fea, value : e.target.value } : {...fea} ) ] }) } name={v.feature} placeholder={v.feature} id="feature" className="outline-0 py-1 md:py-1.5 lg:py-2 px-1.5 md:px-2 lg:px-2.5 xl:px-3 mt-1 w-full" />
                    })}
                    </span> */}

                </fieldset>
                <fieldset className="col-span-12 md:col-span-5 flex flex-col bg-gray-100 px-4 py-4">
                    <label className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-400" htmlFor="#tags">Tags</label>
                    <span className=" flex items-center bg-white px-1 py-1 lg:px-1.5">
                        <input onKeyPress={(e) => {
                            if (document.querySelector("#tags").value && document.querySelector("#tags").value.length >= 2 && e.key === "Enter") {
                                setCreateProduct({ ...createProduct, tags: [...createProduct.tags, document.querySelector("#tags").value] })
                                return document.querySelector("#tags").value = ""
                            }
                            else {
                                null
                            }

                        }} onChange={addProduct_inputsHandler} type="text" id="tags" name="tags" className="outline-0 w-full py-1 md:py-1.5 lg:py-2 px-1.5 md:px-2 lg:px-2.5 xl:px-3" />
                        <button onClick={() => {
                            document.querySelector("#tags").value && document.querySelector("#tags").value.length >= 2 ?
                                setCreateProduct({ ...createProduct, tags: [...createProduct.tags, document.querySelector("#tags").value] })
                                :
                                null

                            return document.querySelector("#tags").value = ""
                        }
                        } className="w-max text-sm md:text-base xl:text-xl px-2 lg:px-3 py-0.5 font-bold font-nunito text-theme-blue-600 bg-gray-100 flex pt-1 h-full">Save</button>
                    </span>
                    <span className="w-full flex flex-wrap justify-start items-center mt-2 gap-x-2 gap-y-2">
                        {createProduct.tags?.map((v, i) => {
                            return <span className="text-xs bg-white text-gray-400 font-semibold px-2 py-1 rounded flex items-center gap-x-2" key={i}>{v}
                                <button onClick={() => setCreateProduct({ ...createProduct, tags: createProduct.tags.filter(tag => tag !== v) })}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="h-3 fill-gray-400">
                                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                                    </svg>
                                </button>
                            </span>
                        })}
                    </span>
                </fieldset>

                <fieldset className="col-span-12 md:col-span-7 flex flex-col bg-gray-100 px-4 py-4">
                    <label className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-400" htmlFor="#image">Image</label>
                    <span className="relative w-12 aspect-square">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-full fill-theme-blue-600">
                            <path d="M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
                        </svg>
                        <input onChange={addProduct_inputsHandler} type="file" accept="image/*" id="image" name="images" className="absolute w-full h-full block opacity-0 left-0 top-0 py-1 md:py-1.5 lg:py-2 px-1.5 md:px-2 lg:px-2.5 xl:px-3" />
                    </span>
                    <span className="w-full flex flex-wrap gap-x-2 gap-y-2 items-center justify-start mt-3 lg:mt-4 xl:mt-5">
                        {createProduct.images.map((v, i) => {
                            // console.log(v)
                            return <span key={i} className="w-max h-max relative bg-white">
                                <img key={i} src={v} className="w-12 h-12" alt={v} />
                                <svg onClick={() => setCreateProduct({ ...createProduct, images: createProduct.images.filter(f => f != v) })} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="h-4 fill-red-600 absolute top-0.5 right-0.5 z-10 cursor-pointer">
                                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                                </svg>
                            </span>
                        })}
                    </span>
                </fieldset>
                <fieldset className="col-span-12 md:col-span-7 flex flex-col bg-gray-100 px-4 py-4">
                    <label className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-400" htmlFor="#description">Description</label>
                    <textarea onChange={addProduct_inputsHandler} value={createProduct.description} type="text" id="description" name="description" className=" py-1 md:py-1.5 lg:py-2 px-1.5 md:px-2 lg:px-2.5 xl:px-3" ></textarea>
                </fieldset>
                <fieldset className="col-span-12 md:col-span-5 flex flex-col bg-gray-100 px-4 py-4">
                    <label className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-400" htmlFor="#price">Price</label>
                    <input onChange={addProduct_inputsHandler} type="number" id="price" name="price" className=" py-1 md:py-1.5 lg:py-2 px-1.5 md:px-2 lg:px-2.5 xl:px-3" />
                </fieldset>
                <fieldset className="col-span-12 flex flex-col px-0 py-4">
                    {/* <label className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-400" htmlFor="#tags">Tags</label> */}
                    <input type="submit" onClick={addProducts_submit} value="Add" id="tags" className=" py-2 md:py-2.5 lg:py-3 px-1.5 md:px-2 lg:px-2.5 xl:px-3 bg-theme-blue-600 text-gray-100 font-bold text-base md:text-lg lg:text-xl" />
                </fieldset>
            </div>
        </div>
    )
}

export default AddProductForm 