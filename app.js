const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
app.post('', (req, res) => {
    console.log(req.body)
    res.json('toto')
})
const validator = require('express-joi-validation').createValidator({})
const UserController = require('./controller/UserController')
const SocietyController = require('./controller/SocietyController')
const SocietyHasUserController = require('./controller/SocietyHasUserController')
new UserController(app, validator)
new SocietyController(app, validator)
new SocietyHasUserController(app, validator)
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`server start on port ${port}`)
})