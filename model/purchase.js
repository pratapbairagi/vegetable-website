const mongoose = require("mongoose");

const purchaseSchema = mongoose.Schema({
    product : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "vegetable",
        required : true
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    quantity : {
        type : Number,
        min : 1,
        required : true
    },
    totalPrice : {
        type : Number,
        required : true
    },
    purchaseDate : {
        type : Date,
        default : Date.now
    }

});

const Purchase = mongoose.model("Purchase", purchaseSchema);

module.exports = Purchase;