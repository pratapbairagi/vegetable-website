
const  mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    first_name :{
        type : String,
        required : [true, "please enter ypur full name !"]
    },
    last_name :{
        type : String,
        required : [true, "please enter ypur full name !"]
    },
    email : {
        type : String,
        required : [true, "please fill your email id !"],
        unique : true
    },
    phone : {
        type : Number,
        required : [true, "please fill your mobile number !"]
    },
    password : {
        type : String,
        required : [true, "please enter your password !"]
    },
    images : {
        public_id : {
            type : String
        },
        url : {
            type : String
        }
    },
    role : {
        type : String,
        default : "user"
    },
    address : {
        address : {
            type : String
        },
        city :{
            type : String
        },
        state : {
            type : String
        },
        district : {
            type : String
        },
        pincode : {
            type : String
        },
        country : {
            type : String,
            default : "india"
        }
    },
    location : {
        type : String
    }


});

// hash password
userSchema.pre("save", async function(next){
    const user = await this;
    if(user.isModified("password")){
        user.password = bcrypt.hash(user.password, 10)
    }

    return next()
})

userSchema.methods.comparePassword = async function(oldPassword){
    const isPasswordMatch = await bcrypt.compare(oldPassword, this.password)
    return isPasswordMatch
}

userSchema.methods.generateToken = async function(){
    const key = "sdfifgiweAe[q-we=qe 79tuurfb75d6d&@BYFfb&IyuBFyibd6bw5465o78^P(N(:I5bk*r97r6br&"
    const token = jsonwebtoken.sign({id : this._id}, key, {expiresIn : "30d"});
    return token
}

const User = new mongoose.model("User", userSchema)

module.exports = User