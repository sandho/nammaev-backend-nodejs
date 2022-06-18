const ProductModel = require('../models/product.model.js');

exports.findAll = (req, res) => {
    ProductModel.find()
    .then(products => {
        res.send(products);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving products."
        });
    });
};