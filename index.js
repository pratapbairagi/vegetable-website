

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
const global_errorHandler = require("./utils/global_errorHandler.js");
const orderRoute = require("./router/order.js");
const reviewRoute = require("./router/review.js");
// const responseSize  = require("response-size");
const { addClient, removeClient, sendNotifications } = require("./notification.js");

const app = express(http);
// const upload = multer({dest : "uploads/"})


app.use(cors(
    {
    credentials : true,
    origin : ["http://localhost:5173", "http://localhost:5005", "https://veg-etable.vercel.app", "https://veg-etable.vercel.app/"],
    // origin : "*",
    // origin : ["https://veg-etable.vercel.app", "https://veg-etable.vercel.app/"],
    // origin : ["http://localhost:5173"],
    methods: "GET, POST, PUT, PATCH, DELETE",
    allowedHeaders: "Content-Type, Authorization"
  }
  ));

  // app.options('*', cors());

app.use(cookieParser())
app.use(express.urlencoded({ extended: true, limit : "25mb" }));
app.use(express.json({ extended: true, limit : "25mb" }));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true, limit : "25mb"}))

// app.use(upload.any())
app.use(fileupload())



app.use("/api", userRoute)
app.use("/api", vegetableRouter )
app.use("/api", orderRoute)
app.use("/api", reviewRoute)

// SSE setup
app.get("/event", (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  // Add client to the list
  addClient(res);

  // Remove client from the list on close
  req.on('close', () => {
      removeClient(res);
  });
});

app.use(express.static(path.join(__dirname, "./client/build")))
app.get("*", (req, res)=>{

  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
})


// 661bf5c3575f88b17fc29700

app.use(global_errorHandler)

dbConnection();

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})

module.exports = {sendNotifications}