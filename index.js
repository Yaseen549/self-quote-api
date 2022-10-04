const express = require("express");
const app = express();
const {router} = require('./handler');
// const product = require("./api/product");

const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const _ = require("lodash");
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.use(express.json({extended:false}));

// app.use("/", function(req, res){
//   res.send("Hello");
// })

// app.use("/",home);
app.use("/",router);

// app.use("/api/:api", function(req, res, next){
//   console.log('Request Type:', req.method);
//   console.log(req.params.api);
//   res.send(router)
//    next();
// });

// app.get("/api/:type",function(req, res){
//   const requestedtype = req.params.type;
//   console.log(requestedtype);
// });


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is runing in port ${PORT}`));