module.exports = (app) => {
    const product = require('../controllers/product.controller.js');

    app.get('/api/product', product.findAll);

}