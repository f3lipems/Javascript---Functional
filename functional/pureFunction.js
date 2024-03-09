// Inpure Function -- PI is an sternal variable
function circleArea(radius) {
    return radius * radius * Math.PI // Stabel
}

console.log(circleArea(10))

// Pure Function
function pureCircleArea(radius, pi) {
    return radius * radius * pi 
}

console.log(pureCircleArea(10, Math.PI))