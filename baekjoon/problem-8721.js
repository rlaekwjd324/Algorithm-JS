let fs = require('fs')
let input = fs.readFileSync('test.txt').toString().split('\n')
// let input = fs.readFileSync('/dev/stdin').toString().split('\n')
let t = Number(input[0])
let array = input[1].split(' ')
let answer = 1
for (let i = 0; i < t; i++) {
    if(Number(array[i]) === answer) {
        answer++
    }
}
console.log(t - answer + 1)
