const mogoose = require("mongoose");
const User = require("../model/user");
const ErrorHandler = require("../middleware/errorHandler");
const Vegetable = require("../model/vegetable.js");
const Order = require("../model/order.js");
const Reviews = require("../model/review.js");


exports.order_place = async (req, res, next) => {
    try {

        const isUserExist = await User.findById(req.user._id);

        if (!isUserExist) return next(new ErrorHandler("Unauthorized or something went wrong !", 401));

        const isProductsExist = await Vegetable.find({ _id: { $in: req.body.orderCart } }).select("-stock").select("-features").select("-tags")

        if (isProductsExist.length < 3 && !Array.isArray(isProductsExist) && isProductsExist.every((v) => v._id) == false) return next(new ErrorHandler("Some order placed product/s not found in the website, re-order !", 404))

        const totalAmount = req.body.cart.reduce((curr, accum, index) => curr + accum.price * accum.qty / 1000, 0)
        const paymentAmount = totalAmount >= 300 ? totalAmount : totalAmount + 50

        if (Number(paymentAmount) > Number(req.body.payment.payment)) return next(new ErrorHandler("must pay complete amount to book order !", 400))

        // console.log("order place => ",req.body.cart)
        // console.log("order place 2=> ",isProductsExist)
        // remove : coordinates, features, rating, rewiews, tags, _id

        let newOrder = req.body.cart.map((obj) => {
            const { coordinates, features, rating, rewiews, category, tags, ...rest } = obj;
            return rest
        });

        newOrder = newOrder.map((v) => {
            return {
                ...v,
                totalPrice: (v.qty / 1000) * v.price
            }
        })

        let products = []
        let orders = []
        let seller = new Set(newOrder.map(v => v.seller))
        seller = [...seller]

        //    seller.forEach(element => {
        //    products = newOrder.filter((v)=>{
        //         return v.seller === element
        // })
        // orders.push({
        //     products : products, 
        //     user :isUserExist._id,
        //     totalQuantity: products.reduce((curr, accum, index) => curr + accum.qty, 0),
        //     // totalDeliveryCharge: products.reduce((curr, accum, index) => curr + accum.price * accum.qty/1000, 0) > 300 ? 0 : 50,
        //     totalDeliveryCharge: 0,
        //     // paymentAmount : products.reduce((curr, accum, index) => curr + accum.price * accum.qty/1000, 0) > 300 ? products.reduce((curr, accum, index) => curr + accum.price * accum.qty/1000, 0)  :  products.reduce((curr, accum, index) => curr + accum.price * accum.qty/1000, 0) + 50,
        //     paymentAmount : products.reduce((curr, accum, index) => curr + accum.price * accum.qty/1000, 0),
        //     shippingAddress: req.body.shippingInfo

        // })
        //    });

        //    orders.forEach((el)=>{
        //     let ord = fun(el)
        //     storeOrders.push(ord)
        //    })

        //   async function fun(el){
        //     return await Order.create(el) 
        //    }

        async function createAndStoreOrders() {
            let storeOrders = []
            let newDate = new Date

            for (let sellerId of seller) {
                let products = await newOrder.filter(v => v.seller == sellerId)

                const order = {
                    products: products,
                    user: isUserExist._id,
                    totalQuantity: products.reduce((curr, accum) => curr + accum.qty, 0),
                    totalDeliveryCharge: 0, // Adjust delivery charge as needed
                    paymentAmount: products.reduce((curr, accum) => curr + accum.price * accum.qty / 1000, 0),
                    shippingAddress: req.body.shippingInfo,
                    statusDates: {
                        orderDate: newDate,
                        processingDate: null,
                        shippedDate: null,
                        outForDeliveryDate : null,
                        deliveredDate: null
                    },
                    status: "pending",
                };

                const createOrder = await Order.create(order)

                storeOrders.push(createOrder)
            }
            return storeOrders
        }

        createAndStoreOrders().then((data) => {

            res.status(201).json({
                success: true,
                message: "Order Placed Successfully !",
                order: data
            })
        })


        // res.status(201).json({
        //     success: true,
        //     message: "Order Placed Successfully !",
        //     order: order
        // })

    } catch (error) {
        console.log("order place error => ", error)
        return next(new ErrorHandler(error))
    }
}

exports.getOrder = async (req, res, next) => {
    try {
        const id = req.params;
        const isUserExist = await User.findById(req.user._id)

        if (!isUserExist) return next(new ErrorHandler("Session expired !", 403))

        const isOrderExist = await Order.findById(id);

        if (!isOrderExist) return next(new ErrorHandler("Order does ot exist !", 404))

        res.status(200).json({
            success: true,
            message: "",
            order: isOrderExist
        })
    } catch (error) {
        return next(new ErrorHandler(error))
    }
}

exports.getOrders = async (req, res, next) => {
    try {
        const isUserExist = await User.findById(req.user._id);

        if (!isUserExist) return next(new ErrorHandler("Session expired !", 403))

        console.log("user => ", isUserExist)


        const orders = await Order.find({ user: isUserExist._id })

        res.status(200).json({
            success: true,
            message: "",
            orders: orders
        })

    } catch (error) {
        console.log("orders error => ", error)
        return next(new ErrorHandler(error))
    }
}

