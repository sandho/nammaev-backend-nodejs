const RatingModel = require("../models/rating.model");

exports.findAll = (req, res) => {
    RatingModel.find()
        .then(ratings => {
            res.send(ratings);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving ratings."
            });
        });
};

exports.create = (req, res) => {
    const rating = new RatingModel({
        stationID: req.body.station,
        report: req.body.report || false,
        comment: req.body.comment,
        rating: req.body.rating
    });

    rating.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Rating."
        });
    });
};