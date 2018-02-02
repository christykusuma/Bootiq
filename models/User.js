const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  email: String,
  name: String,
  password: String,
  isAdmin: Boolean,
  cart: [{type: Schema.Types.ObjectId, ref: 'Product'}]
});

module.exports = mongoose.model('users', userSchema);