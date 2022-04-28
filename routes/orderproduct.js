const orderproductRoute = require('express').Router()
const { OrderProductController } = require('../controllers')

orderproductRoute.get('/', OrderProductController.getOrderProduct)
orderproductRoute.get('/create', OrderProductController.createPage)
orderproductRoute.post('/create', OrderProductController.create)
// orderproductRoute.get('/delete/:id', OrderProductController.delete)
// orderproductRoute.get('/edit/:id', OrderProductController.editPage)
// orderproductRoute.post('/edit/:id', OrderProductController.edit)


module.exports = orderproductRoute