function exec(fn, n1, n2) {
    if (typeof fn === 'function') {
        fn(n1, n2)
    }
}

const addInTerminal = (x, y) => console.log(x + y)
const subInTerminal = (x, y) => console.log(x - y)

exec(addInTerminal, 56, 38)
exec(subInTerminal, 182, 27)

const logEcec = () => console.log('Exec...')
setInterval(logEcec, 1000);