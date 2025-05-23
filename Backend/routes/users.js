const express = require("express");
const router = express.Router();
const User = require("../schemas/Profile");


router.get('/users' , async(req,res) =>{
    try{
        const users = await User.find();
        res.json(users);
    }catch(err){
        res.status(500).json({message : err.message});
    }
});

router.get('/user/:id' , async(req,res) =>{
    try{
        const user = await User.findById(req.params.id)
        if(!user) return res.status(404).json({message : 'User not found'});
        res.json(user)
    }catch(err){
        res.status(500).json({ message : err.message})
    }
})

module.exports = router