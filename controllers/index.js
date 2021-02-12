var express= require('express')

var router = express.Router()
var apiRoute = require('./apiRoutes')


router.use('/api', apiRoutes)
router.use('/', htmlRoutes)

module.exports = router