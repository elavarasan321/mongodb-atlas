const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Routes = require("./routes");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyparser = require("body-parser");
dotenv.config();

const dburl =  "mongodb+srv://elavarasan:elavarasan@cluster0.sxlig.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(process.env.dburl,{useNewUrlParser: true , useUnifiedTopology: true},()=>{
    console.log("db connected");
    
    })


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
Routes(app);
app.get("/",(res,req)=>{
    res.render("index")
} );

module.exports = app;



