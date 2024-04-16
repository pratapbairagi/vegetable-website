

class ErrorHandler extends Error {
    constructor(message, statusCode){
        super(message)

        Error.captureStackTrace(this, this.constructor)
    }
}

module.exports = ErrorHandler