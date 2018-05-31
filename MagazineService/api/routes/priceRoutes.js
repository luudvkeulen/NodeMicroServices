'use strict';
module.exports = function (app) {
    const priceController = require('../controllers/priceController');

    app.route('/prices')
        .get(priceController.list_all_prices)
        .post(priceController.create_price);

    app.route('/prices/:productId')
        .get(priceController.find_price)
        .put(priceController.update_price)
        .delete(priceController.delete_price);
};