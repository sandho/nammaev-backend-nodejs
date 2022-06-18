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

exports.findOne = (req, res) => {
    RatingModel.find({
        stationID: req.params.id
    })
    .then(rating => {
        if(!rating) {
            return res.status(404).send({
                message: "Rating not found with id " + req.params.id
            });            
        }
        res.send(rating);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Rating not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Error retrieving Rating with id " + req.params.id
        });
    });
}