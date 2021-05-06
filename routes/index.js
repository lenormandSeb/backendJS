const router = require('express').Router();

router.use('/categorie', require('./routeCategorie'))
router.use('/subcategorie', require('./routeSubCategorie'))
router.use('/product', require('./routeProduct'))

module.exports = router