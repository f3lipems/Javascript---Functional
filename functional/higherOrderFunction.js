function execute(fn, ...params) {
    return fn(...params)
}

function executeTwo(fn, ...params) {
    return function (text) {
        return `${text} ${fn(...params)}`
    }
}

function add(a, b, c) {
    return a + b + c
}

function multiply(a, b) {
    return a * b
}

const r1 = execute(add, 3, 4, 5)
const r2 = execute(multiply, 7, 9)

console.log(r1, r2)

const r3 = executeTwo(add, 3, 4, 5)('The add result is:')
const r4 = executeTwo(multiply, 7, 9)('The mulpiply result is:')

console.log(r3)
console.log(r4)