const knex = require('./db')

getAllMenuItemOrders = () => {
    return knex('menuItemOrders')
}

module.exports = {
    getAllMenuItemOrders
}