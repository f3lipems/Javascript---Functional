function generateNumbers(min, max, forbidenNumbers) {
    if (min > max) [max, min] = [min, max]
    return new Promise((resolve, reject) => {
        const factor = max - min + 1
        const randonNumber = parseInt(Math.random() * factor) + min
        if (forbidenNumbers.includes(randonNumber)) {
            reject('Invalid number')
        } else {
            resolve(randonNumber)
        }
    })
}

async function generateRandonNumbers(qtt) {
    try {
        const numbers = []
        for (let _ of Array(qtt).fill()) {
            numbers.push(await generateNumbers(1, 60, numbers))
        }
        return numbers
    } catch (error) {
        throw 'Ops!'
    }
}

generateRandonNumbers(6)
    .then(console.log)
    .catch(console.log)