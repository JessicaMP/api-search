const mongoose = require('mongoose'),
Product = mongoose.model('Product');

exports.list_all_products = function(req, res, next) {
    Product.find({}, function(error, product) {
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