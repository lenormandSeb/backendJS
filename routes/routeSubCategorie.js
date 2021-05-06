const router = require('express').Router();
const subcategorieController = require('../controller/subcategorieController')

router.get('/',(req, res) => subcategorieController.getAll(req, res))
router.get('/:id', (req, res) => subcategorieController.getById(req, res))

module.exports = router