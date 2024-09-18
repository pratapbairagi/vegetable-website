import { get_filter_and_sort_products } from "../redux/product/action"


export const paginationFun = ({e, searchQueries, setSearchQuaries = () => null, dispatch})=> {
        if(typeof e == "number"){
            setSearchQuaries({
                ...searchQueries,
                pageNo : e
            })
                dispatch(get_filter_and_sort_products({ title: searchQueries.title, category: searchQueries.category, price: searchQueries.price, tags: searchQueries.tags, features: searchQueries.features, nameSort: searchQueries.nameSort, dateSort: searchQueries.dateSort, priceSort: searchQueries.priceSort, sold: searchQueries.sold, ratingSort: searchQueries.ratingSort, productsPerPage: searchQueries.productsPerPage, pageNo: e }))

        }
        else{
            setSearchQuaries({
                ...searchQueries,
                pageNo : searchQueries.pageNo + Number(e)
            })
            dispatch(get_filter_and_sort_products({ title: searchQueries.title, category: searchQueries.category, price: searchQueries.price, tags: searchQueries.tags, features: searchQueries.features, nameSort: searchQueries.nameSort, dateSort: searchQueries.dateSort, priceSort: searchQueries.priceSort, sold: searchQueries.sold, ratingSort: searchQueries.ratingSort, productsPerPage: searchQueries.productsPerPage, pageNo: searchQueries.pageNo + Number(e) }))

        }

}