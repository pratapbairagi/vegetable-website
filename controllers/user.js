const User = require("../model/user")


exports.userRegister = async (req, res, next) => {
    try {
        const {first_name, last_name, phone, email, password, confirmPassword} = req.body

        if(!first_name || !last_name || !phone || !email || !password || !confirmPassword){
            return console.log("error in reqired fields => ")
        }

        if(password !== confirmPassword){
            return console.log("password annd confir, password does not match => ")
        }


        const isUserExistWithEmail = await User.findOne({email : email})

        if(isUserExistWithEmail){
            console.log("user already exist with this email => ", isUserExistWithEmail)
            return next()
        }
        
        const user = await User.create({
            first_name : first_name.toLowerCase(),
            last_name : last_name.toLowerCase(),
            phone : phone,
            email : email,
            password : password
        })

        const token = await user.generateToken();

        const cookieOPtion = {
            httpOly : true,
            maxAge : (30 * 24 * 60 * 60 * 1000 )
        }

        res.status(201).cookie( "jwt", token, cookieOPtion).json({
            success : true,
            message : "Sign up succesfully !",
            user : user
        })


    } catch (error) {
        console.log("error in registering user", error)
    }
}

export const userLogin = async (req, res, next) => {
    try {
        const {email, phone, password} = req.body;
        
    } catch (error) {
        
    }
}