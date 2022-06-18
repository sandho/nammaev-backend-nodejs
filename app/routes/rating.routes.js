module.exports = (app) => {
    const rating = require('../controllers/rating.controller.js');

    app.get('/rating', rating.findAll);
    app.post('/rating', rating.create);

}