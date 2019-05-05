const secondsToWait = 1

const prepareFood = async (order) => {
    // It takes some time to prepare the order
    return new Promise(resolve => 
        setTimeout(resolve, Math.ceil(Math.random()*secondsToWait)*1000)
    )
}

module.exports = { prepareFood }