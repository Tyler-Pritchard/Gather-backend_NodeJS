const knex = require('./db')

getAllUsers = () => {
    return knex('users')
}

module.exports = {
    getAllUsers
}