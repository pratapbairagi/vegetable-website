import { USER_REGISTER_FAILED, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "./type";



export const user = (state={
    loading : false,
    success : false,
    error : null,
    message : "",
    user : {},
    users : []
}, action) => {
    switch(action.type){
        case USER_REGISTER_REQUEST :
            return {
                ...state,
                loading : true
            }
        case USER_REGISTER_SUCCESS :
            return {
                ...state,
                loading : false,
                success : true,
                user : action.payload.user
            }
        case USER_REGISTER_FAILED :
            return {
                ...state,
                loading : false,
                error : action.payload
            }
        default : return state
    }
}
