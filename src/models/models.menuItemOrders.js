const usersQuery = require('../queries/queries.menuItemOrders')

const getAllMenuItemOrders = () => {
    return usersQuery.getAllMenuItemOrders().then(result => {
        return result.length < 1 ?
            {
                error: 'error retreiving menuItemOrders',
                status: 404
            } :
            result
    })
}

module.exports = {
    getAllMenuItemOrders
}