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

    it('should return a null value when show method is called with a id not found', async () => {
      const endpoint = '/customers/468475468'

      const customer = await request.get(endpoint)

      expect(customer.body).toBeNull()
    })
  })

  describe('create method', () => {
    it('should return a object with created data when create method is called', async () => {
      const endpoint = '/customers'
      const body = {
        name: 'tester',
        email: 'tester@gmail.com',
        password: '123456'
      }

      const customer = await request.post(endpoint).send(body)

      expect(customer.statusCode).toBe(status.OK)
      expect(customer.body.name).toEqual(body.name)
      expect(customer.body.email).toEqual(body.email)
    })

    it('should return a unique constrain error when create a customer with duplicate email', async () => {
      const endpoint = '/customers'
      const body = {
        name: 'tester',
        email: 'tester@gmail.com',
        password: '123456'
      }
      const errorTypeMessage = 'SequelizeUniqueConstraintError'

      const customer = await request.post(endpoint).send(body)

      expect(customer.body.statusCode).toBe(status.INTERNAL_SERVER_ERROR)
      expect(customer.body.error.name).toEqual(errorTypeMessage)
    })
  })

  describe('destroy method', () => {
    it ('should return the value 1 when destroy method is called and success deleted', async () => {
      const endpoint = '/customer'
      const email = 'tester@gmail.com'

      const result = await request
                            .delete(endpoint)
                            .set('email', email)

      expect(result).toEqual(1)
    })
  })
})