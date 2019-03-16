const menuItemsQuery = require('../queries/queries.menuItems')

const getAllMenuItems = () => {
    return menuItemsQuery.getAllMenuItems().then(result => {
        return result.length < 1 ? {
                error: 'error retreiving menu items',
                status: 404
            } :
            result
    })
}

const getSingleItem = (id) => {
    const item = menuItemsQuery.getSingleItem(id)
    return item.then(result => result);
}

const createItem = (itemData) => {
    return menuItemsQuery.createItem(itemData).then(result => {
        return result.length < 1 ? {
                error: 'error creating menu item',
                status: 404
            } :
            result
    })
}

const updateItem = (newItem) => {
    return menuItemsQuery.updateItem(newItem).then(result => {
        return result.length < 1 ? {
                error: 'error retreiving updating menu item',
                status: 404
            } :
            result
    })
}

const destroyItem = (id) => {
    const item = menuItemsQuery.destroyItem(id)
    return item.then(result => {
        return result.length < 1 ? {
                error: 'error deleting users',
                status: 404
            } :
            result
    })
}

module.exports = {
    getAllMenuItems,
    getSingleItem,
    createItem,
    updateItem,
    destroyItem
}