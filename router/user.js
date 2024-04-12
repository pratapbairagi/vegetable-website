const express = require("express");
const { userRegister } = require("../controllers/user");

const userRoute = express();

userRoute.route("/user/register").post(userRegister);

module.exports = userRoute;