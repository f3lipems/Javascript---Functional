const person = Object.freeze({
    name: 'Maria',
    height: 1.77,
    city: 'Orlando',
    address: Object.freeze({ street: 'abc' })
})

function changePerson(p) {
    const newPerson = { ...p }
    newPerson.name = 'Ana'
    newPerson.height = 1.69
    newPerson.city = 'Couver City'
    newPerson.address.street = 'fds'

    return newPerson
}

const newPerson = changePerson(person)
console.log(person)
console.log(newPerson)