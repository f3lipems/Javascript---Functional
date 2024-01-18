function generateNumbers(min, max) {

    if (min > max) [max, min] = [min, max]

    return new Promise(resolve => {
        const factor = max - min + 1
        const randonNumber = parseInt(Math.random() * factor) + min
        resolve(randonNumber)
    })
}

generateNumbers(1, 50)
    .then(num => num * 10)
    .then(numX10 => `The humber generated is ${numX10}`)
    .then(console.log)