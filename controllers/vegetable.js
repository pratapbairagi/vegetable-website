const cloudinary = require("../config/cloudinary");
const ErrorHandler = require("../middleware/errorHandler");
// const ErrorHandler = require("../middleware/errorHandler");
const User = require("../model/user");
const Vegetable = require("../model/vegetable")


exports.getVegetables = async (req, res, next) => {
  try {
    let query = {};
    let categories = []
    // let features = []

    // if(req.query.search) query[req.query.search]
    categories = await Vegetable.distinct("category");
    //  features = await Vegetable.distinct("features");
    categories = categories.map((v, i) => {
      return { category: v, active: false }
    })

    categories.unshift({ category: "all", active: true })
    // let filteredProducts = await  Vegetable.find() 
    let filteredProducts = await Vegetable.aggregate([


      {
        $facet: {
          "all": [
            { $limit: 6 }
          ],
          "categories": [
            // Unwind the categories array to create a separate document for each category value
            { $unwind: "$category" },
            // Group products by each distinct category value and push each product into an array
            {
              $group: {
                _id: "$category",
                products: { $push: "$$ROOT" }
              }
            },
            // Limit the number of products for each category to 10
            {
              $project: {
                category: "$_id",
                products: { $slice: ["$products", 6] } // Limiting to 10 products per category
              }
            }
          ]
        }
      },
      // Include the "all" category as the first element
      {
        $project: {
          categories: {
            $concatArrays: [
              [{ category: "all", _id: "all", products: "$all" }],
              "$categories"
            ]
          }
        }
      },
      // Add the "active: false" key-value pair to every object in the array
      {
        $addFields: {
          "categories": {
            $map: {
              input: "$categories",
              as: "cat",
              in: {
                $mergeObjects: [
                  "$$cat",
                  { active: { $eq: ["$$cat.category", "all"] } } // Set active to true if category is "all"
                ]
              }
            }
          }
        }
      }
    ])
    let soldVegetables = await Vegetable.find().sort({ sold: -1 }).limit(6)

    filteredProducts = filteredProducts[0].categories




    const featureBasedProducts = await Vegetable.aggregate([
      // Unwind the features array to create a separate document for each feature
      { $unwind: "$features" },
      // Group products by feature and push each product into an array
      {
        $group: {
          _id: "$features.feature",
          products: { $push: "$$ROOT" }
        }
      },
      // Limit the number of products for each feature to 10
      {
        $project: {
          feature: "$_id",
          products: { $slice: ["$products", 10] }
        }
      },
    ]);

    for (const key in req.query) {
      if (key == "tags" || key == "category") {
        if (req.query[key]) {
          query[key] = req.query[key].split(",")
        }
      }
      else if (key == "features") {
        if (req.query[key]) {
          query["features.feature"] = req.query[key].split(",")
        }
      }
    
      if (key == "title") {
        if (req.query[key]) {
          let searchStrings = req.query[key].toLowerCase();
          searchStrings = searchStrings.split(" ")

          // query[key] = { $in : searchStrings}
          // query["features.feature"] = { $in : searchStrings}
          // query["category"] = { $in : searchStrings}
          query["tags"] = { $in: searchStrings }
        }
      }
    }

    const products = await Vegetable.find(query).limit(10).populate("seller");

    res.status(200).json({
      success: true,
      message: "",
      products,
      categories,
      filteredProducts,
      features: featureBasedProducts,
      soldVegetables
    })
  } catch (error) {
    return next(new ErrorHandler(error))
  }
}

exports.getVegetablesTo_verifyStock = async (req, res, next) => {
  try {
    // const id = req.user._id
    // const isUserExist = await User.findById(id);

    // if(!isUserExist) return next( new ErrorHandler("Sessionn expired or unauthorized !", 401))

    const vegetables = await Vegetable.find({_id : { $in : req.body }})

    res.status(200).json({
      success : true,
      message : "",
      vegetables : vegetables
    })
    
  } catch (error) {
    return next( new ErrorHandler(error))
  }

}

