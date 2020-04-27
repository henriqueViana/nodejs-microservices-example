const CustomerRepository = require('../repositories/CustomerRepository')

module.exports = {
  async index(req, res) {
    const result = await CustomerRepository.findAll()
    res.json(result)
  },

  async show(req, res) {
    const { id } = req.params

    const result = await CustomerRepository.findById(id)
    res.json(result)
  },

  async store(req, res) {
    const { body } = req

    const result = await CustomerRepository.create(body)
    res.json(result)
  },
  
  async destroy(req, res) {
    const result = await CustomerRepository.delete(req)
    res.json(result)
  }
}