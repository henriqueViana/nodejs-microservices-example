import status from 'http-status'
import { Customers } from '../models'

export default {
  async findAll(req, res) {
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

  async findById(req, res) {
    const { id } = req.params

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
  }
}