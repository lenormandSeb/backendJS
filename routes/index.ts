import * as express from 'express'
import  routerCate  = require('./routeCategorie')
const router = express.Router()


router.use('/categorie', routerCate)

export = router