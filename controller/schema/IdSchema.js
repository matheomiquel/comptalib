const Joi = require('joi')

const IdSchema = Joi.object({
    id: Joi.number().required()
})

module.exports = IdSchema