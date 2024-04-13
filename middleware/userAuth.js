const bcrypt = require("bcrypt")
const jsonwebtoken = require("jsonwebtoken");
const User = require("../model/user");

const userAuth = async (req, res, next) => {
    try {
        const {jwt} = req.cookies;

        const key = "sdfifgiweAe[q-we=qe 79tuurfb75d6d&@BYFfb&IyuBFyibd6bw5465o78^P(N(:I5bk*r97r6br&"

        if(!jwt || jwt == null || jwt == undefined ){
            console.log("cookie not found or session expired")
        }
        else{
        const {id} = jsonwebtoken.verify(jwt, key);

        if( !id || id == null || id == undefined){
            return next()
        }

        const user = await User.findById({_id : id})

        
        req.user = user

        return next()
    }

        // console.log("jwt", jwt)
    } catch (error) {
        
    }
}

module.exports = userAuth