const { XMLHttpRequest } = require('xhr2')
const { ajax } = require('rxjs/ajax')
const { map, concatAll, catchError } = require('rxjs/operators')

ajax({
    createXHR: () => new XMLHttpRequest(),
    url: 'https://api.github.com/users/f3lipems/repos',
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
}).pipe(
    map(res => res.xhr.response),
    concatAll(),
    map(item => item.name),
    catchError(console.log)

).subscribe({
    next(res) {
        console.log(res)
    },
    error(e) {
        console.log(`Error: ${e}`)
    },
    complete() {
        console.log('Finhished!')
    }
})