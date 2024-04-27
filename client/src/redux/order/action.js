import axios from "axios"
import { ADMIN_ORDERS_FAILED, ADMIN_ORDERS_REQUEST, ADMIN_ORDERS_SUCCESS, CHANGE_ORDER_STATUS_FAILED, CHANGE_ORDER_STATUS_REQUEST, CHANGE_ORDER_STATUS_SUCCESS, GET_ORDERS_FAILED, GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS, GET_ORDER_REQUEST, GET_ORDER_SUCCESS, ORDER_FAILED, ORDER_REQUEST, ORDER_SUCCESS } from "./type"

// const rootUrl = "http://localhost:5005";
const rootUrl = "https://veg-etable.vercel.app";

export const order_request = (order) => async (dispatch) => {
    try {
        const url = `${rootUrl}/api/order/place`
        dispatch({
            type : ORDER_REQUEST
        })

        const config = {
            headers : { "Content-Type" : "application/json" },
            "access-control-allow-origin" : rootUrl,
            withCredentials : true
        }

        const {data} = await axios.post(url, order, config);

        dispatch({
            type : ORDER_SUCCESS,
            payload : data
        })
        
    } catch (error) {

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
    console.log("trigger")
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

        console.log(data)

        dispatch({
            type : ADMIN_ORDERS_SUCCESS,
            payload : data
        })
    } catch (error) {
        console.log("error ", error)
        dispatch({
            type : ADMIN_ORDERS_FAILED,
            payload : error.response.data.message
        })
    }
}

export const change_order_status = (orderId, status) => async (dispatch) => {
    try {
        dispatch({
            type : CHANGE_ORDER_STATUS_REQUEST
        });

        const url = `${rootUrl}/api/admin/order/status/change/${orderId}`;

        const  config = {
            headers : { "Content-Type" : "application/json" },
            "access-control-allow-origin" : rootUrl,
            withCredentials : true
        };

        const { data } = await axios.patch(url, {status}, config)

        dispatch({
            type : CHANGE_ORDER_STATUS_SUCCESS,
            payload : data
        })
    } catch (error) {
        console.log("status error ", error)
        dispatch({
            type : CHANGE_ORDER_STATUS_FAILED,
            payload : error.response.data.message
        })
    }
}

export const get_order = (orderId) => async (dispatch) => {
    try {
        const url = `${rootUrl}/api/order/${orderId}` 
        dispatch({
            type : GET_ORDER_REQUEST
        });

        const config = {
            header : { "Content-Type" : "application/json" },
            "access-control-allow-origin" : rootUrl,
            withCredentials : true
        };

        const { data } = await axios.get(url, config);

        dispatch({
            type : GET_ORDER_SUCCESS,
            payload : data
        })

    } catch (error) {
        console.log("order err ", error)
        dispatch({
            type : GET_ORDERS_FAILED,
            payload : error.response.data.message
        })
    }
}