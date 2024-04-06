import axios from "axios";
import { ADD_TO_CART_FAILED, ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS } from "./types";



export const add_to_cart = (id) => async (dispatch, getState) => {
    const url = `http://localhost:5005/api/vegetable/cart/${id}`
   //  const url = `https://veg-etable.vercel.app/api/vegetable/cart/${id}`
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

       console.log("add to caryt product => ", data)

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