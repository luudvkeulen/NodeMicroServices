'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String
    },
    quantity: {
        type: Number
    }
});

module.exports = mongoose.model('Products', ProductSchema);