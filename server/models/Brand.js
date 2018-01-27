const mongoose = require('mongoose');
const { Schema } = mongoose;

const brandSchema = new Schema({
  name: String,
  image: String,
  description: String, 
});

module.exports = mongoose.model('brand', brandSchema);