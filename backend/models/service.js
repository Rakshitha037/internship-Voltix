const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  image_url: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  created_by:{
    type:String,
    required:true,
  }
  
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
