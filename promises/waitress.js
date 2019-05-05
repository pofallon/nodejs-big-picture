const cook = require('./cook')
const Customer = require('./customer')
const menu = ['fried chicken', 'hamburger', 'club sandwich']

const customerCount = 10
const startTime = Date.now()

const serveCustomer = (customer) => {
  console.log(`Now serving customer ${customer.id}, who waited ${customer.waitTime()} seconds`)
  return customer.placeOrder(menu)
    .then(order => {
      console.log(`Preparing food for customer ${customer.id}`)
      return cook.prepareFood(order)
    })
    .then(food => {
      console.log(`Customer ${customer.id} is eating and paying`)
      return customer.eatAndPay(food)
    })
}

const serveAllCustomers = customers => {
  let currentCustomers = 0
  Promise.all(customers.map(customer => {
    currentCustomers++
    return serveCustomer(customer).then(() => {
      console.log(`Customer ${customer.id} has finished (${--currentCustomers} remaining)`)
    })
  })).then(() => {
    const totalToTimeServe = Math.round((Date.now() - startTime) / 1000)
    console.log(`Served ${customerCount} customers over ${totalToTimeServe} seconds`)
  })
}

serveAllCustomers(Array.from(Array(customerCount), () => new Customer()))