const mongoose = require('mongoose');
const { Schema } = mongoose;

// const userSchema = new Schema({
//   googleId: String,
//   email: String,
//   name: String,
//   password: String,
//   isAdmin: Boolean,
//   cart: [{type: Schema.Types.ObjectId, ref: 'Product'}]
// });

const userSchema = new Schema({
    googleID: String,
    fname: String,
    lname: String,
    email: String,
    password: String,
    dob: String,
    city: String,
    country: String,
    shoppingCart: [{
        type: Schema.Types.ObjectId,
        ref: 'product'
    }],
    whishList: [{
        type: Schema.Types.ObjectId,
        ref: 'product'
    }],
    admin: Boolean
});

module.exports = mongoose.model('users', userSchema);