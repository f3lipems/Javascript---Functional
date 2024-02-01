function Produto(name, price, discount = 0.1) {
    this.name = name
    this.price = price
    this.discount = discount
    this.finalPrice = function () {
        return this.price * (1 - this.discount)
    }
}

const p = new Produto('Bag', 300)
console.log(p.name)
console.log(p.price)
console.log(p.finalPrice())