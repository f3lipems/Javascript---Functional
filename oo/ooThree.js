function Produto(name, price, discount = 0.1) {
    this.name = name
    this.price = price
    this._discount = discount
    this.finalPrice = function () {
        return this.price * (1 - this._discount)
    }
}

Produto.prototype.log = function () {
    console.log(`Name: ${this.name}, Price: ${this.price}`)
}

Object.defineProperty(Produto.prototype, 'discount', {
    get: function () {
        return this._discount
    },
    set: function (newDiscount) {
        if (newDiscount >= 0 && newDiscount <= 1) {
            this._discount = newDiscount
        }
    }
})

Object.defineProperty(Produto.prototype, 'discountStr', {
    get: function () {
        return `${this._discount * 100} %`
    }
})

const p = new Produto('Bag', 300)
p.log()
console.log(p.name)
console.log(p.price)
console.log(p.finalPrice())
console.log(p.discount);
console.log(p.discountStr);
p.discount = 0.3
console.log(p.discount);
console.log(p.discountStr);