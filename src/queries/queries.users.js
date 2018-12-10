//Access 'users' table
const knex = require('./db')

getAllUsers = () => {
    return knex('users')
}

//allows other modules to utilize the 'getAllusers' function
module.exports = {
    getAllUsers
}