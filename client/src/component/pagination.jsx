

const Pagination = ({fun, numbersOfButton, activePage}) => {
    return (
        <div className=" flex justify-center sm:justify-center md:justify-start md:px-10 border-t pt-5 pb-5 bg-white w-full">
            <nav className="">
                <ul className="pagination">
                    <li>
                        <button onClick={()=>fun("-1")} className="pagination-link text-xs sm:text-xs md:text-sm lg:text-base xl:text-xl whitespace-nowrap cursor-pointer">&laquo; Prev</button>
                    </li>
                    { 
                    Array.from({ length : Math.ceil(numbersOfButton)}, (_, index)=>{
                        return <li key={index}>
                        <button onClick={()=> fun(index+1)} className={`pagination-link text-xs sm:text-xs md:text-sm lg:text-base xl:text-xl whitespace-nowrap cursor-pointer ${activePage == index+1 ? "bg-white" : "bg-gray-100"}`}>{index+1}</button>
                    </li>
                    })
                    }
                    
                    {/* <li>
                        <a href="#" className="pagination-link text-xs sm:text-xs md:text-sm lg:text-base xl:text-xl whitespace-nowrap cursor-pointer">2</a>
                    </li>
                    <li>
                        <a href="#" className="pagination-link text-xs sm:text-xs md:text-sm lg:text-base xl:text-xl whitespace-nowrap cursor-pointer">3</a>
                    </li>
                    <li>
                        <span className="pagination-ellipsis text-xs sm:text-xs md:text-sm lg:text-base xl:text-xl whitespace-nowrap cursor-pointer">&hellip;</span>
                    </li>
                    <li>
                        <a href="#" className="pagination-link text-xs sm:text-xs md:text-sm lg:text-base xl:text-xl whitespace-nowrap cursor-pointer">10</a>
                    </li>*/}
                    <li >
                        <button onClick={()=>fun("+1")} className="pagination-link text-xs sm:text-xs md:text-sm lg:text-base xl:text-xl whitespace-nowrap cursor-pointer">Next &raquo;</button>
                    </li> 
                </ul>
            </nav>
        </div>
    )
}

export default Pagination;