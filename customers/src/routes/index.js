const express = require('express')
const CostumerController = require('../controllers/CostumerController')
const router = express.Router()

router.get('/customers', CostumerController.index)
router.get('/customers/:id', CostumerController.show)
router.post('/customers', CostumerController.store)
router.delete('/customers/:id', CostumerController.destroy)

module.exports = router