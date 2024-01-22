function doOrNot(value, errorChance) {
    return new Promise((resolve, reject) => {
        if (Math.random() < errorChance) {
            reject('An error has occurred!')
        } else {
            resolve(value)
        }
    })
}

doOrNot('Test', 0.5)
    .then(console.log)
    .catch(console.error)