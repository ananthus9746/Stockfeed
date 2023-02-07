const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

const {UserRegister,UserLogin}=require('../controller/userController')

//USER REGISTER
router.post("/register",UserRegister);

//USER LOGIN
router.post("/login",UserLogin)

module.exports = router;
