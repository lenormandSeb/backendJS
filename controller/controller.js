const db = require('../db')

class Controller {
    constructor() {
        this.database = db
        this.name = 'coucou'
    }
}

module.exports = Controller