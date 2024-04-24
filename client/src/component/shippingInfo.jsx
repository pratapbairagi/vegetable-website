import { useLocation, useNavigate } from "react-router-dom"
import ProgressOrder from "./progessOrder";
import BackButton from "./backButton";
import InputField from "./inputField";
import { OnchangeFunction } from "./inputFunctions";
import { useEffect, useMemo, useState } from "react";
import { State, City, Country } from "country-state-city"
import axios from "axios";


const ShippingInfo = () => {
    const navigate = useNavigate()
    const location = useLocation()

    console.log(location.state)

    const [shippingInfo, setShippingInfo] = useState({
        house: "",
        street: "",
        landmark: "",
        countryCode: "",
        country: "",
        state: "",
        stateCode: "",
        city: "",
        pincode: 0,
        phone: 0,
        additionalInfo : ""
    })


    const inputFieldClasses = "py-1 md:py-1.5 lg:py-2 px-1.5 md:px-2 lg:px-2.5 xl:px-3 outline-0 mt-2"

    useEffect(() => {



        const fetchCountry = async () => {
            try {
                const dataCounntry = Country.getCountryByCode("IN")

                setShippingInfo({
                    ...shippingInfo,
                    country: dataCounntry?.name,
                    countryCode: dataCounntry?.isoCode
                })
            } catch (error) {

            }
        }
        if(location.state != null){
        fetchCountry()
        }
        else{
            alert("null value")
            navigate(-1)
        }
    }, [])

    console.log(shippingInfo)


    const states = useMemo(() => {
        return State.getStatesOfCountry("IN")
    }, [])

    const cities = useMemo(() => {
        if (shippingInfo.state) return City.getCitiesOfState(shippingInfo.countryCode, shippingInfo.stateCode)
    }, [shippingInfo.state])

    const shippingInfo_channge_hanndler = (e) => {
        let checkArray = []
        const fieldset = document.querySelectorAll("fieldset")

        for( let key in shippingInfo){
            console.log("navigate success condition")           

            if( typeof shippingInfo[key] == "string" && shippingInfo[key].length < 2 ) {
                 checkArray.push(false)
                 document.getElementById(`${key}`) != null ? document.getElementById(`${key}`).style.border = "1px solid red" : null
            }
            else if(typeof shippingInfo[key] == "string" && shippingInfo[key].length > 1 ){
                checkArray.push( true)
                document.getElementById(`${key}`) != null ? document.getElementById(`${key}`).style.border = "none" : null
            }

            if( typeof shippingInfo[key] == "number" && shippingInfo[key].toString().length < 6 ){
                checkArray.push(false)
                document.getElementById(`${key}`) != null ? document.getElementById(`${key}`).style.border = "1px solid red" : null

            }
            else if(typeof shippingInfo[key] == "number" && shippingInfo[key].toString().length > 5){
                document.getElementById(`${key}`) != null ? document.getElementById(`${key}`).style.border = "none" : null
                checkArray.push(true)
            }   
        }

        if(checkArray.every(v=> v)){ 
            console.log("navigate success block")           
            navigate("/payment-info", { state : { shippingInfo : shippingInfo, cart : location.state?.cart, orderCart : location.state?.orderCart  }})  
        }
        console.log("navigate success fuction")           


    }

    return (
        <div className="w-full h-max min-h-90vh flex flex-col px-2 pb-10">
            <div className="w-full py-2 px-2">
                <BackButton backRoute="/" />
            </div>
            <ProgressOrder />

            <div className="w-full h-max min-h-20 flex flex-col items-center">
                <h4 className="text-center text-gray-400 mt-8 text-xl font-semibold" style={{ letterSpacing: "1px" }}>Shipping Info</h4>
                <form action="" className="w-full h-max xl:max-w-60% mx-auto grid grid-cols-12 px-2 py-2 sm:px-3 sm:py-4 md:px-4 md:py-4 lg:px-5 lg:py-5 xl:px-6 xl:py-6 md:gap-x-2 gap-y-3 md:gap-y-4 lg:gap-y-5 xl:gap-y-6 lg:gap-x-7 xl:gap-x-8 mt-5 md:mt-6 lg:mt-7 xl:mt-8 border">
                    <fieldset className="col-span-12 md:col-span-6 flex flex-col bg-gray-100 px-4 py-4">
                        <label className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-400" htmlFor="#country">Country</label>
                        <select onChange={(e) => ""} className={inputFieldClasses} name="country" id="country">
                            <option value={shippingInfo?.countryCode}>{shippingInfo?.country}</option>
                        </select>
                        {/* <InputField onChangeFun={(e) => OnchangeFunction({ e, createProduct : shippingInfo, setCreateProduct : setShippingInfo })} placeholder="House info with floor..." type="text" id="house" name="house" classes={inputFieldClasses} /> */}
                    </fieldset>
                    <fieldset className="col-span-12 md:col-span-6 flex flex-col bg-gray-100 px-4 py-4" >
                        <label className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-400" htmlFor="#state">State</label>
                        <select onChange={(e) => {
                            let data = e.target.value ? JSON.parse(e.target.value) : null
                            setShippingInfo({
                                ...shippingInfo,
                                stateCode: data != null ? data.isoCode : "",
                                state: data != null ? data.name : "",
                                countryCode: data != null ? data.countryCode : ""
                            })
                        }
                        } className={inputFieldClasses} style={{ maxWidth: "82vw" }} name="state" id="state">
                            {states?.map((v, i) => {
                                return <option key={i} value={JSON.stringify(v)}>{v.name}</option>
                            })
                            }
                        </select>
                        {/* <InputField onChangeFun={(e) => OnchangeFunction({ e, createProduct : shippingInfo, setCreateProduct : setShippingInfo })} placeholder="Street info..." type="text" id="street" name="street" classes={inputFieldClasses} /> */}
                    </fieldset>

                    <fieldset className="col-span-12 md:col-span-6 flex flex-col bg-gray-100 px-4 py-4">
                        <label className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-400" htmlFor="#city">City</label>
                        <select onChange={(e) => {
                            let data = e.target.value ? JSON.parse(e.target.value) : null
                            setShippingInfo({
                                ...shippingInfo,
                                city: data != null ? data.name : ""
                            })
                        }
                        } className={inputFieldClasses} style={{ maxWidth: "82vw" }} name="city" id="city">
                            {cities?.map((v, i) => {
                                return <option key={i} value={JSON.stringify(v)}>{v.name}</option>
                            })
                            }
                        </select>

                    </fieldset>

                    <fieldset className="col-span-12 md:col-span-6 flex flex-col bg-gray-100 px-4 py-4">
                        <label className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-400" htmlFor="#pincode">Pinncode</label>
                        <InputField onChangeFun={(e) => OnchangeFunction({ e, createProduct: shippingInfo, setCreateProduct: setShippingInfo })} placeholder="Pincode..." type="number" id="pincode" name="pincode" classes={inputFieldClasses} />

                    </fieldset>

                    <fieldset className="col-span-12 md:col-span-6 flex flex-col bg-gray-100 px-4 py-4">
                        <label className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-400" htmlFor="#house">House</label>
                        <InputField onChangeFun={(e) => OnchangeFunction({ e, createProduct: shippingInfo, setCreateProduct: setShippingInfo })} placeholder="House info..." type="text" id="house" name="house" classes={inputFieldClasses} />
                    </fieldset>

                    <fieldset className="col-span-12 md:col-span-6 flex flex-col bg-gray-100 px-4 py-4">
                        <label className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-400" htmlFor="#street">Street</label>
                        <InputField onChangeFun={(e) => OnchangeFunction({ e, createProduct: shippingInfo, setCreateProduct: setShippingInfo })} placeholder="Street info..." type="text" id="street" name="street" classes={inputFieldClasses} />
                    </fieldset>

                    <fieldset className="col-span-12 md:col-span-6 flex flex-col bg-gray-100 px-4 py-4">
                        <label className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-400" htmlFor="#landmark">Landmark</label>
                        <InputField onChangeFun={(e) => OnchangeFunction({ e, createProduct: shippingInfo, setCreateProduct: setShippingInfo })} placeholder="Landmark" type="text" id="landmark" name="landmark" classes={inputFieldClasses} />
                    </fieldset>

                    <fieldset className="col-span-12 md:col-span-6 flex flex-col bg-gray-100 px-4 py-4">
                        <label className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-400" htmlFor="#pincode">Contact No.</label>
                        <InputField onChangeFun={(e) => OnchangeFunction({ e, createProduct: shippingInfo, setCreateProduct: setShippingInfo })} placeholder="Phone" type="number" id="phone" name="phone" classes={inputFieldClasses} />
                    </fieldset>

                    <fieldset className="col-span-12 flex flex-col bg-gray-100 px-4 py-4">
                        <label className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-400" htmlFor="#additionalInfo">additional Info</label>
                        <textarea onChange={(e) => OnchangeFunction({e, createProduct : shippingInfo, setCreateProduct : setShippingInfo}) } name="additionalInfo" id="additionalInfo" cols="30" rows="5" className={`mt-2 px-3 py-2 text-gray-400 outline-0 `}></textarea>
                        {/* <InputField onChangeFun={(e) => OnchangeFunction({ e, createProduct: shippingInfo, setCreateProduct: setShippingInfo })} placeholder="Phone" type="number" id="phone" name="phone" classes={inputFieldClasses} /> */}
                    </fieldset>
                </form>
                <button onClick={ shippingInfo_channge_hanndler } className="w-full px-4 py-1 bg-blue-600 text-gray-100 hover:bg-blue-500 font-semibold text-lg mt-4 xl:max-w-60%">Submit</button>
            </div>
        </div>
    )
};
export default ShippingInfo;