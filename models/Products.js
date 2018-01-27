const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  name: String,
  description: String,
  quantity: Number,
  available: Boolean,
  image: String,
  gender: String,
  brand: {type: Schema.Types.ObjectId, ref: 'Brand'}
});

module.exports = mongoose.model('product', productSchema);