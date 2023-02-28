const mongoose =require('mongoose');
const User = require('../models/user.model');

const registerUser = async (req, res, next) => {
    try {
        await mongoose.connect('mongodb+srv://jorgeheag:*****@cluster0.x5ha9fw.mongodb.net/test');
        //const userExist = await User.find
        //ToDo crear validacion 
        const newUser = await User.create(req.body);
        res.json(newUser);
    } catch (error) {
        res.status(500).json({ error: 'error en authController'});
    }
}

module.exports = { registerUser }