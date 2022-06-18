module.exports = (app) => {
    const stations = require('../controllers/station.controller.js');

    app.get('/station', stations.findAll);

}