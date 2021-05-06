"use strict";
var db = require('mysql');
var connexion = db.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'test'
});
connexion.connect(function (err) {
    if (err)
        console.log(err);
    console.log('`connecté`');
});
module.exports = connexion;
