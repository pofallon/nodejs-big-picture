// A mocha test using chai assertions
// NOTE:  Since the customer may wait longer than mocha's default,
//        you should invoke mocha with the '--timeout 20000' parameter

const expect = require('chai').expect
const Customer = require('../customer')

describe('a customer', () => {
  it('should place an order', done => {
    let menu = ['pizza', 'wings', 'hotdog']
    let customer = new Customer()
    customer.placeOrder(menu, (error, order) => {
      expect(order).to.be.oneOf(menu)
      done()
    })
  })
})