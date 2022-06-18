const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: String,
    vehicle: String,
    health: String,
    lastCharingLocation: String,
    range: String,
    lastCharge: String,
    rideStateFromLastCharge: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);