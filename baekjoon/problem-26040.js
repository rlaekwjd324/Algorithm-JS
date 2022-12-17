let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let str = input[0].split('')
let changes = input[1].split(' ')
for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < changes.length; j++) {
        if (str[i] === changes[j]) {
            str[i] = str[i].toLowerCase()
        }
    }
}
console.log(str.join(''))
