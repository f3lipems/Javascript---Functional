class Produto {
    constructor(name, price, discount = 0.1) {
        this.name = name
        this.price = price
        this.discount = discount
    }

    get name() {
        return `Product: ${this._name}`
    }

    set name(newName) {
        this._name = newName.toUpperCase()
    }

    get finalPrice() {
        return this.price * (1 - this.discount)
    }
}

const p = new Produto('Bag', 300)
// p.name = 'Bag'
console.log(p.name)
console.log(p.price)
console.log(p.finalPrice)