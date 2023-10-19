const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  location: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
  phone_number:{
    type:Number,
    trim:true,
    required:true
  },
  
});

module.exports = mongoose.model("contacts", contactSchema);