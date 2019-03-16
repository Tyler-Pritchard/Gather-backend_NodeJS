const model = require('../models/models.users')

const getAllUsers = (request, response, next) => {
    let promise = model.getAllUsers();

    promise.then(result => {
        return result.error ? next(result) : response.status(200).json(result)
    })
    promise.catch(error => {
        next(error)
    })
}

const getSingleUser = (request, response, next) => {
    const id = request.params.id;
    let promise = model.getSingleUser(id);

    promise.then(result => {
        return result.error ? next(result) : response.status(200).json(result)
    })
    promise.catch(error => {
        next(error)
    })
}

const createUser = (request, response, next) => {
    let UserData = request.body;
    let promise = model.createUser(UserData);

    promise.then(result => {
        return result.error ? next(result) : response.status(200).json(result)
    })
    promise.catch(error => {
        next(error)
    })
}

const updateUser = (request, response, next) => {

    let newUser = {
        new_User_key: request.body.new_User_key,
        new_User_value: request.body.new_User_value,
        new_User_name: request.body.new_User_name
    }
    let promise = model.updateUser(newUser);
    promise.then(result => {
        return result.error ? next(result) : response.status(200).json(result)
    })
    promise.catch(error => {
        next(error)
    })
}

const destroyUser = (request, response, next) => {
    const {
        id
    } = request.params

    const promise = model.destroyUser(id)
    promise.then(result => {
        if (promise.errors) {
            result.status(404).json({
                error: `ID ${id} not found`
            })
        } else {
            response.status(200).json({
                message: `Sucessfully deleted User ${id}`
            })
        }
    })
}

module.exports = {
    getAllUsers,
    getSingleUser,
    createUser,
    updateUser,
    destroyUser
}