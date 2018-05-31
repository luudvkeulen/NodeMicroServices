'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Products');

let list_all_products = function (req, res) {
    Product.find({}, function (err, product) {
        if (err) res.send(err);
        res.json(product);
    });
};

let create_product = function (req, res) {
    let new_product = new Product(req.body);
    new_product.save(function (err, product) {
        if (err) res.send(err);
        res.json(product);
    });
};

let find_product = function (req, res) {
    Product.find(req.params.productId, function (err, product) {
        if (err) res.send(err);
        res.json(product);
    });
};

let update_product = function (req, res) {
    Product.findOneAndUpdate({_id: req.params.productId}, req.body, {new: true}, function (err, product) {
        if (err) res.send(err);
        res.json(product);
    });
};

let delete_product = function (req, res) {
    Product.remove({_id: req.params.productId}, function (err, product) {
        if (err) res.send(err);
        res.json(product);
    });
};

module.exports = {
    list_all_products,
    create_product,
    find_product,
    update_product,
    delete_product
};