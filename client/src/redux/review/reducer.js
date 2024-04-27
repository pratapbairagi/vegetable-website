// import { ADD_REVIEW_REQUEST, ADD_REVIEW_SUCCESS, ADD_REVIEW_FAILED } ;

import { GET_ORDER_SUCCESS } from "../order/type"
import { ADD_REVIEW_REQUEST, ADD_REVIEW_SUCCESS, ADD_REVIEW_FAILED, GET_REVIEWS_REQUEST, GET_REVIEWS_SUCCESS, GET_REVIEWS_FAILED } from "./type"


const reviews = (state = {
    loading: false,
    success: false,
    error: false,
    message: "",
    review: null,
    reviews: []
}, action) => {

    switch (action.type) {
        case ADD_REVIEW_REQUEST,
        GET_REVIEWS_REQUEST :
            return {
                ...state,
                loading: true
            }
        case ADD_REVIEW_SUCCESS :
            return {
                ...state,
                loading : false,
                success : true,
                message : action.payload.message,
                review : action.payload.review,
                reviews : action.payload.reviews
            }
        case GET_REVIEWS_SUCCESS :
            return {
                ...state,
                loading : false,
                success : true,
                message : "",
                reviews : action.payload.reviews
            }
        case GET_REVIEWS_FAILED :
            return {
                ...state,
                loading : false,
                error : true,
                message : action.payload
            }
        case ADD_REVIEW_FAILED :
            return {
                ...state,
                loading : false,
                error : true,
                message : action.payload
            }
        case GET_ORDER_SUCCESS :
            return {
                ...state,
                loading : false,
                success : true,
                review : action.payload.review
            }
        default : return state
    }
}

export default reviews