const secondsToWait = 5
var count = 0

class Customer {
    constructor() {
        this.id = ++count
        this.start = Date.now()
    }
    placeOrder(done) {
        this.waitTime = Math.round((Date.now() - this.start)/1000)

        // The customer spends some time thinking
        setTimeout(() => {
            done(null, Math.ceil(Math.random()*secondsToWait))
        }, Math.ceil(Math.random()*secondsToWait)*1000)
    }
    eatAndPay(food, done) {
        // The customer eats, pays and is done
        setTimeout(() => {
            // This is how long the whole meal took for this customer
            this.duration = Math.round((Date.now() - this.start)/1000)
            done(null)
        }, Math.ceil(Math.random()*secondsToWait)*1000)
    }
}

module.exports = Customer