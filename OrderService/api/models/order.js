'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    products: [
        {
            productId: String,
            quantity: Number,
            price: Number
        }
    ],
    totalPrice: {
        type: Number
    }
});

module.exports = mongoose.model('Orders', OrderSchema);