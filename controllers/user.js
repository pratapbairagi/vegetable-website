const User = require("../model/user")


exports.userRegister = async (req, res, next) => {
    try {
        const { first_name, last_name, phone, email, password, confirmPassword } = req.body

        if (!first_name || !last_name || !phone || !email || !password || !confirmPassword) {
            return console.log("error in reqired fields => ")
        }

        if (password !== confirmPassword) {
            return console.log("password annd confir, password does not match => ")
        }


        const isUserExistWithEmail = await User.findOne({ email: email })

        if (isUserExistWithEmail) {
            console.log("user already exist with this email => ", isUserExistWithEmail)
            return next()
        }

        let user = await User.create({
            first_name: first_name.toLowerCase(),
            last_name: last_name.toLowerCase(),
            phone: phone,
            email: email,
            password: password
        })

        const token = await user.generateToken();

         user = await User.findOne({email : email}).select("-password")

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
        console.log("error in registering user", error)
    }
}

exports.userLogin = async (req, res, next) => {
    try {
        const { email, phone, password } = req.body;

        console.log("user login => ", req.body)

        const isUserExistWithEmail = await User.findOne({ email: email });

        if (!isUserExistWithEmail) {
            console.log("This email id is not registred !")
            return next()
        }
        else{

        const isPasswordMatched = await isUserExistWithEmail.comparePassword(password)

        if (!isPasswordMatched) {
            console.log("Password does not matched !")
            return next()
        }

        const token = await isUserExistWithEmail.generateToken()

        const cookieOption = {
            httpOnly : true,
            maxAge : ( 30 * 24 * 60 * 60 * 1000 )
        }

        res.cookie("jwt", token, cookieOption);


        res.status(200).json({
            success: true,
            message: "",
            user: isUserExistWithEmail
        })
    }

    } catch (error) {
        console.log("catch part error while login => ", error)
    }
}

exports.userLoggedIn = async (req, res, next) => {
    try {
        console.log("logged")
        const id = req.user._id;

        const isUserExist = await User.findById({_id : id}).select("-password");

        if( !isUserExist){
            console.log("User session expired !")
            return next()
        }

        console.log("user => ", isUserExist)

        res.status(200).json({
            success : true,
            message : "",
            user : isUserExist
        })
        
    } catch (error) {
        console.log("catch part error while logged user => ", error)
    }
}


exports.user_logout = async (req, res, next) => {
    try {
        const isUserExist = await User.findById({_id : req.user._id});

        if(!isUserExist){
            console.log("user does not exist !")
            return next()
        }

        const cookieOption = {
            httpOnly : true,
            expires : new Date(Date.now())
        }

        // res.clearCookie("connect.id");
        res.status(200).cookie("jwt", null, cookieOption).json({
            success : true,
            message : "",
            user : {}
        })

    } catch (error) {
        console.log("catch part error while logout user => ", error)
        
    }
}