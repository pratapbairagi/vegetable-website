import { ADD_PRODUCT_FAILED, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, CATEGORIE_SELECTED_REQUEST, CATEGORIE_SELECTED_SUCCESS, CLEAR_SUCCESS, GET_PRODUCTS_FAILED, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCT_FAILED, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./types";


export const product = ( state = {
    loading : false,
    product : null,
    products : [],
    categories : [],
    features : [],
    filteredProducts : [],
    success : false,
    error : null
}, action ) => {
    switch(action.type){
        case ADD_PRODUCT_REQUEST,
        GET_PRODUCTS_REQUEST,
        GET_PRODUCT_REQUEST,
        CATEGORIE_SELECTED_REQUEST :
           return {
                ...state,
                loading : true
            }
        case  ADD_PRODUCT_SUCCESS :
            return {
                ...state,
                loading : false,
                product : action.payload,
                success : true
            }
        case GET_PRODUCTS_SUCCESS :
            return {
                ...state,
                loading : false,
                success : true,
                products : action.payload.products,
                categories : action.payload.categories,
                filteredProducts : action.payload.filteredProducts,
                features : action.payload.features
            }
        case GET_PRODUCT_SUCCESS :
            return {
                ...state,
                loading : false,
                success : true,
                product : action.payload
            }
        case CATEGORIE_SELECTED_SUCCESS :
            return {
                ...state,
                loading : false,
                filteredProducts : action.payload
                // categories : action.payload.categories
            }
        case ADD_PRODUCT_FAILED,
            GET_PRODUCTS_FAILED,
            GET_PRODUCT_FAILED :
            return {
                ...state,
                loading : false,
                error : action.payload
            }
        case CLEAR_SUCCESS :
            return {
                ...state,
                success : false
            }
        default : return state
    }
}

