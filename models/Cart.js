const mongoose = require('mongoose');
const { Schema } = mongoose;

const cartSchema = new Schema({
    _user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    _product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },
    date: {
        type: Date,
        default: Date.now
    },
    // quantity: Number
});

module.exports = mongoose.model('cart', cartSchema);