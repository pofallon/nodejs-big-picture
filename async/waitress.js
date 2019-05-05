const cook = require('./cook')
const Customer = require('./customer')
const menu = ['fried chicken', 'hamburger', 'club sandwich']

const customerCount = 10
const startTime = Date.now()

const serveCustomer = async (customer) => {
  console.log(`Now serving customer ${customer.id}, who waited ${customer.waitTime()} seconds`)
  let order = await customer.placeOrder(menu)
  console.log(`Preparing food for customer ${customer.id}`)
  let food = await cook.prepareFood(order)
  console.log(`Customer ${customer.id} is eating and paying`)
  let tip = await customer.eatAndPay(food)
  return tip
}

const serveAllCustomers = async customers => {
  let currentCustomers = 0
  let tips = await Promise.all(customers.map(async customer => {
    currentCustomers++
    let tip = await serveCustomer(customer)
    console.log(`Customer ${customer.id} has finished (${--currentCustomers} remaining)`)
    return tip
  }))
  const totalToTimeServe = Math.round((Date.now() - startTime) / 1000)
  console.log(`Served ${customerCount} customers over ${totalToTimeServe} seconds`)
}

serveAllCustomers(Array.from(Array(customerCount), () => new Customer()))