exports.getFilteredAndSortedProducts = async (req, res, next) => {

  try {
    const { title, category, features, tags, price, ratings, nameSort, dateSort, ratingSort, priceSort, sold, productsPerPage, pageNo = 1 } = req.query

    let query = {}
    let sort = {}

    let products;
    if (nameSort) {
      sort.title = Number(nameSort)
    }
    if (dateSort) {
      sort.createdAt = Number(dateSort)
    }
    if (priceSort) {
      sort.price = Number(priceSort)
    }
    if (ratingSort) {
      sort.rating = Number(ratingSort)
    }

    let categories = await Vegetable.distinct("category");
    let tag = await Vegetable.distinct("tags")
    let feature = await Vegetable.distinct("features.feature")
    let prices = await Vegetable.distinct("price")

    for (const key in req.query) {
      if (key == "category" || key == "tags") {
        if (req.query[key] && req.query[key] != "all") {
          let array = await req.query[key].split(",")

          query[key] = { $in: array }
        }
        else {
          query[key] = { $in: categories }
        }

        // if(!tags || !category ){
        //   let searchString = title.toLowerCase();
        //   searchString = searchString.split(",");

        //   query[key] = {
        //     $in : searchString
        //   }
        // }
      }
      else if (key == "features") {
        let searchString = title.toLowerCase();
        searchString = searchString.split(",");

        if (req.query[key] && req.query[key] != "all") {
          let array = await req.query[key].split(",");

          array = array.concat(searchString)
          
          query.features = { $elemMatch : { feature: { $in: array } } };
        }
        else {

          // query["features.feature"] = { $in: feature }
          query.features = {
            $elemMatch : { feature : { $in : feature } }
          }
          

        }

        // if( !features ){
        //   let searchString = title.toLowerCase();
        //   searchString = searchString.split(",");

        //   console.log("string ", searchString)
        //   query.features = {
        //    $elemMatch : { feature : { $in : searchString  } } 
        //   }
          
        // }
      }

      if (key == "price" || key == "ratings") {
        if (req.query[key]) {
          const range = req.query[key]
          query[key] = {
            $gte: range.gte,
            $lte: range.lte
          }
        }
      }
      if (key == "title") {
        if (req.query[key]) {
          let searchString = req.query[key].toLowerCase();
          searchString = searchString.split(" ")

          query[key] = {
            $in: searchString
          }

        }
      }
    }

    let productsLength = await Vegetable.countDocuments(query).sort(sort)

    if(products = productsLength <= productsPerPage){

      products = await Vegetable.find(query).sort(sort).limit(productsPerPage)
    }
    else{
      products = await Vegetable.find(query).sort(sort).skip(productsPerPage * (pageNo - 1)).limit(productsPerPage)
    }

    categories.unshift("all")
    feature.unshift("all")
    tag.unshift("all")

    res.status(200).json({
      success: true,
      message: "",
      products,
      categories,
      tags: tag,
      features: feature,
      prices: prices,
      productsLength
    })

  } catch (error) {
    return next(new ErrorHandler(error))
  }
}

exports.getVegetable = async (req, res, next) => {
  console.log("working")
  try {
    const { id } = req.params;
    const product = await Vegetable.findById(id)
    console.log("working 2 ", product)

    let relatedOptions
    relatedOptions = [product.category, product.tags, product.features]
    relatedOptions = relatedOptions.flatMap(v => v)
    let x = []
    relatedOptions.map(v => typeof v == "object" ? x.push(v.feature) : x.push(v))
    relatedOptions = [...new Set(x)]

    const query = {
      $or: [
        {
          title: { $in: relatedOptions }
        },
        {
          tags: { $in: relatedOptions }
        },
        {
          category: { $in: relatedOptions }
        },
        {
          "features.feature": { $in: relatedOptions }
        }
      ]
    }

    const relatedProducts = await Vegetable.find(query).limit(6).populate("seller")

    res.status(200).json({
      success: true,
      message: "",
      product,
      relatedProducts
    })

  } catch (error) {
    return next(new ErrorHandler(error))
  }
}

exports.addToCart = async (req, res, next) => {
  try {
    const { id } = req.params;

    const product = await Vegetable.findById(id)

    if (!product) {
      return next(new ErrorHandler("Can not add to cart, this product is missing from website !", 404))
    }

    res.status(200).json({
      success: true,
      message: "",
      product
    })

  } catch (error) {
    return next(new ErrorHandler(error, 500))
  }
}

