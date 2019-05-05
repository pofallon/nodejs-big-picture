const secondsToWait = 10
var count = 0

class Customer {
    constructor() {
        this.id = ++count
        this.start = Date.now()
    }
    waitTime() {
        return Math.round((Date.now() - this.start)/1000)
    }
    placeOrder(menu) {
        // The customer spends some time thinking
        return new Promise(resolve => 
            setTimeout(resolve, Math.ceil(Math.random()*secondsToWait)*1000)
        )
    }
    eatAndPay(food, done) {
        // The customer takes some time to eat and pay
        return new Promise(resolve =>
            setTimeout(resolve, Math.ceil(Math.random()*secondsToWait)*1000)
        )
    }
}

module.exports = Customer