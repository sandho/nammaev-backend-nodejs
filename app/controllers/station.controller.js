const StationModel = require("../models/station.model");

exports.findAll = (req, res) => {
    StationModel.find()
        .then(stations => {
            res.send({
                code: 200,
                message: "Stations data loaded successfully",
                data: stations
            });
        }).catch(err => {
            res.status(500).send({
                code: 500,
                message: err.message || "Some error occurred while retrieving stations.",
                data: null
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
    .then(stationData => {
        res.send({
            code: 200,
            message: "Station data created successfully",
            data: stationData
        });
    }).catch(err => {
        res.status(500).send({
            code: 500,
            message: err.message || "Some error occurred while creating the Station.",
            data: null
        });
    });
}

exports.findOne = (req, res) => {
    StationModel.find()
    .then(station => {
        if(!station) {
            return res.status(404).send({
                code: 404,
                message: "Station not found with id " + req.params.id,
                data: null
            });            
        }

        res.send({
            code: 200,
            message: "Station data loaded successfully",
            data: station.filter(station => station.stationID === req.params.id)
        });
    }).catch(err => {
        return res.status(500).send({
            code: 500,
            message: err.message || "Error retrieving Station with id " + req.params.id,
            data: null
        });
    });
}