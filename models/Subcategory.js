const mongoose = require('mongoose');
const { Schema } = mongoose;

const subcategorySchema = new Schema({
  name: String,
  category: String
});

module.exports = mongoose.model('subcategory', subcategorySchema);