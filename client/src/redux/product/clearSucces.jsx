import { useDispatch } from "react-redux"
import { CLEAR_SUCCESS } from "./types"
import { clear_success } from "./action"



const setTimeoutForClearSuccess = () => {

    const dispatch = useDispatch();

    console.log("clear")

    let timeOut = setTimeout(()=>{
        dispatch(clear_success())
    },5000);

    return clearTimeout(timeOut)
}

export default setTimeoutForClearSuccess