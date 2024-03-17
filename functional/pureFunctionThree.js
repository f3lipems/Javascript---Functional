let executionsNumber = 0

// Pure function
function add(a, b) {
    executionsNumber++ // Collateral efect
    return a + b
}

console.log(executionsNumber);
console.log(add(1, 2))
console.log(add(3, 4))
console.log(executionsNumber);