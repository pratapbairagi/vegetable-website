import { ADD_PRODUCT_FAILED, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, CATEGORIE_SELECTED_REQUEST, CATEGORIE_SELECTED_SUCCESS, CLEAR_SUCCESS, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, EDIT_PRODUCT_FAILED, EDIT_PRODUCT_REQUEST, EDIT_PRODUCT_SUCCESS, GET_FILTER_AND_SORT_PRODUCTS_FAILED, GET_FILTER_AND_SORT_PRODUCTS_REQUEST, GET_FILTER_AND_SORT_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILED, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCT_FAILED, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./types";


export const product = (state = {
    loading: false,
    product: null,
    products: [],
    categories: [],
    categories2: [],
    features: [],
    features2: [],
    prices: [],
    tags: [],
    filteredProducts: [],
    productsLength: 0,
    success: false,
    error: null,
    message: ""
}, action) => {
    switch (action.type) {
        case ADD_PRODUCT_REQUEST,
            GET_PRODUCTS_REQUEST,
            GET_PRODUCT_REQUEST,
            CATEGORIE_SELECTED_REQUEST,
            EDIT_PRODUCT_REQUEST,
            GET_FILTER_AND_SORT_PRODUCTS_REQUEST,
            DELETE_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                product: action.payload.product,
                success: true,
                message: action.payload.message
            }
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                products: action.payload.products,
                categories: action.payload.categories,
                filteredProducts: action.payload.filteredProducts,
                features: action.payload.features,
                most_sold: action.payload.soldVegetables,
                productsLength: action.payload.productsLength
            }
        case DELETE_PRODUCT_SUCCESS:
            const product = state.products.find(v => v._id == action.payload.id);

            if (product) {
                return {
                    ...state,
                    loading: false,
                    success: true,
                    message: action.payload.message,
                    products: state.products.filter(v => v._id != product._id)
                }
            }
        case GET_FILTER_AND_SORT_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                products: action.payload.products,
                tags: action.payload.tags,
                features2: action.payload.features,
                prices: action.payload.prices,
                categories2: action.payload.categories,
                productsLength: action.payload.productsLength
            }
        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                product: action.payload
            }
        case EDIT_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                product: action.payload,
                message: action.payload.message
            }
        case CATEGORIE_SELECTED_SUCCESS:
            return {
                ...state,
                loading: false,
                filteredProducts: action.payload
                // categories : action.payload.categories
            }
        case ADD_PRODUCT_FAILED,
            GET_PRODUCTS_FAILED,
            GET_PRODUCT_FAILED,
            EDIT_PRODUCT_FAILED,
            GET_FILTER_AND_SORT_PRODUCTS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case CLEAR_SUCCESS:
            return {
                ...state,
                success: false,
                message: ""
            }
        default: return state
    }
}

