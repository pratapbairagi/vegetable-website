import { CLEAR_ERROR, CLEAR_SUCCESS } from "../product/types";
import { USER_LOGGED_FAILED, USER_LOGGED_REQUEST, USER_LOGGED_SUCCESS, USER_LOGIN_FAILED, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT_FAILED, USER_LOGOUT_REQUEST, USER_LOGOUT_SUCCESS, USER_REGISTER_FAILED, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_UPDATE_FAILED, USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS } from "./type";



export const user = (state={
    loading : false,
    success : false,
    error : false,
    auth : false,
    message : "",
    user : {},
    users : []
}, action) => {
    switch(action.type){
        case USER_REGISTER_REQUEST,
        USER_LOGIN_REQUEST,
        USER_LOGGED_REQUEST,
        USER_LOGOUT_REQUEST,
        USER_UPDATE_REQUEST :
            return {
                ...state,
                loading : true
            }
        case USER_REGISTER_SUCCESS :
            return {
                ...state,
                loading : false,
                success : true,
                message : "Registered successfully !",
                auth : true,
                user : action.payload
            }
       case USER_LOGIN_SUCCESS :
        return {
            ...state,
            loading : false,
            success : true,
            auth : true,
            user : action.payload
        }
        case USER_UPDATE_SUCCESS :
            return {
                ...state,
                loading : false,
                success : false,
                message : "Updated successfully !",
                auth : true,
                user : action.payload
            }
       case USER_LOGGED_SUCCESS :
            return {
                ...state,
                loading : false,
                success : true,
                auth : true,
                user : action.payload
            }
        case USER_LOGOUT_SUCCESS :
            return  {
                ...state,
                loading : true,
                success : true,
                auth : false,
                user : {}
            }
        case USER_REGISTER_FAILED :
        console.log(action.payload)
            return {
                ...state,
                loading : false,
                error : true,
                mesage : action.payload
            }
        case USER_LOGIN_FAILED :
            return {
                ...state,
                loading : false,
                error : true,
                message : action.payload
            }
            case USER_UPDATE_FAILED :
                return {
                    ...state,
                    loading : false,
                    error : true,
                mesage : action.payload
                }
                case USER_UPDATE_FAILED :
                return {
                    ...state,
                    loading : false,
                    error : true,
                mesage : action.payload
                }
        case USER_LOGOUT_FAILED :
            return {
                ...state,
                loading : false,
                auth : false,
                error : true,
                mesage : action.payload
            }
            case CLEAR_SUCCESS:
                return {
                    ...state,
                    success: false,
                    error : false,
                    message: ""
                }
            case CLEAR_ERROR :
                return {
                    ...state,
                    loading : false,
                    success : false,
                    error : false,
                    message : ""
                }
        default : return state
    }
}
