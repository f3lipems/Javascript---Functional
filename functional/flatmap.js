const lethers = [['H', 'i'], [' '], [[['F', 'e', 'l', 'i', 'p', 'e'], ['!']]]]

const result = lethers
    .flat(Infinity)
    .map(l => l.toUpperCase())
    .reduce((a, b) => a + b)

console.log(result)

const nums = [1, 2, 3, 4, 5, 6]
const newNums = nums.map(el => el + 10).map(el => el * 2)
console.log(nums, newNums)


// Exemple Two
function SegureType(value) {
    return {
        value,
        invalid() {
            return this.value === null || this.value === undefined
        },
        map(fn) {
            if (this.invalid()) {
                return SegureType(null)
            } else {
                const newValue = fn(this.value)
                return SegureType(newValue)
            }
        },
        flatMap(fn) {
            return this.map(fn).value
        }
    }
}

const result2 = SegureType('Some text')
    .map(t => t.toUpperCase())
    .flatMap(t => t.split('').join(' '))
console.log(result2);