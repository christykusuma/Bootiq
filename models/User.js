const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
    method: {
        type: String,
        enum: ['local', 'google'],
        required: true
    },
    local: {
        fname: String,
        lname: String,
        email: {
            type: String,
            lowercase: true
        },
        password: {
            type: String
        },
        city: String,
        country: String
    },
    google: {
        googleID: String,
        email: {
            type: String,
            lowercase: true
        },
        fname: String,
        lname: String
    },
    _carts: [{
        type: Schema.Types.ObjectId,
        ref: 'cart'
    }],
    // wishlists: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'wishlist'
    // }],
    admin: Boolean
});

// On save hook, encrypt password:
// Before saving a model run this function
userSchema.pre('save', function(next) {
    try {
        if(this.method !== 'local') {
            next();
        }
        // giving access to the user Model
        const user = this; 
        // generate a salt then run call back
        bcrypt.genSalt(10, function(err, salt) {
            if(err) {return next(err); }
            // hash (encrypt) our password using the salt 
            bcrypt.hash(user.local.password, salt, null, function(err, hash) {
                if (err) { return next(err); }
                // overwrite plain text password with encrypted password
                user.local.password = hash;
                next();
            });
        });
    } catch(error) {
        next(error);
    }
});

userSchema.methods.comparePassword = function (candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.local.password, function(err, isMatch) {
        if(err) {return callback(err); }
        callback(null, isMatch);
    });
};

module.exports = mongoose.model('user', userSchema);