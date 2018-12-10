const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/controllers.Users')
const AuthController = require('../controllers/AuthController')

router.get('/', ctrl.getAllUsers)
router.get('/:id', ctrl.getSingleUser)
router.post('/', ctrl.createUser)
router.patch('/', ctrl.updateUser)
router.delete('/:id', ctrl.destroyUser)

module.exports = router;