const express = require('express')
const CostumerController = require('../controllers/CostumerController')
const router = express.Router()

router.get('/customers', CostumerController.index)
router.get('/customers/:id', CostumerController.show)

module.exports = router