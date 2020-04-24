require('dotenv').config()

const supertest = require('supertest')
const request = supertest(process.env.BASE_PATH)
const app = require('./src/config/app')


module.exports = {
  testMatch: [
    '<rootDir>/src/__tests__/**/*.spec.js'
  ],
  globals: {
    app,
    request
  }
}