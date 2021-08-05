const models = require('../models')
const IdSchema = require('./schema/IdSchema')
const UserSchema = require('./schema/UserSchema')
const userModel = models.user
const societyModel = models.society
class UserController {
    constructor(app, validator) {
        app.get('/user', async (req, res) => {
            const user = await userModel.findAll({
                include: societyModel
            })
            res.json(user)
        })
        app.get('/user/society', async (req, res) => {
            const user = await userModel.findAll({
                include: societyModel
            })
            res.json(user)
        })
        app.get('/user/:id/society', validator.params(IdSchema), async (req, res) => {
            const user = await userModel.findByPk(req.params.id, {
                include: societyModel
            })
            res.json(user)
        })
        app.post('/user', validator.body(UserSchema), async (req, res) => {
            console.log(req.body)
            const user = await userModel.create(req.body)
            res.json(user)
        })

        app.patch('/user/:id', validator.params(IdSchema), validator.body(UserSchema), async (req, res) => {
            const user = await userModel.findByPk(req.params.id)
            if (!user) {
                return res.json('user not found', 404)
            }
            const userUpdated = await user.update(req.body)
            res.json(userUpdated)
        })

        app.delete('/user/:id', validator.params(IdSchema), async (req, res) => {
            const user = await userModel.findByPk(req.params.id)
            if (!user) {
                return res.json('user not found', 404)
            }
            const userUpdated = await user.destroy(req.body)
            res.json(userUpdated)
        })
    }
}

module.exports = UserController