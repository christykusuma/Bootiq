const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  brand: String,
  name: String,
  color: String,
  price: Number
});

module.exports = mongoose.model('product', productSchema);

// name: String,
// description: String,
// quantity: Number,
// available: Boolean,
// image: String,
// style: String,
// product_id: String,
// price: Number,
// date: {
//   type: Date,
//   default: Date.now
// },
// brand: {
//   type: Schema.Types.ObjectId, 
//   ref: 'Brand'
// }, 
// category: {
//   type: Schema.Types.ObjectId,
//   ref: 'Category'
// },
// subcategory: {
//   type: Schema.Types.ObjectId,
//   ref: 'Subcategory'
// }