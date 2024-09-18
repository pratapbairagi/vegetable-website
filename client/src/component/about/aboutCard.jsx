


const AboutCard = ({icon=<></>, title="", description="", link=""}) => {
    return (
        <>
         <div className="flex">
              <div className="mr-4">
                <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
                  {icon}
                </div>
              </div>
              <div>
                <h6 className="mb-2 font-semibold leading-5 text-theme-green-600">
                  {title}
                </h6>
                <p className="text-sm text-gray-900">
                  {description}
                </p>
                <hr className="w-full my-6 border-gray-300" />
              </div>
            </div>
        </>
    )
}

export default AboutCard