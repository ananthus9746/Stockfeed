const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { RegisterHelper,LoginrHelper,UpdateUserHelper } = require("../helpers/userHelper");
const { response } = require("express");

const UserRegister = async (req, res) => {
    try{
        RegisterHelper(req.body)
        .then((response) => {
          console.log("ctl inside then",);

          if (response) {
            console.log("if response credential already taken or success fully registered");
            res.status(200).json(response);
          } else {
            console.log("else 500 ctl");
            res.status(500).json(response);
          }
        })
        .catch((err) => {
          res.status(500).json({ mess: "server err...", err });
        });
    }
    catch(error){
        console.log(error)
    }
};



const UserLogin = async (req, res) => {

  try{
    LoginrHelper(req.body).then((response)=>{
      console.log("login response..",response)

      if(response.invalidEmail){
       res.status(401).json("invalid email");
      }
      else if(response.invaliPassword){
        res.status(401).json("wrong password");
      }
      else{
        res.status(200).json({message:"Sucessfully loged in",response});
      }
     
    }).catch((err)=>{
      console.log(err)
    })
  }catch(erorr){
    console.log(erorr)
  }

};


const UpdateUser=(req,res)=>{

  console.log("update user params and body...",req.body)
  console.log("update user params..",req.params.id)


  try{

    UpdateUserHelper(req.body,req.params.id).then((response)=>{

      console.log("updated user ctl..",response)
    
    }).catch((err)=>{
      console.log(err)
    })
  

  }catch(erorr){
    console.log(error)
  }

 
}

module.exports = { UserRegister, UserLogin ,UpdateUser};
