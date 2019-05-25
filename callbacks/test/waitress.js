const expect = require('chai').expect
const sinon = require('sinon')
const waitress = require('../waitress')
const Customer = require('../customer')
const cook = require('../cook')

describe('a waitress', () => {
  it('should serve a customer', done => {
    let logStub = sinon.stub(console, 'log')
    let stub1 = sinon.stub(cook, 'prepareFood').callsFake((error, done) => done('pizza'))
    // let stub2 = sinon.stub(Customer.prototype, 'placeOrder').callsFake((error, done) => done('pizza'))
    // let stub3 = sinon.stub(Customer.prototype, 'eatAndPay').callsFake((error, done) => done())
    waitress.serveCustomer(new Customer(), () => {
      expect(stub1.calledOnce).to.be.true
      // expect(stub2.calledOnce).to.be.true
      // expect(stub3.calledOnce).to.be.true
      logStub.restore()
      done()
    })
  })
})