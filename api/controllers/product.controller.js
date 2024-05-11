const Product = require('../models/product.model.js');

const getProducts = async (req, res) => {
    try {
        const page = req.query.page || 1;
        const limit = req.query.limit || 10
        const products = await Product.paginate({}, { page, limit });
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const addProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    getProducts,
    addProduct
}