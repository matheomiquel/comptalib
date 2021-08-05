const Joi = require('joi')

const SocietyHasUserSchema = Joi.object({
    userId: Joi.number().required(),
    societyId: Joi.number().required()
})

module.exports = SocietyHasUserSchema