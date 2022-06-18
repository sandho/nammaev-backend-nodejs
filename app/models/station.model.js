const mongoose = require('mongoose');

const LocationSchema = mongoose.Schema({
    lat: String,
    lng: String
}, {
    timestamps: true
});

const StationSchema = mongoose.Schema({
    stationID: String,
    location: LocationSchema,
    type: String,
    availability: Boolean,
    distance: String,
    price: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Station', StationSchema);