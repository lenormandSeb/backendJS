import { Controller } from './controller'
import { categorieRepository } from '../repositories/categorieRepository'
export class categorieController extends Controller {
    repository
    constructor() {
        super()
        this.repository = new categorieRepository('categorie');
    }

    getAll(req, res) {
        const result = this.repository.getAll()
        res.end(result)
    }
}
