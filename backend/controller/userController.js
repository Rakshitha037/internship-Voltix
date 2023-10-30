


const User = require("../models/userModel");
const { isValid, isValidBody } = require("./validator");
const jwt = require("jsonwebtoken")

const createUser = async (req, res) => {
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
   if(!isValid(password)){
    return res.status(400).send({msg:"Password is required"})
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


//login

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email,password);

    if (!isValidBody(req.body)) {
      return res.status(400).send({ status: "false", msg: "No Data Provided" });
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

    const token = jwt.sign({ id: findUser._id }, "secretkey");
    // update the token
    console.log(findUser)
    await User.findByIdAndUpdate(findUser._id, { token },
      {new:true});
    res.setHeader("x-user-key", token);
    res
      .status(200)
      .json({
        token,
        userID: findUser._id,
        message: "User Logged in successfully",
        user  : findUser
      });
  } catch (error) {
    res.status(500).send(error);
  }
};

// get auth user
const getAuthUser = async (req, res) => {
   const token = req.query.token

      console.log(req.query)
  
      jwt.verify(token, 'secretkey', (err, decodedToken) => {
  
          if (err) {
  
              return res.status(401).json({
  
                  message: 'Invalid token'
  
              });
  
          }

  
          // Here, decodedToken will contain the user information (e.g., _id)
  
          const userId = decodedToken.id;
  console.log(decodedToken,'hhhhh')
  
  
          // Now you can fetch the user details using userId and send it as the response
  
          // Assuming you have a User model
  
          User.findById(userId)
  
              .then(user => {
  
                  if (!user) {
  
                      return res.status(404).json({
  
                          message: 'User not found'
  
                      });
  
                  }
  
  
                  res.json({
  
                      user
  
                  });
  
              })
  
              .catch(error => {
  
                  console.error('Error fetching user details:', error);
  
                  res.status(500).json({
  
                      message: 'Internal server error'
  
                  });
  
              });
  
      });

}

module.exports = { createUser, loginUser,getAuthUser  };


