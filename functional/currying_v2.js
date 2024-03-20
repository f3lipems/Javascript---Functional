function textWithSizeBetween(min) {
    return function (max) {
        return function (error) {
            return function (text) {
                // Lazy Evaluation
                const size = (text || '').trim().length

                if (size < min || size > max) {
                    throw error
                }
            }
        }
    }
}

const forceDefaultSize = textWithSizeBetween(4)(255)
const forceValidName = forceDefaultSize('Invalid product Name')

const p1 = { name: 'A', price: 14.99, desc: 0.25 }
forceValidName(p1.name)