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

const result = composition(scream, enphasize, lazy)('Stop!')
console.log(result)