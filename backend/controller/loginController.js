// loginController.js

// const User = require("../models/userModel");
// const { isValid, isValidBody } = require("./validator");
// const jwt = require("jsonwebtoken");

// const loginUser = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (!isValidBody(req.body)) {
//       return res.status(400).send({ status: "false", msg: "No Data Provided" });
//     }

//     if (!isValid(email)) {
//       return res
//         .status(400)
//         .send({ status: "false", msg: "Email is Required" });
//     }
//     if (!isValid(password)) {
//       return res
//         .status(400)
//         .send({ status: "false", msg: "Password is Required" });
//     }

//     const findUser = await User.findOne({ email, password });
//     if (!findUser) {
//       return res.status(404).send({ status: "false", msg: "User Not Found" });
//     }

//     const token = jwt.sign({ id: findUser._id }, "secretkey");
//     res.setHeader("x-user-key", token);
//     res
//       .status(200)
//       .send({
//         token,
//         userID: findUser._id,
//         message: "User Logged in successfully",
//       });
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };

// module.exports = { loginUser };
const User = require("../models/userModel");
const { isValid, isValidBody } = require("./validator");
const jwt = require("jsonwebtoken");

const generateAccessToken = (userId) => {
  return jwt.sign({ id: userId, role: "admin" }, "your-secret-key", {
    expiresIn: "15m", // Adjust the expiration time as needed
  });
};

const generateRefreshToken = (userId) => {
  return jwt.sign({ id: userId, role: "admin" }, "your-refresh-key", {
    expiresIn: "7d", // Adjust the expiration time as needed
  });
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!isValidBody(req.body)) {
      return res
        .status(400)
        .send({ status: "false", msg: "No Data Provided" });
    }

    if (!isValid(email)) {
      return res
        .status(400)
        .send({ status: "false", msg: "Email is Required" });
    }
    if (!isValid(password)) {
      return res
        .status(400)
        .send({ status: "false", msg: "Password is Required" });
    }

    const findUser = await User.findOne({ email, password });
    if (!findUser) {
      return res.status(404).send({ status: "false", msg: "User Not Found" });
    }

    const accessToken = generateAccessToken(findUser._id);
    const refreshToken = generateRefreshToken(findUser._id);

    // Save the refresh token in the database (you might want to encrypt it)
    // Example: findUser.refreshToken = refreshToken; findUser.save();

    res.setHeader("x-access-token", accessToken);
    res.setHeader("x-refresh-token", refreshToken);

    res.status(200).send({
      accessToken,
      refreshToken,
      userID: findUser._id,
      message: "User Logged in successfully",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { loginUser, generateAccessToken, generateRefreshToken };
