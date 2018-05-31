'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PriceSchema = new Schema({
    productId: {
        type: String
    },
    price: {
        type: Number
    }
});

module.exports = mongoose.model('Prices', PriceSchema);