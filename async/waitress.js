const cook = require('./cook')
const Customer = require('./customer')

const customerCount = 10
var customersServed = 0

const startTime = Date.now()

// Get an array of Customers
const customers = Array.from(Array(customerCount), () => new Customer())

customers.forEach((customer) => {
  customer.placeOrder((error, order) => {
    // Was there an error placing the order?
    cook.prepareFood(order, (error, food) => {
      // Was there an error preparing the food?
      customer.eatAndPay(food, (error) => {
        // Was there an error eating or paying?
        console.log(`Customer ${customer.id} waited ${customer.waitTime} seconds, for a total time of ${customer.duration} seconds`)
        if (++customersServed === customerCount) {
          const totalDuration = Math.round((Date.now() - startTime) / 1000)
          console.log(`Serving ${customerCount} customers took ${totalDuration} seconds`)
        }
      })
    })
  })
})



