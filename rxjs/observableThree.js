const { Observable, noop } = require('rxjs')

function between(min, max) {
    if (min > max) [min, max] = [max, min]

    return new Observable(subscriber => {
        Array(max - min).fill().map((_, i) => {
            subscriber.next(min + i)
        })
        subscriber.complete()
    })
}

between(15, 10).subscribe(
    res => console.log(res),
    noop,
    () => console.log('Finished')
)