const typesQuery = require('../queries/queries.types')

const getAllTypes = () => {
    return typesQuery.getAllTypes().then(result => {
        return result.length < 1 ?
            {
                error: 'error retreiving types',
                status: 404
            } :
            result
    })
}

module.exports = {
    getAllTypes
}