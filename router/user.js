const express = require("express");
const { userRegister, userLogin, userLoggedIn, user_logout } = require("../controllers/user");
const userAuth = require("../middleware/userAuth");

const userRoute = express();

userRoute.route("/user/register").post(userRegister);
userRoute.route("/user/login").get(userLogin);
userRoute.route("/user/logcheck").get(userAuth, userLoggedIn); 
userRoute.route("/user/logout").get(userAuth, user_logout); 

module.exports = userRoute;