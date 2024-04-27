const express = require("express");
const {  getVegetables, createVeg, active_category, getVegetable, editProduct, getFilteredAndSortedProducts, addToCart, delete_product, getVegetablesTo_verifyStock } = require("../controllers/vegetable.js");
const userAuth = require("../middleware/userAuth.js");

const vegetableRouter = express()

vegetableRouter.route("/vegetables").get(getVegetables)
vegetableRouter.route("/vegetable").post(userAuth, createVeg)
vegetableRouter.route("/vegetable/:id").get(getVegetable)
vegetableRouter.route("/vegetable/:id").delete( userAuth, delete_product)
vegetableRouter.route("/vegetable/edit/:id").put(userAuth, editProduct)
vegetableRouter.route("/store/vegetables").get(getFilteredAndSortedProducts)
vegetableRouter.route(`/vegetable/cart/:id`).get(addToCart)
vegetableRouter.route("/selected_category/:category").get(active_category) 
vegetableRouter.route("/stock_check").post( getVegetablesTo_verifyStock)




module.exports = vegetableRouter;