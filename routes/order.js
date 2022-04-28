const orderRoute = require('express').Router()
const { OrderController } = require('../controllers')

orderRoute.get('/', OrderController.getOrder)
orderRoute.get('/create', OrderController.createPage)
orderRoute.post('/create', OrderController.create)
orderRoute.get('/delete/:id', OrderController.delete)
// orderRoute.get('/edit/:id', OrderController.editPage)
orderRoute.post('/edit/:id', OrderController.edit)


module.exports = orderRoute