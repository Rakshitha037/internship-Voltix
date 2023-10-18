const mongoose = require('mongoose');


const projectSchema = new mongoose.Schema({
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
  status: {
    type: String,
    required: true,
  },
  start_date: {
    type:String,
    required: true,
  },
  end_date: {
    type:String,
    required: true,
  },

});
const Project = mongoose.model('Project', projectSchema);

module.exports = Project;

