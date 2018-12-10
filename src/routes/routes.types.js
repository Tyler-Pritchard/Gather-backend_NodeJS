const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/controllers.types')

router.get('/', ctrl.getAllTypes)

module.exports = router;