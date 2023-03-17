const express = require('express')

const router = express.Router()

const expressJoi = require('@escook/express-joi')

const userHandler = require('../router_handler/tea_users.js')

const {reg_login_schema} = require('../schema/user')

router.post('/login',userHandler.loginUser)

router.post('/changepwd',userHandler.changeStuPwd)

router.post('/putaway',userHandler.putAwayBook)

router.post('/putawaybook',userHandler.putawayBook)

router.post('/addnewbook',userHandler.addNewBook)

router.post('/postnotice',userHandler.postNotice)

router.post('/delnotice',userHandler.delNotice)

router.get('/shownotice',userHandler.showNotice)

router.get('/shownoticeone',userHandler.showNoticeOne)

router.get('/showstu',userHandler.showStu)

module.exports = router