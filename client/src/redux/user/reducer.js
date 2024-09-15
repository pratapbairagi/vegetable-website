import { CLEAR_ERROR, CLEAR_SUCCESS } from "../product/types";
import { GET_SELLERS_FAILED, GET_SELLERS_REQUEST, GET_SELLERS_SUCCESS, GET_USERS_FAILED, GET_USERS_REQUEST, GET_USERS_SUCCESS, USER_LOGGED_FAILED, USER_LOGGED_REQUEST, USER_LOGGED_SUCCESS, USER_LOGIN_FAILED, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT_FAILED, USER_LOGOUT_REQUEST, USER_LOGOUT_SUCCESS, USER_REGISTER_FAILED, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_UPDATE_FAILED, USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS } from "./type";



export const user = (state = {
    loading: false,
    success: false,
    error: false,
    auth: false,
    message: "",
    user: {},
    users: [],
    totalUsersLength : 0,
    sellers: [],
    totalSellersLength : 0
}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case USER_LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case USER_LOGGED_REQUEST:
            return {
                ...state,
                loading: true
            }
        case USER_LOGOUT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case USER_UPDATE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
            case GET_SELLERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case USER_REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                message: "Registered successfully !",
                auth: true,
                user: action.payload
            }
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                auth: true,
                user: action.payload
            }
        case USER_UPDATE_SUCCESS:
            return {
                ...state,
                loading: false,
                success: false,
                message: "Updated successfully !",
                auth: true,
                user: action.payload
            }
        case USER_LOGGED_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                auth: true,
                user: action.payload
            }
        case USER_LOGOUT_SUCCESS:
            return {
                ...state,
                loading: true,
                success: true,
                auth: false,
                user: {}
            }
        case GET_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                auth: true,
                users: action.payload.users,
                totalUsersLength: action.payload.totalUsersLength,
            }
            case GET_SELLERS_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                auth: true,
                sellers: action.payload.sellers,
                totalSellersLength : action.payload.totalSellersLength
            }
        case USER_REGISTER_FAILED:
            return {
                ...state,
                loading: false,
                error: true,
                mesage: action.payload
            }
        case USER_LOGIN_FAILED:
            return {
                ...state,
                loading: false,
                error: true,
                message: action.payload
            }
        case USER_UPDATE_FAILED:
            return {
                ...state,
                loading: false,
                error: true,
                mesage: action.payload
            }
        case USER_UPDATE_FAILED:
            return {
                ...state,
                loading: false,
                error: true,
                mesage: action.payload
            }
        case USER_LOGOUT_FAILED:
            return {
                ...state,
                loading: false,
                auth: false,
                error: true,
                mesage: action.payload
            }
        case GET_USERS_FAILED:
            return {
                ...state,
                loading: false,
                error: true,
                mesage: action.payload
            }
            case GET_SELLERS_FAILED:
            return {
                ...state,
                loading: false,
                error: true,
                mesage: action.payload
            }
        case CLEAR_SUCCESS:
            return {
                ...state,
                success: false,
                error: false,
                message: ""
            }
        case CLEAR_ERROR:
            return {
                ...state,
                loading: false,
                success: false,
                error: false,
                message: ""
            }
        default: return state
    }
}
