let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let P = BigInt(input[0].split(' ')[0])
let K = BigInt(input[0].split(' ')[1])
for (let i = 2; i < K; i++) {
  if(P%BigInt(i) === 0n) {
    return console.log('BAD '+i)
  }
}
console.log('GOOD')