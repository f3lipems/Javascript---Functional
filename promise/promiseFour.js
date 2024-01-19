const fs = require('fs')
const path = require('path')

function readFile(path) {
    return new Promise(resolve => {
        fs.readFile(path, {}, function (_, content) {
            resolve(content.toString())
        })
    })
}

const dataPath = path.join(__dirname, 'data.txt')
readFile(dataPath)
    .then(content => content.split('\n'))
    .then(line => line.join(','))
    .then(fullContent => `The content is: ${fullContent}`)
    .then(console.log)