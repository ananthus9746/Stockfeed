const router =require('express').Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const {UserRegister,UserLogin,UpdateUser}=require('../controller/userController')




//USER REGISTER
router.post("/register",UserRegister);

//USER LOGIN
router.post("/login",UserLogin)

//ananthuLatha:id: 63e2a79ad5cfee57312f8b7a
//update user
router.put("/:id",UpdateUser)


//delete user
//get a user
//follow a user
//unfollow user

module.exports=router