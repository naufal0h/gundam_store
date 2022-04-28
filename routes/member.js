const memberRoute = require('express').Router()
const { MemberController } = require('../controllers')

memberRoute.get('/', MemberController.getMember)
memberRoute.get('/create', MemberController.createPage)
memberRoute.post('/create', MemberController.create)


module.exports = memberRoute