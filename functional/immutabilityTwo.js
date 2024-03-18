const numbers = [4, 8, 3, 2, 9, 1, 9, 3]

// 3. Recursion
function addArray(arr, total = 0) {
    if (arr.length === 0) {
        return total
    }
    return addArray(arr.slice(1), total + arr[0])
}
const total = addArray(numbers)
console.log(total)


// 2. Reduce
// const add = (a, b) => a + b 
// const total = numbers.reduce(add)
// console.log(total);


// 1. Estrategy with mutable data
// let total = 0
// for (let i = 0; i < numbers.length; i++) {
//     total += numbers[i]
// }
// console.log(total)