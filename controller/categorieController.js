const Controller = require('./controller')
class categorieController extends Controller{

    constructor() {
        super();
    }

    getAll(res, req){
        this.database.query('SELECT * FROM categorie', (err, result) => {
            res.end(`It's work maguele!`)
        })
    }

    getById(res, param) {
        this.database.query('SELECT * FROM categorie', (err, result) => {
            res.end(`Le param es ${param}`)
        })
    }
}

module.exports = new categorieController()