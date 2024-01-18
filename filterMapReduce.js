const cart = [
    {name: 'Pen', qtt: 10, price: 7.99, fragile: true},
    {name: 'Printer', qtt: 1, price: 649.59, fragile: true},
    {name: 'Notebook', qtt: 4, price: 27.10, fragile: false},
    {name: 'Pencil', qtt: 3, price: 5.82, fragile: false},
    {name: 'Seasor', qtt: 1, price: 19.20, fragile: true}
]

const isFragile = item => item.fragile
const totalValues = item => item.qtt * item.price
const totalAverage = (acc, el) => {
    const newQtt = acc.qtt + 1
    const newTotal = acc.total + el
    return { qtt: newQtt, total: newTotal, avr: newTotal / newQtt }
}
const initialValue = {qtt: 0, total: 0, avr: 0} 

const finalAverage = cart
    .filter(isFragile)
    .map(totalValues)
    .reduce(totalAverage, initialValue)
    .avr

console.log(finalAverage)

// My reduce
Array.prototype.myReduce = function (fn, initial) {
    let acc = initial
    for (let i = 0; i < this.length; i++) {
        if (!acc && i === 0) {
            acc = this[i]
        } else {
            acc = fn(acc, this[i], i, this)
        }
    }
    return acc
}

const finalAverage2 = cart
    .filter(isFragile)
    .map(totalValues)
    .myReduce(totalAverage, initialValue)
    .avr

console.log(finalAverage2)