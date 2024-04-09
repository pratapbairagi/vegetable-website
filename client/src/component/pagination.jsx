

const Pagination = ({fun, numbersOfButton, activePage}) => {
    return (
        <div className=" flex justify-center sm:justify-center md:justify-start md:px-10 border-t pt-5 pb-5 bg-white w-full">
           {numbersOfButton > 1 ?<nav className="">
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
                    
                    <li >
                        <button onClick={()=>fun("+1")} className="pagination-link text-xs sm:text-xs md:text-sm lg:text-base xl:text-xl whitespace-nowrap cursor-pointer">Next &raquo;</button>
                    </li> 
                </ul>
            </nav> : <div className="h-10"></div>
            }
        </div>
    )
}

export default Pagination;