const nums = [1, 2, 3, 4, 5]
const double = (n, i, a) => n * 2 + i + a.length
console.log(nums.map(double))

const names = ['Ana', 'Bia', 'Rafa', 'Lia, Gui']
const firstLether = text => text[0]
console.log(names.map(firstLether))

const cart = [
    {name: 'Pen', qtt: 10, price: 7.99},
    {name: 'Printer', qtt: 0, price: 649.59},
    {name: 'Notebook', qtt: 4, price: 27.10},
    {name: 'Pencil', qtt: 3, price: 5.82},
    {name: 'Seasor', qtt: 1, price: 19.20}
]

const getItems = item => item.name
const getTotal = item => item.qtt * item.price

console.log(cart.map(getItems))
console.log(cart.map(getTotal))

// My Map
Array.prototype.myMap = function (fn) {
    const mappedArray = []
    for (let i = 0; i < this.length; i++) {
        mappedArray.push(fn(this[i], i, this))
    }
    return mappedArray
}
console.log(nums.myMap(double))
console.log(names.myMap(firstLether))
console.log(cart.myMap(getItems))
console.log(cart.myMap(getTotal))