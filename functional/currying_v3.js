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

function applyValidation(fn) {
    return function (value) {
        // Lazy Evaluation
        try {
            fn(value)
        } catch (error) {
            return { error: error }
        }
    }
}

const forceDefaultSize = textWithSizeBetween(4)(255)
const forceValidName = forceDefaultSize('Invalid product Name')
const validateProductName = applyValidation(forceValidName)

const p1 = { name: 'A', price: 14.99, desc: 0.25 }
const p2 = { name: 'B', price: 18.79, desc: 0.2 }

console.log(validateProductName(p1.name))
console.log(validateProductName(p2.name))

