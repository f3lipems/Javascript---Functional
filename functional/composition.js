function composition(...fns) {
    return function (value) {
        return fns.reduce((acc, fn) => {
            return fn(acc)
        }, value)
    }
}

function scream(text) {
    return text.toUpperCase()
}

function enphasize(text) {
    return `${text}!!!`
}

function lazy(text) {
    return text.split('').join(' ')
}

const forced = composition(scream, enphasize, lazy)
const lessForced = composition(scream, enphasize)

const result = forced('Stop!')
const result2 = lessForced('Stop!')

console.log(result)
console.log(result2)