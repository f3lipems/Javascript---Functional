function generateNumbers(fn) {
    return {
        start(fn, interval = 1000) {
            let num = 0
            const intervalID = setInterval(() => {
                fn(num++)
            }, interval)

            return {
                stop() {
                    clearInterval(intervalID)
                }
            }
        }
    }
}

const generator = generateNumbers()
const gen = generator.start(number => {
    console.log(`#1: ${number * 2}`);
}, 700)

const generatorTwo = generateNumbers()
const genTwo = generator.start(number => {
    console.log(`#2: ${number + 100}`);
}, 2000)


setTimeout(() => {
    gen.stop()
    genTwo.stop()
}, 10000);