import { ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS } from "./types";


export const cart = (state={
    success : false,
    error : null,
    message : "",
    qty : 0,
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
        case ADD_TO_CART_SUCCESS :
            let item = state.cart.find((v)=>{ return v._id === action.payload.product._id});
            console.log("cart => ", item)
            if(item){
            return {
                ...state,
                success : true,
                loading : false,
                cart : state.cart.map(v=> v._id === action.payload.product._id ? action.payload.product : v ) 
            }
        }
        else{
            return {
                ...state,
                loading : false,
                success : true,
                cart : [...state.cart, action.payload.product]
            }
        }
        default :
        return state
    }
}