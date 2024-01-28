let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = input[0]
let word = n.substring(n.length - 5, n.length)
if(word === 'driip'){
    return console.log('cute')
}
console.log('not cute')
