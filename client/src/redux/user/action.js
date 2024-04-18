import axios from "axios"
import { USER_LOGGED_FAILED, USER_LOGGED_REQUEST, USER_LOGGED_SUCCESS, USER_LOGIN_FAILED, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT_FAILED, USER_LOGOUT_REQUEST, USER_LOGOUT_SUCCESS, USER_REGISTER_FAILED, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_UPDATE_FAILED, USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS } from "./type";

// const rootUrl = "http://localhost:5005"
const rootUrl = "https://veg-etable.vercel.app"
export const user_register = (user) => async (dispatch) => {
    console.log("is register action workig with logout")
    try {
        const url = `${rootUrl}/api/user/register`;
        // const url = "https://veg-etable.vercel.app/api/user/register";

        dispatch({
            type : USER_REGISTER_REQUEST
        })

        const config = {
            headers : {
                "Content-Type" : "application/json"
            },
            "access-cobtrol-allow-origin" : rootUrl,
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
            payload : error.response.data.message
        })
    }
} 

export const user_login = (user) => async (dispatch) => {
    console.log("is login action workig with logout")

    try {
        const url = `${rootUrl}/api/user/login`
        // const url = "https://veg-etable.vercel.app/api/user/login";

        dispatch({
            type : USER_LOGIN_REQUEST
        })

        const config = {
            headers : {
                "Content-Type": "application/json"
            },
            "access-cobtrol-allow-origin" : rootUrl,
            withCredentials: true
        }

        const {data} = await axios.post(url, user, config)

        dispatch({
            type : USER_LOGIN_SUCCESS,
            payload : data.user
        })

    } catch (error) {
        console.log(error)
        dispatch({
            type : USER_LOGIN_FAILED,
            payload : error.response.data.message
        })
    }
}

export const user_logged = () => async (dispatch) => {
    console.log("is logged action workig with logout")

    const url = `${rootUrl}/api/user/logcheck`
    // const url = "https://veg-etable.vercel.app/api/user/logcheck";
    try {
        dispatch({
            type : USER_LOGGED_REQUEST
        })

        const config = {
            headers : {
                "Content-Type" : "application/json"
            },
            "access-cobtrol-allow-origin" : rootUrl,
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
            payload : error.response.data.message
        })
    }
}

export const logout = () => async (dispatch) => {
    try {
        const url = `${rootUrl}/api/user/logout`
        // const url = "https://veg-etable.vercel.app/api/user/logout";
        dispatch({
            type : USER_LOGOUT_REQUEST
        });

        const config = {
            headers : {
                "Content-Type" : "application/json"
            },
            // "access-control-allow-origin" : rootUrl,
            withCredentials : true
        }

        const {data} = await axios.get(url, config)

        document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;";
        
        dispatch({
            type : USER_LOGOUT_SUCCESS,
            payload : data
        })



    } catch (error) {
        dispatch({
            type : USER_LOGOUT_FAILED,
            payload : error.response.data.message
        })
    }
}

export const user_update = (user) => async (dispatch) => {
    try {
        const url = `${rootUrl}/api/user/update`;
        dispatch({
            type : USER_UPDATE_REQUEST
        })

        const config = {
            headers : { "Content-Type" : "application/json" },
            "access-cobtrol-allow-origin" : rootUrl,
            withCredentials : true
        }

        const {data} = await axios.put(url, user, config);

        console.log("data update => ", data)

        dispatch({
            type : USER_UPDATE_SUCCESS,
            payload : data.user
        })

    } catch (error) {
        console.log(error)
        dispatch({
            type : USER_UPDATE_FAILED,
            payload : error.response.data.message
        })
    }
}