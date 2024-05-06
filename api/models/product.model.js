const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 1,
        trim: [true, "Please enter product name"]
    },
    image1: {
        type: String,
        required: true
    },
    image2: {
        type: String,
        required: true
    },
    colors: {
        type: Array,
        items: {
            color: String
        },
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;