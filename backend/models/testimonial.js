const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  name: String,
  description: String,
  image_url: String,
});

const Testimonial = mongoose.model('Testimonial', testimonialSchema);

module.exports = Testimonial;

