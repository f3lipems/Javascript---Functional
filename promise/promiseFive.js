function generateNumbers(min, max, time) {
    if (min > max) [max, min] = [min, max]
    return new Promise(resolve => {
        setTimeout(() => {
            const factor = max - min + 1
            const randonNumber = parseInt(Math.random() * factor) + min
            resolve(randonNumber)
        }, time)
    })
}

function generateAnyNumbers() {
    return Promise.all([
        generateNumbers(1, 60, 4000),
        generateNumbers(1, 60, 1000),
        generateNumbers(1, 60, 7000),
        generateNumbers(1, 60, 2000),
        generateNumbers(1, 60, 500),
        generateNumbers(1, 60, 3000)
    ])
}

console.time('promise')
generateAnyNumbers()
    .then(console.log)
    .then(() => {
        console.timeEnd('promise')
    })