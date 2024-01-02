let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = Number(input[0].split(' ')[0])
let array = input[1].split(' ').map(function (v) { return Number(v)})
let t = Number(input[2].split(' ')[0])
let p = Number(input[2].split(' ')[1])
let answer = ''
let count = 0
for (let i = 0; i < array.length; i++) {
  count += (Math.ceil(array[i] / t))
}
answer += (count + '\n')
answer += (Math.floor(n / p) + ' ' + (n % p))
console.log(answer)
