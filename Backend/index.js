require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const userRoutes = require('./routes/users')
const uri = process.env.MONGO_URL;
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

main().then(() =>{
    console.log("database connected");
}).catch((e) =>{
    console.log(e);
})

async function main(){
    await mongoose.connect(uri);
}


app.use('/api',userRoutes)

app.listen(PORT , (req,res)=>{
    console.log("app started");
})