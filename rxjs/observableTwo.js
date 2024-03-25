const { Observable } = require('rxjs')

const obs = new Observable(subscriber => {
    subscriber.next('RXJS')
    subscriber.next('is')
    subscriber.next('very')
    subscriber.next('powerfull')

    if (Math.random() > 0.5) {
        subscriber.complete()
    } else {
        subscriber.error('There is a problem!')
    }
})

// obs.subscribe(
//     value => console.log(value),
//     error => console.error(error),
//     () => console.log('Finish')
// )

// Alternative mode
obs.subscribe({
    next(value) {
        console.log(value)
    },
    error(error) {
        console.error(error)
    },
    complete() {
        console.log('Finish')
    }
})