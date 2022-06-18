const userModel = require('../models/user.model.js');

exports.findAll = (req, res) => {
    userModel.find()
    .then(users => {
        res.send({
            code: 200,
            message: "User data loaded successfully",
            data: users[0]
        });
    }).catch(err => {
        res.status(500).send({
            code: 500,
            message: err.message || "Some error occurred while retrieving users.",
            data: null
        });
    });
};