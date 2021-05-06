import { categorieController } from "../controller/categorieController";
import * as express from 'express'
const cateController = new categorieController();

const routerCate = express.Router()

routerCate.get('/',(req, res) => cateController.getAll(req, res))

export = routerCate