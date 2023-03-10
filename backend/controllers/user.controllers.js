const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
	const { userName, email, password , isAdmin } = req.body;

	const userExists = await User.findOne({ userName });

	if (userExists) {
		return next(('Email already taken', 400));
	};

    const salt = await bcrypt.genSalt(10)
	const passwordEncripted = await bcrypt.hash(password,salt)

	const newUser = new User({
		userName,
		email,
		password :passwordEncripted,
		isAdmin
	});

	await newUser.save()

	res.status(201).json({
		status: 'success',
		newUser,
	});
});


const getUserById = async (req, res, next) => {
	const userId = req.params.id;
	
	try {
	  const user = await User.findById(userId);
	
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
	const userId = req.params.id;
	const  body  = req.body;

	await User.findByIdAndUpdate(userId,body);

	res.status(204).json({ status: 'success' });
});


const deleteUser = async (req, res, next) => {
	try {
	  const { id } = req.params;
	  const user = await User.findById(id);
  
	  if (!user) {
		return res.status(404).json({
		  status: 'fail',
		  message: 'Usuario no encontrado'
		});
	  }
  
	  user.status = 'deleted';
	  await user.save();
  
	  res.status(200).json({
		status: 'success',
		message: 'Estado actualizado exitosamente'
	  });
	} catch (error) {
	  next(error);
	}
};


const login = async (req, res, next) => {
	try {
	  const { email, password } = req.body;
  
	  const user = await User.findOne({ email });
  
	  // Verificar que el usuario exista
	  if (!user) {
		return res.status(401).json({
		  status: 'fail',
		  message: 'Credenciales inv??lidas'
		});
	  }
  
	  // Verificar que el usuario tenga estatus activo
	  if (user.status !== 'active') {
		return res.status(401).json({
		  status: 'fail',
		  message: 'La cuenta de usuario est?? inactiva'
		});
	  }
  
	  // Verificar la contrase??a
	  const isPasswordValid = await bcrypt.compare(password, user.password);
	  if (!isPasswordValid) {
		return res.status(401).json({
		  status: 'failure',
		  message: 'Credenciales inv??lidas'
		});
	  }
  
	  // Crear el token JWT y enviar la respuesta
	  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
		expiresIn: '24h'
	  });

	  
  
	  res.status(200).json({
		status: 'success',
		token : token,
		data: {
		  user
		}
	  });
	} catch (error) {
	  next(error);
	}
  };

module.exports = {
	getAllUsers,
	createUser,
	getUserById,
	updateUser,
	deleteUser,
	login,
};