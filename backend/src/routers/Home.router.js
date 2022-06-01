const {Router} = require('express')
const router = Router()
const homeCtrl = require('../controllers/Home.controller')
//const Auth = require('../helper/Auth')

router.get('', homeCtrl.inicio)

module.exports = router