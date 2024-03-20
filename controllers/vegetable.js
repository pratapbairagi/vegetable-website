const cloudinary= require("../config/cloudinary");
const Vegetable = require("../model/vegetable")


exports.getVegetables = async (req,res, next) => {
    
    try {
        const products = await Vegetable.find();
        console.log("products => ",products);

        res.status(200).json({
            success : true,
            message : "",
            products
        })
    } catch (error) {
        console.log("catch error => ", error)
    }
}

exports.createVeg = async (req, res, next) => {
    try {
       let image = []
        const { title, description, category, images, stock, features, tags, price } = req.body;        


        for(let x = 0; images.length > x; x++){
            let result = await cloudinary.uploader.upload(images[x], {
                folder : "vegetables"
            });

            image.push({
                public_id : result.public_id,
                url : result.secure_url
            })
        }

        let product = await Vegetable.create({
            title,
            category,
            description,
            tags,
            features,
            stock,
            price,
            images : image
        });

        // let product = {
        //     title, 
        //     category, 
        //     description, 
        //     stock, 
        //     features, 
        //     tags,
        //     price
        // }
        // console.log("working => ", product)

        res.status(201).json({
            success: true,
            message : "Vegetable Added successfully.",
            product
        });


    } catch (error) {
        console.log("errorrrr ==> ",error)
    }
}

// module.exports = {getVegetables, addProduct}