exports.active_category = async (req, res, next) => {
  try {
    const { category } = req.params;

    let filteredProducts = [];

    if (category == "all") {
      filteredProducts = await Vegetable.find().populate("seller")
    }
    else {
      filteredProducts = await Vegetable.find({ category: category }).populate("seller")
    }

    res.status(200).json({
      success: true,
      message: "",
      filteredProducts
    })

  } catch (error) {
    return next(new ErrorHandler(error))
  }
}

exports.createVeg = async (req, res, next) => {
  try {
    let image = []
    const { title, description, category, images, stock, features, tags, price } = req.body;

    const isUserExist = await User.findById({ _id: req.user._id });

    if (!isUserExist) {
      return next(new ErrorHandler("Session expired or something went wrong. Please login again !", 401))
    }

    for (let x = 0; images.length > x; x++) {
      let result = await cloudinary.uploader.upload(images[x].url, {
        folder: "vegetables"
      })

      image.push({
        public_id: result.public_id,
        url: result.secure_url
      })
    }

    let product = await Vegetable.create({
      title: title.toLowerCase(),
      category: category,
      description: description.toLowerCase(),
      tags,
      features,
      stock,
      price,
      images: image,
      seller: isUserExist._id,

      // seller: {...isUserExist.seller , _id : isUserExist._id},
      coordinates: isUserExist.storeLocation.coordinates
    });

    res.status(201).json({
      success: true,
      message: "Vegetable Added successfully.",
      product
    });


  } catch (error) {
    return next(new ErrorHandler(error))
  }
}

exports.editProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    // console.log("body => ", req.body)

    let isProductExist;

    isProductExist = await Vegetable.findById(id)

    if (!isProductExist) {
    return next(new ErrorHandler("Sorry, pruduct is missing from the website !", 404 ))
    }

    const isUserExist = await User.findById({ _id: req.user._id });

    if (!isUserExist) {
      return next( new ErrorHandler("Session expired !", 401))
    }

    if (isUserExist._id != isProductExist.seller) {
      // console.log("match seller id ", isUserExist._id)
      // console.log("match product creater id ", isProductExist.seller)
    return next(new ErrorHandler("Sorry, only seller has the authority to update this product !", 403 ))

    }

    let image = [];

    for (let x = 0; req.body.images.length > x; x++) {
      if (req.body.images[x].public_id && req.body.images[x].url.includes("cloudinary.com")) {

        image.push(req.body.images[x])

        let oldImages = await isProductExist.images.filter((v) => {
          return v.public_id != req.body.images[x].public_id
        });

        await oldImages.forEach(x => cloudinary.uploader.destroy(x.public_id))

      }
      else if (!req.body.images[x].public_id && req.body.images[x].url.includes("data:image")) {
        const result = await cloudinary.uploader.upload(req.body.images[x].url, {
          folder: "vegetables"
        })

        image.push({
          public_id: result.public_id,
          url: result.secure_url
        })

      }
    }

    isProductExist = await Vegetable.findByIdAndUpdate(id, {
      title: req.body.title,
      category: req.body.category,
      price: req.body.price,
      tags: req.body.tags,
      features: req.body.features,
      description: req.body.description,
      stock: req.body.stock,
      images: image,
      coordinates: isUserExist.storeLocation.coordinates
    })

    console.log("match ad agter update => ", isProductExist)


    res.status(200).json({
      success: true,
      message: "Vegetable updated successfull.",
      product: isProductExist
    })

  } catch (error) {
    return next(new ErrorHandler(error))
  }
}

exports.addReview = async (req, res, next) => {
  try {
      // const 
  } catch (error) {
    
  }
}

exports.delete_product = async (req, res, next) => {
  try {
    const id = req.params.id
    const isProductExist = await Vegetable.findById({ _id: id });

    if (!isProductExist) {
    return next(new ErrorHandler("Sorry, product is missing from the website !", 403 ))
    }

    if (isProductExist.seller != id) {    
    return next(new ErrorHandler("Sorry, only seller has the authority to delete this product !", 403 ))

    }

    for (let x = 0; x < isProductExist.images.length; x++) {
      await cloudinary.uploader.destroy(isProductExist.images[x].public_id)
    }

    await Vegetable.findByIdAndDelete({ _id: isProductExist._id });

    console.log("deleted")

    res.status(200).json({
      success: true,
      message: "Product deleted successfully !",
      id: id
    })


  } catch (error) {
    return next(new ErrorHandler(error))
  }
}

// module.exports = {getVegetables, addProduct}