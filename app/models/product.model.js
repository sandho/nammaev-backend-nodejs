const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: String,
    price: String,
    icon: String,
    description: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema);