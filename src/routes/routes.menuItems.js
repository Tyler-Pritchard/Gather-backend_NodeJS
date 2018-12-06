const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/controllers.menuItems')

//get list of all items
router.get('/', ctrl.getAllMenuItems)

//get single item
router.get('/:id', ctrl.getSingleItem)

//create new item
router.post('/', ctrl.createItem)

// //update item
router.patch('/', ctrl.updateItem)

// //delete item
router.delete('/:id', ctrl.destroyItem)

module.exports = router;