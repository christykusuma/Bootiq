const mongoose = require('mongoose');
const { Schema } = mongoose;

const subcategorySchema = new Schema({
  name: String
});

module.exports = mongoose.model('subcategory', subcategorySchema);