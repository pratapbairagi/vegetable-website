

const Pagination = () => {
    return (
        <div class="col-span-12 flex justify-center sm:justify-center md:justify-end justify-end md:px-10 border-t pt-5">
            <nav className="">
                <ul class="pagination">
                    <li>
                        <a href="#" class="pagination-link text-xs sm:text-xs md:text-sm lg:text-base xl:text-xl whitespace-nowrap cursor-pointer">&laquo; Prev</a>
                    </li>
                    <li>
                        <a href="#" class="pagination-link text-xs sm:text-xs md:text-sm lg:text-base xl:text-xl whitespace-nowrap cursor-pointer">1</a>
                    </li>
                    <li>
                        <a href="#" class="pagination-link text-xs sm:text-xs md:text-sm lg:text-base xl:text-xl whitespace-nowrap cursor-pointer">2</a>
                    </li>
                    <li>
                        <a href="#" class="pagination-link text-xs sm:text-xs md:text-sm lg:text-base xl:text-xl whitespace-nowrap cursor-pointer">3</a>
                    </li>
                    <li>
                        <span class="pagination-ellipsis text-xs sm:text-xs md:text-sm lg:text-base xl:text-xl whitespace-nowrap cursor-pointer">&hellip;</span>
                    </li>
                    <li>
                        <a href="#" class="pagination-link text-xs sm:text-xs md:text-sm lg:text-base xl:text-xl whitespace-nowrap cursor-pointer">10</a>
                    </li>
                    <li>
                        <a href="#" class="pagination-link text-xs sm:text-xs md:text-sm lg:text-base xl:text-xl whitespace-nowrap cursor-pointer">Next &raquo;</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination;