const express = require("express");
const { userRegister, userLogin, userLoggedIn, user_logout, user_update } = require("../controllers/user");
const userAuth = require("../middleware/userAuth");

const userRoute = express();

userRoute.route("/user/register").post(userRegister);
userRoute.route("/user/login").post(userLogin);
userRoute.route("/user/logcheck").get(userAuth, userLoggedIn); 
userRoute.route("/user/veg_shop_logout").get(user_logout);
userRoute.route("/user/update").put(userAuth, user_update); 


module.exports = userRoute;