const mongoose = require('mongoose');
const { Schema } = mongoose;

const wishlistSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'product'
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('wishlist', wishlistSchema);