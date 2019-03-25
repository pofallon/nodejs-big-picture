const cook = require('./cook')
const Customer = require('./customer')

const customerCount = 10

const startTime = Date.now()

// Get an array of Customers
const customers = Array.from(Array(customerCount), () => new Customer())

customers.forEach((customer) => {
  let order = customer.placeOrder()
  let food = cook.prepareFood(order)
  customer.eatAndPay(food)
  console.log(`Customer ${customer.id} waited ${customer.waitTime} seconds, for a total time of ${customer.duration} seconds`)
})

const totalDuration = Math.round((Date.now() - startTime) / 1000)

console.log(`Serving ${customerCount} customers took ${totalDuration} seconds`)