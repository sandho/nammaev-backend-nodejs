module.exports = (app) => {
    const stations = require('../controllers/station.controller.js');

    app.get('/station', stations.findAll);
    app.post('/station', stations.create);
    app.get('/station/:id', stations.findOne);

}