module.exports = (app) => {
    const users = require('../controllers/user.controller.js');

    app.get('/api/user', users.findAll);

}