const { Observable } = require('rxjs')

function ofWithTimer(time, ...elements) {
    return new Observable(subscriber => {
        (elements || []).forEach((el, i) => {
            setTimeout(() => {
                subscriber.next(el)
                if (elements.length === i + 1) {
                    subscriber.complete()
                }
            }, time * (i + 1));
        })
    })
}

ofWithTimer(1000, 1, 2, 3, 4, 5, 6, 7).subscribe(console.log)