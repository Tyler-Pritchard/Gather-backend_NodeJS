const model = require('../models/models.menuItems')

const getAllMenuItems = (request, response, next) => {
    let promise = model.getAllMenuItems();

    promise.then(result => {
        return result.error ? next(result) : response.status(200).json(result)
    })
    promise.catch(error => {
        next(error)
    })
}

const getSingleItem = (request, response, next) => {
    const id = request.params.id;
    let promise = model.getSingleItem(id);

    promise.then(result => {
        return result.error ? next(result) : response.status(200).json(result)
    })
    promise.catch(error => {
        next(error)
    })
}

const createItem = (request, response, next) => {
    let itemData = request.body;
    let promise = model.createItem(itemData);

    promise.then(result => {
        return result.error ? next(result) : response.status(200).json(result)
    })
    promise.catch(error => {
        next(error)
    })
}

const updateItem = (request, response, next) => {

    let newItem = {
        new_item_key: request.body.new_item_key,
        new_item_value: request.body.new_item_value,
        new_item_name: request.body.new_item_name
    }
    let promise = model.updateItem(newItem);
    promise.then(result => {
        return result.error ? next(result) : response.status(200).json(result)
    })
    promise.catch(error => {
        next(error)
    })
}


const destroyItem = (request, response, next) => {
    const {
        id
    } = request.params

    const promise = model.destroyItem(id)
    promise.then(result => {
        if (promise.errors) {
            result.status(404).json({
                error: `ID ${id} not found`
            })
        } else {
            response.status(200).json({
                message: `Sucessfully deleted item ${id}`
            })
        }
    })
}

module.exports = {
    getAllMenuItems,
    getSingleItem,
    createItem,
    updateItem,
    destroyItem
}