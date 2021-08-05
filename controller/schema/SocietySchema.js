const Joi = require('joi')


const SocietySchema = Joi.object({
    name: Joi.string().required()
})

module.exports = SocietySchema