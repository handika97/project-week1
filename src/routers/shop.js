const express = require('express');
const Router = express.Router();
const shopController = require('../controllers/shop');
Router
.post('/:user/:id_buyer', shopController.addShop)
.get('/:id_Pembeli', shopController.showItem)
.patch('/final/:id_Pembeli/:status', shopController.finish)
.get('/search/:item', shopController.search)
.get('/', shopController.record)

module.exports = Router; 