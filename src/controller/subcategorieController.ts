import { Controller } from './controller'
import { subcategorieRepository } from '../repositories/subcategorieRepository'

export class subcategorieController extends Controller {
    repository
    constructor() {
        super()
        this.repository = new subcategorieRepository;
    }
}
