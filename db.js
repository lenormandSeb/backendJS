const db = require('mysql');

const connexion = db.createConnection({
    host:'localhost',
    user: 'root',
    password: 'admin',
    database: 'test'
});

connexion.connect((err) => {
    if(err) console.log(err)
    console.log('`connecté`');
})

module.exports = connexion