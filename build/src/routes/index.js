"use strict";
var express = require("express");
var routerCate = require("./routeCategorie");
var routerUser = require("./routeUser");
var router = express.Router();
router.use('/categorie', routerCate);
router.use('/user', routerUser);
module.exports = router;
