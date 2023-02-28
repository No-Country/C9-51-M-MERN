const express = require('express');



const {
    getAllCategories,
    createCategory,
    
} = require('../controllers/category.controllers');

const categoryRouter = express.Router();


categoryRouter.post('/', createCategory);
categoryRouter.get('/', getAllCategories);
//categoryRouter.patch('/categories/:id', updateCategory);

module.exports =  categoryRouter
   