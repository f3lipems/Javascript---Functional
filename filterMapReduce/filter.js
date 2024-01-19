const cart = [
    {name: 'Pen', qtt: 10, price: 7.99},
    {name: 'Printer', qtt: 0, price: 649.59},
    {name: 'Notebook', qtt: 4, price: 27.10},
    {name: 'Pencil', qtt: 3, price: 5.82},
    {name: 'Seasor', qtt: 1, price: 19.20}
]

const qttLessThanZero = item => item.qtt > 0
const names = item => item.name

const validItems = cart
    .filter(qttLessThanZero)
    .map(names)

console.log(validItems)

// My Filter
Array.prototype.myFilter = function (fn) {
    const filteredArray = []
    for (let i = 0; i < this.length; i++) {
        if (fn(this[i])) {
            filteredArray.push(this[i])
        }
    }
    return filteredArray
}

const validItemsTwo = cart
    .myFilter(qttLessThanZero)
    .map(names)

console.log(validItemsTwo)