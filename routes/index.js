const route = require('express').Router()

route.get('/', (req, res) => {
    // res.json({
    //     message: "Home Page"
    // })
    res.render('index.ejs')
})

const memberRoutes = require('./member')
const costumerRoutes = require('./costumer')
const productRoutes = require('./product')
const orderRoutes = require('./order')
const orderproductRoutes = require('./orderproduct')


route.use('/members', memberRoutes)
route.use('/costumers', costumerRoutes)
route.use('/products', productRoutes)
route.use('/orders', orderRoutes)
route.use('/orderproducts', orderproductRoutes)


module.exports = route