const router = require('express').Router();
const ProductController = require('../controller/productController')

router.get('/',(req, res) => ProductController.getAll(req, res))
router.get('/:id', (req, res) => ProductController.getById(req, res))

module.exports = router