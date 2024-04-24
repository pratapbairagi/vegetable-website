const mongoose = require("mongoose");


const reviewModel = mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    product : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "vegetable",
        required : true
    },
    rating : {
        type : Number,
        min : 1,
        max : 5,
        enum : [1.2,3,4,5]
    },
    comment : {
        type : String
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
})

const reviews = mongoose.model("Review", reviewModel);

module.exports = reviews;