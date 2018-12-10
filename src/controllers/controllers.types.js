const model = require('../models/models.types')

getAllTypes = (request, response, next) => {
    let promise = model.getAllTypes()

    promise.then(result => {
        return result.error ? next(result) : response.status(200).json(result)
    })

    promise.catch(error => {
        next(error)
    })
}

module.exports = {
    getAllTypes
}