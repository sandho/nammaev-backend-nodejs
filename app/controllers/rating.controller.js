const RatingModel = require("../models/rating.model");
const { check, oneOf, validationResult } = require('express-validator');

exports.findAll = (req, res) => {
    RatingModel.find()
        .then(ratings => {
            res.send({
                code: 200,
                message: "Rating loaded successfully",
                data: ratings
            });
        }).catch(err => {
            res.status(500).send({
                code: 500,
                message: err.message || "Some error occurred while retrieving ratings.",
                data: null
            });
        });
};

exports.create = (req, res) => {
    const result = validationResult(req);

    if (!result.isEmpty()) {
        return res.status(400).send({
            code: 400,
            message: result || "Error validation",
            data: null
        });
    }

    const rating = new RatingModel({
        stationID: req.body.station,
        report: req.body.report || false,
        comment: req.body.comment,
        rating: req.body.rating
    });

    rating.save()
    .then(ratingData => {
        res.send({
            code: 200,
            message: "Rating created successfully",
            data: ratingData
        });
    }).catch(err => {
        res.status(500).send({
            code: 500,
            message: err.message || "Some error occurred while creating the Rating.",
            data: null
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
                code: 404,
                message: "Rating not found with id " + req.params.id,
                data: null
            });            
        }
        res.send(rating);
    }).catch(err => {
        return res.status(500).send({
            code: 500,
            message: err.message || "Error retrieving Rating with id " + req.params.id ,
            data: null
        });
    });
}