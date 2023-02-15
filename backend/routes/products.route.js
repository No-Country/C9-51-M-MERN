const express = require('express');

const {
    getAllProducts,
	getProductById,
	createProduct,
	updateProduct,
	deleteProduct,
} = require('../controllers/products.controller');

/*const {
  getAllCategories,
  createCategory,
  updateCategory,
} = require('../controllers/categories.controller');

*/



const router = express.Router();

router.get('/product', getAllProducts);
router.patch('/:id',updateProduct);
router.delete('/:id',deleteProduct)
router.get('/product/:id', getProductById);

//router.post('/', /* validacion de producto*/createProduct);

//router.post('/categories', createCategory);
//router.get('/categories', getAllCategories);
//router.patch('/categories/:id', updateCategory);
