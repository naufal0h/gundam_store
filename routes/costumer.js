const costumerRoute = require('express').Router()
const { CostumerController } = require('../controllers')

costumerRoute.get('/', CostumerController.getCostumer)
costumerRoute.get('/create', CostumerController.createPage)
costumerRoute.post('/create', CostumerController.create)
costumerRoute.get('/delete/:costumerId', CostumerController.delete)
costumerRoute.get('/edit/:id', CostumerController.editPage)
costumerRoute.post('/edit/:id', CostumerController.edit)


module.exports = costumerRoute