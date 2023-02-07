const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

//REGISTER
const registerHelper = async (userData) => {
  console.log("Register helper");

  try{

    
  return new Promise(async (resolve, reject) => {
      console.log("emtered promise..");
    
      //checking user is already exists or not
      const username = await User.find({ username: userData.username });
      if (username.length>0) {
        console.log("helpers..username exist..",username);
       return resolve({ usernameExists: "user namr already taken choose another one",});
      }

      const email = await User.find({ email:userData.email });
      if (email.length>0) {
        console.log("helpers email exists...");
        return resolve({ emailExists: "email already registered"});
      }
      else{

        console.log("saving...user data databse");


                //hash password
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(userData.password, salt);
        
                //create new user
                const newUser = new User({
                  username: userData.username,
                  email: userData.email,
                  password: hashedPassword,
                });
        
                console.log("insde try bloch helpers user register.");
        
                //save user and response
                const user = await newUser.save();
                resolve(user);

      }

        // if(username.length&&email.length>0){}
  });

  }catch(err){
    console.log("err..",err)
  }

};

module.exports = { registerHelper };
