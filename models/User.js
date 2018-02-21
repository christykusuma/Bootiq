const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt-nodejs');


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
    wishList: [{
        type: Schema.Types.ObjectId,
        ref: 'product'
    }],
    admin: Boolean
});

// On save hook, encrypt password:
// Before saving a model run this function
userSchema.pre('save', function(next) {
    // giving access to the user Model
    const user = this; 

    // generate a salt then run call back
    bcrypt.genSalt(10, function(err, salt) {
        if(err) {return next(err); }

        // hash (encrypt) our password using the salt 
        bcrypt.hash(user.password, salt, null, function(err, hash) {
            if (err) { return next(err); }
            // overwrite plain text password with encrypted password
            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function (candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if(err) {return callback(err); }

        callback(null, isMatch);
    });
};


module.exports = mongoose.model('users', userSchema);