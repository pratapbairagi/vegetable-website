

const Pagination = () => {
    return (
        <div className=" flex justify-center sm:justify-center md:justify-start md:px-10 border-t pt-5 pb-5 bg-white w-full">
            <nav className="">
                <ul className="pagination">
                    <li>
                        <a href="#" className="pagination-link text-xs sm:text-xs md:text-sm lg:text-base xl:text-xl whitespace-nowrap cursor-pointer">&laquo; Prev</a>
                    </li>
                    <li>
                        <a href="#" className="pagination-link text-xs sm:text-xs md:text-sm lg:text-base xl:text-xl whitespace-nowrap cursor-pointer">1</a>
                    </li>
                    <li>
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
                    </li>
                    <li>
                        <a href="#" className="pagination-link text-xs sm:text-xs md:text-sm lg:text-base xl:text-xl whitespace-nowrap cursor-pointer">Next &raquo;</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination;