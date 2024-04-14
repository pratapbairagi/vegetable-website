
const  mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken")

const userSchema = mongoose.Schema({
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
        type : {
            type : String,
            enum : ["Point"],
            default : "Point"
        },
        coordinates : {
            type : [Number],
            default : [0, 0]
        }
    },
    storeLocation : {
        type : {
            type : String,
            enum : ["Point"],
            default : "Point"
        },
        coordinates : {
            type : [Number],
            default : [0, 0]
        }
    }


});

// hash password
userSchema.pre("save", async function(next){
    // const user = this;
    if(!this.isModified("password")){
       return next()
    }

    this.password = await bcrypt.hash(this.password, 10)
})

userSchema.methods.comparePassword = async function(password){
    const isPasswordMatch = await bcrypt.compare(password, this.password)
    return isPasswordMatch
}

userSchema.methods.generateToken = async function(){
    const key = "sdfifgiweAe[q-we=qe 79tuurfb75d6d&@BYFfb&IyuBFyibd6bw5465o78^P(N(:I5bk*r97r6br&"
    const token = jsonwebtoken.sign({id : this._id}, key, {expiresIn : "30d"});
    return token
}

const User = mongoose.model("User", userSchema)

module.exports = User