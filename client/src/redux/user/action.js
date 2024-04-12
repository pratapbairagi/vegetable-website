import axios from "axios"
import { USER_REGISTER_FAILED, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "./type";

export const user_register = (user) => async (dispatch) => {
    try {
        // const url = "http://localhost:5005/api/user/register";
        const url = "https://veg-etable.vercel.app/api/user/register";

        dispatch({
            type : USER_REGISTER_REQUEST
        })

        const config = {
            headers : {
                "Content-Type" : "application/json"
            },
            withCredentials : true
        };

        const {data} = await axios.post(url, user, config);

        dispatch({
            type : USER_REGISTER_SUCCESS,
            payload : data
        })
        
    } catch (error) {
        dispatch({
            type : USER_REGISTER_FAILED,
            payload : error
        })
    }
} 