const models = require('../models')
const societyHasUserModel = models.society_has_user
const SocietyHasUserSchema = require('./schema/SocietyHasUserSchema')
class SocietyHasUserController {
    constructor(app, validator) {
        app.get('/society_has_user', async (req, res) => {
            const societyHasUser = await societyHasUserModel.findAll()
            res.json(societyHasUser)
        })
        app.post('/society_has_user', validator.body(SocietyHasUserSchema), async (req, res) => {
            const user = await societyHasUserModel.create(req.body)
            res.json(user)
        })
    }
}

module.exports = SocietyHasUserController