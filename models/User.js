// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const bcrypt = require('bcrypt-nodejs');

// // Define our model
// const userSchema = new Schema({
//     email: { type: String, unique: true, lowercase: true },
//     password: String
// });

// // On save hook, encrypt password
// // Before saving a model, run this function
// userSchema.pre('save', function(next) {
//     // get access to the user model
//     const user = this;

//     // generate a salt then run callback
//     bcrypt.genSalt(10, function(err, salt) {
//         if (err) { return next(err); }

//         // hash (encrypt) our password using the salt
//         bcrypt.hash(user.password, salt, null, function(err, hash) {
//             if (err) { return next(err); }

//             // overwrite plain text password with encrypted password
//             user.password = hash;
//             next();
//         });
//     });
// })

// // Creating compare password functionality
// userSchema.methods.comparePassword = function(candidatePassword, callback) {
//     bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
//         if (err) { return callback(err); }

//         callback(null, isMatch);
//     });
// }

// // Create the model class
// const ModelClass = mongoose.model('user', userSchema);

// // Export the model
// module.exports = ModelClass;

// GOOGLE OAUTH ---------------------

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
    isAdmin: Boolean
});

module.exports = mongoose.model('users', userSchema);