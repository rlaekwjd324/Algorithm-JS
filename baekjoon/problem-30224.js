let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0])
if(!n.toString().split('').includes('7')) {
    if(n%7 !== 0) {
        return console.log('0')
    }
    return console.log('1')
}
if(n%7 !== 0) {
    return console.log('2')
}
return console.log('3')