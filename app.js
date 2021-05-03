const express = require('express');
const cors = require('cors');
const app = express();
require('./routes/routeControllers.js')(app)

var corsOption = {
    origin: 'http://localhost:8080'
}

app.use(cors(corsOption))

app.get('/subcategorie', (req, res) => {
    const id = req.query.id
    const cm = new categorieController();
    cm.getById(res, id);
})

module.exports = app
