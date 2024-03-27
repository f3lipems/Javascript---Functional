const { Observable, from } = require('rxjs')

function first() {
    return function (source) {
        return new Observable(subscriber => {
            source.subscribe({
                next(value) {
                    subscriber.next(value)
                    subscriber.complete()
                },
            })
        })
    }
}

function last() {
    return function (source) {
        return new Observable(subscriber => {
            let lastValue
            source.subscribe({
                next(value) {
                    lastValue = value
                },
                complete() {
                    subscriber.next(lastValue)
                    subscriber.complete()
                }
            })
        })
    }
}

from([1, 2, 3])
    .pipe(
        first()
    )
    .subscribe(console.log)

from([3, 4, 5])
    .pipe(
        last()
    )
    .subscribe(console.log)