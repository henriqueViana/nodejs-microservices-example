import express from 'express'

const app = express()

app.use(express.json())
// const router = express.Router()

// router.get('/customers', (req, res, next) => {
//   res.json({customers: []})
// })

// app.use(router)

export default app