import axios from "axios"
import { ADD_PRODUCT_FAILED, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, CLEAR_SUCCESS, GET_PRODUCTS_FAILED, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCT_FAILED, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./types"

export const add_product = (product) => async (dispatch) => {
    console.log(product)
    const url = "https://veg-etable.vercel.app/api/vegetable";
    // const url = "https://localhost:5005/api/vegetable";
    try {
        dispatch({
            type : ADD_PRODUCT_REQUEST
        });

        const config = {
            headers: { "Content-Type": "application/json" }
        }
        const { data } = await axios.post(url, product, config)
        
        
        dispatch({
            type : ADD_PRODUCT_SUCCESS,
            payload : data.product
        })
    } catch (error) {
        dispatch({
            type : ADD_PRODUCT_FAILED,
            payload : error
        })
    }
}

export const get_products = () => async (dispatch) => {
    // const url = "http://localhost:5005/api/vegetables";
    const url = "https://veg-etable.vercel.app/api/vegetables";

    try{
        dispatch({
            type : GET_PRODUCTS_REQUEST
        });

        const config = {
            "Content-Type" : "application/json"
        }

        const {data} = await axios.get(url, config )

        dispatch({
            type : GET_PRODUCTS_SUCCESS,
            payload : data.products
        })
    }catch (error) {
        dispatch({
            type : GET_PRODUCTS_FAILED,
            payload : error
        })
    }
}

export const get_product = (id) => async (dispatch) => {
    // const url = `https://localhost:5005/api/vegetable/${id}`;
    const url = `https://veg-etable.vercel.app/api/vegetable/${id}`;

    try {
        dispatch({
            type : GET_PRODUCT_REQUEST
        });

        const config = {
            "Content-Type" : "application/json"
        }

        const {data} = await axios.get(url, config)

        dispatch({
            type : GET_PRODUCT_SUCCESS,
            payload : data.product
        })

    } catch (error) {
        dispatch({
            type : GET_PRODUCT_FAILED,
            payload : error
        })
    }
}

export const clear_success = () => (dispatch) => {
    dispatch({
        type : CLEAR_SUCCESS
    })
}