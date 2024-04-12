const mongoose = require("mongoose")

const dbConnection = async (url = "mongodb+srv://vegetable:18May1994@cluster0.5qgqh.mongodb.net/vegetable?retryWrites=true&w=majority&appName=Cluster0") => {
    try {
       await mongoose.connect(url, {
            // useNewUrlParser :  true,
            // useUnifiedTopology : true
        }).then(()=>{
            console.log("db connected")
        })
    } catch (error) {
        console.log("db connection error", error)
    }
} 

module.exports = dbConnection;