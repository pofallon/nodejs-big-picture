const secondsToWait = 1

const prepareFood = (order, done) => {
    // It takes some time to prepare the order
    setTimeout(() => done(null, order), Math.ceil(Math.random()*secondsToWait)*1000)
}

module.exports = { prepareFood }