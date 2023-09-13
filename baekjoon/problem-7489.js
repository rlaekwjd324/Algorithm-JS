let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('test.txt').toString().trim().split('\n')
let t = Number(input[0])
let answer = ''
for (let i = 1; i <= t; i++) {
  let temp = BigInt(1)
  let num = Number(input[i])
  for (let j = 2; j <= num; j++) {
    temp *= BigInt(j)
    while(temp % BigInt(10) === 0n) {
      temp /= BigInt(10)
    }
    // if(j+1 !== 25 && j+1 !== 125 && j+1!==625) {
    //   temp %= BigInt(10)
    // }
  }
  answer += (temp%BigInt(10) + '\n')
}
console.log(answer)
