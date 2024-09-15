const ErrorHandler = require("./errorHandler")

module.exports = (role) => {
    return (req, res, next) => {
        if(role === req.user.role){
            return next()
        }

        return next( new ErrorHandler("You aren't authorized to do this task !", 400))
    }
}