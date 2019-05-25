// This test uses mocha with Node's built-in assert module

const cook = require('../cook.js')
const assert = require('assert')

describe('a cook', () => {
  it('should prepare food', done => {
    let order = 'pizza'
    cook.prepareFood(order, (error, food) => {
      assert.equal(food, order)
      done()
    })
  })
})