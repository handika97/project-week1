const express = require('express');

const product = require('./product');
const user = require('./user');
const shop = require('./shop');
const category = require('./category');
// const category = = require('./category');
const Router = express.Router();

Router.use('/product', product);
Router.use('/user', user);
Router.use('/shop', shop);
Router.use('/category', category);
module.exports = Router;