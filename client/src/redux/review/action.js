import axios from "axios";
import { ADD_REVIEW_FAILED, ADD_REVIEW_REQUEST, ADD_REVIEW_SUCCESS, GET_ALL_REVIEWS_FAILED, GET_ALL_REVIEWS_REQUEST, GET_ALL_REVIEWS_SUCCESS, GET_REVIEWS_FAILED, GET_REVIEWS_REQUEST, GET_REVIEWS_SUCCESS } from "./type";

// const rootUrl = "http://localhost:5005";
const rootUrl = "https://veg-etable.vercel.app";

export const add_review = ({reviewData, productId}) => async (dispatch) => {
    try {
        const url = `${rootUrl}/api/add/review/${productId}`;

        dispatch({
            type : ADD_REVIEW_REQUEST
        });

        const config = {
            headers : { "Content-Type" : "application/json" },
            "access-control-allow-origin" : rootUrl,
            withCredentials : true
        };

        const { data } = await axios.post(url, reviewData, config);

        console.log("rev data ", data)

        dispatch({
            type : ADD_REVIEW_SUCCESS,
            payload : data
        })
    } catch (error) {
        dispatch({
            type : ADD_REVIEW_FAILED,
            payload : error.response.data.message
        })
    }
}

export const get_reviews = (productId) => async (dispatch) => {
    try{
        const url = `${rootUrl}/api/reviews/product/${productId}`;

        dispatch({
            type : GET_REVIEWS_REQUEST
        });

        const config = {
            headers : { "Content-Type" : "application/json" }
            // "access-control-allow-origin"  : rootUrl
        };

        const { data } = await axios.get(url, config);

        dispatch({
            type : GET_REVIEWS_SUCCESS,
            payload : data
        })

    } catch (error) {
        dispatch({
            type : GET_REVIEWS_FAILED,
            payload : error.response.data.message
        })
    }
}

export const get_all_reviews = () => async (dispatch) => {

    const url = `${rootUrl}/api/reviews`;

    try {
        dispatch({
            type : GET_ALL_REVIEWS_REQUEST
        });

        const { data } = await axios.get(url);

        dispatch({
            type : GET_ALL_REVIEWS_SUCCESS,
            payload : data
        })

    } catch (error) {
        dispatch({
            type : GET_ALL_REVIEWS_FAILED,
            payload : error.response.data.message
        })
    }
}