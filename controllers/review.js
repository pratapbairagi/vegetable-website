const ErrorHandler = require("../middleware/errorHandler");
const Reviews = require("../model/review");
// const Reviews = require("../model/review");
const User = require("../model/user");
const Vegetable = require("../model/vegetable");


exports.addReview = async (req, res, next) => {
    try {

        const productId = req.params.id;
        const userId = req.user._id

        const isUserExist = await User.findById(userId);

        if (!isUserExist) return next(new ErrorHandler("Unauthorized or session expired !", 401));

        const isProductExist = await Vegetable.findById(productId);

        if (!isProductExist) return next(new ErrorHandler("Product not found or deleted !", 404));

        const isReviewexist = await Reviews.findOne({ user: isUserExist._id, product: isProductExist._id });

        let userName = `${isUserExist.first_name} ${isUserExist.last_name}`

        let newReview

        if (isReviewexist) {
            newReview = await Reviews.findByIdAndUpdate(isReviewexist._id, {
                comment: req.body.comment,
                rating: req.body.rating,
                createdAt: new Date()
            })

            const allReviewsRating = await Reviews.distinct("rating")

            // console.log("ratings ", allReviewsRating.reduce((curr, accum)=> curr + accum, 0))

            let avgRate = allReviewsRating.reduce((curr, accum)=> curr + accum, 0) / allReviewsRating.length

            console.log("avg rate ", avgRate)

        await Vegetable.findByIdAndUpdate(isProductExist._id ,
            {
                  averageRating: avgRate 
            }
        );

        }
        else {

            // console.log("product ",isProductExist)
            // console.log("user ", isUserExist)
            // console.log("working 1", isUserExist.first_name)
            // console.log("working 1", isUserExist.last_name)

            newReview = await Reviews.create({
                comment: req.body.comment,
                rating: req.body.rating,
                product: productId,
                productImage : isProductExist.images,
                userName: userName,
                user: userId,
                createdAt: new Date()
            });

        await User.findByIdAndUpdate(isUserExist._id, { $push: { reviews: newReview._id } });


        let avgRate = (isProductExist.averageRating + newReview.rating) / (isProductExist.numberOfReviews + 1)

        await Vegetable.updateOne({ _id: isProductExist._id },
            {
                $push: { reviews: newReview._id },
                $inc: { numberOfReviews: 1 },
                $set: { averageRating: avgRate }
            }
        );

        }

        console.log("working 2", newReview)



        

        const reviews = await Reviews.find({ product: isProductExist._id });

        res.status(201).json({
            success: true,
            message: "Review added successfully !",
            review: newReview,
            reviews: reviews
        })

    } catch (error) {
        console.log("errosss", error)
        return next(new ErrorHandler(error))
    }
}

exports.getReviews = async (req, res, next) => {
    try {

        const reviews = await Reviews.find({ product: req.params.id });

        res.status(200).json({
            success: true,
            message: "",
            reviews: reviews
        })
    } catch (error) {
        return next(new ErrorHandler(error))
    }
}


exports.getAllReviews = async (req, res, next) => {
    try {
        let allReviews = await Reviews.find();

        res.status(200).json({
            success : true,
            message : "",
            allReviews
        })
    } catch (error) {
        return next(new ErrorHandler(error))
    }
}