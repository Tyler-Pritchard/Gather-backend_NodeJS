const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/controllers.menuItemOrders')

router.get('/', ctrl.getAllMenuItemOrders)

module.exports = router;