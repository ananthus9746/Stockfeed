const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { registerHelper } = require("../helpers/userHelper");
const { response } = require("express");

const UserRegister = async (req, res) => {
  registerHelper(req.body)
    .then((response) => {
      console.log("ctl inside then",);

      if (response) {
        console.log("if response.user controller");
        res.status(200).json(response);
      } else {
        console.log("else response.user contoller");
        res.status(500).json(response);
      }
    })
    .catch((err) => {
      res.status(500).json({ mess: "server err...", err });
    });
};



const UserLogin = async (req, res) => {


  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(404).json("user not found invalid email");
    } else {
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validPassword) {
        res.status(404).json("wrong password");
      } else {
        res.status(200).json(user);
      }
    }
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }

};

module.exports = { UserRegister, UserLogin };
