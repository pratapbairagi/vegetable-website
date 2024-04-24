import { ADMIN_ORDERS_FAILED, ADMIN_ORDERS_REQUEST, ADMIN_ORDERS_SUCCESS, GET_ORDERS_FAILED, GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS, ORDER_FAILED, ORDER_REQUEST, ORDER_SUCCESS } from "./type";



export const Order_place = ( state ={
    loading : false,
    success : false,
    error : false,
    message : "",
    order : null,
    orders : [],
    sellerOrders : []
}, action) => {
    switch(action.type){
        case ORDER_REQUEST,
        GET_ORDERS_REQUEST,
        ADMIN_ORDERS_REQUEST :
            return {
                ...state,
                loading : true
            }
        case ORDER_SUCCESS :
            return {
                ...state,
                loading : false,
                success : true,
                order : action.payload.order,
                message : action.payload.message
            }
        case GET_ORDERS_SUCCESS :
            console.log("orders => ", action.payload)
            return {
                ...state,
                loading : false,
                success : true,
                orders : action.payload.orders,
                message : action.payload.message
            }
        case ADMIN_ORDERS_SUCCESS :
            return {
                ...state,
                loading: false,
                success : true,
                message : action.payload.message,
                sellerOrders : action.payload.sellerOrders
            }
        case ORDER_FAILED :
        console.log("failed => ", action.payload)
            return {
                ...state,
                loading : false,
                error : true,
                message : action.payload
            }
        case ADMIN_ORDERS_FAILED,
         GET_ORDERS_FAILED :
            console.log("failed => ", action.payload)
                return {
                    ...state,
                    loading : false,
                    error : true,
                    message : action.payload
                }
        default : return state
    }
}