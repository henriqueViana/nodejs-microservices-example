require('dotenv').config()

module.exports = {
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database:  process.env.DB_NAME,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  pool: {
    max: 100,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  define: {
    timestamp: true,
    undescored: true
  }
}
    