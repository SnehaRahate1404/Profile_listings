const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");


app.listen("/" , (req,res)=>{
    console.log("app started");
})