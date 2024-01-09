// Function by param

function goodMorning() {
    console.log('Good Morning!');
}

const goodAfternoon = function () {
    console.log('Good Afternoon!');
}

function execAnything(fn) {
    if (typeof fn == 'function') {
        fn()
    }
}

execAnything(3)
execAnything(goodMorning)
execAnything(goodAfternoon)


// Returning a function in other funcion
function power(base) {
    return function (exp) {
        return Math.pow(base, exp)
    }
}

const powerOf2 = power(2, 8)
console.log(powerOf2(8));

const powerOf4 = power(4)(8)
console.log(powerOf4);


// Exercice Add

function add(a) {
    return function (b) {
        return function(c) {
            return a + b + c
        }
    }
}

addABC = add(1)(2)(3)
console.log(addABC);

// Exercice Calc

function calc(x) {
    return function (y) {
        return function fn(fn) {
            return fn(x, y)
        }
    }
}

function toAdd(a, b) {
    return a + b
}

function toSubtract(a, b) {
    return a - b
}

const resAdd = calc(5)(5)(toAdd)
console.log(resAdd);

const resSub = calc(5)(3)(toSubtract)
console.log(resSub);