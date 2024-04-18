const ErrorHandler = require("../middleware/errorHandler")
const User = require("../model/user")
const Vegetable = require("../model/vegetable")
// const ErrorHandler = require("../utils/errorHandlerUtil")


exports.userRegister = async (req, res, next) => {
    try {
        const { first_name, last_name, phone, email, password, confirmPassword } = req.body

        if (!first_name || !last_name || !phone || !email || !password || !confirmPassword) {
            return next(new ErrorHandler("All fields are required ! !", 400))
        }

        if (password !== confirmPassword) {
            return next(new ErrorHandler("Password and Confirm Password is not matching !", 400))
        }

        const isUserExistWithEmail = await User.findOne({ email: email })

        if (isUserExistWithEmail) {
            return next(new ErrorHandler("User already exist with this email !", 409))
        }

        let user = await User.create({
            first_name: first_name.toLowerCase(),
            last_name: last_name.toLowerCase(),
            phone: phone,
            email: email,
            password: password
        })

        const token = await user.generateToken();

        user = await User.findOne({ email: email }).select("-password")

        const cookieOption = {
            httpOnly: true,
            maxAge: (24 * 60 * 60 * 1000)
        };

        res.status(201).cookie("jwt", token, cookieOption).json({
            success: true,
            message: "User registered successfully !",
            user
        })

    } catch (error) {
        return next(new ErrorHandler( error, 500))
    }
}

exports.userLogin = async (req, res, next) => {
    try {
        const { email, phone, password } = req.body;

        const isUserExistWithEmail = await User.findOne({ email: email });

        if (!isUserExistWithEmail) {
            return next(new ErrorHandler("Email id is not registred !", 404))
        }
        else {

            const isPasswordMatched = await isUserExistWithEmail.comparePassword(password)

            if (!isPasswordMatched) {
            return next(new ErrorHandler("Invalid user credentials !", 409))
            }

            const token = await isUserExistWithEmail.generateToken()

            let cookieOptions = {
                httpOnly: true,
                maxAge: (24 * 60 * 60 * 1000)
            };
    
            res.cookie("jwt", token, cookieOptions);

            res.status(200).json({
                success: true,
                message: "",
                user: isUserExistWithEmail
            })
        }

    } catch (error) {
        return next(new ErrorHandler("Something went wrong !", 500))
    }
}

exports.userLoggedIn = async (req, res, next) => {
    try {
        const id = req.user._id;

        const isUserExist = await User.findById({ _id: id }).select("-password");

        if (!isUserExist) {
            return next(new ErrorHandler("Session expired !", 401))
        }

        res.status(200).json({
            success: true,
            message: "",
            user: isUserExist
        })

    } catch (error) {
        return next(new ErrorHandler(error, 500))
    }
}


exports.user_logout = async (req, res, next) => {
    try {
        const isUserExist = await User.findById({ _id: req.user._id });

        if (!isUserExist) {
            return next(new ErrorHandler("Session expired !", 401))
        }

        let cookieOptions = {
            httpOnly: true,
            expires: new Date(Date.now())
        }

        res.clearCookie("connect.id");

        res.status(200).cookie("jwt", null, cookieOptions).json({
            success: true,
            message: "",
            user : {}
        })

    } catch (error) {
        return next(new ErrorHandler(error, 500))
    }
}

exports.user_update = async (req, res, next) => {
    try {
        let newData = req.body;

        let isUserExist = await User.findById({ _id: req.user._id });

        if (!isUserExist) {
            return next(new ErrorHandler("Session expired !", 401))
        }
        
        if (newData.storeLocation.coordinates ) {
            if(newData.storeLocation.coordinates.length === 2){
                
                const productFilter = { seller :  isUserExist._id }
                const productUpdate = { $set : { coordinates : newData.storeLocation.coordinates } }
                const option = { multi : true }

                await Vegetable.updateMany(productFilter, productUpdate, option)

            }
        }

        Object.assign(isUserExist, newData)

       let user = await User.findByIdAndUpdate(isUserExist._id, Object.assign(isUserExist, newData))

        res.status(200).json({
            success: true,
            message: "update successful !",
            user: user
        })
    } catch (error) {
        return next(new ErrorHandler(error, 500))
    }
}