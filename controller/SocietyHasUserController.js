const models = require('../models')
const societyHasUserModel = models.society_has_user
const SocietyHasUserSchema = require('./schema/SocietyHasUserSchema')
class SocietyHasUserController {
    endpoint = `society_has_user`
    constructor(app, validator) {
        app.get(`/${this.endpoint}`, async (req, res) => {
            const societyHasUser = await societyHasUserModel.findAll()
            res.json(societyHasUser)
        })
        app.post(`/${this.endpoint}`, validator.body(SocietyHasUserSchema), async (req, res) => {
            const user = await societyHasUserModel.create(req.body)
            res.json(user)
        })
    }
}

module.exports = SocietyHasUserController