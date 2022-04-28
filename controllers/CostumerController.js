const {costumer, member } = require ('../models');

class CostumerController {

    static async getCostumer(req, res) {
        try {
            let costumers = await costumer.findAll({
                order: [
                ['id', 'asc']
                ]

            })
            // let members = await member.findAll({
            //     include: [costumer],                 
            //     order: [
            //         ['id', 'asc']
            //     ]

            // }) 
            // res.json(costumers)
            res.render('costumerPage.ejs', {costumers})
        } catch (err) {
            res.json(err)
            
        }

    }

    static async createPage (req, res) {
        try {
            let Costumers = await costumer.findAll({
              
            });
            res.render("costumerCreate.ejs",{ Costumers});
          } catch (err) {
            res.json(err);
          }

    }

    static async create (req, res){
        try {
            const {name, email, address} = req.body;
            let resultCostumer = await costumer.create({
                name, email, address
            })
            let resultMember = await member.create({
                costumerId: resultCostumer.id
            })

            // res.json(resultCostumer)
            res.redirect("/");

        } catch (err) {
            res.json(err)
            
        }
        
    }

    static async delete (req,res){
        try {
            const id=+req.params.costumerId

            let resultCostumer = await costumer.destroy({
                where : {id}
            })
            let resultMember = await member.destroy({
                where : {
                    costumerId: id
                }
            })

 
            resultCostumer === 1 ?
                res.json(({
                    message : `Costumer ID ${id} has been deleted`
                })) :
                res.json({
                    message : `Costumer ID ${id} has not been deleted`
                })

        } catch (err) {
            res.json(err)
        }
    }

    static async editPage(req, res) {
        try{
            const id = +req.params.id;
           
            // let resultCostumer = await costumers.findOne({
            //   where: { id },
            //   include: [member],
            // })
            let costumers = await costumer.findByPk(id);

            res.render("costumerEdit.ejs",{costumers})
      
          }catch(err){
            res.json(err);
          }

    }


    static async edit(req, res) {
        try {
            const id = Number(req.params.id);
            const { name, email, address} = req.body

            let resultCostumer = await costumer.update({
                name, email, address
            }, {
                where: { id }
            })
            // let resultMember = await member.update({
            //     type
            // }, {
            //     where: {
            //         costumerId: id
            //     }
            // })

            resultCostumer[0] === 1 ?
                res.json({
                    message: `Costumer id ${id} has been updated!`
                }) :
                res.json({
                    message: `Costumer id ${id} has not been updated`
                })
        } catch (err) {
            res.json(err)
        }
    }

}

module.exports = CostumerController