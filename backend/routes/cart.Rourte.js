const express = require('express');

const {
    addToCart, removeFromCart
} = require('../controllers/cart.Controller');


const cartRouter = express.Router();


cartRouter.get('/', addToCart);
cartRouter.delete('/:id',removeFromCart)



module.exports = cartRouter