import { UserController } from "../controller/userController";
import * as express from 'express'
const useController = new UserController();

const routerUser = express.Router()

routerUser.post('/',(req, res) => useController.logUser(req, res))

export = routerUser