// models/feed.js
const mongoose = require('mongoose');

const feedSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone_number: {
    type: Number,
    default: Date.now,
  },
});

const Feed = mongoose.model('Feed', feedSchema);

module.exports = Feed;
