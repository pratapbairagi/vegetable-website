import { ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS, QTY_TO_CART_REQUEST, QTY_TO_CART_SUCCESS, REMOVE_FROM_CART_FAILED, REMOVE_FROM_CART_REQUEST, REMOVE_FROM_CART_SUCCESS } from "./types";


export const cart = (state={
    success : false,
    error : null,
    message : "",
    qty : 0,
    totalAmount : 0,
    shippingInfo : {},
    loading : false,
    cart : []
}, action) => {

    switch(action.type){
        case ADD_TO_CART_REQUEST :
            return {
                ...state,
                loading : true
            }
            case REMOVE_FROM_CART_REQUEST :
            return {
                ...state,
                loading : true
            }
           case QTY_TO_CART_REQUEST :
            return {
                ...state,
                loading : true
            }
        case ADD_TO_CART_SUCCESS :
            let item = state.cart.find((v)=>{ return v._id === action.payload.product._id});
            console.log("cart => ", item)
            if(item){
            return {
                ...state,
                success : true,
                loading : false,
                cart : state.cart.map(v=> v._id === action.payload.product._id ? {...v, qty : v.qty + 100 } : v ) 
            }
        }
        else{
            return {
                ...state,
                loading : false,
                success : true,
                cart : [...state.cart, {...action.payload.product, qty : 100}]
            }
        }
        case QTY_TO_CART_SUCCESS :
            const isProductExist = state.cart.find(v=> v._id == action.payload.product._id)
            if(isProductExist){
                if(action.payload.operator == "100"){
            return {
                ...state,
                loading : false,
                success : true,
                cart : state.cart.map(v=> v._id == isProductExist._id ? {...v, qty : v.qty + Number(action.payload.operator) } : v)
            }
        }
        else if(action.payload.operator == "-100"){
            return {
                ...state,
                loading : false,
                success : true,
                cart : isProductExist.qty > 100 ? state.cart.map(v=> v._id == isProductExist._id ? {...v, qty : v.qty + Number(action.payload.operator) } : v) : isProductExist.qty == 100 ? state.cart.filter(v=> v._id !== action.payload.product._id) : isProductExist
            }
        }
        }
        else{
            return {
                ...state,
                loading : false,
                success : true,
                cart : [...state.cart, {...action.payload.product, qty : 100 }]
            }
        }
        case REMOVE_FROM_CART_SUCCESS :
            let isCartItemExist = state.cart.find(v=> v._id === action.payload)
            if(isCartItemExist){
            return {
                ...state,
                loading : false,
                success : true,
                cart : state.cart.filter(v=> v._id !== isCartItemExist._id)
            }
        }
        case REMOVE_FROM_CART_FAILED :
            return {
                ...state,
                loading : false,
                error : "Unable to remove items from cart. something went wrong !"
            }
        default : return state
    }
}