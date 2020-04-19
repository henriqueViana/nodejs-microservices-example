import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import { createProxyMiddleware } from 'http-proxy-middleware'

const router = express.Router()
const proxyOptions = {
  target: process.env.CUSTOMER_SERVICE_ENDPOINT, 
  changeOrigin: true
}

router.get('/customers', createProxyMiddleware(proxyOptions))

export default router