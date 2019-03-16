const knex = require('./db')

getAllTypes = () => {
    return knex('types')
}

module.exports = {
    getAllTypes
}