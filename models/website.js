const mongoose = require('mongoose');

const websiteSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  browsers: {
    type: Array,
    required: true
  }
})

module.exports = mongoose.model('User', websiteSchema);