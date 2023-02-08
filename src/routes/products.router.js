const { Router } = require('express');
const { getProducts, getProduct } = require('../controllers/products.controller');
const { validateId } = require('../middlewares/products.middleware');

const router = new Router();

router.get('/', getProducts);
router.get('/:id', validateId, getProduct);

module.exports = router;
