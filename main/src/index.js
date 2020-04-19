import dotenv from 'dotenv'
dotenv.config()

import app from './config/app'
import routes from './routes'

app.use(routes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log('server 3000'))