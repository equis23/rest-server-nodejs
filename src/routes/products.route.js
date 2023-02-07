const { Router } = require('express');
const { getProducts } = require('../controllers/products.controller');

const router = new Router();

router.get('/', getProducts);

module.exports = router;
