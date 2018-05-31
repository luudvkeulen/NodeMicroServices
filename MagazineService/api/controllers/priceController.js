'use strict';

const mongoose = require('mongoose');
const Price = mongoose.model('Prices');

let list_all_prices = function (req, res) {
    Price.find({}, function (err, price) {
        if (err) res.send(err);
        res.json(price);
    });
};

let create_price = function (req, res) {
    let new_product = new Price(req.body);
    new_product.save(function (err, price) {
        if (err) res.send(err);
        res.json(price);
    });
};

let find_price = function (req, res) {
    Price.find(req.params.productId, function (err, price) {
        if (err) res.send(err);
        res.json(price);
    });
};

let update_price = function (req, res) {
    Price.findOneAndUpdate({_id: req.params.productId}, req.body, {new: true}, function (err, price) {
        if (err) res.send(err);
        res.json(price);
    });
};

let delete_price = function (req, res) {
    Price.remove({_id: req.params.productId}, function (err, price) {
        if (err) res.send(err);
        res.json(price);
    });
};

module.exports = {
    list_all_prices,
    create_price,
    find_price,
    update_price,
    delete_price
};