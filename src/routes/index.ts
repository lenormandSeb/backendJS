import * as express from 'express'
import  routerCate  = require('./routeCategorie')
import routerUser = require('./routeUser')
const router = express.Router()


router.use('/categorie', routerCate)
router.use('/user', routerUser)

export = router