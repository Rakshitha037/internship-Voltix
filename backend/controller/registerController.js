// registerController.js

const User = require("../models/userModel");
const { isValid, isValidBody } = require("./validator");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  try {
    let { email, password } = req.body;

    if (!isValidBody(req.body)) {
      return res.status(400).send({ msg: "No Data Provided" });
    }

    // Email Validation
    if (!isValid(email)) {
      return res.status(400).send({ msg: "Email is Required" });
    }

    if (!/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email)) {
      return res
        .status(400)
        .send({ status: false, message: " Email should be a valid" });
    }

    let duplicate = await User.findOne({ email });
    if (duplicate) {
      return res.status(400).send({ msg: "Email Already Exist" });
    }

    // Password Validation
    if (!isValid(password)) {
      return res.status(400).send({ msg: "Password is required" });
    }

    let registerUser = await User.create({ email, password });
    return res.status(201).send({
      status: true,
      msg: "User register successfully",
      data: registerUser,
    });
  } catch (error) {
    return res.status(500).send("Internal Server Error");
  }
};

module.exports = { registerUser };
