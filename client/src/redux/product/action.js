import axios from "axios"
import { ADD_PRODUCT_FAILED, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, CATEGORIE_SELECTED_FAILED, CATEGORIE_SELECTED_REQUEST, CATEGORIE_SELECTED_SUCCESS, CLEAR_ERROR, CLEAR_SUCCESS, DELETE_PRODUCT_FAILED, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, EDIT_PRODUCT_FAILED, EDIT_PRODUCT_REQUEST, EDIT_PRODUCT_SUCCESS, GET_FILTER_AND_SORT_PRODUCTS_FAILED, GET_FILTER_AND_SORT_PRODUCTS_REQUEST, GET_FILTER_AND_SORT_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILED, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCT_FAILED, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./types"

const rootUrl = "https://veg-etable.vercel.app"
// const rootUrl = "http://localhost:5005"

export const add_product = (product) => async (dispatch) => {
    const url = `${rootUrl}/api/vegetable`;
    // const url = "http://localhost:5005/api/vegetable";
    try {
        dispatch({
            type : ADD_PRODUCT_REQUEST
        });

        const config = {
            headers: { "Content-Type": "application/json" },
            "access-control-allow-origin" : rootUrl,
            withCredentials : true
        }
        const { data } = await axios.post(url, product, config)
        
        
        dispatch({
            type : ADD_PRODUCT_SUCCESS,
            payload : data
        })

    } catch (error) {
        dispatch({
            type : ADD_PRODUCT_FAILED,
            payload : error.response.data.message
        })
    }
}

export const get_products = ({title="", category="", price={lte:0,gte:1000}, tags=[], features=[],productsPerPage=10, pageNo=1}) => async (dispatch) => {
    // let url = `http://localhost:5005/api/vegetables?title=${title}&category=${category}&price[lte]=${price.lte}&price[gte]=${price.gte}&tags=${tags.join(",")}&features=${features.join(",")}`;
    const url = `${rootUrl}/api/vegetables?title=${title}&category=${category}&price[lte]=${price.lte}&price[gte]=${price.gte}&tags=${tags.join(",")}&features=${features.join(",")}`;
    try{
        dispatch({
            type : GET_PRODUCTS_REQUEST
        });

        const config = {
            headers: { "Content-Type": "application/json" }
            // "access-control-allow-origin" : rootUrl,
            // withCredentials : true
        }

        const {data} = await axios.get(url, config )

        console.log(data)

        dispatch({
            type : GET_PRODUCTS_SUCCESS,
            payload : data
        }) 

    }catch (error) {
        dispatch({
            type : GET_PRODUCTS_FAILED,
            payload : error.response.data.message
        })
    }
}

export const get_filter_and_sort_products = ({title="", category=[], price=[{gte : 0, lte : 1000}], tags=[], features=[], sold = 0, nameSort = "", dateSort = "", ratingSort = "", priceSort = "", productsPerPage, pageNo=1 }) => async (dispatch) => {
    let prices = {gte : 0, lte : 1000}
    if(price.length > 0){
        prices = {
            ...prices,
            gte : Math.min(price.map(v=> v.gte)),
            lte : Math.max(price.map(v=> v.lte)),
        }
    }

    console.log(category)
    // let url = `http://localhost:5005/api/store/vegetables?title=${title}&category=${category.join(",")}&price[lte]=${prices.lte}&price[gte]=${prices.gte}&tags=${tags.join(",")}&features=${features.join(",")}&nameSort=${nameSort}&dateSort=${dateSort}&ratingSort=${ratingSort}&priceSort=${priceSort}&sold=${sold}&productsPerPage=${productsPerPage}&pageNo=${pageNo}`;
    let url = `${rootUrl}/api/store/vegetables?title=${title}&category=${category.join(",")}&price[lte]=${prices.lte}&price[gte]=${prices.gte}&tags=${tags.join(",")}&features=${features.join(",")}&nameSort=${nameSort}&dateSort=${dateSort}&ratingSort=${ratingSort}&priceSort=${priceSort}&sold=${sold}&productsPerPage=${productsPerPage}&pageNo=${pageNo}`
    try {
        dispatch({
            type : GET_FILTER_AND_SORT_PRODUCTS_REQUEST
        });

            const config = {
                headers : { "Content-Type" : "application/json" }
            // "access-control-allow-origin" : rootUrl,
                // withCredentials : true
            };

            const {data} = await axios.get(url, config);

            dispatch({
                type : GET_FILTER_AND_SORT_PRODUCTS_SUCCESS,
                payload : data
            })

    } catch (error) {
        dispatch({
            type : GET_FILTER_AND_SORT_PRODUCTS_FAILED,
            payload : error.response.data.message
        })
    }
}

export const get_product = (id) => async (dispatch) => {

    // const url = `http://localhost:5005/api/vegetable/${id}`;
    const url = `${rootUrl}/api/vegetable/${id}`;

    try {
        dispatch({
            type : GET_PRODUCT_REQUEST
        });

        const config = {
            headers: { "Content-Type": "application/json" }
            // "access-control-allow-origin" : rootUrl,
            // withCredentials : true
        }

        const {data} = await axios.get(url, config)

        dispatch({
            type : GET_PRODUCT_SUCCESS,
            payload : data
        })

    } catch (error) {
        dispatch({
            type : GET_PRODUCT_FAILED,
            payload : error.response.data.message
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
    // const url = `http://localhost:5005/api/selected_category/${active_category}`
    const url = `${rootUrl}/api/selected_category/${active_category}`
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
            payload : error.response.data.message
        })
    }
}

export const editProduct = ({id, createProduct}) => async (dispatch) => {
    console.log(createProduct)
    // const url = `http://localhost:5005/api/vegetable/edit/${id}`
    const url = `${rootUrl}/api/vegetable/edit/${id}`

    try {
        dispatch({
            type : EDIT_PRODUCT_REQUEST
        });

        const config = {
            headers : {
                "Content-type" : "application/json"
            },
            "access-control-allow-origin" : rootUrl,
            withCredentials : true
        }

        const {data} = await axios.put(
            url, createProduct, config
        )

        dispatch({
            type : EDIT_PRODUCT_SUCCESS,
            payload : data
        });

    } catch (error) {
        dispatch({
            type : EDIT_PRODUCT_FAILED,
            payload : error.response.data.message
        })
    }
}

export const delete_product = (id) => async (dispatch) => {
    try {
        const url = `${rootUrl}/api/vegetable/${id}`
        dispatch({
            type : DELETE_PRODUCT_REQUEST
        })

        const config = {
            headers: { "Content-Type": "application/json" },
            "access-control-allow-origin" : rootUrl,
            withCredentials : true
        }

        const {data} = await axios.delete(url, config);

        dispatch({
            type : DELETE_PRODUCT_SUCCESS,
            payload : data
        })

    } catch (error) {
        dispatch({
            type : DELETE_PRODUCT_FAILED,
            payload : error.response.data.message
        })
        
    }
}


export const clear_success = () => (dispatch) => {
    dispatch({
        type : CLEAR_SUCCESS
    })
}

export const clear_error = () => (dispatch) => {
    dispatch({
        type : CLEAR_ERROR
    })
}