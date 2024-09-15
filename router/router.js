const express = require("express");
const {  getVegetables, createVeg, active_category, getVegetable, editProduct, getFilteredAndSortedProducts, addToCart, delete_product, getVegetablesTo_verifyStock, getSellerProducts } = require("../controllers/vegetable.js");
const userAuth = require("../middleware/userAuth.js");
const userRole = require("../middleware/userRole.js");

const vegetableRouter = express()

vegetableRouter.route("/vegetables").get(getVegetables)
vegetableRouter.route("/vegetable").post(userAuth, userRole("seller"), createVeg)
vegetableRouter.route("/vegetable/:id").get(getVegetable)
vegetableRouter.route("/vegetable/:id").delete( userAuth, userRole("seller"), delete_product)
vegetableRouter.route("/vegetable/edit/:id").put(userAuth, userRole("seller"), editProduct)
vegetableRouter.route("/store/vegetables").get(getFilteredAndSortedProducts)
vegetableRouter.route(`/vegetable/cart/:id`).get(userAuth, addToCart)
vegetableRouter.route("/selected_category/:category").get(active_category) 
vegetableRouter.route("/stock_check").post( getVegetablesTo_verifyStock)
vegetableRouter.route("/seller-products").get(userAuth, getSellerProducts)




module.exports = vegetableRouter;