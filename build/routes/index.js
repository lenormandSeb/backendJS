"use strict";
var express = require("express");
var routerCate = require("./routeCategorie");
var router = express.Router();
router.use('/categorie', routerCate);
module.exports = router;
