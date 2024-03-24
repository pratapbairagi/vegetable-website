const express = require("express");
const {  getVegetables, createVeg, active_category, getVegetable } = require("../controllers/vegetable.js");

const vegetableRouter = express()

vegetableRouter.route("/vegetables").get(getVegetables)
vegetableRouter.route("/vegetable").post(createVeg)
vegetableRouter.route("/vegetable/:id").get(getVegetable)
// vegetableRouter.route("/categories").get(categories)
vegetableRouter.route("/selected_category/:category").get(active_category)

module.exports = vegetableRouter;