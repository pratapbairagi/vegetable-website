
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, "please enter ypur full name !"]
    },
    last_name: {
        type: String,
        required: [true, "please enter ypur full name !"]
    },
    email: {
        type: String,
        required: [true, "please fill your email id !"],
        unique: true
    },
    phone: {
        type: Number,
        required: [true, "please fill your mobile number !"],
        validate: {
            validator: function (v) {
                const phoneRegex = /^[6-9]\d{9}$/;
                return phoneRegex.test(v);
            },
            message: props => `${props.value} is not a valid phone number !`
        }
    },
    password: {
        type: String,
        required: [true, "please enter your password !"],
        validate : {
            validator : function (v){
                const emailRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/
                return emailRegex.test(v);
            },
            message : props => `${props.value} invalid password ! Format : 1 Capital letter, 1 small letter, 1 number, 1 special character and should be 8 characters atleast ! `
        }
    },
    images: {
        public_id: {
            type: String
        },
        url: {
            type: String
        }
    },
    role: {
        type: String,
        default: "user"
    },
    address: {
            type: String,
            default: "address line !"
    },
    city: {
        type: String,
        default: "delhi"
    },
    state: {
        type: String
    },
    district: {
        type: String,
        default: "south delhi"
    },
    pincode: {
        type: Number,
        default: 110019
    },
    country: {
        type: String,
        default: "india"
    },
    location: {
        type: {
            type: String,
            enum: ["Point"],
            default: "Point"
        },
        coordinates: {
            type: [Number],
            default: [0, 0]
        }
    },
    orderHistory: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Order"
        }
    ],
    wishlist: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        }
    ],
    reviews : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Reviews"
        }
    ],
    storeLocation: {
        type: {
            type: String,
            enum: ["Point"],
            default: "Point"
        },
        coordinates: {
            type: [Number],
            default: [0, 0]
        }
    }


});

// hash password
userSchema.pre("save", async function (next) {
    // const user = this;
    if (!this.isModified("password")) {
        return next()
    }

    this.password = await bcrypt.hash(this.password, 10)
})

userSchema.methods.comparePassword = async function (password) {
    const isPasswordMatch = await bcrypt.compare(password, this.password)
    return isPasswordMatch
}

userSchema.methods.generateToken = async function () {
    const key = "sdfifgiweAe[q-we=qe 79tuurfb75d6d&@BYFfb&IyuBFyibd6bw5465o78^P(N(:I5bk*r97r6br&"
    const token = jsonwebtoken.sign({ id: this._id }, key, { expiresIn: "30d" });
    return token
}

const User = mongoose.model("User", userSchema)

module.exports = User