const ProductModel = require('../models/product.model.js');

exports.findAll = (req, res) => {
    ProductModel.find()
    .then(products => {
        res.send({
            code: 200,
            message: "Products loaded successfully",
            data: products
        });
    }).catch(err => {
        res.status(500).send({
            code: 500,
            message: err.message || "Some error occurred while retrieving products.",
            data: null
        });
    });
};