const secondsToWait = 1

const prepareFood = (order) => {
    // It takes some time to prepare the order
    setTimeout(() => {
        order.emit('prepared')
    }, Math.ceil(Math.random()*secondsToWait)*1000)
}

module.exports = { prepareFood }