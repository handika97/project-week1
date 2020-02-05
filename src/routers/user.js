const express = require('express');
const Router = express.Router();
const userController = require('../controllers/user');
const auth = require('../helpers/auth')
Router

.post('/',userController.getLogin)
.post('/verify',auth.verify,userController.loginAuth)
module.exports = Router;
