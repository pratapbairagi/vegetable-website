

const Toaster = ({message, success}) => {
    return (
        <div className={`fixed z-30 top-1 right-1 h-12 w-full max-w-full px-2 py-2 text-center rounded lg:max-w-96 bg-green-600 text-gray-100 ${message.includes("successfull") ? "bg-green-600" : "bg-transparent"}` }>
            <p className="text-white font-semibold">{message}</p>
        </div>
    )
}

export default Toaster