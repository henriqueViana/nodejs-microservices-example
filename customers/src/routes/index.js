const express = require('express')
const CustumerController = require('../controllers/CustumerController')
const router = express.Router()

router.get('/customers', CustumerController.index)
router.get('/customers/:id', CustumerController.show)
router.post('/customers', CustumerController.store)
router.delete('/customers', CustumerController.destroy)

module.exports = router