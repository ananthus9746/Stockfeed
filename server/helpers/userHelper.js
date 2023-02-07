const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const slugify=require("slugify");

//REGISTER
const RegisterHelper = async (userData) => {
  console.log("Register helper");

  try {
    return new Promise(async (resolve, reject) => {
      console.log("emtered promise..");

      //checking user is already exists or not
      const username = await User.find({ username: userData.username });
      if (username.length > 0) {
        console.log("helpers..username exist..", username);
        return resolve({ usernameExists: "user name already taken" });
      }

      const email = await User.find({ email: userData.email });
      if (email.length > 0) {
        console.log("helpers email exists...");
        return resolve({ emailExists: "email already registered" });
      } else {
        console.log("saving...user data databse");

        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(userData.password, salt);

        //create new user
        const newUser = new User({
          username: userData.username,
          email: userData.email,
          password: hashedPassword,
          slug:slugify(userData.username)
        });

        console.log("insde try bloch helpers user register.");

        //save user and response
        const user = await newUser.save();
        resolve({message:"Registred successfully",user});
      }
    });
  } catch (err) {
    console.log("err..", err);
    reject(err);
  }
};


const LoginrHelper=async(userData)=>{
  console.log("entered user login helper")

  try{

    return new Promise(async(resolve,reject)=>{

      const user = await User.findOne({ email:userData.email });
      if (!user) {
        // res.status(401).json("user not found invalid email");
        resolve({invalidEmail:"invalid email"})
      } else {
        const validPassword = await bcrypt.compare(
          userData.password,
          user.password
        );
        if (!validPassword) {
          resolve({invaliPassword:"invalid password"})
        } else {
          // res.status(200).json({message:"Sucessfully loged in",user});
          resolve({message:"Sucessfully loged in",user})
        }
      }
   
    })

  }catch(erorr){
    console.log(erorr)
  }

}
const UpdateUserHelper= async(userId,paramsId)=>{
  console.log("entered upadteuser helper",userId,paramsId)

  try{
    
  }catch(erorr){
    console.log(erorr)
  }

}


module.exports = { RegisterHelper,LoginrHelper,UpdateUserHelper };
