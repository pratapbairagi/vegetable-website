const express = require("express");
const { userRegister, userLogin, userLoggedIn, user_logout, user_update } = require("../controllers/user");
const userAuth = require("../middleware/userAuth");

const userRoute = express();

userRoute.route("api/user/register").post(userRegister);
userRoute.route("api/user/login").post(userLogin);
userRoute.route("api/user/logcheck").get(userAuth, userLoggedIn); 
userRoute.route("api/user/logout").get(user_logout);
userRoute.route("api/user/update").put(userAuth, user_update); 


module.exports = userRoute;