// admin

exports.getAdmin_orders = async (req, res, next) => {
    try {
        const isUserExist = await User.findById(req.user._id)

        if (!isUserExist) return next(new ErrorHandler("Unauthorized pr session expired !", 401));

        // const orders = await Order.find({ products: { $elemMatch: { "seller": req.user._id } } })
        const orders = await Order.find()
        let totalNumberOfOrders = await Order.countDocuments();
        let totalNumberOfCompletedOrders = await Order.countDocuments({ status   : "delivered"});
        let totalNumberOfPendingOrders = await Order.countDocuments({ status : "pending" });
        let totalNumberOfProcessingOrders = await Order.countDocuments({ status : "processing" });
        
        res.status(200).json({
            success: true,
            message: "",
            orders: orders,
            totalNumberOfOrders : totalNumberOfOrders,
            totalNumberOfCompletedOrders : totalNumberOfCompletedOrders,
            totalNumberOfPendingOrders : totalNumberOfPendingOrders,
            totalNumberOfProcessingOrders: totalNumberOfProcessingOrders

        })
    } catch (error) {
        return next(new ErrorHandler(error))
    }
}

exports.change_seller_order_status = async (req, res, next) => {
    try {
        const { id } = req.params;

        const sellerId = req.user._id

        const isOrderExist = await Order.findById(id);

        if (!isOrderExist) return next(new ErrorHandler("Order not found !", 404));

        if( req.user.role === "seller" ||  req.user.role === "admin"){
        let isSeller = await isOrderExist.products.every(product => product.seller == sellerId);

        if (!isSeller || req.user.role !== "admin") return (new ErrorHandler("You are not autgorized to change statue !", 401));

        }

        if (!req.body.status) return next(new ErrorHandler("Status is required, to updated !", 400))

    let statusDatesOption = req.body.status == "processing" ? "processingDate" : 
    req.body.status == "shipped" ? "shippedDate" :
    req.body.status == "out for delivery" ? "outForDeliveryDate" :
    req.body.status == "delivered" ? "deliveredDate" : "pending"
    
        // const updatedOrderStatus = await Order.findByIdAndUpdate(id, { status : req.body.status, statusDates : { ...isOrderExist.statusDates, [statusDatesOption] : new Date() } }, { new: true });
        
        let existingOrders

        existingOrders = await Order.find({_id : id});
        let userOrders = await Order.find({user : existingOrders[0].user})

        // console.log("seller", userOrders)

        let updatedOrderStatus;




        if (req.body.status) {
        // console.log("seller", userOrders)

        if(req.user.role === "admin"){
            
        for(const order of userOrders){
         await Order.findByIdAndUpdate(order._id, { status : req.body.status, statusDates : { ...isOrderExist.statusDates, [statusDatesOption] : new Date() } }, { new: true });
            
        }

        // console.log("overall ", userOrders)
            for(const product of userOrders.products){
            // console.log("single order ", product)
                

                const isProductsExist = await Vegetable.findById(product._id);

                if(!isProductsExist) return next( new ErrorHandler("Product does not exist, or deleted !", 400));
                
                if( req.body.status === "processing"){
                    if(isProductsExist.stock < product.qty ) return next(new ErrorHandler("Stock is not sufficient!", 400));
                }

                updatedOrderStatus = await Order.findByIdAndUpdate(id, { status : req.body.status, statusDates : { ...isOrderExist.statusDates, [statusDatesOption] : new Date() } }, { new: true });

                if(req.body.status === "delivered"){
                await Vegetable.findByIdAndUpdate(isProductsExist._id, {
                    stock : isProductsExist.stock - product.qty,
                    sold : isProductsExist.sold + 1
                })
            }

            }
        }
        }

        const orders = await Order.find({ products: { $elemMatch: { "seller": req.user._id } } })

        res.status(200).json({
            success : true,
            message : "delivery status updated !",
            order : updatedOrderStatus,
            orders : orders
        })


    } catch (error) {
        return next(new ErrorHandler(error))
    }
}


exports.get_order = async (req, res, next) => {
    try {
        console.log("get order")
        const isOrderExisit = await Order.find({ products : { $elemMatch : { "_id" : req.params.id } }, status : "delivered"});

        if(!isOrderExisit || !Array.isArray(isOrderExisit) || isOrderExisit.length == 0) return next(new ErrorHandler("You're not authorized to give review !", 401));

        const isReviewExist = await Reviews.findOne({ user : req.user._id, product :  req.params.id } );

        console.log("review ", isReviewExist)

        if(!isReviewExist){
            res.status(200).json({
                success : true,
                message : "",
                order : isOrderExisit[0],
                review : null
            })
        }
        else{
            res.status(200).json({
                success : true,
                message : "",
                order : isOrderExisit[0],
                review : isReviewExist
            })
        }
        
        
        
    } catch (error) {
        return next( new ErrorHandler(error))
    }
} 