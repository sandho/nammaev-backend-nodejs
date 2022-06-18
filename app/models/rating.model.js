const mongoose = require('mongoose');

const RatingSchema = mongoose.Schema({
    stationID: String,
    report: Boolean,
    comment: String,
    rating: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Rating', RatingSchema);