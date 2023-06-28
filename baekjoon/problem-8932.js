let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let n = BigInt(input[0].split(' ')[0])
let m = BigInt(input[0].split(' ')[1])
let line = input[1].split(' ')
let number = 1
for (let i = 0; i < n; i++) {
  number = (BigInt(number) * (BigInt(line[i]) % BigInt(m))) % BigInt(m)
}
console.log(Number(number))
