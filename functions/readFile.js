const fs = require('fs')
const path = require('path')

const dataPath = path.join(__dirname, 'data.txt')

function showContent(err, content) {
    console.log(content.toString())
}

console.log('Start')
fs.readFile(dataPath, {}, showContent)
fs.readFile(dataPath, {}, (_, content) => console.log(typeof content))
console.log('End')

console.log('Start Sync');
const content = fs.readFileSync(dataPath)
console.log(typeof content)
console.log('End Sync')