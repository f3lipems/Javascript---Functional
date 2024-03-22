function composition(...fns) {
    return function (value) {
        return fns.reduce(async (acc, fn) => {
            if (Promise.resolve(acc) === acc) {
                return fn(await acc)
            } else {
                return fn(acc)
            }
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
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(text.split('').join(' '))
        }, 3000);
    })
}

const forced = composition(scream, enphasize, lazy)

forced('Stop!').then(console.log)
