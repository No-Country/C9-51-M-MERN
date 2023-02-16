const express = require('express');

// Controllers
const {
	getAllUsers,
	createUser,
	getUserById,
	updateUser,
	deleteUser,
	login,
} = require('../controllers/user.controllers');

const usersRouter = express.Router();

usersRouter.get("/", getAllUsers);
usersRouter.post("/", createUser);
usersRouter.get("/users/:id", getUserById);
usersRouter.patch("/:id", updateUser);
usersRouter.delete("/:id", deleteUser);
usersRouter.post('/login', login);

module.exports = usersRouter ;