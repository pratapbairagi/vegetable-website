const express = require("express");
const { userRegister, userLogin, userLoggedIn, user_logout, user_update, allUsers, allSeller } = require("../controllers/user");
const userAuth = require("../middleware/userAuth");
const userRole = require("../middleware/userRole");

const userRoute = express();

userRoute.route("/user/register").post(userRegister);
userRoute.route("/user/login").post(userLogin);
userRoute.route("/user/logcheck").get(userAuth, userLoggedIn); 
userRoute.route("/user/veg_shop_logout").get(user_logout);
userRoute.route("/user/update").put(userAuth, user_update); 
userRoute.route("/users").get(userAuth, allUsers);
userRoute.route("/sellers").get(userAuth, allSeller);


module.exports = userRoute;