const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function elementsGenerator(array) {
    return {
        start(fn) {
            let index = 0
            const interval = setInterval(() => {
                if (index >= array.length) {
                    clearInterval(interval)
                } else {
                    fn(array[index])
                    index++
                }
            }, 1000)
            return {
                stop() {
                    clearInterval(interval)
                }
            }
        },
    }
}

const gen = elementsGenerator(nums)

const subsOne = gen.start(num => console.log(Math.pow(2, num)))

setTimeout(() => {
    subsOne.stop()
}, 7000)