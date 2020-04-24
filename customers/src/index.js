require('dotenv').config()
require('./database/connection')
const app = require('./config/app')

const PORT = process.env.PORT

app.listen(PORT, () => console.log('server 3001'))