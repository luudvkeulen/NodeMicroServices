'use strict';
module.exports = function (app) {
    const productController = require('../controllers/productController');

    app.route('/products')
        .get(productController.list_all_products)
        .post(productController.create_product);

    app.route('/products/:productId')
        .get(productController.find_product)
        .put(productController.update_product)
        .delete(productController.delete_product);
};