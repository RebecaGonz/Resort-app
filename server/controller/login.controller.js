const RegisterUser = require('../models/login.model')

module.exports.createUser = (request, response) => {
    RegisterUser.create(request.body)
        .then(user => response.json(user))
        .catch(error => response.status(400).json(error))
}
