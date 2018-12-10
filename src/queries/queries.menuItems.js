//Access 'menus' table
const knex = require('./db')

getAllMenuItems = () => {
    return knex('menuItems')
}

getSingleItem = (id) => {
    return knex('menuItems')
        .where('id', id)
}

createItem = (itemData) => {
    return knex
        .insert(itemData).into('menuItems').returning('*')
}

updateItem = (newItem) => {
    knex('menuItems')
        .where('name', '=', newItem.new_item_name)
        .update({
            new_item_key: newItem.new_item_value
        })
}

destroyItem = (id) => {
    return knex('menuItems')
        .where('id', id)
        .del();
}
module.exports = {
    getAllMenuItems,
    getSingleItem,
    createItem,
    updateItem,
    destroyItem
}