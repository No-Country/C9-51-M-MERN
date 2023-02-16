const Product = require('../models/product.model');
const Category = require('../models/category.model');
const User = require('../models/category.model')

const getAllProducts = (async (req, res, next) => {
	
	const products = await Product.findAll({
		where: { status: 'active' },
		include: [{ model: Category }],
	});
	res.status(200).json({
		status: 'success',
		products,
	});
});

const getProductById = (async (req, res, next) => {
	const { products } = req;

	res.status(200).json({
		status: 'success',
		data: { training },
	});
});

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
	const { title, description, image, price } = req.body;
	const { product } = req;

	await product.update({ title, description, image, price });

	res.status(204).json({ status: 'success' });
});

const deleteProduct = (async (req, res, next) => {
	const { product } = req;

	await product.update({ status: 'deleted' });
 
	res.status(204).json({
		status: 'success',
	});
});


module.exports = {
	getAllProducts,
	getProductById,
	createProduct,
	updateProduct,
	deleteProduct,
};