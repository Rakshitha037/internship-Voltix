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

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
