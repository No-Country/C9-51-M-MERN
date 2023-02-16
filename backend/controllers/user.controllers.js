const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

//Models

const  User  = require('../models/user.model')
const  Product  = require('../models/product.model');
const Cart  = require('../models/cart.model');


const getAllUsers = (async (req, res, next) => {
    const users =  await User.find({
		include: [
		{ model: Product, include: { model: Cart } },
	 		
		],
	 })

   res.status(200).json({
       status: 'success',
	   users
       
   });
});

const createUser = (async (req, res, next) => {
	const { userName, email, password , role } = req.body;

	const userExists = await User.findOne({ userName });

	if (userExists) {
		return next(('Email already taken', 400));
	};

	const newUser = await User.create({
		userName,
		email,
		password,
		role,
	});

	
	res.status(201).json({
		status: 'success',
		newUser,
	});
});

const getUserById = async (req, res, next) => {
	const userId = req.params.id;
  
	try {
	  const user = await User.findById();
  
	  if (!user) {
		return res.status(404).json({
		  status: 'fail',
		  message: 'Usuario no encontrado'
		});
	  }
  
	  res.status(200).json({
		status: 'success',
		data: {
		  user
		}
	  });
  
	} catch (error) {
	  next(error);
	}
  };

const updateUser = (async (req, res, next) => {
	const { user } = req;
	const { name} = req.body;

	await user.update({ name });

	res.status(204).json({ status: 'success' });
});

const deleteUser = (async (req, res, next) => {
	const { user } = req;

	await user.update({ status: 'deleted' });

	res.status(204).json({ status: 'success' });
});

const login = (async (req, res, next) => {
	const { email, password } = req.body;

	// Validate credentials (email)
	const user = await User.findOne({
		email,
		status: 'active',
	});

	if (!user) {
		return next(('Credentials invalid', 400));
	}

	// Validate password
	const isPasswordValid = await bcrypt.compare(password, user.password);

	if (!isPasswordValid) {
		return next(('Credentials invalid', 400));
	}

	// Generate JWT (JsonWebToken) ->
	const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
		expiresIn: '30d',
	});

	// Send response
	res.status(200).json({
		status: 'success',
		token,
		user,
	});
});

module.exports = {
	getAllUsers,
	createUser,
	getUserById,
	updateUser,
	deleteUser,
	login,
};