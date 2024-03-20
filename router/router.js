const express = require("express");
const {  getVegetables, createVeg } = require("../controllers/vegetable.js");

const vegetableRouter = express()

vegetableRouter.route("/vegetables").get(getVegetables)
vegetableRouter.route("/vegetable").post(createVeg)

module.exports = vegetableRouter;