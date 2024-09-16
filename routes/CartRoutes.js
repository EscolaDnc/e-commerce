const express = require('express');
const { addItemToCart, viewCart } = require('../controllers/cartController');
const router = express.Router();

router.post('/add_to_cart', addItemToCart);
router.get('/cart/:id_cliente', viewCart);

module.exports = router;
