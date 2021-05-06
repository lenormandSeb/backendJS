import { Controller as Controller } from './controller'
import { categorieRepository } from '../repositories/categorieRepository'
import { createNoSubstitutionTemplateLiteral } from 'typescript';
class categorieController extends Controller {
    repository
    constructor() {
        super()
        this.repository = new categorieRepository('categorie');
    }

    getAll<Array>(req, res) {
        const result = this.repository.getAll()
        console.log(result)
    }
}

export { categorieController }