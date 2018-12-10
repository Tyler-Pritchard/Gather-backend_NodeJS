//Access 'types' table
const knex = require('./db')

getAllTypes = () => {
    return knex('types')
}

//allows other modules to utilize the 'getAllTypes' function
module.exports = {
    getAllTypes
}