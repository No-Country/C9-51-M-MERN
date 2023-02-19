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



const productRouter = express.Router();

productRouter.get('/', getAllProducts);
productRouter.post('/createproducts',createProduct);
productRouter.patch('/:id',updateProduct);
productRouter.delete('/:id',deleteProduct)
productRouter.get('/:id', getProductById);


module.exports = productRouter ;



//router.post('/categories', createCategory);
//router.get('/categories', getAllCategories);
//router.patch('/categories/:id', updateCategory);
