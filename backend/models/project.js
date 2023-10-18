const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: String,
  description: String,
  start_date: Date,
  end_date: Date,
  status: String,
  team: [String],
  image_url: String,
});
// const projectSchema = new mongoose.Schema({
//   image: {
//     type: String,
//     required: true,
//   },
//   name: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   status: {
//     type: String,
//     required: true,
//   },
//   start_date: {
//     type:String,
//     required: true,
//   },
//   end_date: {
//     type:String,
//     required: true,
//   },

// });
const Project = mongoose.model('Project', projectSchema);

module.exports = Project;

