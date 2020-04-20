import express from 'express'
import CostumerController from '../controllers/CostumerController'
const router = express.Router()

router.get('/customers', CostumerController.index)
router.get('/customers/:id', CostumerController.show)

export default router