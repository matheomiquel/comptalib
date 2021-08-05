const models = require('../models')
const userModel = models.user
const societyModel = models.society
const IdSchema = require('./schema/IdSchema')
const SocietySchema = require('./schema/SocietySchema')
class SocietyController {
    constructor(app, validator) {
        app.get('/society', async (req, res) => {
            const user = await societyModel.findAll({
                include: userModel
            })
            res.json(user)
        })

        app.get('society/user', async (req, res) => {
            const user = await societyModel.findAll({
                include: userModel
            })
            res.json(user)
        })
        app.get('/society/:id/user', validator.params(IdSchema), async (req, res) => {
            const user = await societyModel.findByPk(req.params.id, {
                include: userModel
            })
            res.json(user)
        })

        app.post('/society', validator.body(SocietySchema), async (req, res) => {
            const user = await societyModel.create(req.body)
            res.json(user)
        })

        app.patch('/society/:id', validator.params(IdSchema), validator.body(SocietySchema), async (req, res) => {
            const user = await societyModel.findByPk(req.params.id)
            if (!user) {
                return res.json('user not found', 404)
            }
            const userUpdated = await user.update(req.body)
            res.json(userUpdated)
        })

        app.delete('/society/:id', validator.params(IdSchema), async (req, res) => {
            const user = await societyModel.findByPk(req.params.id)
            if (!user) {
                return res.json('user not found', 404)
            }
            const userUpdated = await user.destroy(req.body)
            res.json(userUpdated)
        })
    }
}

module.exports = SocietyController