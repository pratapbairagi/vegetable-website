

const express = require("express");
const cors = require("cors");
const dbConnection = require("./dbConnection/dbConnection");
const vegetableRouter = require("./router/router");
const port = 5005;
const http = require("http")
const cookieParser = require("cookie-parser")
// const multer = require("multer")
const fileupload = require("express-fileupload")
const path = require("path");
const userRoute = require("./router/user");
const bodyparser = require("body-parser");
const { global_errorHandler } = require("./utils/global_errorHandler");

const app = express(http);
// const upload = multer({dest : "uploads/"})

app.use(cors(
    {
    credentials : true,
    // origin : ["https://veg-etable.vercel.app", "http://localhost:5005", "http://localhost:5173"],
    origin : ["https://veg-etable.vercel.app"],
    // origin : ["http://localhost:5173"],
    methods: "GET, POST, PUT, PATCH, DELETE",
    allowedHeaders: "Content-Type, Authorization"
  }
  ));

  app.use(cookieParser())
  // app.use(bodyParser.urlencoded({extended : true}))
  // app.use(bodyParser.json({extended : true}))
app.use(express.urlencoded({ extended: true, limit : "25mb" }));
app.use(express.json({ extended: true, limit : "25mb" }));
app.use(bodyparser.json({extended: true}));
// app.use(bodyparser.urlencoded({extended: true}))
// app.use(cookieParser.urlencoded({extended : true}))

// app.use(upload.any())
app.use(fileupload())



app.use("/api", vegetableRouter )
app.use("/api", userRoute)

app.use(express.static(path.join(__dirname, "./client/build")))
app.get("*", (req, res)=>{
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
})

app.use(global_errorHandler)

dbConnection();

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})