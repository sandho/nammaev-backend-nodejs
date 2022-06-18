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

exports.create = (req, res) => {
    const station = new StationModel({
        location: req.body.location,
        type: req.body.type,
        availability: req.body.availability,
        distance: req.body.distance,
        price: req.body.price
    });

    station.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Station."
        });
    });
}

exports.findOne = (req, res) => {
    StationModel.find()
    .then(station => {
        if(!station) {
            return res.status(404).send({
                message: "Station not found with id " + req.params.id
            });            
        }

        res.send(station.filter(station => station.stationID === req.params.id));
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Station not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Error retrieving Station with id " + req.params.id
        });
    });
}