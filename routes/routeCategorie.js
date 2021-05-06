const router = require('express').Router();
categorieController = require('../controller/categorieController.ts')

router.get('/',(req, res) => categorieController.getAll(req, res))
router.get('/:id', (req, res) => categorieController.getById(req, res))

module.exports = router