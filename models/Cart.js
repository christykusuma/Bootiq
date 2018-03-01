const mongoose = require('mongoose');
const { Schema } = mongoose;

// Holds each group of product and quantity
const cartSchema = new Schema({
    _product: {
        type: Schema.Types.ObjectId,
        ref: 'product'
    },
    quantity: Number
});

module.exports = mongoose.model('cart', cartSchema);