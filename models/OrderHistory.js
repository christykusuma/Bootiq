const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderHistorySchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
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

module.exports = mongoose.model('orderhistory', orderHistorySchema);