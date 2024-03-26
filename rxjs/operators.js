const { of, from } = require('rxjs')
const { last, map, first } = require('rxjs/operators')

of(1, 2, 'Ana', false, 'last')
    .pipe(
        last(),
        map(value => value.toUpperCase())
    )
    .subscribe((value) => {
        console.log(`The value is: ${value}`)
    })

from(['first', 'Felipe', 'Samuel', 'Alice', 'last'])
    .pipe(
        first(),
        map(value => value[0].toUpperCase() + value.slice(1))
    )
    .subscribe((value) => {
        console.log(`The value is: ${value}`)
    })