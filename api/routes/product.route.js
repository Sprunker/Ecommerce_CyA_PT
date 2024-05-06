const express = require('express');
const Product = require('../models/product.model.js');
const router = express.Router();
const { getProducts, addProduct } = require('../controllers/product.controller.js')

router.get('/', getProducts)

router.post('/', addProduct)

module.exports = router;