import { useState } from "react";



const useSearchQueries = () => {
    const [searchQueries, setSearchQueries] = useState({
        title: "",
        category: [],
        features: [],
        tags: [],
        price: [{
            gte: 0,
            lte: 1000
        }],
        sold: 0,
        nameSort: "",
        priceSort: "",
        ratingSort: "",
        dateSort: "",
        productsPerPage: 12,
        pageNo: 1
    });

    return [searchQueries, setSearchQueries]

}
export default useSearchQueries;