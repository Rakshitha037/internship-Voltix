// // const mongoose = require('mongoose');


// // const projectSchema = new mongoose.Schema({
// //   image_url: {
// //     type: String,
// //     required: true,
// //   },
// //   name: {
// //     type: String,
// //     required: true,
// //   },
// //   description: {
// //     type: String,
// //     required: true,
// //   },
// //   status: {
// //     type: String,
// //     required: true,
// //   },
// //   start_date: {
// //     type:String,
// //     required: true,
// //   },
// //   end_date: {
// //     type:String,
// //     required: true,
// //   },

// // });
// // const Project = mongoose.model('Project', projectSchema);

// // module.exports = Project;



// // models/project.js

// const mongoose = require('mongoose');

// const projectSchema = new mongoose.Schema({
//   user_Id: String,
//   name: String,
//   description: String,
//   start_Date: String,
//   end_Date: String,
//   client: String,
//   status: String,
//   team: [String],
//   tags: [String],
//   url: String,
// });

// module.exports = mongoose.model('Project', projectSchema);




const mongoose = require('mongoose');

// Define the schema for the Project model
const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  start_date: {
    type: Date,
    required: true,
  },
  end_date: {
    type: Date,
    required: true,
  },
  team: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
});

// Create the Project model
const Project = mongoose.model('Project', projectSchema);

module.exports = Project;


