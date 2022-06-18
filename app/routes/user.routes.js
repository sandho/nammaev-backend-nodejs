module.exports = (app) => {
    const users = require('../controllers/user.controller.js');

    app.get('/user', users.findAll);

}