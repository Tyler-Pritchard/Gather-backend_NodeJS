const usersQuery = require('../queries/queries.users')

const getAllUsers = () => {
    return usersQuery.getAllUsers().then(result => {
        return result.length < 1 ? {
                error: 'error retreiving users',
                status: 404
            } :
            result
    })
}

const getSingleUser = (id) => {
    const user = usersQuery.getSingleUser(id)
    return user.then(result => result);
}

const createUser = (userData) => {
    return usersQuery.createUser(userData).then(result => {
        return result.length < 1 ? {
                error: 'error creating menu user',
                status: 404
            } :
            result
    })
}

const updateUser = (newUser) => {
    return usersQuery.updateUser(newUser).then(result => {
        return result.length < 1 ? {
                error: 'error retreiving updating menu user',
                status: 404
            } :
            result
    })
}

const destroyUser = (id) => {
    const user = UsersQuery.destroyUser(id)
    return user.then(result => {
        return result.length < 1 ? {
                error: 'error deleting user',
                status: 404
            } :
            result
    })
}

module.exports = {
    getAllUsers,
    getSingleUser,
    createUser,
    updateUser,
    destroyUser
}