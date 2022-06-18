const StationModel = require("../models/station.model");

exports.findAll = (req, res) => {
    StationModel.find()
        .then(stations => {
            res.send(stations);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving stations."
            });
        });
};
