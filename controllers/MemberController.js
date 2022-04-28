const {member, costumer} = require ('../models')

class MemberController {

    static async getMember(req, res) {

        try {

            let members = await member.findAll({
                include: [costumer]
            }) 
            res.json(members)
        } catch (err) {
            res.json(err)
        }
    }

    static createPage (req, res) {

    }

    static create (req, res){
        
    }

}

module.exports = MemberController