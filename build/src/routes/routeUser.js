"use strict";
var userController_1 = require("../controller/userController");
var express = require("express");
var useController = new userController_1.UserController();
var routerUser = express.Router();
routerUser.get('/', function (req, res) { return useController.logUser(req, res); });
module.exports = routerUser;
