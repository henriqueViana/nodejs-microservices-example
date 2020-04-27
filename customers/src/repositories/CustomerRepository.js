const status = require('http-status')
const { Customers } = require('../models')

module.exports = {
  async findAll() {
    try {
      return await Customers.findAll({
        attributes: ['name', 'email']
      })
    } catch (err) {
      return {
        statusCode: status.INTERNAL_SERVER_ERROR,
        message: status.classes['5XX_MESSAGE'],
        error: err
      }
    }
  },

  async findById(id) {
    try {
      return await Customers.findByPk(id, {
        attributes: ['name', 'email']
      })
    } catch (err) {
      return {
        statusCode: status.INTERNAL_SERVER_ERROR,
        message: status.classes['5XX_MESSAGE'],
        error: err
      }
    }
  },

  async create(body) {
    try {
      return await Customers.create(body)
    } catch (err) {
      return {
        statusCode: status.INTERNAL_SERVER_ERROR,
        message: status.classes['5XX_MESSAGE'],
        error: err
      }
    }
  },

  async delete(req) {
    const { id } = req.params
    const { email } = req.headers

    if (id) {
      return await deleteById(id)
    }
  },

  async deleteById(id) {
    const clause = {
      where: { id }
    }

    try {
      return await Customers.destroy(clause)
    } catch (err) {
      return {
        statusCode: status.INTERNAL_SERVER_ERROR,
        message: status.classes['5XX_MESSAGE'],
        error: err
      }
    }
  }
}