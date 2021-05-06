"use strict";
var categorieController_1 = require("../controller/categorieController");
var express = require("express");
var cateController = new categorieController_1.categorieController();
var routerCate = express.Router();
routerCate.get('/', function (req, res) { return cateController.getAll(req, res); });
module.exports = routerCate;
