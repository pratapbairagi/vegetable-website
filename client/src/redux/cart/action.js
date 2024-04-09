import axios from "axios";
import { ADD_TO_CART_FAILED, ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS, QTY_TO_CART_FAILED, QTY_TO_CART_REQUEST, QTY_TO_CART_SUCCESS, REMOVE_FROM_CART_FAILED, REMOVE_FROM_CART_REQUEST, REMOVE_FROM_CART_SUCCESS } from "./types";



export const add_to_cart = (id) => async (dispatch, getState) => {
    // const url = `http://localhost:5005/api/vegetable/cart/${id}`
    const url = `https://veg-etable.vercel.app/api/vegetable/cart/${id}`
   try {
       dispatch({
           type : ADD_TO_CART_REQUEST
       });

       const config = {
           headers : {
               "Content-Type" : "application/json"
           }
       };

       const {data} = await axios.get(url, config);

       dispatch({
           type : ADD_TO_CART_SUCCESS,
           payload : data
       })

       localStorage.setItem("cart", JSON.stringify(getState().cart.cart))


   } catch (error) {
       dispatch({
           type : ADD_TO_CART_FAILED,
           payload : error
       })
   }
}

export const cart_qty = ({product, operator}) => async (dispatch, getState) => {
    try {
        dispatch({
            type : QTY_TO_CART_REQUEST
        });

        dispatch({
            type : QTY_TO_CART_SUCCESS,
            payload : {product, operator}
        })

        localStorage.setItem("cart", JSON.stringify(getState().cart.cart))
    } catch (error) {
        dispatch({
            type : QTY_TO_CART_FAILED,
            payload : "something went wrong !"
        })
    }
}

export const remove_from_cart = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type : REMOVE_FROM_CART_REQUEST
        });
    
        dispatch({
            type : REMOVE_FROM_CART_SUCCESS,
            payload : id
        })
    } catch (error) {
        dispatch({
            type : REMOVE_FROM_CART_FAILED,
            payload : error
        })
    }
    
}