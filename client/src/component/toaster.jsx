

const Toaster = ({message, success}) => {
    return (
        <div className="fixed top-1 right-1 h-12 w-full max-w-96 bg-green-600">
            <p className="text-white font-semibold">{message}</p>
        </div>
    )
}

export default Toaster