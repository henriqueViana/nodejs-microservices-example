const status = require('http-status')

describe('-----CustomerController integration test-----', () => {
  describe('index method', () => {
    it('should return all customers when index method is called', async () => {
      const endpoint = '/customers'

      const customers = await request.get(endpoint)

      expect(customers.statusCode).toBe(status.OK)
    })
  })

  describe('show method', () => {
    it('should return a customer when show method is called with id parameter', async () => {
      const endpoint = '/customers/1'
      const mockCustomer = {
        name: 'Henrique',
        email: 'henrique@gmail.com'
      }

      const customer = await request.get(endpoint)

      expect(customer.statusCode).toBe(status.OK);
      expect(customer.body).toEqual(mockCustomer)
    })
  })
})