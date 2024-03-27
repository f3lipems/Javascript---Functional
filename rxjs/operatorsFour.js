const { Observable, of } = require('rxjs')

function lastName(name) {
    return function (source) {
        return new Observable(subscriber => {
            source.subscribe({
                next(value) {
                    if (value.endsWith(name)) {
                        subscriber.next(value)
                    }
                },
                error(e) {
                    subscriber.error(e)
                },
                complete() {
                    subscriber.complete()
                }
            })
        })
    }
}

of('Felipe Silva', 'Samuel Natividade', 'Daiane Ropcke', 'Alice Silva')
    .pipe(
        lastName('Silva')
    )
    .subscribe(console.log)