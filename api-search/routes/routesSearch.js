module.exports = function(app) {
    let searchProduct = require('../controllers/controllerSearch')

    app.route('/products')
        .get(searchProduct.list_all_products)
        .post(searchProduct.create_a_product);
    
    app.route('/products/:productId')
        .get(searchProduct.read_a_product);

    app.route('/products/search')
        .get(searchProduct.search_a_product);
};