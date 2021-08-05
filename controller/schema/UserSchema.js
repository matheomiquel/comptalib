const Joi = require('joi')


const UserSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email()
})

module.exports = UserSchema