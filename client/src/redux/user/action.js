import axios from "axios"
import { USER_LOGGED_FAILED, USER_LOGGED_REQUEST, USER_LOGGED_SUCCESS, USER_LOGIN_FAILED, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT_FAILED, USER_LOGOUT_REQUEST, USER_LOGOUT_SUCCESS, USER_REGISTER_FAILED, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "./type";

// const rootUrl = "http://localhost:5005/api"
const rootUrl = "https://veg-etable.vercel.app/api"
export const user_register = (user) => async (dispatch) => {
    try {
        const url = `${rootUrl}/user/register`;
        // const url = "https://veg-etable.vercel.app/api/user/register";

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

        console.log(data)

        dispatch({
            type : USER_REGISTER_SUCCESS,
            payload : data.user
        })
        
    } catch (error) {
        dispatch({
            type : USER_REGISTER_FAILED,
            payload : error
        })
    }
} 

export const user_login = (user) => async (dispatch) => {

    console.log(user)
    try {
        const url = `${rootUrl}/user/login`
        // const url = "https://veg-etable.vercel.app/api/user/login";

        dispatch({
            type : USER_LOGIN_REQUEST
        })

        const config = {
            headers : {
                "Content-Type": "application/json"
            },
            "access-control-allow-origin": `https://veg-etable.vercel.app`,
            // "access-control-allow-origin": `http://localhost:5005`,
            withCredentials: true
        }

        const data = await axios.get(url, user, config)

        console.log("login data => ", data)

        dispatch({
            type : USER_LOGIN_SUCCESS,
            payload : data.user
        })

    } catch (error) {
        console.log(error)
        dispatch({
            type : USER_LOGIN_FAILED,
            payload : error
        })
    }
}

export const user_logged = () => async (dispatch) => {
    const url = `${rootUrl}/user/logcheck`
    // const url = "https://veg-etable.vercel.app/api/user/logcheck";
    try {
        dispatch({
            type : USER_LOGGED_REQUEST
        })

        const config = {
            headers : {
                "Content-Type" : "application/json"
            },
            // "access-control-allow-origin": "http://localhost:5005",
            withCredentials: true
        }

        const { data } = await axios.get(url, config)

        dispatch({
            type : USER_LOGGED_SUCCESS,
            payload : data.user
        })
    } catch (error) {
        dispatch({
            type : USER_LOGGED_FAILED,
            payload : error
        })
    }
}

export const logout = () => async (dispatch) => {
    try {
        const url = `${rootUrl}/user/logout`
        // const url = "https://veg-etable.vercel.app/api/user/logout";
        dispatch({
            type : USER_LOGOUT_REQUEST
        });

        const config = {
            headers : {
                "Content-Type" : "application/json"
            },
            withCredentials : true
        }

        const {data} = await axios.get(url, config)

        console.log("data logout => ", data)

        dispatch({
            type : USER_LOGOUT_SUCCESS,
            payload : data
        })

    } catch (error) {
        dispatch({
            type : USER_LOGOUT_FAILED,
            payload : error
        })
    }
}