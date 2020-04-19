import CustomerRepository from '../repositories/CustomerRepository'

export default {
  async index(req, res) {
    const result = await CustomerRepository.findAll(req, res)
    res.json(result)
  }
}