import dotenv from 'dotenv'
dotenv.config()

import app from './config/app'
import connection from './database/connection'
import router from './routes'

app.use(router)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => console.log('server 3001'))