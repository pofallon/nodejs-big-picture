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
    placeOrder(menu, done) {
        // The customer spends some time thinking
        setTimeout(() => {
          let selection = menu[Math.floor(Math.random()*menu.length)]
          done(null, selection)
        }, Math.ceil(Math.random()*secondsToWait)*1000)
    }
    eatAndPay(food, done) {
        // The customer eats, pays and is done
        setTimeout(done, Math.ceil(Math.random()*secondsToWait)*1000)
    }
}

module.exports = Customer