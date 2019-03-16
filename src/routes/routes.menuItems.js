const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/controllers.menuItems')

router.get('/', ctrl.getAllMenuItems)

router.get('/:id', ctrl.getSingleItem)

router.post('/', ctrl.createItem)

router.patch('/', ctrl.updateItem)

router.delete('/:id', ctrl.destroyItem)

// const AuthController = require('../controllers/AuthController')

module.exports = router;