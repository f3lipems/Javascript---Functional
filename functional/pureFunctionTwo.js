// Inpure Function
function generateRandonNumber(min, max) {
    const factor = max - min + 1
    return parseInt(Math.random() * factor) + min
}

console.log(generateRandonNumber(5, 10));

// Pure Function
function pureGenerateRandonNumber(min, max, r) {
    const factor = max - min + 1
    return parseInt(Math.random() * factor) + min
}

console.log(pureGenerateRandonNumber(5, 10, Math.random()));