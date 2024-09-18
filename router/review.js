const express = require("express");
const userAuth = require("../middleware/userAuth");
const { addReview, getReviews, getAllReviews } = require("../controllers/review");

const reviewRoute = express()

reviewRoute.route("/add/review/:id").post(userAuth, addReview);
reviewRoute.route("/reviews/product/:id").get( getReviews);
reviewRoute.route("/reviews").get( getAllReviews);

module.exports = reviewRoute;