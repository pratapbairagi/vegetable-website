import {createStore, combineReducers, applyMiddleware} from "redux";
import {thunk} from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension"
import { product } from "./product/reducer";




const reducers = combineReducers({
    product : product
})

const middleware = [thunk];

const initialState = {
    cart : {
        cart : localStorage.getItem("cart") ?
        JSON.parse(localStorage.getItem("cart"))
        :
        []
    }
}

const store = createStore( reducers, initialState, composeWithDevTools(applyMiddleware(...middleware))  )

export default store