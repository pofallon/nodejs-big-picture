const EventEmitter = require('events')

const secondsToWait = 10
var count = 0

class Customer extends EventEmitter {
    constructor() {
        super()
        this.id = ++count
        this.start = Date.now()
    }
    waitTime() {
        return Math.round((Date.now() - this.start)/1000)
    }
    placeOrder(menu) {
        let order = new EventEmitter()
        // The customer spends some time thinking
        setTimeout(() => {
            this.emit('decided', order)
        }, Math.ceil(Math.random()*secondsToWait)*1000)
        return order
    }
    eatAndPay(food) {
        // The customer eats, pays and is done
        let tip = 5
        setTimeout(() => {
            this.emit('leaving', tip)
        }, Math.ceil(Math.random()*secondsToWait)*1000)
    }
}

module.exports = Customer