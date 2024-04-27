const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
        required : true
    },
    products : [{
        title : {
            type : String,
            required : [true, "Must be 3 characters atleast."]
        },
        // category : {
        //     type : [String],
        //     required : [true, "Must be 3 characters atleast."]
        // },
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
        sold : {
            type : Number,
            default : 0
        },
        averageRating : {
            type : Number,
            default : 0
        },
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
        seller : {
        type : String,
            required : true
        },
        qty : {
            type : Number,
            required : true,
            default : 0
        },
        deliveryCharge : {
            type : Number,
            default : 0
        },
        totalPrice : {
            type : Number,
            default : 0
        }
    }
],
    totalQuantity : {
        type : Number,
        default : 0
    },
    totalDeliveryCharge : {
        type : Number,
        default : 0
    },
    // totalAmount : {
    //     type : Number,
    //     required : true
    // },
    paymentAmount : {
        type : Number,
        required : true
    },
    // orderDate : {
    //     type : Date,
    //     default : Date.now
    // },
    shippingAddress : {
        type : Object,
        required : true
    },
    statusDates : {
        orderDate : {
            type : Date,
            default : Date.now
        },
        processingDate : {
            type : Date
        },
        shippedDate : {
            type : Date
        },
        outForDeliveryDate : {
            type : Date
        },
        deliveredDate : {
            type : Date
        }
    },
    status : {
        type : String,
        enum : ["pending", "processing", "shppied", "out for delivery", "delivered"],
        default : "pending"
    },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order