const sleep = require('sleep')

const prepareFood = (order) => {
    // The cook prepares the order
    sleep.sleep(order)
    return
}

module.exports = { prepareFood }