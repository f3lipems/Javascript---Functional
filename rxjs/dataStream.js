const { interval } = require('rxjs')

const generator = interval(500)

const subs = generator.subscribe(num => {
    console.log(Math.pow(2, num))
})

setTimeout(() => subs.unsubscribe(), 7000)