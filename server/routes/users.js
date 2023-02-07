const router =require('express').Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");



//update user
router.put("/:id",async(req,res)=>{
    if(req.body.userId === req.params.id || req.user.isAdmin){
       try{
        if(req.body.password){
            const salt = await bcrypt
        }
        else{

        }
       }catch(err){

       }
   

    }
    else{
        return res.status(403).json("you can update your account")
    }
})
//delete user
//get a user
//follow a user
//unfollow user

module.exports=router