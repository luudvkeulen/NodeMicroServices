'use strict';
module.exports = function (app) {
    const orderController = require('../controllers/orderController');

    app.route('/orders')
        .get(orderController.list_all_orders)
        .post(orderController.create_order);

    app.route('/orders/:orderId')
        .get(orderController.find_order)
        .put(orderController.update_order)
        .delete(orderController.delete_order);
};