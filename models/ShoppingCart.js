const mongoose = require('mongoose');
const { Schema } = mongoose;

const shoppingCartSchema = new Schema({
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
    },
    quantity: Number
});

module.exports = mongoose.model('shoppingcart', shoppingCartSchema);