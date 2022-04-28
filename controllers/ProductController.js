const {product} = require ('../models')

class ProductController {

    static async getProduct(req, res) {
        try {
            let products = await product.findAll({
                order: [
                    ['id', 'asc']
                ]
            })
            

            // res.json(products)
            res.render('productPage.ejs', {products})
        } catch (error) {
            res.json(err)
        }
    }

    static async createPage (req, res) {
        try {
            let products = await product.findAll({
              
            });
            res.render("productCreate.ejs",{ product});
          } catch (err) {
            res.json(err);
          }



    }

    static async  create (req, res){
        try {
            const { name, price, image, stock } = req.body

            let result = await product.create({
                name, price, image, stock
            })

            res.redirect("/products");

        } catch (error) {
            res.json(err)
        }
    }

    static async editPage(req, res){
        try{
            const id = +req.params.id;
           
            // let resultCostumer = await costumers.findOne({
            //   where: { id },
            //   include: [member],
            // })
            let products = await product.findByPk(id);

            res.render("productEdit.ejs",{products})
      
          }catch(err){
            res.json(err);
          }
    }

    static async edit(req, res){
        try {
            const id = +req.params.id;
            const { name, price, image, stock } = req.body

            let result = await product.update({
                name, price, image, stock
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

            let result = await product.destroy({
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

module.exports = ProductController