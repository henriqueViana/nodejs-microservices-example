import status from 'http-status'
import models from '../models'

export default {
  async findAll(req, res) {
    console.log(models)
    try {
      return await Customers.findAll()
    } catch (err) {
      return {
        statusCode: status.INTERNAL_SERVER_ERROR,
        message: status.classes['5XX_MESSAGE'],
        error: err
      }
    }
  }
}