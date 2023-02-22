const Category = require('../models/category.model');

const getAllCategories = (async (req, res, next) => {
    const categories = await Category.find({ status: 'active' });
  
    res.status(200).json({ categories });
});

const createCategory = (async (req, res, next) => {
    const { name } = req.body;
  
    if (name.length === 0) {
      return next('Name cannot be empty', 400);
    }
  
    const newCategory = await Category.create({ name });
  
    res.status(201).json({
      newCategory,
    });
});


module.exports = {createCategory , getAllCategories};