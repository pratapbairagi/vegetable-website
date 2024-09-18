

const ServiceFestureCard = ({values}) => {
    return(
        <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gray-100 mx-auto sm:w-24 sm:h-24">
              <svg className="w-12 h-12 text-deep-purple-accent-400 sm:w-20 sm:h-20" stroke="rgb(88, 95, 196)" viewBox="0 0 52 52" >
                <polygon strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23" />
              </svg>
            </div>
            <h6 className="mb-2 font-semibold leading-5 text-theme-blue-600 text-center">{values.title}</h6>
            <p className="max-w-md mb-3 text-sm text-blue-200 sm:mx-auto">
              {values.description}
            </p>
            <a href="/" aria-label="" className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-300 hover:text-deep-purple-800" >
              Learn more
            </a>
          </div>
    )
}

export default ServiceFestureCard;