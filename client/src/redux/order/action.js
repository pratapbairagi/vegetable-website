import axios from "axios"
import { ADMIN_ORDERS_FAILED, ADMIN_ORDERS_REQUEST, ADMIN_ORDERS_SUCCESS, GET_ORDERS_FAILED, GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS, ORDER_FAILED, ORDER_REQUEST, ORDER_SUCCESS } from "./type"

// const rootUrl = "http://localhost:5005";
const rootUrl = "https://veg-etable.vercel.app";

export const order_request = (order) => async (dispatch) => {
    alert("order")
    try {
        const url = `${rootUrl}/api/order/place`
        dispatch({
            type : ORDER_REQUEST
        })

        const config = {
            headers : { "Content-Type" : "application/json" },
            "access-control-allow-originn" : rootUrl,
            withCredentials : true
        }

        const {data} = await axios.post(url, order, config);

        dispatch({
            type : ORDER_SUCCESS,
            payload : data
        })
        
    } catch (error) {
        console.log("orders => ", error)

        dispatch({
            type : ORDER_FAILED,
            payload : error.response.data.message
        })
    }
}

export const  get_orders = () => async (dispatch) => {
    try {
        const url = `${rootUrl}/api/my/orders`
        dispatch({
            type : GET_ORDERS_REQUEST
        })

        const config = {
            headers : { "Content-Type" : "application/json" },
            "access-control-allow-origin" : rootUrl,
            withCredentials : true
        }

        const {data} = await axios.get(url, config);

        console.log("orders => ", data)

        dispatch({
            type : GET_ORDERS_SUCCESS,
            payload : data
        })
        
    } catch (error) {
        dispatch({
            type : GET_ORDERS_FAILED,
            payload : error.response.data.message
        })
    }
}

// admin
export const admin_orders = () => async (dispatch) => {
    try {
        const url = `${rootUrl}/api/admin/orders`;

        dispatch({
            type : ADMIN_ORDERS_REQUEST
        });

        const config = {
            headers : { "Content-Type" : "application/json" },
            "access-control-allow-origin" : rootUrl,
            withCredentials : true
        };

        const { data } = await axios.get(url, config);

        console.log("admin orders => ", data);

        dispatch({
            type : ADMIN_ORDERS_SUCCESS,
            payload : data
        })
    } catch (error) {
        dispatch({
            type : ADMIN_ORDERS_FAILED,
            payload : error.response.data.message
        })
    }
}