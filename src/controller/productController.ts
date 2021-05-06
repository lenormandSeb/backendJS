import { Controller } from './controller'
import { ProductRepository } from '../repositories/productRepository'
export class productController extends Controller {

    repository
    constructor() {
        super()
        this.repository = new ProductRepository;
    }

    getAll(req, res) {
        const result = this.repository.getAll
        res.end(result)
    }

    getById(req, res) {
        const id = req.query.id;
        const result = this.repository.getById(id)
    }
}
