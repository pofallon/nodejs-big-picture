const sleep = require('sleep')

const secondsToWait = 5
var count = 0

class Customer {
    constructor() {
        this.id = ++count
        this.start = Date.now()
    }
    placeOrder() {
        this.waitTime = Math.round((Date.now() - this.start)/1000)

        // The customer spends some time thinking
        sleep.sleep(Math.ceil(Math.random()*secondsToWait))
    
        // The customer places an order of random complexity
        return Math.ceil(Math.random()*secondsToWait)
    }
    eatAndPay(food) {
        // The customer eats, pays and is done
        sleep.sleep(Math.ceil(Math.random()*secondsToWait))

        // This is how long the whole meal took for this customer
        this.duration = Math.round((Date.now() - this.start)/1000)
        return
    }
}

module.exports = Customer