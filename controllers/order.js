const mogoose = require("mongoose");
const User = require("../model/user");
const ErrorHandler = require("../middleware/errorHandler");
const Vegetable = require("../model/vegetable.js");
const Order = require("../model/order.js");


exports.order_place = async (req, res, next) => {
    try {

        const isUserExist = await User.findById(req.user._id);

        if (!isUserExist) return next(new ErrorHandler("Unauthorized or something went wrong !", 401));

        const isProductsExist = await Vegetable.find({ _id: { $in: req.body.orderCart } }).select("-stock").select("-features").select("-tags")

        if (isProductsExist.length < 3 && !Array.isArray(isProductsExist) && isProductsExist.every((v) => v._id) == false) return next(new ErrorHandler("Some order placed product/s not found in the website, re-order !", 404))

        const totalAmount = req.body.cart.reduce((curr, accum, index) => curr + accum.price * accum.qty/1000, 0)
        const paymentAmount = totalAmount >= 300 ? totalAmount : totalAmount + 50
        
        if(Number(paymentAmount) >  Number(req.body.payment.payment)) return next( new ErrorHandler("must pay complete amount to book order !", 400))

        // console.log("order place => ",req.body.cart)
        // console.log("order place 2=> ",isProductsExist)
        // remove : coordinates, features, rating, rewiews, tags, _id

        const newOrder = req.body.cart.map((obj)=>{
            const {coordinates, features, rating, rewiews, tags, _id, ...rest} = obj;
            return rest
        })
        
        const order = await Order.create({
            user : isUserExist._id,
            products: newOrder,

            quantity: req.body.cart.reduce((curr, accum, index) => curr + accum.qty, 0),
            deliveryCharge: totalAmount > 300 ? 0 : 50,
            paymentAmount : paymentAmount,
            totalAmount: totalAmount,
            shippigAddress: req.body.shippingInfo,
            statueDates: {
                orderDate: new Date,
                processingDate: null,
                shippedDate: null,
                deliveredDate: null
            },
            status: "pending",

        })

        console.log("created order => ", order)

        res.status(201).json({
            success: true,
            message: "Order Placed Successfully !",
            order: order
        })

    } catch (error) {
        console.log("order place error => ", error)
        return next( new ErrorHandler(error))
    }
}

exports.getOrder = async (req, res, next) => {
    try {
        const id = req.params;
        const isUserExist = await User.findById(req.user._id)
        
        if(!isUserExist) return next( new ErrorHandler("Session expired !", 403))

        const isOrderExist = await Order.findById(id);

        if(!isOrderExist) return next( new ErrorHandler("Order does ot exist !", 404))

        res.status(200).json({
            success : true,
            message : "",
            order : isOrderExist
        })
    } catch (error) {
        return next( new ErrorHandler(error))
    }
}

exports.getOrders = async (req, res, next) => {
    try {
        const isUserExist = await User.findById(req.user._id);

        if(!isUserExist) return next( new ErrorHandler("Session expired !", 403))
        
        console.log("user => ", isUserExist)


        const orders = await Order.find({user : isUserExist._id})

        res.status(200).json({
            success : true,
            message : "",
            orders : orders
        })

    } catch (error) {
        console.log("orders error => ", error)
        return next( new ErrorHandler(error))
    }
}

// admin

exports.getAdmin_orders = async (req, res, next) => {
    try {
        // seller id of ordered products 661991bba32d43ea95cd9341
        // console.log("user id => ", req.user._id) // 661991bba32d43ea95cd9341
        const isUserExist = await User.findById(req.user._id)

        if(!isUserExist) return next( new ErrorHandler("Unauthorized pr session expired !", 401));

        const orders = await Order.find({ products : { $elemMatch : { "seller" : req.user._id } } })
        
        console.log("admin orders => ", orders)
    } catch (error) {
        return next( new ErrorHandler(error))
    }
}