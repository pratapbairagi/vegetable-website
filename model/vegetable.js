const mongoose = require("mongoose");

const veg = new mongoose.Schema({

    title : {
        type : String,
        required : [true, "Must be 3 characters atleast."]
    },
    category : {
        type : [String],
        required : [true, "Must be 3 characters atleast."]
    },
    description : {
        type : String,
        required : false
    },
    price : {
        type : Number,
        required : true
    },
    stock : {
        type : Number,
        required : [true, "Maximum stock should not exceed 40 or 40kg."],
        default : 0
    },
    numberOfReviews : {
        type : Number,
        default : 0
    },
    averageRating : {
        type : Number,
        default : 0
    },
    tags : {
        type : [String],
        required : [true, "Tag must have two charachters atlseat"]
    },
    features : [
        {
            feature : {
                type : String
            },
            value : {
                type : String
            },
            _id : {
                tpye : Number
            }
        }
    ],
    images : [
        {
            public_id : {
                type : String
            },
            url : {
                type : String
            }
        }
    ],
    createdAt : {
        type : Date,
        default : Date.now
    },
    sold : {
        type : Number,
        default : 0
    },
    seller : {
    //    type : mongoose.Schema.Types.ObjectId,
    type : String,
        // ref : "User",
        required : true
    },
    coordinates : {
        type : [Number],
        default : [0, 0]
    }
});

const Vegetable = new mongoose.model("vegetable", veg)

module.exports = Vegetable