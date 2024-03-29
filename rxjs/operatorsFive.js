const { Observable, from } = require('rxjs')

function createPipeableOperator(operatorFn) {
    return function (source) {
        return new Observable(subscriber => {
            const newSub = operatorFn(subscriber)
            source.subscribe({
                next: newSub.next || (n => console.log(n)),
                error: newSub.error || (e => console.log(e)),
                complete: newSub.complete || subscriber.complete(),
            })
        })
    }
}

function first() {
    return createPipeableOperator((subscriber) => ({
        next(value) {
            subscriber.next(value)
            subscriber.complete()
        }
    })
    )
}

function last() {
    let lastValue
    return createPipeableOperator((subscriber) => ({
        next(value) {
            lastValue = value
        },
        complete() {
            subscriber.next(lastValue)
            subscriber.complete()
        }
    })
    )
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