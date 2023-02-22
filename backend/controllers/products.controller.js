const Product = require('../models/product.model');
const Category = require('../models/category.model');
const User = require('../models/category.model')

const getAllProducts = async (req, res, next) => {
    try {
        const products = await Product.find().populate('categoryId');

        res.status(200).json({
            status: 'success',
            products
        });
    } catch (error) {
        next(error);
    }
};

const getProductById = async (req, res, next) => {
	const productId = req.params.id;
  
	try {
	  const product = await Product.findById(productId);
  
	  if (!product) {
		return res.status(404).json({
		  status: 'fail',
		  message: 'Product not found',
		});
	  }
  
	  res.status(200).json({
		status: 'success',
		data: { product },
	  });
	} catch (err) {
	  next(err);
	}
  };

const createProduct = (async (req, res, next) => {
	const { name, description, image, quantity, price } = req.body;

	const newProduct = await Product.create({
		name, 
        description,
		image,
        quantity,
        price
	});
    res.status(201).json({
		status: 'success',
		newProduct,
	});
});

const updateProduct = (async (req, res, next) => {
	
	const productId = req.params.id 
	const { name, description, image, quantity, price, status } = req.body;
	const { product } = req;

	await Product.findByIdAndUpdate(productId,{ name, 
		description, 
		image, 
		quantity, 
		price, 
		status 
	});

	res.status(204).json({ message: 'Product updated successfully' });
});

const deleteProduct = async (req, res, next) => {
	try {
	  const productId = req.params.id;
  
	  await Product.findByIdAndDelete(productId);
  
	  res.status(204).json({
		status: 'success',
	  });
	} catch (error) {
	  next(error);
	}
  };


module.exports = {
	getAllProducts,
	getProductById,
	createProduct,
	updateProduct,
	deleteProduct,
};