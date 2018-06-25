const mongoose = require('mongoose'),
Product = mongoose.model('Product');

exports.list_all_products = function(req, res, next) {
    /**
     * query condition
     * callback
     */
    const word = req.query.keyword
    const query = () => {
        if( word == null || word === '' || word === 'null') {
            return {}
        } else {
            return {name: req.query.keyword}
        }
    }
    console.log(req.query, req.body, req.params)
    Product.find(query(), function(error, product) {
        if(error) {
            res.send(error)
        } else {
            res.json(product)
        }
    })
}


exports.create_a_product = function (req, res, next) {
    var new_product = new Product(req.body);
    new_product.save(function (error, product) {
        if (error) {
            res.send(error)
        } else {
            res.json(product)
        }
    })
}

exports.read_a_product = function (req, res, next) {
    Product.findById(req.params.productId, function (error, product) {
        if (error) {
            res.send(error)
        } else {
            res.json(product)
        }
    })
}

exports.search_a_product = function(req, res, next) {
    
}