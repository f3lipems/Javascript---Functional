function newSort(array) {
    return array.sort()
} 
const numbers = [3, 1, 7, 9, 4, 6]

const ordenedNumbers = newSort(numbers)

console.log(numbers)
console.log(ordenedNumbers)

// Generating a new array
function newSortTwo(array) {
    return [array].sort()
} 
const numbersTwo = [3, 1, 7, 9, 4, 6]

const ordenedNumbersTwo = newSort(numbers)

console.log(numbersTwo)
console.log(ordenedNumbersTwo)

// Feezing Object
// const numbersThree = Object.freeze([3, 1, 7, 9, 4, 6])
// numbersThree.sort()
//console.log(numbersThree)
