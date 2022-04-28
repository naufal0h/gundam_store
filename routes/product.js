const productRoute = require('express').Router()
const { ProductController } = require('../controllers')

productRoute.get('/', ProductController.getProduct)
productRoute.get('/create', ProductController.createPage)
productRoute.post('/create', ProductController.create)
productRoute.get('/delete/:id', ProductController.delete)
productRoute.get('/edit/:id', ProductController.editPage)
productRoute.post('/edit/:id', ProductController.edit)


module.exports = productRoute