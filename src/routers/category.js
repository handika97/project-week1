const express = require('express');
const Router = express.Router(); 
const CategoryController = require('../controllers/category');

Router
.get('/', CategoryController.getCategory)
.post('/', CategoryController.insertCategory)
.patch('/:id_Category', CategoryController.updateCategory)
.delete('/:id_Category', CategoryController.deleteCategory)

module.exports = Router;