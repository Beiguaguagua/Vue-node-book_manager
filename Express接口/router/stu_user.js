const express = require('express')

const router = express.Router()

const expressJoi = require('@escook/express-joi')

const userHandler = require('../router_handler/stu_user')

const {reg_login_schema} = require('../schema/user')

router.post('/login',userHandler.loginUser)

router.post('/reg',userHandler.regUser)

router.post('/quit',userHandler.quitUser)

module.exports = router