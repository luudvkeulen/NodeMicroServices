'use strict';

const mongoose = require('mongoose');
const Order = mongoose.model('Orders');

let list_all_orders = function (req, res) {
    Order.find({}, function (err, order) {
        if (err) res.send(err);
        res.json(order);
    });
};

let create_order = function (req, res) {
    let new_product = new Order(req.body);
    new_product.save(function (err, order) {
        if (err) res.send(err);
        res.json(order);
    });
};

let find_order = function (req, res) {
    Order.find(req.params.orderId, function (err, order) {
        if (err) res.send(err);
        res.json(order);
    });
};

let update_order = function (req, res) {
    Order.findOneAndUpdate({_id: req.params.orderId}, req.body, {new: true}, function (err, order) {
        if (err) res.send(err);
        res.json(order);
    });
};

let delete_order = function (req, res) {
    Order.remove({_id: req.params.orderId}, function (err, order) {
        if (err) res.send(err);
        res.json(order);
    });
};

module.exports = {
    list_all_orders,
    create_order,
    find_order,
    update_order,
    delete_order
};