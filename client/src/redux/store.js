import {createStore, combineReducers, applyMiddleware} from "redux";
import {thunk} from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension"
import { product } from "./product/reducer";
// import { user } from "./user/reducer";
import { cart } from "./cart/reducer";
import { user } from "./user/reducer";
import mapCoords from "./map/reducer";
import { Order_place } from "./order/reducer";




const reducers = combineReducers({
    product : product,
    cart : cart,
    user : user,
    mapCoords : mapCoords,
    order : Order_place
})


const initialState = {
    cart : {
        cart : localStorage.getItem("cart") ?
        JSON.parse(localStorage.getItem("cart"))
        :
        []
    }
}

const middleware = [thunk];


const store = createStore( reducers, initialState, composeWithDevTools(applyMiddleware(...middleware))  )

export default store