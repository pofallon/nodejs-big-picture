const cook = require('./cook')
const Customer = require('./customer')
const menu = ['fried chicken', 'hamburger', 'club sandwich']

const customerCount = 10
const startTime = Date.now()

const serveCustomer = (customer, done) => {
  console.log(`Now serving customer ${customer.id}, who waited ${customer.waitTime()} seconds`)
  customer.on('decided', order => {
    console.log(`Preparing food for customer ${customer.id}`)
    order.on('prepared', food => customer.eatAndPay(food))
    cook.prepareFood(order)
  })
  customer.on('leaving', tip => done(null, tip))
  customer.placeOrder(menu)
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

serveAllCustomers(Array.from(Array(customerCount), () => new Customer()), () => { })



