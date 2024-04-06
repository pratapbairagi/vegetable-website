const cloudinary = require("../config/cloudinary");
const Vegetable = require("../model/vegetable")


exports.getVegetables = async (req, res, next) => {

  console.log("params => ", req.query)

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


      // {
      //     $unwind: "$category"
      // },
      // {
      //     $group: {
      //         _id: "$category",
      //         products: { $push: "$$ROOT" }
      //     }
      // },
      // {
      //     $project: {
      //         category : "$_id",
      //         products : { $slice : ["$products", 6] }
      //     }
      // }
    ])
    let soldVegetables = await Vegetable.find().sort({sold : -1}).limit(6)

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
      }
    ]);

    // console.log("featureBasedProducts => ", featureBasedProducts)


    // let x = []
    // let featureProducts = filteredProducts

    // features.forEach((vv)=>{

    //    let xx = featureProducts.filter((v)=>{
    //        return v.features.some(prodFeature =>{
    //         return prodFeature.feature == vv.feature
    //         }) 
    //     })
    //     x.push({ feature: vv.feature, products: xx })
    // })





    for (const key in req.query) {
      if (key == "features" || key == "tags"|| key == "category") {
        if (req.query[key]) {
          query[key] = req.query[key].split(",")
        }
      }
      // if( key == "price" ){
      // }
      if (key == "title" ) {
        let searchStrings = req.query[key].split(" ")
          if (req.query[key]) {
            query[key] = { $in : searchStrings}
          }
      }
    }

    
    const products = await Vegetable.find(query).limit(10);

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
    console.log("catch error => ", error)
  }
}

exports.getFilteredAndSortedProducts = async (req, res, next) => {
  try {
    const {title,category, features, tags, price, ratings, nameSort, dateSort, ratingSort, priceSort, sold, productsPerPage=5, pageNo=1} = req.query
    // console.log("queries => ", features)
    // console.log("queries => ", category)
    // console.log("queries => ", tags)
    console.log("queries => ", productsPerPage)

    let query = {}
    let sort = {}

    let products;
    if(nameSort){
      sort.title = Number(nameSort)
    }
    if(dateSort){
      sort.createdAt = Number(dateSort)
    }
    if(priceSort){
      sort.price = Number(priceSort)
    }
    if(ratingSort){
     sort.rating = Number(ratingSort)
    }

    let categories = await Vegetable.distinct("category");
    let tag = await Vegetable.distinct("tags")
    let feature = await Vegetable.distinct("features.feature")
    let prices = await Vegetable.distinct("price")

    for (const key in req.query ){
      if(key == "category" || key == "tags" ){
        if( req.query[key] && req.query[key] != "all" ){
          let array = await req.query[key].split(",")
          query[key] = { $in : array }
        }
        else{
           query[key] ={ $in : categories}
        }
      }
      else if(key == "features"){
        if( req.query[key] && req.query[key] != "all" ){
        query["features.feature"] = { $in : req.query[key] }
        }
        else{
          
          query["features.feature"] = { $in : feature}
        }
      }

      if(key == "price" || key == "ratings"){
        if( req.query[key] ){
          const range = req.query[key]
          query[key] = {
            $gte : range.gte,
            $lte : range.lte
          }
        }
      }
      if( key == "title"){
        if( req.query[key] ){
        const searchString = req.query[key].split(" ");

        query[key] = {
          $in : searchString 
        }
      }
      }
    }
    let productsLength = await Vegetable.countDocuments(query).sort(sort)
    products = await Vegetable.find(query).sort(sort).skip(productsPerPage * (pageNo - 1)).limit(productsPerPage)
    

    categories.unshift("all")
    feature.unshift("all")
    tag.unshift("all")


    console.log("products => ", products)
    console.log("query => ", query)
    console.log("sort => ", sort)
    console.log("pageno => ", pageNo)

    res.status(200).json({
      success : true,
      message : "",
      products,
      categories,
      tags : tag,
      features : feature,
      prices : prices,
      productsLength
    })
 
  } catch (error) {
    console.log("error=> ", error)
  }
}

exports.getVegetable = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Vegetable.findById(id)

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

    const relatedProducts = await Vegetable.find(query).limit(6)

    res.status(200).json({
      success: true,
      message: "",
      product,
      relatedProducts
    })

  } catch (error) {
    console.log(error)
  }
}

// exports.categories = async (req, res, next) => {
//     try {
//         let categories = await Vegetable.distinct("category");

//         categories.unshift("")

//         res.status(200).json({
//             success : true,
//             message : "",
//             categories
//         })
//     } catch (error) {
//         console.log("catch error => ", error)
//     }
// }

exports.active_category = async (req, res, next) => {
  console.log("active category")
  try {
    const { category } = req.params;

    let filteredProducts = [];

    if (category == "all") {
      filteredProducts = await Vegetable.find()
    }
    else {
      filteredProducts = await Vegetable.find({ category: category })
    }

    res.status(200).json({
      success: true,
      message: "",
      filteredProducts
    })

  } catch (error) {
    console.log(error)
  }
}

exports.createVeg = async (req, res, next) => {
  try {
    let image = []
    const { title, description, category, images, stock, features, tags, price } = req.body;

    console.log("images => ",images)

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
      title,
      category,
      description,
      tags,
      features,
      stock,
      price,
      images: image
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
      message: "Vegetable Added successfully.",
      product
    });


  } catch (error) {
    console.log("errorrrr ==> ", error)
  }
}

exports.editProduct = async (req, res, next) => {
  try {
    const { id } = req.params

    let isProductExist;

    isProductExist = await Vegetable.findById(id)

    if (!isProductExist) {
      return console.log("product does not exist")
    }

    let image = [];

    for (let x = 0; req.body.images.length > x; x++) {
      if (req.body.images[x].public_id && req.body.images[x].url.includes("cloudinary.com")) {
        
        image.push(req.body.images[x])
       
        let oldImages = await isProductExist.images.filter((v)=>{
         return v.public_id != req.body.images[x].public_id 
        });

        await oldImages.forEach(x=> cloudinary.uploader.destroy(x.public_id))

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
      title : req.body.title,
      category : req.body.category,
      price : req.body.price,
      tags : req.body.tags,
      features : req.body.features,
      description : req.body.description,
      stock : req.body.stock,
      images : image
    })

    res.status(200).json({
      success : true,
      message : "Vegetable updated successfull.",
      product : isProductExist
    })

  } catch (error) {
    console.log("errorrrr ==> ", error)

  }
}

// module.exports = {getVegetables, addProduct}