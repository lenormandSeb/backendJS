const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./routes/index.ts')

var corsOption = {
    origin: 'http://localhost:8080'
}

app.use(cors(corsOption))

app.use('/v1', router)

module.exports = app
