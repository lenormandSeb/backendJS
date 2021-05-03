module.exports = app => {
    const categorieController = require('../controller/categorieController');
    app.get('/categorie', categorieController.getAll());
} 