let p = new Promise(function (resolve) {
    resolve(['Thiago', 'Pedro', 'João'])
})

const firstValue = value => value[0] 
const firstLehter = text => text[0]
const toLowerCase = lether => lether.toLowerCase()

p
    .then(firstValue)
    .then(firstLehter)
    .then(toLowerCase)
    .then(console.log)
