

const express = require("express");
const cors = require("cors");
const dbConnection = require("./dbConnection/dbConnection");
const vegetableRouter = require("./router/router");
const port = 5005;
const http = require("http")
const cookieParser = require("cookie-parser")
const multer = require("multer")
const fileupload = require("express-fileupload")
const path = require("path")

const app = express(http);
// const upload = multer({dest : "uploads/"})

app.use(cors(
    {
    // credentials : true,
    origin : [ "http://localhost:5173", "https://veg-etable.vercel.app"],
    methods: "GET, POST, PUT, DELETE",
    // allowedHeaders: "Content-Type, Authorization"
  }
  ));

  app.use(cookieParser())
app.use(express.urlencoded({ extended: true, limit : "25mb" }));
app.use(express.json({ extended: true, limit : "25mb" }));
// app.use(cookieParser.urlencoded({extended : true}))

// app.use(upload.any())
app.use(fileupload())



app.use("/api", vegetableRouter )

app.use(express.static(path.join(__dirname, "./client/dist")))
app.get("*", (req, res)=>{
  res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"))
})

dbConnection();

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})