const express = require('express');

const {
    addToCard, removeFromCart
} = require('../controllers/cart.Controller');


const cartRouter = express.Router();


cartRouter.get('/', addToCard);
cartRouter.delete('/:id',removeFromCart)



module.exports = cartRouter