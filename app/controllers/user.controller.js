const userModel = require('../models/user.model.js');

exports.findAll = (req, res) => {
    userModel.find()
    .then(users => {
        res.send(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving users."
        });
    });
};