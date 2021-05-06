import { Controller } from './controller'
import { UserRepository } from '../repositories/userRepository'
import { User } from '../entities/User'
export class UserController extends Controller {
    repository
    constructor() {
        super();
        this.repository = new UserRepository('user')
    }

    logUser(req, res): User {
        const login = req.body.login;
        const password = req.body.password;
        if (this.checkUser(login, password)){
            const repo = this.repository.getByUserName(login, password)
            const utilisateur = new User(repo)

            return utilisateur;
        }
    }

    checkUser(userName : string, pass : string): boolean {
        const result = this.repository.getByNameAndPass(userName, pass)

        return true ? result : false;
    }

}