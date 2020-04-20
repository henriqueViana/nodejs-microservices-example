import CustomerRepository from '../repositories/CustomerRepository'

export default {
  async index(req, res) {
    const result = await CustomerRepository.findAll(req, res)
    res.json(result)
  },

  async show(req, res) {
    const result = await CustomerRepository.findById(req, res)
    res.json(result)
  }
}