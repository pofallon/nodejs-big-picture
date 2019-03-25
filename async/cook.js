const prepareFood = (order, done) => {
    // The cook prepares the order
    setTimeout(() => {
        done(null)
    }, order*1000)
}

module.exports = { prepareFood }