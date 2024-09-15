import { ADMIN_ORDERS_FAILED, ADMIN_ORDERS_REQUEST, ADMIN_ORDERS_SUCCESS, CHANGE_ORDER_STATUS_FAILED, CHANGE_ORDER_STATUS_REQUEST, CHANGE_ORDER_STATUS_SUCCESS, GET_ORDERS_FAILED, GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS, GET_ORDER_FAILED, GET_ORDER_REQUEST, GET_ORDER_SUCCESS, ORDER_FAILED, ORDER_REQUEST, ORDER_SUCCESS } from "./type";



export const Order_place = ( state ={
    loading : false,
    success : false,
    error : false,
    message : "",
    order : null,
    orders : [],
    sellerOrders : [],
    totalNumberOfOrders : 0,
    totalNumberOfCompletedOrders : 0,
    totalNumberOfPendingOrders : 0,
    totalNumberOfProcessingOrders : 0
}, action) => {
    switch(action.type){
        case ORDER_REQUEST:
            return {
                ...state,
                loading : true
            }
        case GET_ORDERS_REQUEST:
            return {
                ...state,
                loading : true
            }
        case ADMIN_ORDERS_REQUEST:
            return {
                ...state,
                loading : true
            }
        case CHANGE_ORDER_STATUS_REQUEST:
            return {
                ...state,
                loading : true
            }
        case GET_ORDER_REQUEST :
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
                sellerOrders : action.payload.orders,
                totalNumberOfOrders : action.payload.totalNumberOfOrders,
                totalNumberOfCompletedOrders : action.payload.totalNumberOfCompletedOrders,
                totalNumberOfPendingOrders : action.payload.totalNumberOfPendingOrders,
                totalNumberOfProcessingOrders: action.payload.totalNumberOfProcessingOrders
            }
        case CHANGE_ORDER_STATUS_SUCCESS :
            return {
                ...state,
                loading : false,
                success : true,
                sellerOrders : action.payload.orders,
                message : action.payload.message
            }
        case GET_ORDER_SUCCESS :
            return {
                ...state,
                loading : false,
                success : true,
                order : action.payload.order,
                message : ""
            }
        case ORDER_FAILED :
            return {
                ...state,
                loading : false,
                error : true,
                message : action.payload
            }
        case CHANGE_ORDER_STATUS_FAILED :
            return {
                ...state,
                loading : false,
                message : action.payload,
                error : true
            }
        case ADMIN_ORDERS_FAILED,
         GET_ORDERS_FAILED :
                return {
                    ...state,
                    loading : false,
                    error : true,
                    message : action.payload
                }
        case GET_ORDER_FAILED :
            return {
                ...state, 
                loading : false,
                error : true,
                message : action.payload
            }
        default : return state
    }
}