const express = require('express');

const {
  getAllProducts,
	getProductById,
	createProduct,
	updateProduct,
	deleteProduct,
} = require('../controllers/products.controller');


const productRouter = express.Router();


productRouter.get('/', getAllProducts);
productRouter.post('/createproducts',createProduct);
productRouter.patch('/:id',updateProduct);
productRouter.delete('/:id',deleteProduct)
productRouter.get('/:id', getProductById);


module.exports = productRouter
 

