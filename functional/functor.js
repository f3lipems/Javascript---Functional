const nums = [1, 2, 3, 4, 5, 6]
const newNums = nums.map(el => el + 10).map(el => el * 2)
console.log(nums, newNums)

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
        }
    }
}

const result = SegureType('Some text')
    .map(t => t.toUpperCase())
    .map(t => t.split('').join(' '))
console.log(result);
console.log(result.value);