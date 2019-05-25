const cook = require('./cook')
const Customer = require('./customer')
const menu = ['fried chicken', 'hamburger', 'club sandwich']

const customerCount = 10
const startTime = Date.now()

const serveCustomer = (customer, done) => {
  console.log(`Now serving customer ${customer.id}, who waited ${customer.waitTime()} seconds`)
  customer.placeOrder(menu, (error, order) => {
    console.log(`Preparing food for customer ${customer.id}`)
    cook.prepareFood(order, (error, food) => {
      console.log(`Customer ${customer.id} is eating and paying`)
      customer.eatAndPay(food, done)
    })
  })
}

const serveAllCustomers = (customers, done) => {
  let currentCustomers = 0
  let customersServed = 0
  customers.forEach((customer) => {
    currentCustomers++
    serveCustomer(customer, (error, tip) => {
      console.log(`Customer ${customer.id} has finished (${--currentCustomers} remaining)`)
      if (++customersServed === customerCount) {
        const totalToTimeServe = Math.round((Date.now() - startTime) / 1000)
        console.log(`Served ${customerCount} customers over ${totalToTimeServe} seconds`)
        done()
      }
    })
  })
}

if (require.main === module) {
  serveAllCustomers(Array.from(Array(customerCount), () => new Customer()), () => { })
}

module.exports = { serveCustomer }