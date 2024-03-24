import axios from "axios"
import { ADD_PRODUCT_FAILED, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, CATEGORIE_SELECTED_FAILED, CATEGORIE_SELECTED_REQUEST, CATEGORIE_SELECTED_SUCCESS, CLEAR_SUCCESS, GET_PRODUCTS_FAILED, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCT_FAILED, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./types"

export const add_product = (product) => async (dispatch) => {
    console.log(product)
    // const url = "https://veg-etable.vercel.app/api/vegetable";
    const url = "http://localhost:5005/api/vegetable";
    try {
        dispatch({
            type : ADD_PRODUCT_REQUEST
        });

        const config = {
            headers: { "Content-Type": "application/json" }
        }
        const { data } = await axios.post(url, product, config)
        
        
        dispatch({
            type : ADD_PRODUCT_SUCCESS,
            payload : data.product
        })
    } catch (error) {
        dispatch({
            type : ADD_PRODUCT_FAILED,
            payload : error
        })
    }
}

export const get_products = ({title="", category="", price={lte:0,gte:1000}, tags=[], features=[]}) => async (dispatch) => {
    let url = `http://localhost:5005/api/vegetables?title=${title}&category=${category}&price[lte]=${price.lte}&price[gte]=${price.gte}&tags=${tags.join(",")}&features=${features.join(",")}`;

    // const url = "https://veg-etable.vercel.app/api/vegetables";

    try{
        dispatch({
            type : GET_PRODUCTS_REQUEST
        });

        const config = {
            headers: { "Content-Type": "application/json" }
        }

        const {data} = await axios.get(url, config )
        console.log("data => ", data)

        dispatch({
            type : GET_PRODUCTS_SUCCESS,
            payload : data
        })
    }catch (error) {
        dispatch({
            type : GET_PRODUCTS_FAILED,
            payload : error
        })
    }
}

export const get_product = (id) => async (dispatch) => {

    const url = `http://localhost:5005/api/vegetable/${id}`;
    // const url = `https://veg-etable.vercel.app/api/vegetable/${id}`;

    try {
        dispatch({
            type : GET_PRODUCT_REQUEST
        });

        const config = {
            headers: { "Content-Type": "application/json" }
        }

        const {data} = await axios.get(url, config)


        dispatch({
            type : GET_PRODUCT_SUCCESS,
            payload : data
        })

    } catch (error) {
        dispatch({
            type : GET_PRODUCT_FAILED,
            payload : error
        })
    }
}

// export const categories = () => async (dispatch) => {
//     const url = `http://localhost:5005/api/categories`;
//     try {
//         dispatch({
//             type : CATEGORIES_REQUEST
//         });
//         const config = {
//             headers: { "Content-Type": "application/json" }
//         }

//         const {data} = await axios.get(url, config);

//         dispatch({
//             type : CATEGORIES_SUCCESS,
//             payload : data.categories
//         })
//     } catch (error) {
//         dispatch({
//             type : CATEGORIES_FAILED,
//             payload : error
//         })
//     }
// }

export const filteredProducts = ({ active_category, filteredProducts }) => async (dispatch) => {
    const url = `http://localhost:5005/api/selected_category/${active_category}`
    try {
        dispatch({
            type : CATEGORIE_SELECTED_REQUEST
        });

        const config = {
            headers: { "Content-Type": "application/json" }
        }

        // console.log("active => ", active_category, " == ",  filteredProducts)
        let x 

        // const {data} = await axios.get(url, config );

        // x =  await filteredProducts.map((v,i)=>{
        //     return {...v, active : v.category == active_category ? true : false}
        // })


        dispatch({
            type : CATEGORIE_SELECTED_SUCCESS,
            payload : filteredProducts
        })
        
    } catch (error) {
        dispatch({
            type : CATEGORIE_SELECTED_FAILED,
            payload : error
        })
    }
}

export const clear_success = () => (dispatch) => {
    dispatch({
        type : CLEAR_SUCCESS
    })
}