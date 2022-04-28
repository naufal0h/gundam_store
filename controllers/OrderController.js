const {order, costumer } = require ('../models')

class OrderController {

    static async getOrder(req, res) {
        try {
            let orders = await order.findAll({
                include: [costumer],  
                order: [
                    ['id', 'asc']
                ]
            })
            

            // res.json(orders)
            res.render('orderPage.ejs', {orders})
        } catch (error) {
            res.json(err)
        }
    }

    static async createPage (req, res) {
        try {
            let orders = await order.findAll({
              
            });

            res.render("orderCreate.ejs",{ orders});
          } catch (err) {
            res.json(err);
          }

    }

    static async create (req, res){
        try {
            const { name_order, costumerId } = req.body

            let resultOrder = await order.create({
                name_order, costumerId
            })

            let resultCostumer = await costumer.create({
                costumerId: resultOrder.id
            })

            res.json(resultOrder)

            // res.redirect("/products");

        } catch (error) {
            res.json(err)
        }
    }

    static async edit(req, res){
        try {
            const id = +req.params.id;
            const { name_order, costumerId } = req.body

            let result = await order.update({
                name_order, costumerId
            }, {
                where: { id }
            })

            result[0] === 1 ?
                res.json({
                    message: `id ${id} has been updated!`
                }) :
                res.json({
                    message: `id ${id} has not been updated`
                })
                
        }  
        catch (err) {
            res.json(err)
        }
    }

    static async delete(req,res){

        try {
            const id = +req.params.id

            let result = await order.destroy({
                where : { id }
            })

 
            result === 1 ?
                res.json({
                    message : `ID ${id} has been deleted`
                }) :
                res.json({
                    message : `ID ${id} has not been deleted`
                })

        } catch (err) {
            res.json(err)
            
        }
        res.redirect("/");
    } 

}

module.exports = OrderController