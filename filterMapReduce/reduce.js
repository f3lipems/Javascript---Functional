const cart = [
    {name: 'Pen', qtt: 10, price: 7.99},
    {name: 'Printer', qtt: 0, price: 649.59},
    {name: 'Notebook', qtt: 4, price: 27.10},
    {name: 'Pencil', qtt: 3, price: 5.82},
    {name: 'Seasor', qtt: 1, price: 19.20}
]

const getTotal = item => item.qtt * item.price
const add = (acc, el) => acc + el

const finalReduce = cart
    .map(getTotal)
    .reduce(add, 0)

console.log(finalReduce)