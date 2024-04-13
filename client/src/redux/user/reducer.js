import { USER_LOGGED_FAILED, USER_LOGGED_REQUEST, USER_LOGGED_SUCCESS, USER_LOGIN_FAILED, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT_FAILED, USER_LOGOUT_REQUEST, USER_LOGOUT_SUCCESS, USER_REGISTER_FAILED, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "./type";



export const user = (state={
    loading : false,
    success : false,
    error : null,
    auth : false,
    message : "",
    user : {},
    users : []
}, action) => {
    switch(action.type){
        case USER_REGISTER_REQUEST,
        USER_LOGIN_REQUEST,
        USER_LOGGED_REQUEST,
        USER_LOGOUT_REQUEST :
            return {
                ...state,
                loading : true
            }
        case USER_REGISTER_SUCCESS :
            return {
                ...state,
                loading : false,
                success : true,
                auth : true,
                user : action.payload
            }
       case USER_LOGIN_SUCCESS :
        console.log(action.payload)

        return {
            ...state,
            loading : false,
            success : true,
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
        case USER_REGISTER_FAILED,
        USER_LOGIN_FAILED,
        USER_LOGOUT_FAILED :
            return {
                ...state,
                loading : false,
                error : action.payload
            }
        case USER_LOGGED_FAILED :
            return {
                ...state,
                loading : false,
                auth : false,
                error : action.payload
            }
        default : return state
    }
}
