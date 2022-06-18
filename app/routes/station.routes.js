module.exports = (app) => {
    const stations = require('../controllers/station.controller.js');

    app.get('/api/station', stations.findAll);
    app.post('/api/station', stations.create);
    app.get('/api/station/:id', stations.findOne);

}