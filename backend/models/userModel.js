



const mongoose = require("mongoose");
//const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// // Pre-save hook to hash the password before saving to the database
// userSchema.pre("save", async function (next) {
//   try {
//     // Check if the password is modified or it's a new user
//     if (!this.isModified("password")) {
//       return next();
//     }

//     // Generate a salt and hash the password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(this.password, salt);

//     // Replace the plain password with the hashed one
//     this.password = hashedPassword;
//     next();
//   } catch (error) {
//     return next(error);
//   }
// });
const User = mongoose.model('User', userSchema);

module.exports = User;

// module.exports = mongoose.model("User", userSchema);
// // models/userModel.js
// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   email: { type: String, unique: true, required: true },
//   password: { type: String, required: true },
// });

// const User = mongoose.model('User', userSchema);

// module.exports = User;

